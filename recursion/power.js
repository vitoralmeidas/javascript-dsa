const power = (b, e) => (!(e === 0) ? b * power(b, e - 1) : 1);

console.log(power(2, 10));
