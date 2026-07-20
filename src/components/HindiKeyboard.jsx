import { keyboardRows } from "../utils/keyboardLayout";
import { krutiKeys } from "../utils/krutiMap";

function HindiKeyboard({ expectedKey, expectedShift }) {
  const shiftNumberMap = {
    "1": "!",
    "2": "@",
    "3": "#",
    "4": "$",
    "5": "%",
    "6": "^",
    "7": "&",
    "8": "*",
    "9": "(",
    "0": ")",
    "-": "_",
    "=": "+",
    "`": "~",
    "[": "{",
    "]": "}",
    "\\": "|",
    ";": ":",
    "'": "\"",
    ",": "<",
    ".": ">",
    "/": "?",
  };

  return (
    <div className="mt-6 bg-gray-900 p-4 rounded-2xl shadow-xl overflow-x-auto">
      {keyboardRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center gap-2 mb-2"
        >
          {row.map((key, index) => {
            const normal = krutiKeys.normal[key] ?? "";

            const shiftLookup =
              shiftNumberMap[key] || key.toUpperCase();

            const shifted =
              krutiKeys.shift[shiftLookup] ?? "";

            const shiftReverseMap = {
  "!": "1",
  "@": "2",
  "#": "3",
  "$": "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  "_": "-",
  "+": "=",
  "~": "`",
  "{": "[",
  "}": "]",
  "|": "\\",
  ":": ";",
  "\"": "'",
  "<": ",",
  ">": ".",
  "?": "/",
};

const expectedDisplayKey =
  shiftReverseMap[expectedKey] || expectedKey;

const active =
  expectedDisplayKey?.toLowerCase() === key.toLowerCase() ||
  (key === "Shift" && expectedShift);

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
                className={`rounded-lg border flex flex-col justify-center items-center transition-all duration-300 ${
                  active
                    ? "bg-yellow-400 text-black scale-110 animate-pulse shadow-lg"
                    : "bg-gray-800 text-white"
                }`}
                style={{
                  width,
                  height: "58px",
                }}
              >
                {/* Shift Character */}
                <div className="text-xs text-gray-300 h-4">
                  {shifted}
                </div>

                {/* Keyboard Key */}
                <div className="text-sm font-bold">
                  {key}
                </div>

                {/* Normal Character */}
                <div className="text-lg font-semibold">
                  {normal}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default HindiKeyboard;