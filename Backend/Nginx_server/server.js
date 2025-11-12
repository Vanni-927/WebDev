//Buliding Nginx server using Node.js
//This is a simple HTTP server that serves static files from the current directory.




const http = require('http');
const fs = require('fs');
const path = require('path');



const port = 4000;



const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url);

    const extName = path.extname(filePath).toLowerCase()
    
    //types of files to be supported
    const mimeTypes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      ".png": "image/png",
    };


    const contentType = mimeTypes[extName] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("404: File not found really.")
            }
        } else {
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf-8');
        }
    })
});


server.listen(port, () => {      //on what port it is listening to and what is the callback.
console.log("Server is listening to the request.")
})