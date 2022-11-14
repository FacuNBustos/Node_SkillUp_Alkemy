const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { describe, it } = require("mocha");
const { assert } = require("chai");
const { category, transaction } = require("../../../database/models");

chai.use(chaiHttp)

describe("Testing category routes - Delete", () => {

    const sut = app;
    var destroyCategoryMock; 
    var findByPkCategoryMock; 
    var transactionMock;

    beforeEach(() => {
        destroyCategoryMock = sinon.stub(category, "destroy");
        findByPkCategoryMock = sinon.stub(category, "findByPk");
        transactionMock = sinon.stub(transaction, "update");
    });
    afterEach(() => {
        destroyCategoryMock.restore();
        findByPkCategoryMock.restore()
        transactionMock.restore();
    });

    it("Should be happy path when delete category", (done) => {
        findByPkCategoryMock.returns("saved category payload");
        transactionMock.returns(null);
        destroyCategoryMock.returns(null);
        const id = 1;

        chai.request(sut)
        .delete(`/categories/${id}`)
        .end((err, res) => {
            payload = res.body;
            assert.equal(payload.status, true);
            assert.equal(payload.code, 200);
            assert.equal(payload.message, "The category was successfully deleted");
            findByPkCategoryMock.reset();
            transactionMock.reset();
            done();
        })
    });

    it("Should be 404 when the category is not found by its id", (done) => {
        findByPkCategoryMock.returns(null);
        const id = 1;

        chai.request(sut)
        .delete(`/categories/${id}`)
        .end((err, res) => {
            assert.equal(res.status, 404);
            done();
        })
    });

    it("Should be 400 when id syntax error occurs", (done) => {
        const id = "error";

        chai.request(sut)
        .delete(`/categories/${id}`)
        .end((err, res) => {
            assert.equal(res.status, 400);
            done();
        })
    });
})