const Calc = require('calc-js').Calc;

console.log(12123);
global.testData = 'aaaaaa'
const {getCurrentDate} = require('./dateUtils')

console.log(`get current date function result: ${getCurrentDate( )}`);

// console.log(process.env);

console.log(process.argv);
// process.exit();
// console.log(4568);

// console/log(__dirname);

// const [node, index, a, b] = process.argv
// const a = process.argv[2]
// const b = process.argv[3]
const [,, a, b] = process.argv

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

const path = require('path')

console.log(path.resolve('dateUtils.js'));
// node index.js

const fs = require('fs')

fs.readFile('./data.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(err);
    }
    console.log(data);
})