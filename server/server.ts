/// <reference path='../typings/express/express.d.ts'/>
/// <reference path='../typings/mongoose/mongoose.d.ts'/>

import express = require("express");
import Db = require("./db");
import job =  require("./models/job");

let app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jade");

app.use(express.static(__dirname + "/../public"));
app.use("/vendor",  express.static(__dirname + "/../node_modules"));

app.get("/api/jobs", (req, res) => {
   job.find({}).exec((error, collection) => {
       res.send(collection);
   });
});

app.get("*", function(req, res){
    res.render("index");
});

let port = process.env.PORT || 3000;
let ip = process.env.IP || "0.0.0.0";


let connectionString = process.env.MONGOLAB_URI || "mongodb://jobfinderuser:password123@ds045714.mongolab.com:45714/heroku_8pxnb825";
let db = new Db();

db.connect(connectionString);
db.seedJobs();

console.log("Mongo Connection string is:" + connectionString);
console.log("Server will listen on PORT:" + port );
console.log("Server will listen at IP:" + ip );

app.listen(port, ip, () => {
    console.log("listening on port " + port);
});
