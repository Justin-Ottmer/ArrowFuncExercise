const double = arr => arr.map(val => val * 2);

const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(numSquared => numSquared % 2 === 0);