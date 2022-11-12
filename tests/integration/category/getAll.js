const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { describe, it } = require("mocha");
const { assert } = require("chai");
const { category } = require("../../../database/models");

chai.use(chaiHttp)

describe("Testing category routes - Get All", () => {

    const sut = app;
    var categoryMock;

    beforeEach(() => {
        categoryMock = sinon.stub(category, "findAll");
    });
    afterEach(() => {
        categoryMock.restore();
    });

    it("Should be happy path when get all", (done) => {
        categoryMock.returns("payload");
        chai.request(sut)
        .get("/categories")
        .end((err, res) => {
            payload = res.body;
            assert.equal(payload.status, "OK");
            assert.equal(payload.code, 200);
            assert.equal(payload.message, "The categories were succesfully retrieved");
            done();
        })
    });
})