/**
 * Write a function called sameFrecuency. Given two
 * positive integers, find out if the two numbers
 * have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 * Time: O(N)
 *
 * Sample input:
 * sameFrecuency(182, 281) // true
 * sameFrecuency(34,14) // false
 * sameFrecuency(3589578, 5879385) // true
 * sameFrecuency(22,222) // false
 */

function sameFrecuency(a, b) {
  const strA = String(a).split("");
  const strB = String(b).split("");

  if (strA.length !== strB.length) {
    return undefined;
  }

  const objA = {};
  const objB = {};

  for (let index = 0; index < strA.length; index++) {
    const currElement = strA[index];
    objA[currElement] = (objA[currElement] ?? 0) + 1;
  }

  for (let index = 0; index < strB.length; index++) {
    const currElement = strB[index];
    objB[currElement] = (objB[currElement] ?? 0) + 1;
  }

  for (const keyA in objA) {
    if (objA[keyA] !== objB[keyA]) {
      return false;
    }
  }

  return true;
}
console.log(sameFrecuency(3589578, 5879385));
