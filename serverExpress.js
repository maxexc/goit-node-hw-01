const express = require('express');

const app = express();

const PORT = 8082

app.get('/home', function (req, res) {
    res.send('Server is runnig');
    // res.sendStatus(200);
    // res.json({ ok: true });
});
app.listen(PORT, (err) => {
    if (err) {
        return console.log('something wrong', err);
    }
    console.log(`Server is listening on ${PORT}`);
})



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