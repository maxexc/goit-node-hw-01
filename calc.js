const Calc = require('calc-js').Calc;

console.log(process.argv);


const [,, a, b] = process.argv
// const [node, index, a, b] = process.argv
// const a = process.argv[2]
// const b = process.argv[3]


console.log( new Calc(parseInt(a)).sum(parseInt(b)).finish()); // целое число
console.log( new Calc(parseFloat(a)).sum(parseFloat(b)).finish()); // с плавающей запятой