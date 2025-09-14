const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const jwt = require('jsonwebtoken');



app.use(cookieParser());



// COOKIE SET
// to set we use res(response)
// to read we use req(request)


// app.get("/", function(req, res){
//     res.cookie("name" , "Harshita");
//     res.send("Done");

// })
// app.get("/read", function(req, res){
//     console.log(req.cookies);
//     res.send("read page");

// })

// BCRYPT HERE

// app.get("/", function(req, res){
//     // bcrypt.genSalt(10, function(err, salt) {
//     //     bcrypt.hash("Polollolololo", salt, function(err, hash) {
//     //         console.log(hash);
//     //     });
//     // });
//     res.send("working");
// })

// app.get("/", function(req, res){
//     bcrypt.compare("Polollolololo", "$2b$10$hk7pKDiduI8kdc05p8PUjufRzXA8uveNOJCGtbeo5io8L7PGEPP3O" , function(err, result){
//         res.cookie("token", token);
//         res.send("done"); 
//     });
//     // res.redirect("/");

// })

// JWT CONCEPT
 
app.get("/", function(req, res){
    let token =  jwt.sign({email : "harsh@gmail.com"}, "secret");
    res.cookie("token",token);
    res.send("done") 
})

app.get("/read", function(req, res){
    // console.log(req.cookies);

    let data = jwt.verify(req.cookies.token, "secret");

    console.log(data);
})
app.listen(3000);