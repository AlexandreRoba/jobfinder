/// <reference path='../typings/mongoose/mongoose.d.ts'/>

import job = require("./models/job");

class Db {
    static seedJobs(): void {
        job.find({}).exec((error, collection) => {
            if (collection.length === 0) {
                job.create({title: "Cook", description: "You will be making bagels"});
                job.create({title: "Waiter", description: "You will be putting food on people table"});
                job.create({title: "Programmer", description: "You will be mindlessly typing code"});
                job.create({title: "Axe maker", description: "We need many axes made.. so many.."});
            }
        });
    }
}

export = Db;
