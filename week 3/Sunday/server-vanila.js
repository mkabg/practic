import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    // // 1
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);

    // // 2
    // if (req.method === 'POST' && req.headers['content-type'] === 'application/json') {
    //     console.log("JSON accepted");
    // }
    // else {
    //     console.log("Unsupported request");
    // }
    
    // // 3
    // if (req.url === '/hello' && req.method === 'GET') {
    //     console.log("Hello from GET");
    // }
    // else if (req.url === '/hello' && req.method === 'POST') {
    //     console.log("Hello from POST");
    // }
    // else {
    //     console.log("Not supported");
    // }

    res.end();
});

server.listen(PORT, () => {
    console.log('server is running');
    
})