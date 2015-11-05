/// <reference path='../../typings/mongoose/mongoose.d.ts'/>
var mongoose = require("mongoose");
var jobSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
});
module.exports = mongoose.model("Job", jobSchema);
//# sourceMappingURL=job.js.map