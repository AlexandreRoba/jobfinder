/// <reference path='../typings/express/express.d.ts'/>
/// <reference path='../typings/mongoose/mongoose.d.ts'/>
var express = require("express");
var mongoose = require("mongoose");
var Job = require("./models/Job");
var app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.use(express.static(__dirname + "/../public"));
app.use("/vendor", express.static(__dirname + "/../node_modules"));
app.get("/api/jobs", function (req, res) {
    mongoose.model("Job").find({}).exec(function (error, collection) {
        res.send(collection);
    });
});
app.get("*", function (req, res) {
    res.render("index");
});
var port = process.env.PORT || 3000;
var ip = process.env.IP || "127.0.0.1";
mongoose.connect("mongodb://jobfinderuser:password123@ds045714.mongolab.com:45714/jobfinder");
var con = mongoose.connection;
con.once("open", function () {
    console.log("Connected to mongodb successfully!");
    Job.seedJobs();
});
console.log("Server will listen on PORT:" + port);
console.log("Server will listen at IP:" + ip);
app.listen(port, ip, function () {
    console.log("listening on port " + port);
});
