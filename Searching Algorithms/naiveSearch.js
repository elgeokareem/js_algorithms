// consiste en reconocer patrones
function naiveSearch(long, short) {
  let coincidences = 0;
  for (let longCounter = 0; longCounter < long.length; longCounter++) {
    for (let shortCounter = 0; shortCounter < short.length; shortCounter++) {
      if (long[longCounter + shortCounter] !== short[shortCounter]) {
        break;
      }
      if (shortCounter === short.length - 1) {
        coincidences++;
      }
    }
  }
  return coincidences
}

console.log(naiveSearch("lorie loled", "lo"));
