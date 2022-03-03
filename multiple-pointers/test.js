function birthdayCakeCandles(candles) {
  // Write your code here
  if (candles.length === 0) return 0;

  let biggest = Math.max(...candles);
  let theBigs = 0;

  for (let index = 0; index < candles.length; index++) {
    if (candles[index] === biggest) theBigs++;
  }

  return theBigs;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
