const fs = require("fs");
const path = require("path");

// Create Folder:
// fs.mkdir(path.join(__dirname, "/NewFolder"), {}, (err) => {
//     if(err) throw err;
//     console.log("Folder created...");
// });

// Create and write to file:
// fs.writeFile(path.join(__dirname, "/NewFolder", "hello.txt"), "Hello World! \n", (err) => {
//     if(err) throw err;
//     console.log("File written to...");
// });

// // Add to it! File Append
// fs.appendFile(path.join(__dirname, "/NewFolder", "hello.txt"), "I Love Node.", (err) => {
//     if(err) throw err;
//     console.log("File written to...");
// });

// Read file:
// fs.readFile(path.join(__dirname, "/NewFolder", "hello.txt"), "utf8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Rename: - Changing from hello.txt to helloWorld.txt
fs.rename(path.join(__dirname, "/NewFolder", "hello.txt"),
path.join(__dirname, "/NewFolder", "helloWorld.txt"), (err, data) => {
    if(err) throw err;
    console.log("File Renamed");
});