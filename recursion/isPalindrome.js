const isPalindrome = (str) => {
  if (str.length === 1) return true;
  //   if (str.length === 2)
  function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  }
  return str === reverse(str) ? true : false;
};

console.log(isPalindrome("vi"));
