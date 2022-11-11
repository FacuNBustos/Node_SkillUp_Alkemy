const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { describe, it } = require("mocha");
const { assert } = require("chai");
const { category } = require("../../../database/models");
const updateCategoryMock = require("../../mocks/category/updateCategory.mock");

chai.use(chaiHttp)

describe("Testing category routes - Update", () => {

    const sut = app;
    var findByPkCategoryMock;
    var updCategoryMock; 

    beforeEach(() => {
        findByPkCategoryMock = sinon.stub(category, "findByPk");
        updCategoryMock = sinon.stub(category, "update");
    });
    afterEach(() => {
        findByPkCategoryMock.restore();
        updCategoryMock.restore();
    });

    it("should be happy path when update category", (done) => {
        findByPkCategoryMock.returns("saved category payload");
        chai.request(sut)
        .put(`/categories/${updateCategoryMock.id}`)
        .send(updateCategoryMock)
        .end((err, res) => {
            payload = res.body;
            assert.equal(payload.status, true);
            assert.equal(payload.code, 200);
            assert.equal(payload.message, "The category was successfully updated");
            done();
        })
    });

    it("should be 404 when the category is not found by its id", (done) => {
        findByPkCategoryMock.returns(null);
        chai.request(sut)
        .put(`/categories/${updateCategoryMock.id}`)
        .send(updateCategoryMock)
        .end((err, res) => {
            assert.equal(res.status, 404);
            done();
        })
    });

    it("Should be 400 when id syntax error occurs ", (done) => {
        const id = "error";
        chai.request(sut)
        .put(`/categories/${id}`)
        .send({...updateCategoryMock})
        .end((err, res) => {
            assert.equal(res.status, 400);
            done();
        })
    });
})
