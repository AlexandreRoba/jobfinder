/// <reference path='../typings/mongoose/mongoose.d.ts'/>
import mongoose = require("mongoose");
import job = require("./models/job");

class Db {

    constructor() {
        this.isOpen = false;
    }

    public isOpen:boolean;

    private processStopHandler = function () {
        mongoose.connection.close(() => {
            process.exit(0);
        });
    };

    open(connectionString:string, callback?:(err:any) => void):void {
        mongoose.connect(connectionString, (err)=> {
            if (err) {
                this.isOpen = false;
                if (callback) {
                    callback(err);
                }
            } else {
                this.isOpen = true;
                process.on("SIGINT", this.processStopHandler);
                if (callback) {
                    callback(null);
                }
            }
        });

    }

    close(callback?:(err:any)=>void):void {
        mongoose.disconnect((err)=> {
            if (err) {
                if (callback) {
                    callback(err);
                }
            } else {
                process.removeListener("SIGINT", this.processStopHandler);
                this.isOpen = false;
                if (callback) {
                    callback(null);
                }
            }
        });
    }

    seedJobs():void {
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
