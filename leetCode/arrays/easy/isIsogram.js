function isIsogram(str) {
  //...
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    hash[letter] ? (hash[letter] += 1) : (hash[letter] = 1);
  }
  let values = Object.values(hash);
  for (let j = 0; j < values.length; j++) {
    if (values[j] > 1) return false;
  }

  return true;
}
// if (!(str[end].toLowerCase() === str[start].toLowerCase())) return true;
console.log(isIsogram("aba"));
