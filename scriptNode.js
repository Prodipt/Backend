// fs module ko nikala aur fs const me daal diya
// we are using callback API
const fs = require('fs');

// writefile
// appendfile
// copyfile
// rename
// unlink

// fs.writeFile(file, data[, options], callback)

// fs.writeFile("hey.txt", "Hey kaise ho", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.appendFile("hey.txt", " Are you?", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt", " Yes.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.copyFile(" Yes.txt", "./copy2/chacha", function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// })
// fs.unlink(" Yes.txt",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// fs.rm("./copy", {recursive : true},function(err){
//     if(err) console.log(err.message );
//     else console.log("Removed");
// })

// fs.readFile("example.txt", "utf8", function(err, data){
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File contents:", data);
// });


// ****HTTP***

// const http = require("http");

// const server  = http.createServer(function(req, res){
//     res.end("Hello Duniya");
// })

// server.listen(3000);


// NPM understanding
// node package manager

// It comes automatically with Node.js (no separate install).
// It’s used to install, share, and manage packages (libraries) in your JavaScript/Node.js projects.

// installing and uninstalling anything basics & advanced
// dependencies = packages and package ki dependencies
// devdependencies - aise packages jo sirf development me kaam aayege par jab app ban jaayega aur upload ho jaayega tab hum in packages ko use nahi krrhe honge

// scripts - understanding default scripts PATH and custom scripts

// kai bar aap koi script chalate ho aur uss script me ye command likhte ho
// npm start
// npm run dev
// npm run concurrent

console.log("Hey Hey");