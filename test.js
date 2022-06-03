const arrayDiff = (a, b) => a.filter((e) => !b.includes(e));

console.log(arrayDiff([1, 2, 3], [1, 2])); // [1]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]
