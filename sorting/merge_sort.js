/**
 * Function to merge two sorted arrays
 * 
 * pseudocode
 * Create an empty array, take a look at the smallest values in each input array
    While there are still values we haven't looked at...
    If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    Once we exhaust one array, push in all remaining values from the other array
 */
const arr1 = [1, 4, 5];
const arr2 = [3, 7, 10];
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let firstArrElement = arr1[i];
    let secondArrElement = arr2[j];

    if (firstArrElement < secondArrElement) {
      mergedArray.push(firstArrElement);
      i++;
    }

    if (firstArrElement > secondArrElement) {
      mergedArray.push(secondArrElement);
      j++;
    }
  }

  if (i === arr1.length) {
    mergedArray.push(...arr2.slice(j));
  }

  if (j === arr2.length) {
    mergedArray.push(...arr1.slice(i));
  }

  return mergedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeSortedArrays(left, right);
}

mergeSort([24, 10, 76, 73, 72, 1, 7]);
