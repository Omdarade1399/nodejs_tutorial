import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try {
        if(req.method === 'GET'){
            if(req.url === '/'){
                res.writeHead(200, {"Content-Type": "Text/html"});
                res.end("<h1>Hello World!</h1>");
            }else if(req.url === '/about'){
                res.writeHead(200, {"Content-Type": "Text/html"});
                res.end("<h1>About</h1>");
            }else{
                res.writeHead(404, {"Content-Type": "Text/html"});
                res.end("<h1>ERROR-404 Not Found.</h1>");
            }
        }else{
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {"Content-Type": "Text/plain"});
                res.end("Server Error");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});