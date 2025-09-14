const express = require('express');

const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name : "harsh",
        email : "harsh@gmail.com",
        username: "harsh"
    })
    res.send(createduser);
})

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate(
        {username : "harsh"}, {name: "harsh vandana sharma"}, {new : true})
    res.send(updateduser);
})

app.get("/read", async (req, res)=>{
    let users = await userModel.find();  // we can also use findOne
    res.send(users);
})
app.get("/delete", async(req, res)=>{
    let users = await userModel.findOneAndDelete({username: "Mr"});  // we can also use findOne
    res.send(users);
})

app.listen(3000);
