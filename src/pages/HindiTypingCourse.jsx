import { useState, useEffect } from "react";
import { krutiKeys, reverseKrutiMap } from "../utils/krutiMap";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { processKrutiInput } from "../utils/typingEngine";
import HindiKeyboard from "../components/HindiKeyboard";
function HindiTypingCourse() {

  const [studentName, setStudentName] = useState("");

  const [time, setTime] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);

  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);

  const [typedText, setTypedText] = useState("");

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [wrongWords, setWrongWords] = useState(0);

  const paragraphs = {
    1: "यह एक मिनट का हिंदी टाइपिंग अभ्यास है। कृपया दिए गए पैराग्राफ को ध्यानपूर्वक टाइप करें।",

    3: "यह तीन मिनट का हिंदी टाइपिंग अभ्यास है। नियमित अभ्यास से आपकी गति और शुद्धता दोनों बेहतर होंगी। दिए गए पाठ को बिना जल्दबाजी के सही प्रकार से टाइप करें।",

    5: "यह पाँच मिनट का हिंदी टाइपिंग अभ्यास है। इस अभ्यास का उद्देश्य आपकी गति, शुद्धता और एकाग्रता को बढ़ाना है। पूरे पैराग्राफ को ध्यानपूर्वक पढ़ें और बिना गलती के टाइप करने का प्रयास करें।"
  };
const paragraph = paragraphs[time];

const nextChar = paragraph[typedText.length] || "";

let expectedKey = null;
let expectedShift = false;

for (const [key, value] of Object.entries(krutiKeys.shift)) {
  if (value === nextChar) {
    expectedKey = key.length === 1 ? key.toLowerCase() : key;
    expectedShift = true;
    break;
  }
}

if (nextChar === " ") {
  expectedKey = "Space";
} else if (!expectedKey) {
  expectedKey = reverseKrutiMap[nextChar] || null;
}
const startTest = () => {
  if (!studentName.trim()) {
    alert("Please enter student name");
    return;
  }

  setTypedText("");
  setTimeLeft(time * 60);
  setTestStarted(true);
  setTestCompleted(false);
};

// Save Result to Firebase
const saveResultToFirebase = async (
  studentName,
  duration,
  totalWords,
  correct,
  wrong,
  wpm,
  accuracy
) => {
  try {
    await addDoc(collection(db, "typingResults"), {
      studentName,
      duration,
      totalWords,
      correctWords: correct,
      wrongWords: wrong,
      wpm,
      accuracy,
      language: "Hindi",
      completedAt: serverTimestamp(),
    });

    console.log("Hindi Result Saved Successfully");
  } catch (error) {
    console.error("Error Saving Hindi Result:", error);
  }
};
// Handle Typing
const handleTyping = (e) => {
  e.preventDefault();

  const key = e.key;

  // Backspace
  if (key === "Backspace") {
    setTypedText((prev) => prev.slice(0, -1));
    return;
  }

  // Space
  if (key === " ") {
    setTypedText((prev) => prev + " ");
    return;
  }

  // Enter
  if (key === "Enter") {
    setTypedText((prev) => prev + "\n");
    return;
  }

  // Ignore modifier keys
  if (
    key === "Shift" ||
    key === "Control" ||
    key === "Alt" ||
    key === "Meta"
  ) {
    return;
  }

  let mapped = null;

  // Shift Mapping
  if (e.shiftKey) {
    mapped = krutiKeys.shift[key];
  }

  // Normal Mapping
  if (!mapped) {
    mapped = krutiKeys.normal[key.toLowerCase()];
  }

  // Add Character
  if (mapped) {
  setTypedText((prev) => processKrutiInput(prev, mapped));
} else {
  setTypedText((prev) => processKrutiInput(prev, key));
}
};
// Timer + Result Calculation
useEffect(() => {
  if (!testStarted) return;

  if (timeLeft <= 0) {
    const totalWords =
      typedText.trim() === ""
        ? 0
        : typedText.trim().split(/\s+/).length;

    const correct = totalWords;
    const wrong = 0;

    const calculatedWpm = Math.round(totalWords / time);

    const calculatedAccuracy =
      totalWords === 0
        ? 0
        : Math.round((correct / totalWords) * 100);

    setCorrectWords(correct);
    setWrongWords(wrong);
    setWpm(calculatedWpm);
    setAccuracy(calculatedAccuracy);

    saveResultToFirebase(
      studentName,
      time,
      totalWords,
      correct,
      wrong,
      calculatedWpm,
      calculatedAccuracy
    );

    setTestStarted(false);
    setTestCompleted(true);
    return;
  }

  const timer = setTimeout(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearTimeout(timer);

}, [timeLeft, testStarted]);
return (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8">

      <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
        ⌨️ Hindi Typing Course
      </h1>

      {!testStarted && !testCompleted ? (
        <>

          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Student Name
            </label>

            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter Student Name"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div className="mb-6 flex gap-6">
            {[1, 3, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  checked={time === value}
                  onChange={() => setTime(value)}
                />

                <span className="ml-2">
                  {value} Minute
                </span>
              </label>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={startTest}
              className="bg-red-700 text-white px-8 py-3 rounded-lg"
            >
              ▶ Start Hindi Typing Test
            </button>
          </div>

        </>
              ) : testStarted ? (
        <>

          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {studentName}
            </h2>

            <div className="bg-red-700 text-white px-5 py-2 rounded-lg">
              ⏱ {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, "0")}
            </div>
          </div>

          <div className="bg-gray-100 border rounded-lg p-6 mb-6 text-xl leading-10 kruti-font">
            {paragraph}
          </div>

          <textarea
            value={typedText}
            onKeyDown={handleTyping}
            readOnly
            rows={4}
           className="w-full border-2 border-purple-700 rounded-lg p-3 text-xl kruti-font resize-none"
          />
          <HindiKeyboard
  expectedKey={expectedKey}
  expectedShift={expectedShift}
/>

        </>
      ) : (

        <div className="text-center">

          <h2 className="text-3xl font-bold text-green-700">
            Hindi Test Completed
          </h2>

          <p className="mt-4">
            WPM: {wpm}
          </p>

          <p>
            Accuracy: {accuracy}%
          </p>

          <p>
            Correct Words: {correctWords}
          </p>

          <p>
            Wrong Words: {wrongWords}
          </p>

        </div>

      )}

    </div>
  </div>
);

}

export default HindiTypingCourse;