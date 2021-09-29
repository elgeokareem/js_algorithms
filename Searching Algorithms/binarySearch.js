/**
 * Write a function called binarySearch which accepts a sorted
 * array and a value and returns the index at which the value exists.
 * Otherwise return -1
 */

// binarySearch([1,2,3,4,5,6], 3) = 2

function binarySearch(list, number) {
  if (list.length === 0) {
    return list[0] === number ? 0 : -1;
  }

  let indexToEvaluate = Math.floor(list.length / 2);
  let left = 0;
  let right = list.length - 1;

  
  while (list[indexToEvaluate] !== number && left < right) {
    if (number < list[indexToEvaluate]) {
      right = indexToEvaluate - 1;
      indexToEvaluate = Math.floor((left + right) / 2);
    }
    if (number > list[indexToEvaluate]) {
      left = indexToEvaluate + 1;
      indexToEvaluate = Math.floor((left + right) / 2);
    }

    console.log(left, indexToEvaluate, right);
  }

  return list[indexToEvaluate] === number ? number : -1;
}

console.log("resultado", binarySearch([11, 22, 33, 44, 55, 66, 77], 11));
