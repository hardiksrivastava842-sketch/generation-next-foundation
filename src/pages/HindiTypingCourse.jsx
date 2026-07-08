import { useState, useEffect } from "react";
import { krutiMap } from "../utils/krutiMap";

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
    5: "यह पाँच मिनट का हिंदी टाइपिंग अभ्यास है। इस अभ्यास का उद्देश्य आपकी गति, शुद्धता और एकाग्रता को बढ़ाना है। पूरे पैराग्राफ को ध्यानपूर्वक पढ़ें और बिना गलती के टाइप करने का प्रयास करें। नियमित अभ्यास से सरकारी परीक्षाओं की तैयारी में सहायता मिलेगी।"
  };

  const paragraph = paragraphs[time];

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

  // Ignore Ctrl / Alt / Shift
  if (
    key === "Shift" ||
    key === "Control" ||
    key === "Alt" ||
    key === "Meta"
  ) {
    return;
  }

  // Kruti Mapping
 if (krutiMap[key]) {
  const mapped = krutiMap[key];

  setTypedText((prev) => {
    // छोटी इ की मात्रा
    if (mapped === "ि" && prev.length > 0) {
      return prev + "ि";
    }

    return prev + mapped;
  });
} else {
  setTypedText((prev) => prev + key);
}
};

  useEffect(() => {
    if (!testStarted) return;
    if (timeLeft <= 0) {
      setTestStarted(false);
      setTestCompleted(true);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
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
              <label className="block font-semibold mb-2">Student Name</label>
              <input
                className="w-full border p-3 rounded-lg"
                value={studentName}
                onChange={(e)=>setStudentName(e.target.value)}
                placeholder="Enter Student Name"
              />
            </div>

            <div className="mb-6 flex gap-6">
              {[1,3,5].map(v=>(
                <label key={v}>
                  <input type="radio" checked={time===v} onChange={()=>setTime(v)} />
                  <span className="ml-2">{v} Minute</span>
                </label>
              ))}
            </div>

            <div className="text-center">
              <button onClick={startTest} className="bg-red-700 text-white px-8 py-3 rounded-lg">
                ▶ Start Hindi Typing Test
              </button>
            </div>
          </>
        ) : testStarted ? (
          <>
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-bold">{studentName}</h2>
              <div className="bg-red-700 text-white px-5 py-2 rounded-lg">
                ⏱ {Math.floor(timeLeft/60)}:{String(timeLeft%60).padStart(2,"0")}
              </div>
            </div>

            <div className="bg-gray-100 p-5 rounded-lg mb-5 text-xl leading-10">
              {paragraph}
            </div>

            <textarea
              value={typedText}
              onKeyDown={handleTyping}
              readOnly
              rows={8}
              className="w-full border-2 border-red-600 rounded-lg p-4 text-2xl"
            />
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-700">Hindi Test Completed</h2>
            <p className="mt-4">WPM: {wpm}</p>
            <p>Accuracy: {accuracy}%</p>
            <p>Correct: {correctWords}</p>
            <p>Wrong: {wrongWords}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HindiTypingCourse;
