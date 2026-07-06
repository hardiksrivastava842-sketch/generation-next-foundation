import { useState } from "react";

function TypingCourse() {
  const [time, setTime] = useState("1");

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
          ⌨️ English Typing Course
        </h1>

        <div className="mb-6">

          <label className="block text-lg font-semibold mb-2">
            Student Name
          </label>

          <input
            type="text"
            placeholder="Enter Student Name"
            className="w-full border p-3 rounded-lg"
          />

        </div>

        <div className="mb-8">

          <label className="block text-lg font-semibold mb-4">
            Select Test Time
          </label>

          <div className="flex gap-6">

            <label>
              <input
                type="radio"
                value="1"
                checked={time === "1"}
                onChange={(e) => setTime(e.target.value)}
              />
              <span className="ml-2">1 Minute</span>
            </label>

            <label>
              <input
                type="radio"
                value="3"
                checked={time === "3"}
                onChange={(e) => setTime(e.target.value)}
              />
              <span className="ml-2">3 Minutes</span>
            </label>

            <label>
              <input
                type="radio"
                value="5"
                checked={time === "5"}
                onChange={(e) => setTime(e.target.value)}
              />
              <span className="ml-2">5 Minutes</span>
            </label>

          </div>

        </div>

        <div className="text-center">

          <button className="bg-red-700 hover:bg-red-800 text-white px-10 py-3 rounded-lg text-lg font-bold">
            ▶ Start Typing Test
          </button>

        </div>

      </div>

    </div>
  );
}

export default TypingCourse;