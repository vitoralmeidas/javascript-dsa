const reverse = (str) => {
  return str ? reverse(str.substring(1)) + str.charAt(0) : "";
};
console.log(reverse("hello"));

// console.log("hello".substring(2));
// console.log("hello".charAt(0));
