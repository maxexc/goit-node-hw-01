const fs = require('fs').promises;
const path = require('path');
// import * as path from 'path';
// import { promises as fs } from 'fs';


(async () => {
    try {
        const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
        console.log(data + " Async fn");

        const newContent = `${data} REWRITE`;
        await fs.writeFile('./data1.txt', newContent, "utf8");

        // await fs.rename('./dataUtils.js', './dataUtilsNew.js')
        // await fs.rename('./dataUtilsNew.js', './tmp/dataUtilsNew.js')

        // console.log(await fs.readdir('./tmp'));

        // await fs.unlink('./tmp/dataUtilsNew.js')

        // await fs.appendFile('./data1.txt', ' OutTextOOOUUUTTT', 'utf8')

        const info = await fs.readFile(path.resolve('./package.json'), 'utf8')
        console.log(JSON.parse(info).dependencies);
    } catch (err) {
        console.error(err)
    }
})();

//  if use type = module in package.json
//  CONTENT package.json 

// {
//   "name": "goit-node-hw-01",
//   "description": "",
//   "version": "1.0.0",
//   "main": "index.js",

//   "type": "module",

//   "devDependencies": {
//     "jest": "^29.5.0",
//     "nodemon": "^2.0.20"
//   },
//   "scripts": {
//     "testj": "jest",
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index",
//     "start:dev": "nodemon index"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/maxexc/goit-node-hw-01.git"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://github.com/maxexc/goit-node-hw-01/issues"
//   },
//   "homepage": "https://github.com/maxexc/goit-node-hw-01#readme",
//   "dependencies": {
//     "calc-js": "^2.0.7",
//     "colors": "^1.4.0",
//     "commander": "^10.0.0",
//     "uuid": "^9.0.0"
//   }
// }
