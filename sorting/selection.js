function selectionSort(arr) {
  for (const i = 0; i < arr.length; i++) {
    const lowest = i;
    for (const j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      const temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([4, 2, 5, 6, 2, 1]));
