// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000)

const express = require("express");


const app = express();

// app.use(function(req, res, next){
//     console.log('Middleware chala');
//     next();
// });

// app.use(function(req, res, next){
//     console.log('Middleware chala dusri bar');
//     next();
// });

app.use(express.json());            // json based data Readable format
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.send("champion koi");
})


app.get("/about", function(req, res){
    res.send("HERAA koi");
})

// app.get("/profile", function(req, res, next){
//     return next(new Error("Something went Wrong"));
// })
// app.get("/profile", function(req, res){
//     res.send("champion tum");
// })


app.use(function(err, req, res, next){
    console.log(err.stack)
    res.status(500).send('Something went wrong, We dont have f*cking idea about it!')
})

app.listen(3000);

// Middleware


// const express = require("express");
// const app = express();

// app.get("/profile", function(req, res, next) {
//     next(new Error("Something went Wrong")); // error passed
//     console.log("This still runs after next(err)!"); // runs anyway
//     res.send("Trying to send response after error 😅"); // ❌ will cause issue
// });

// // Error handling middleware
// app.use(function(err, req, res, next) {
//     console.log("Error Handler:", err.message);
//     res.status(500).send("Something went wrong in the server!");
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));