//when hostname is used , that means it is for loal use only.


const http = require('http');
const hostname = '127.0.0.1';
const port = 6000;



const server = http.createServer((req, res) => {

    //as it will give same response even if there is modification in the url.
    
    if (req.url === '/') {
        res.statusCode = 200               //if everything is good.
        res.setHeader('Content-Type', 'text/plain')
        res.end('Send required response')
    } else if(req.url === '/confirmation') {
        res.statusCode = 200; 
        res.setHeader("Content-Type", "text/plain");
        res.end("Response given successfully.");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end(" 404 : Error detected.");
    }
})


server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}: ${port}`);
})
