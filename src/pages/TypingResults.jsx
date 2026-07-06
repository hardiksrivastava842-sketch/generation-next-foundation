function TypingResults() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-red-700 mb-6">
          📊 Typing Results
        </h1>

        <table className="w-full border">

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
            <tr>
              <td className="p-3 text-center" colSpan="6">
                No Results Available
              </td>
            </tr>
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default TypingResults;