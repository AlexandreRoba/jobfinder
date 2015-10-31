/// <reference path='../typings/mocha/mocha.d.ts'/>
/// <reference path='../typings/chai/chai.d.ts'/>
/// <reference path='../typings/mongoose/mongoose.d.ts'/>

import chai = require("chai");
import mongoose = require("mongoose");
import job =  require("../server/models/Job");

var expect = chai.expect;


describe("get jobs", () => {
    it("Should never be empty because jobs are seeded",(done)=> {
        mongoose.connect("mongodb://jobfinderuser:password123@ds045714.mongolab.com:45714/heroku_8pxnb825", () => {
            job.find({}).exec((error, jobList) => {
                expect(jobList.length).to.be.at.least(1);
                done();
            });
        });
    });
});