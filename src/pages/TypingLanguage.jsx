import { Link } from "react-router-dom";

function TypingLanguage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[900px]">

        <h1 className="text-4xl font-bold text-center text-red-700 mb-10">
          ⌨️ Select Typing Language
        </h1>

        <div className="grid grid-cols-2 gap-10">

          <Link to="/typing-course">
            <div className="h-72 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white flex flex-col items-center justify-center shadow-xl hover:scale-105 transition">

              <div className="text-7xl mb-5">🇬🇧</div>

              <h2 className="text-3xl font-bold">
                English Typing
              </h2>

              <p className="mt-3 text-center px-6">
                Practice English typing test.
              </p>

            </div>
          </Link>

          <Link to="/hindi-typing-course">
            <div className="h-72 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white flex flex-col items-center justify-center shadow-xl hover:scale-105 transition">

              <div className="text-7xl mb-5">🇮🇳</div>

              <h2 className="text-3xl font-bold">
                Hindi Typing
              </h2>

              <p className="mt-3 text-center px-6">
                Kruti Dev Hindi Typing Test.
              </p>

            </div>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default TypingLanguage;