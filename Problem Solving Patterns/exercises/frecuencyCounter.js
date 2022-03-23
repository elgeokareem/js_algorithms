/**
 * Implement a function called, areThereDuplicates
 * which accepts a variable number of arguments, and
 * checks whether there are any duplicates among the arguments passed in.
 *
 * Examples:
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 */

function areThereDuplicates() {
  const args = {};
  for (let index = 0; index < arguments.length; index++) {
    args[arguments[index]] = (args[arguments[index]] || 0) + 1;
  }

  console.log(args);

  for (const key in args) {
    if (args[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 2));
