function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else charMap[char] = 1;
  }
}
