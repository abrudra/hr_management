const http = require("http");
const app = require('./app');

const port = 8081;

/// Creating  Server.

const server = http.createServer(app);

/// Listing port;

server.listen(port,()=>{
    console.log("Server running on port : " +port)
});