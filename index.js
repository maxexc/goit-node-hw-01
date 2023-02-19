const Calc = require('calc-js').Calc;

console.log(12123);
global.testData = 'aaaaaa'
const {getCurrentDate} = require('./dateUtils')

console.log(`get current date function result: ${getCurrentDate( )}`);

// console.log(process.env);

console.log(process.argv);
// process.exit();
console.log(4568);

// console/log(__dirname);

console.log(new Calc(0.2).sum(0.1).finish());