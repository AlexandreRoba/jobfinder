/// <reference path='../../typings/mongoose/mongoose.d.ts'/>
var mongoose = require("mongoose");
var jobSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
});
var Job = (function () {
    function Job() {
    }
    Job.seedJobs = function () {
        var jobModel = mongoose.model("Job", jobSchema);
        jobModel.find({}).exec(function (error, collection) {
            if (collection.length === 0) {
                jobModel.create({ title: "Cook", description: "You will be making bagels" });
                jobModel.create({ title: "Waiter", description: "You will be putting food on people table" });
                jobModel.create({ title: "Programmer", description: "You will be mindlessly typing code" });
                jobModel.create({ title: "Axe maker", description: "We need many axes made.. so many.." });
            }
        });
    };
    return Job;
})();
module.exports = Job;
