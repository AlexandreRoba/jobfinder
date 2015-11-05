/// <reference path='../../typings/mongoose/mongoose.d.ts'/>

import mongoose = require("mongoose");


let jobSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

export = mongoose.model("Job", jobSchema);

