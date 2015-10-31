/// <reference path='../typings/mongoose/mongoose.d.ts'/>
var job = require("./models/job");
var Db = (function () {
    function Db() {
    }
    Db.seedJobs = function () {
        job.find({}).exec(function (error, collection) {
            if (collection.length === 0) {
                job.create({ title: "Cook", description: "You will be making bagels" });
                job.create({ title: "Waiter", description: "You will be putting food on people table" });
                job.create({ title: "Programmer", description: "You will be mindlessly typing code" });
                job.create({ title: "Axe maker", description: "We need many axes made.. so many.." });
            }
        });
    };
    return Db;
})();
module.exports = Db;
