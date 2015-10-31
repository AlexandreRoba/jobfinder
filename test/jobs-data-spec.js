/// <reference path='../typings/mocha/mocha.d.ts'/>
/// <reference path='../typings/chai/chai.d.ts'/>
/// <reference path='../typings/mongoose/mongoose.d.ts'/>
var chai = require("chai");
var mongoose = require("mongoose");
var job = require("../server/models/Job");
var expect = chai.expect;
describe("get jobs", function () {
    it("Should never be empty because jobs are seeded", function (done) {
        mongoose.connect("mongodb://jobfinderuser:password123@ds045714.mongolab.com:45714/heroku_8pxnb825", function () {
            job.find({}).exec(function (error, jobList) {
                expect(jobList.length).to.be.at.least(1);
                done();
            });
        });
    });
});
