const sortme = (names) => {
  return names.sort((a, b) => {
    const letterA = a.toLowerCase();
    const letterB = b.toLowerCase();
    if (letterA < letterB) return -1;
    if (letterA > letterB) return 1;
    return 0;
  });
};

console.log(sortme(["Hello", "there", "I'm", "fine"])); // => ["fine", "Hello", "I'm", "there"]
// console.log(sortme(["C", "d", "a", "B"])); // => ["a", "B", "C", "d"]
