import { keyboardRows } from "../utils/keyboardLayout";
import { krutiKeys } from "../utils/krutiMap";

function HindiKeyboard({ expectedKey, expectedShift }) {
  return (
    <div className="mt-6 bg-gray-900 p-4 rounded-2xl shadow-xl overflow-x-auto">
      {keyboardRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center gap-2 mb-2"
        >
          {row.map((key, index) => {
            let hindi = "";

            if (krutiKeys.normal[key]) {
              hindi = krutiKeys.normal[key];
            } else if (krutiKeys.shift[key]) {
              hindi = krutiKeys.shift[key];
            }

            const isLeftShift = key === "Shift" && rowIndex === 3 && index === 0;
           const active =
  expectedKey === key ||
  (isLeftShift && expectedShift); 

            const width =
              key === "Space"
                ? "420px"
                : key === "Backspace"
                ? "120px"
                : key === "Tab"
                ? "90px"
                : key === "Caps"
                ? "110px"
                : key === "Enter"
                ? "110px"
                : key === "Shift"
                ? "140px"
                : "58px";

            return (
              <div
                key={`${key}-${index}`}
                className={`rounded-lg border text-center transition-all duration-300 flex flex-col justify-center items-center ${
                  active
                    ? "bg-yellow-400 text-black scale-110 animate-pulse shadow-lg"
                    : "bg-gray-800 text-white"
                }`}
                style={{
                  width,
                  height: "58px",
                }}
              >
                <div className="text-sm font-bold">{key}</div>
                <div className="text-lg">{hindi}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default HindiKeyboard;