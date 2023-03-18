const express = require('express');

const app = express();

app.get('/', function (req, res) {
res.json({ ok: true });
});
app.listen(8082);



// ------- compare -------------

// const http = require('http')
// const port = 8082

// const requestHandler = (req, res) => {
//     console.log(req.url);
//     res.end('Node.js Serever works!')
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something wrong', err);
//     }
//     console.log(`Server is listening on ${port}`);
// })