global.testData = 'ssss';

const { getCurrentDate } = require('./dataUtils')

// console.log(process.env);
console.log(getCurrentDate());
// console.log(process.argv);
// console.log(__dirname);
// console.log(__filename);

const path = require('path');

console.log(path.resolve('dateUtils.js'));