
const maskify = (cc) =>{
  if(cc.length <= 4) return cc;
  let final = cc.length - 1;
  let final2 = cc.slice(final - 3, final + 1)
  let rest = cc.replace(final2, '').split('').map((num) => num = '#').join('')
  return rest + final2;
}

console.log(maskify('64607935616'));

const threeOrFive = (number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(threeOrFive(10))