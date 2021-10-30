function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frecStr1 = {};
  const frecStr2 = {};

  for (const letter of str1) {
    frecStr1[letter] = frecStr1[letter] + 1 || 1;
  }

  for (const letter of str2) {
    frecStr2[letter] = frecStr2[letter] + 1 || 1;
  }

  for (const key1 in frecStr1) {
    if (frecStr2[key1] === undefined || frecStr1[key1] !== frecStr2[key1]) {
      return false;
    }
  }


  return true;
}

console.log(validAnagram("asdf1 2m", "asdf1 2M"));
