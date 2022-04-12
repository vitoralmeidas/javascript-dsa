// function encode(string) {
//   let final = string
//     .replace(/a/g, "1")
//     .replace(/e/g, "2")
//     .replace(/i/g, "3")
//     .replace(/o/g, "4")
//     .replace(/u/g, "5");
//   return final;
// }

// function decode(string) {
//   let str = string
//     .replace(/1/g, "a")
//     .replace(/2/g, "e")
//     .replace(/3/g, "i")
//     .replace(/4/g, "o")
//     .replace(/5/g, "u");
//   return str;
// }

// turn vowels into numbers
function encode(string) {
  return string.replace(/[aeiou]/g, function (x) {
    console.log(x);
    return "_aeiou".indexOf(x);
  });
}

//turn numbers back into vowels
function decode(string) {
  return string.replace(/[1-5]/g, function (x) {
    return "_aeiou".charAt(x);
  });
}

/*
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

encode("hello") => "h2ll4"

decode("h3 th2r2") => "hi there"
*/

// console.log(encode("hello")); //=> "h2ll4"
console.log(encode("hello"));
