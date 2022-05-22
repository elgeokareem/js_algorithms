/**
 * Bubblesort pseudocode
 *
 * 1- start looping from with a variable called i the end of the array
 * towards the beginning
 * 2- start an inner loop with a variable called j from the beginning until i-1
 * 3- if arr[j] is greater than arr[j+1], swap those two values
 * 4- return sorted array
 */

const array = [5, 4, 3, 2, 1];

function bubble(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let a = array[j];
      let b = array[j + 1];

      if (a > b) {
        [a, b] = [b, a];
        array.splice(j, 1, a);
        array.splice(j + 1, 1, b);
      }
    }
  }

  return array;
}

function optimizedBubble(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let wasSwap = true;

    for (let j = 0; j < i; j++) {
      let a = array[j];
      let b = array[j + 1];

      if (a > b) {
        [a, b] = [b, a];
        array.splice(j, 1, a);
        array.splice(j + 1, 1, b);
        wasSwap = false;
      }
    }

    if (wasSwap) {
      break;
    }
  }

  return array;
}

console.log(optimizedBubble([5, 1, 2, 3, 4]));
