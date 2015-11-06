var Job = require("./models/job");
var Seed = (function () {
    function Seed(db) {
        this._db = db;
    }
    Seed.prototype.jobs = function () {
        if (this._db.isOpen) {
            Job.find({}).exec(function (error, collection) {
                if (collection.length === 0) {
                    Job.create({ title: "Cook", description: "You will be making bagels" });
                    Job.create({ title: "Waiter", description: "You will be putting food on people table" });
                    Job.create({ title: "Programmer", description: "You will be mindlessly typing code" });
                    Job.create({ title: "Axe maker", description: "We need many axes made.. so many.." });
                }
            });
        }
    };
    return Seed;
})();
module.exports = Seed;
