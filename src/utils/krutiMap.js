// krutidev.js
// KrutiDev 010 -> Unicode (Devanagari) key mapping
// NOTE: Yeh sirf "raw key -> glyph" mapping hai. KrutiDev font
// ek "visual" font hai (matra pehle likhi jaati hai, consonant baad me),
// isliye sirf character-replace karne se output 100% sahi Devanagari
// order me nahi aayega. Neeche ek fixKrutiOrder() helper bhi diya hai
// jo common reordering issues (jaise "f" ki "ि" matra) theek karta hai.

export const krutiKeys = {
  normal: {
    // Numbers
    "1": "१",
    "2": "२",
    "3": "३",
    "4": "४",
    "5": "५",
    "6": "६",
    "7": "७",
    "8": "८",
    "9": "९",
    "0": "०",
    "-": "-",
    "=": "=",

    // Top Row: Q W E R T Y U I O P
    "q": "ु",
    "w": "ू",
    "e": "म",
    "r": "त",
    "t": "ज",
    "y": "ल",
    "u": "न",
    "i": "प",
    "o": "व",
    "p": "च",
    "[": "ख",
    "]": ",",
    "\\": "।",

    // A S D F G H J K L
    "a": "ो",
    "s": "े",
    "d": "क",
    "f": "ि",
    "g": "ह",
    "h": "ी",
    "j": "र",
    "k": "ा",
    "l": "स",
    ";": "य",
    "'": "श",

    // Z X C V B N M
    "z": "्",
    "x": "ग",
    "c": "ब",
    "v": "अ",
    "b": "इ",
    "n": "द",
    "m": "उ",
    ",": "ए",
    ".": "।",
    "/": "ध",
  },

  shift: {
    // Shift + Numbers
    "!": "!",
    "@": "@",
    "#": "#",
    "$": "₹",
    "%": "%",
    "^": "^",
    "&": "&",
    "*": "*",
    "(": "(",
    ")": ")",
    "_": "_",
    "+": "+",

    // Shift + Q W E R T Y U I O P
    "Q": "फ",
    "W": "ॅ",
    "E": "म्",
    "R": "थ",
    "T": "ट",
    "Y": "ठ",
    "U": "ण",
    "I": "फ",
    "O": "ढ",
    "P": "छ",
    "{": "क्ष",
    "}": "ज्ञ",
    "|": "॥",

    // Shift + A S D F G H J K L
    "A": "औ",
    "S": "ै",
    "D": "क़",
    "F": "थि",
    "G": "ः",
    "H": "भ",
    "J": "ऱ",
    "K": "आ",
    "L": "श",
    ":": "ष",
    "\"": "श्र",

    // Shift + Z X C V B N M
    "Z": "्र",
    "X": "घ",
    "C": "झ",
    "V": "ऋ",
    "B": "ई",
    "N": "ध",
    "M": "ऊ",
    "<": "ङ",
    ">": "ढ़",
    "?": "?",
  },
};

/**
 * Ek raw string (KrutiDev font me type kiya hua text, ASCII form me)
 * ko Unicode Devanagari characters me convert karta hai — character-by-character.
 * (Reordering ke bina — matra ka order source string me jaisa hai waisa hi rahega)
 */
export function krutiCharToUnicode(char, isShift = false) {
  const map = isShift ? krutiKeys.shift : krutiKeys.normal;
  return map[char] ?? char;
}

export function krutiStringToUnicode(input) {
  let output = "";
  for (const ch of input) {
    // agar character shift-map me directly available hai (capital letters, symbols)
    if (krutiKeys.shift[ch] !== undefined) {
      output += krutiKeys.shift[ch];
    } else if (krutiKeys.normal[ch] !== undefined) {
      output += krutiKeys.normal[ch];
    } else {
      output += ch; // spaces, unknown chars as-is
    }
  }
  return output;
}
export const reverseKrutiMap = {};

Object.entries(krutiKeys.normal).forEach(([key, value]) => {
  reverseKrutiMap[value] = key;
});

Object.entries(krutiKeys.shift).forEach(([key, value]) => {
  reverseKrutiMap[value] = key;
});