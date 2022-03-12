/**
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false
 */

// array 1 es normal
// array 2 es elevado al cuadrado no importa el orden

// Naive way -> forma facil pero con doble loop
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // se ve el index del match y se elimina del array
  for (const ele1 of arr1) {
    const indexMatch = arr2.indexOf(ele1 * ele1);
    if (indexMatch === -1) {
      return false;
    }

    arr2.splice(indexMatch, 1);
  }

  return true;
}

function sameReloaded(arr1, arr2) {
  /**
   * La idea es quitarnos los loops anidados
   * para eso agregamos en objetos la informacion de cada lista
   */
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frecuencyCounter1 = {};
  const frecuencyCounter2 = {};

  // Aqui se guarda la frecuencia de cada valor

  for (const item of arr1) {
    frecuencyCounter1[item] = (frecuencyCounter1[item] || 0) + 1;
  }

  for (const item of arr2) {
    frecuencyCounter2[item] = (frecuencyCounter2[item] || 0) + 1;
  }

  for (const key1 in frecuencyCounter1) {
    if (frecuencyCounter1[key1] !== frecuencyCounter2[key1 ** 2]) {
      return false;
    }
  }

  return true;
}

console.log("NEW METHOD", same([1,2,3], [4,1,9]));
