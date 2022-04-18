const isPalindrome = (str) => {
  if (str.length === 1) return true;
  function reverseHelper(str) {
    if (str.length <= 1) return str;
    return reverseHelper(str.slice(1)) + str[0];
  }
  return str === reverseHelper(str) ? true : false;
};

console.log(isPalindrome("vi"));
