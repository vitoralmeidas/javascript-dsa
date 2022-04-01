const strStr = (str1, str2) => {
  if (str1.length === 0) return 0;
  let index = str1.indexOf(str2);
  return index;
};

console.log(strStr("mississippi", "issip"));
