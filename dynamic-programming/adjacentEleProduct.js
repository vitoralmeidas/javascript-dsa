//find the maximum product obtaind from multiplying 2 adjacent number
const adjacentElementsNumber = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i] * array[i + 1]);
  }

  return Math.max(...newArray);
};
