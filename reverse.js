const reverse = (str) => {
  return str ? reverse(str.substring(1)) + str.charAt(0) : "";
};
console.log(reverse("hello"));

// console.log("hello".substring(2));
// console.log("hello".charAt(0));

/*substring: char o
substring: o char l
substring: lo char l
substring: llo char e
substring: ello char h
olleh*/

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
