var http = require('http');
const fs = require('fs').promises;

const PORT = 8081;

const requestHandler = async (request, response) => {
    if (request.url.indexOf('/home') >= 0) {      
    const manifest = await fs.readFile('./package.json', 'utf8');
    response.writeHead(200, { 'Content-type': 'text/json' });
    return response.end(manifest);
}
    response.writeHead(200, { 'Content-type': 'text/json' });
    return response.end('{"url": "other"}');

    // if (request.url.indexOf('/home') >= 0 ) {
    //     response.writeHead(200, { 'Content-type': 'text/json' });
    //     return response.end('{"url": "homepage"}');
    // }   
    // response.writeHead(200, { 'Content-type': 'text/json' });
    // return response.end('{"url": "other"}');
}

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
    if (err) {
        console.error('Error at server launch:', err);
    }
    console.log((`Server works at port ${PORT}`));
})

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Server works');
// }).listen(8081);