function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}
////////////////////////////////////////////////////////////////////////////////
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
///////////////////////////////////////////////////////////////////////
function reverse(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
/////////////////////////////////////////////////////////////////////////

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}
