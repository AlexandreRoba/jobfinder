/// <reference path='../../typings/mongoose/mongoose.d.ts'/>
var mongoose = require("mongoose");
var jobSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
});
var job = mongoose.model("JobModel", jobSchema);
module.exports = job;
