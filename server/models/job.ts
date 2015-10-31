/// <reference path='../../typings/mongoose/mongoose.d.ts'/>

import mongoose = require("mongoose");


let jobSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

let job = mongoose.model("JobModel", jobSchema);

export = job;
