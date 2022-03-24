const productOfArray = (num) => (num ? num * productOfArray(num - 1) : 1);
