import http from 'http';


const PORT = 3000;


const server = http.createServer((req, res) => {
    // // 1
    // res.end("Hello from Node Server!")

    // // 2
    // console.log(`you used method: ${req.method}`);

    // // 3
    // console.log('Request Headers:', req.headers);

});

server.listen(PORT, () => {
    console.log("server is running");
})