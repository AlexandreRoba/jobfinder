/// <reference path='../../typings/express/express.d.ts'/>

import express = require("express");

let app = express();

app.set("views", __dirname + "/../views");
app.set("view engine", "jade");

app.use(express.static(__dirname + "/../../public"));
app.use("/vendor",  express.static(__dirname + "/../../node_modules"));

app.get("*", function(req, res){
    res.render("index");
});


app.listen(process.env.PORT, process.env.IP);
