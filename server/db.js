/// <reference path='../typings/mongoose/mongoose.d.ts'/>
var mongoose = require("mongoose");
var job = require("./models/job");
var Db = (function () {
    function Db() {
        this.processStopHandler = function () {
            mongoose.connection.close(function () {
                process.exit(0);
            });
        };
        this.isOpen = false;
    }
    Db.prototype.open = function (connectionString, callback) {
        var _this = this;
        mongoose.connect(connectionString, function (err) {
            if (err) {
                _this.isOpen = false;
                if (callback) {
                    callback(err);
                }
            }
            else {
                _this.isOpen = true;
                process.on("SIGINT", _this.processStopHandler);
                if (callback) {
                    callback(null);
                }
            }
        });
    };
    Db.prototype.close = function (callback) {
        var _this = this;
        mongoose.disconnect(function (err) {
            if (err) {
                if (callback) {
                    callback(err);
                }
            }
            else {
                process.removeListener("SIGINT", _this.processStopHandler);
                _this.isOpen = false;
                if (callback) {
                    callback(null);
                }
            }
        });
    };
    Db.prototype.seedJobs = function () {
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
