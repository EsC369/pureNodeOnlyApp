// Core modules only.. No express!
const http = require("http");
const path = require("path");
const fs = require("fs");


const server = http.createServer((req,res) => {
    
    // Example Three:
    let filePath =path.join(__dirname, "public", req.url == "/" ? "index.html" : req.url);   // if req.url ==  to root("/") then load index.html, else load req.url
    
    // Grab extention of the file:
    let extName = path.extname(filePath);

    // Initial content type:
    let contentType = "text/html";

    // Check ext and set content type:
    switch(extName) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    // Read File:
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == "ENOENT") {
                // Page not Found:
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(content, "utf8");
                })
            } else{
                // Some server error:
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success:
            res.writeHead(200, {"Content-Type": contentType });
            res.end(content, "utf8");
        }
    });

   

    // // Example Two: ---
    // console.log(req.url);
    // if (req.url === "api/users"){
    //     const users = [
    //         { name: "Bob Smith", age: 40 },
    //         { name: "Sphincter", age:788 }
    //     ];

    //     res.writeHead(200, { "Content-Type": "application/json"});
    //     res.end(JSON.stringify(users));
    // }
    // // ----

    // //Example One:
    // typing /about, will return /about
    // if(req.url === "/") {
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
    //         if(err) throw err
    //         res.writeHead(200, { "Content-Type": "text/html"});
    //         res.end(content);
    //     })
    // }
    // // ---

});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));

// const Logger = require("./logger");
// const Person = require("./person");
// const person1 = new Person("John Doe", 30);
// const logger = new Logger();

// // Logger class:
// logger.on("message", data => console.log("Called Listener:", data));
// logger.log("Hello Test World");
// logger.log("I can add many different msgs heres");

// // Person class:
// person1.greeting();
