// most simple web server EVER!

const http = require("http");

//Create Srver Object:
http.createServer((req, res) => {
    // Write response:
    res.write("hello World");
    res.end()


}).listen(5000, () => console.log("server Running..."))