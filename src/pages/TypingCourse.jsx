import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function TypingCourse() {
  // Student Details
  const [studentName, setStudentName] = useState("");

  // Test Settings
  const [time, setTime] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);

  // Test State
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);

  // Typing
  const [typingText, setTypingText] = useState("");

  // Result
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [wrongWords, setWrongWords] = useState(0);

  // Paragraph
  // Paragraphs
const paragraphs = {
  1: `The quick brown fox jumps over the lazy dog. Technology is changing the world every day. Practice typing daily to improve your typing speed and accuracy.`,

  3: `Technology has become an essential part of modern life. Every day people use computers, mobile phones, and the internet for education, communication, and entertainment. Learning typing is an important skill because it increases productivity and saves time. A good typist can complete office work, school assignments, and professional projects much faster than someone who types slowly. Regular practice improves speed, accuracy, and confidence. Students should focus on typing without looking at the keyboard while maintaining proper finger placement. Consistency is the key to success. Even fifteen minutes of daily practice can produce significant improvement over time. A positive attitude, patience, and continuous effort help every learner become an excellent typist.`,

  5: `Technology has transformed the way people learn, communicate, and work. Computers, smartphones, and the internet have become essential tools in everyday life. Typing is one of the most valuable digital skills because it allows people to complete tasks quickly and accurately. Students who practice typing regularly develop better speed, improved concentration, and greater confidence while working on assignments. Professional typists rely on proper finger placement, correct posture, and consistent practice to achieve excellent results. Accuracy is more important than speed because mistakes reduce productivity and require additional time for correction. Daily typing exercises strengthen muscle memory and improve coordination between the hands and eyes. Reading carefully before typing also reduces spelling errors and improves overall performance. Successful learners remain patient during practice sessions and gradually increase their typing speed without sacrificing accuracy. Modern workplaces expect employees to type efficiently while preparing reports, emails, presentations, and documents. Continuous learning, discipline, and dedication help individuals master typing skills and become more productive in both academic and professional environments. Every minute spent practicing today contributes to greater efficiency, confidence, and career opportunities in the future.`,
};

const paragraph = paragraphs[time];
    
  // Start Test
  const startTest = () => {
    if (studentName.trim() === "") {
      alert("Please enter student name.");
      return;
    }

    setTypingText("");
    setTimeLeft(time * 60);

    setWpm(0);
    setAccuracy(0);
    setCorrectWords(0);
    setWrongWords(0);

    setTestCompleted(false);
    setTestStarted(true);
  };

  // Save result to Firebase (kept at component scope, called once per finished test)
  const saveResultToFirebase = async (
    duration,
    totalWords,
    correct,
    wrong,
    wordsPerMinute,
    acc
  ) => {
    try {
      await addDoc(collection(db, "typingResults"), {
        studentName,
        duration,
        totalWords,
        correctWords: correct,
        wrongWords: wrong,
        wpm: wordsPerMinute,
        accuracy: acc,
        language: "English",
        completedAt: serverTimestamp(),
      });

      console.log("Result Saved Successfully");
    } catch (error) {
      console.error("Error Saving Result:", error);
    }
  };

  // Calculate Result - now RETURNS the computed values instead of only setting state
  const calculateResult = () => {
    const originalWords = paragraph.trim().split(/\s+/);
    const typedWords = typingText.trim().split(/\s+/).filter(Boolean);

    let correct = 0;

    typedWords.forEach((word, index) => {
      if (word === originalWords[index]) {
        correct++;
      }
    });

    const wrong = typedWords.length - correct;

    const acc =
      typedWords.length === 0
        ? 0
        : Math.round((correct / typedWords.length) * 100);

    const wordsPerMinute = Math.round(typedWords.length / time);

    setCorrectWords(correct);
    setWrongWords(wrong);
    setAccuracy(acc);
    setWpm(wordsPerMinute);

    return { typedWords, correct, wrong, acc, wordsPerMinute };
  };

  // Called by the "Calculate Result" button while the test is still running
  const handleManualCalculate = () => {
    const { typedWords, correct, wrong, acc, wordsPerMinute } = calculateResult();
    setTestStarted(false);
    setTestCompleted(true);
    saveResultToFirebase(time, typedWords.length, correct, wrong, wordsPerMinute, acc);
  };

  // Timer
  useEffect(() => {
    if (!testStarted) return;

    if (timeLeft <= 0) {
      const { typedWords, correct, wrong, acc, wordsPerMinute } = calculateResult();
      setTestStarted(false);
      setTestCompleted(true);
      saveResultToFirebase(time, typedWords.length, correct, wrong, wordsPerMinute, acc);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testStarted, timeLeft]);

  // Reset Test
  const resetTest = () => {
    setStudentName("");
    setTypingText("");
    setTime(1);
    setTimeLeft(60);

    setWpm(0);
    setAccuracy(0);
    setCorrectWords(0);
    setWrongWords(0);

    setTestStarted(false);
    setTestCompleted(false);
  };

  // ===========================
  // UI Starts Here
  // ===========================

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
          ⌨️ English Typing Course
        </h1>
        {!testStarted && !testCompleted ? (

          <>
            {/* Student Name */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">
                Student Name
              </label>

              <input
                type="text"
                placeholder="Enter Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full border p-3 rounded-lg"
              />
            </div>

            {/* Time Selection */}
            <div className="mb-8">

              <label className="block font-semibold mb-3">
                Select Test Time
              </label>

              <div className="flex gap-6">

                <label>
                  <input
                    type="radio"
                    checked={time === 1}
                    onChange={() => setTime(1)}
                  />
                  <span className="ml-2">1 Minute</span>
                </label>

                <label>
                  <input
                    type="radio"
                    checked={time === 3}
                    onChange={() => setTime(3)}
                  />
                  <span className="ml-2">3 Minutes</span>
                </label>

                <label>
                  <input
                    type="radio"
                    checked={time === 5}
                    onChange={() => setTime(5)}
                  />
                  <span className="ml-2">5 Minutes</span>
                </label>

              </div>

            </div>

            <div className="text-center">

              <button
                onClick={startTest}
                className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-bold"
              >
                ▶ Start Typing Test
              </button>

            </div>

          </>

        ) : testStarted ? (

          <>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-red-700">
                Student : {studentName}
              </h2>

              <div className="bg-red-700 text-white px-6 py-3 rounded-lg text-xl font-bold">
                ⏱ {Math.floor(timeLeft / 60)}:
                {String(timeLeft % 60).padStart(2, "0")}
              </div>

            </div>

            {/* Paragraph */}
            <div className="bg-gray-100 border rounded-lg p-6 text-lg leading-9 mb-6">
              {paragraph}
            </div>

            {/* Typing Area */}
            <textarea
              value={typingText}
              onChange={(e) => setTypingText(e.target.value)}
              placeholder="Start typing here..."
              rows="8"
              className="w-full border-2 border-red-600 rounded-lg p-4 text-lg"
            />
            <div className="mt-6 text-center">
              <button
                onClick={handleManualCalculate}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold"
              >
                📊 Calculate Result
              </button>
            </div>

          </>

        ) : (

          <>
            {/* Result Screen */}

            <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
              🎉 Typing Test Completed
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <div className="bg-green-100 p-5 rounded-lg text-center">
                <h3 className="font-bold">WPM</h3>
                <p className="text-3xl font-bold">{wpm}</p>
              </div>

              <div className="bg-blue-100 p-5 rounded-lg text-center">
                <h3 className="font-bold">Accuracy</h3>
                <p className="text-3xl font-bold">{accuracy}%</p>
              </div>

              <div className="bg-purple-100 p-5 rounded-lg text-center">
                <h3 className="font-bold">Correct</h3>
                <p className="text-3xl font-bold">{correctWords}</p>
              </div>

              <div className="bg-red-100 p-5 rounded-lg text-center">
                <h3 className="font-bold">Wrong</h3>
                <p className="text-3xl font-bold">{wrongWords}</p>
              </div>

            </div>

            <div className="mt-10 text-center">

              <button
                onClick={resetTest}
                className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-bold"
              >
                🔄 New Test
              </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default TypingCourse;
