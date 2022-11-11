const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { describe, it } = require("mocha");
const { assert } = require("chai");
const { category } = require("../../../database/models");

chai.use(chaiHttp)

describe("Testing category routes - Get all and by ID", () => {

    const sut = app;
    var categoryMock;
    
    beforeEach(() => {
        categoryMock = sinon.stub(category, "findAll");
    });
    afterEach(() => {
        categoryMock.restore();
    });

    it("Should be happy path when get by id", (done) => {
        const id = 1
        categoryMock.returns("payload");
        chai.request(sut)
        .get(`/categories/${id}`)
        .end((err, res) => {
            payload = res.body;
            assert.equal(payload.status, true);
            assert.equal(payload.code, 200);
            assert.equal(payload.message, "Category search successfully");
            done();
        })
    });

    it("Should be 404 when category id does not exist", (done) => {
        const id = 1;
        categoryMock.returns(null);
        chai.request(sut)
        .get(`/categories/${id}`)
        .end((err, res) => {
            assert.equal(res.status, 404);
            done();
        })
    });

    it("Should be 400 when incorrect syntax of category id", (done) => {
        const id = "error"
        chai.request(sut)
        .get(`/categories/${id}`)
        .end((err, res) =>  {
            assert.equal(res.status, 400);
            done();
        })
    });
})