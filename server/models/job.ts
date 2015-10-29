/// <reference path='../../typings/mongoose/mongoose.d.ts'/>

import mongoose = require("mongoose");


let jobSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

class Job {
    static seedJobs(): void {

        let jobModel = mongoose.model("Job", jobSchema);

        jobModel.find({}).exec((error, collection) => {
            if (collection.length === 0) {
                jobModel.create({title: "Cook", description: "You will be making bagels"});
                jobModel.create({title: "Waiter", description: "You will be putting food on people table"});
                jobModel.create({title: "Programmer", description: "You will be mindlessly typing code"});
                jobModel.create({title: "Axe maker", description: "We need many axes made.. so many.."});
            }
        });
    }
}

export = Job ;

