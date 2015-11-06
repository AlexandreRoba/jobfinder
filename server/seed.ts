import Db = require("./db");
import Job = require("./models/job");

class Seed {

    private _db:Db;

    constructor(db:Db) {
        this._db = db;
    }

    jobs():void {
        if (this._db.isOpen) {
            Job.find({}).exec((error, collection) => {
                if (collection.length === 0) {
                    Job.create({title: "Cook", description: "You will be making bagels"});
                    Job.create({title: "Waiter", description: "You will be putting food on people table"});
                    Job.create({title: "Programmer", description: "You will be mindlessly typing code"});
                    Job.create({title: "Axe maker", description: "We need many axes made.. so many.."});
                }
            });
        }
    }

}

export = Seed;
