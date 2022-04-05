/**
 *  * Es mucho mas rapido que linear search
 *  * Se elimina la mitad de los items por iteracion
 *  * Solo funciona en arrays que esten ordenados (sorted)
 *
 *  Ejercicio
 *
 *  Escribe una funcion binarySearch que recibe un array ordenado y un elemento
 *  y devuelve la posicion del elemento en el array. Caso contrario devuelve -1
 *
 */

function binarySearch(array, element) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let middleIndex = Math.floor((rightIndex - leftIndex) / 2);
  let comparisonValue = array[middleIndex];

  // Condiciones de salida iniciales
  if (element > array[array.length - 1] || element < array[0]) {
    return -1;
  }

  while (leftIndex <= rightIndex) {
    if (element === comparisonValue) {
      return middleIndex;
    }

    if (element < comparisonValue) {
      rightIndex = middleIndex - 1;
      middleIndex = rightIndex - Math.floor((rightIndex - leftIndex) / 2);
    }

    if (element > comparisonValue) {
      leftIndex = middleIndex + 1;
      middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    }
    comparisonValue = array[middleIndex];
  }

  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103));

// [1, 2, 3, 4, 5]
//  l     c     r -> l = 0; r = 4; center = (r-l)/2 = (4-0)/2 = 2
//          lc  r -> l = center + 1 = 2 + 1 = 3; r = 4; center = l + (r-l)/2 = (4-3)/2 + 3 = 3
//       rc  l    -> l = 3; r = center - 1 = 3 - 1 = 2; center = r - (r-l)/2 = 2 - (2-3)/2 = 2 - 0 = 2
