const express = require('express');

const app = express();

const PORT = 3000

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`);
    next();
})

// app.use((req, res) => {
    // res.redirect('https://google.com')    
    // res.status(500).json({ javascriprt: 'object' })
// })

app.get('/', (req, res) => {    
    res.send('Server is runnig');
});

app.get('/home', (req, res) => {    
    res.json({ javascriprt: 'object' })
    // res.send('Server is runnig');
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