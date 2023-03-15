const fs = require('fs').promises;
const path = require('path');

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