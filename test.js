const fs = require('fs');
const path = require('path');

global.testData = 'ssss';

const { getCurrentDate } = require('./dataUtils')

// console.log(process.env);
console.log(getCurrentDate());
// console.log(process.argv);
// console.log(__dirname);
// console.log(__filename);

console.log(path.resolve('dateUtils.js'));

fs.readFile('./data.txt', 'utf8', (error, data) => { // ascii or utf8 or other
    if (error) {
        console.log(error);
    }
    console.log(data);
})

// IMPORTANT!!! don`t use - blocked Event Loop 
const data = fs.readFileSync('./data.txt', 'utf8') 
console.log(data + " Sync");

const qwe = path.resolve('./qwe') // absolute path
const qwe1 = './qwe'  // relative path
console.log(qwe, qwe1);