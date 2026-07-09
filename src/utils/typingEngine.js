export function processKrutiInput(previousText, currentKey) {

  // ==========================
  // छोटी इ की मात्रा (ि)
  // ==========================

  if (currentKey === "ि") {

    if (previousText.length === 0)
      return currentKey;

    const lastChar = previousText.slice(-1);

    return previousText.slice(0, -1) + lastChar + "ि";
  }
// ==========================
// Halant (्)
// ==========================

if (currentKey === "्") {

  // Do baar halant na lage
  if (previousText.endsWith("्")) {
    return previousText;
  }

  return previousText + "्";
}
  return previousText + currentKey;
}