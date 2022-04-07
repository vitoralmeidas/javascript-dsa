function incrementString(strng) {
  // return incrementedString
  let numbersX = /\d+/g;
  let arrNumbers = strng.match(numbersX);
  let finalStrNum = "";
  if (arrNumbers) {
    let strgLetter = strng.replace(arrNumbers, "");
    let numsArr = arrNumbers.map((item) => Number(item));
    let nums = +numsArr.join("") + 1;
    let numsFinal += 1
    return strgLetter + nums.toString();
  }


  return strng + "1";
}

console.log(incrementString("foo00"));
