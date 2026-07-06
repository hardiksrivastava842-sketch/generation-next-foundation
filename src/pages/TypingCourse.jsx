import { useState, useEffect } from "react";

function TypingCourse() {
  const [studentName, setStudentName] = useState("");
  const [time, setTime] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);

  const [testStarted, setTestStarted] = useState(false);
  const [typingText, setTypingText] = useState("");

  const paragraph =
    "The quick brown fox jumps over the lazy dog. Technology is changing the world every day. Practice typing daily to improve your typing speed and accuracy.";

  // Start Test
  const startTest = () => {
    if (studentName.trim() === "") {
      alert("Please enter student name.");
      return;
    }

    setTimeLeft(time * 60);
    setTypingText("");
    setTestStarted(true);
  };

  // Timer
  useEffect(() => {
    if (!testStarted) return;

    if (timeLeft <= 0) {
      alert("Typing Test Completed!");
      setTestStarted(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted, timeLeft]);
  return (
  <div className="min-h-screen bg-gray-100 p-8">

    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">

      <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
        ⌨️ English Typing Course
      </h1>

      {!testStarted ? (

        <>

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
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg text-lg font-bold"
            >
              ▶ Start Typing Test
            </button>

          </div>

        </>

      ) : (

        <>
                
          {/* Timer */}
          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold text-red-700">
              Student : {studentName}
            </h2>

            <div className="bg-red-700 text-white px-6 py-3 rounded-lg text-xl font-bold">
              ⏱ Time Left : {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, "0")}
            </div>

          </div>

          {/* Paragraph */}
          <div className="bg-gray-100 p-6 rounded-lg border text-lg leading-9 mb-6">
            {paragraph}
          </div>

          {/* Typing Area */}
          <textarea
            value={typingText}
            onChange={(e) => setTypingText(e.target.value)}
            placeholder="Start typing here..."
            className="w-full border-2 border-red-600 rounded-lg p-4 text-lg"
            rows="8"
          />

          <div className="mt-6 flex justify-center">

            <button
              onClick={() => {
                setTestStarted(false);
                setTypingText("");
                setStudentName("");
                setTime(1);
                setTimeLeft(60);
              }}
              className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg"
            >
              🔄 Reset Test
            </button>

          </div>

        </>

      )}

    </div>

  </div>
);
}

export default TypingCourse;