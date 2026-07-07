import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function TypingResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "typingResults"));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-red-700 mb-6">
          📊 Typing Results
        </h1>

        <table className="w-full border border-gray-300">

          <thead className="bg-red-700 text-white">
            <tr>
              <th className="p-3">Student</th>
              <th className="p-3">Time</th>
              <th className="p-3">WPM</th>
              <th className="p-3">Accuracy</th>
              <th className="p-3">Correct</th>
              <th className="p-3">Wrong</th>
            </tr>
          </thead>

          <tbody>

            {results.length > 0 ? (
              results.map((item) => (
                <tr key={item.id} className="border">

                  <td className="p-3 text-center">
                    {item.studentName}
                  </td>

                  <td className="p-3 text-center">
                    {item.duration} Min
                  </td>

                  <td className="p-3 text-center">
                    {item.wpm}
                  </td>

                  <td className="p-3 text-center">
                    {item.accuracy}%
                  </td>

                  <td className="p-3 text-center">
                    {item.correctWords}
                  </td>

                  <td className="p-3 text-center">
                    {item.wrongWords}
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-center" colSpan="6">
                  No Results Available
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default TypingResults;