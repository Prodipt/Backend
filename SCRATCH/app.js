const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("SCRATCH");
})

app.listen(3000);