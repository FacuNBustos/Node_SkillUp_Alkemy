const app = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { describe, it} = require("mocha");
const { assert } = require("chai");
const { category } = require("../../../database/models");
const createCategoryMock = require("../../mocks/category/createCategory.mock");

chai.use(chaiHttp)

describe("Testing category routes - Create", () => {

    const sut = app;
    var categoryMock;

    beforeEach(() => {
        categoryMock = sinon.stub(category, "create");
    });
    afterEach(() => {
        categoryMock.restore();
    })

    it("Should be happy path when the whole payload is sent", (done) => {
        categoryMock.returns({...createCategoryMock, id: 1});
        chai.request(sut)
        .post("/categories")
        .send(createCategoryMock)
        .end((err, res) => {
            payload = res.body;
            assert.equal(payload.status, "Created");
            assert.equal(payload.code, 201);
            assert.equal(payload.message, "The category was succesfully created");
            assert.equal(payload.body.name, createCategoryMock.name);
            assert.equal(payload.body.description, createCategoryMock.description);
            assert.isNumber(payload.body.id);
            assert.isTrue(categoryMock.alwaysCalledWith(createCategoryMock));
            done();
        })
    });

    it("Should be happy path when description is not sent", (done) => {
        categoryMock.returns({...createCategoryMock, description: "", id: 1})
        chai.request(sut)
        .post("/categories")
        .send({...createCategoryMock, description: ""})
        .end((err, res) => {
            payload = res.body;
            assert.equal(payload.status, "Created");
            assert.equal(payload.code, 201);
            assert.equal(payload.message, "The category was succesfully created");
            assert.equal(payload.body.name, createCategoryMock.name);
            assert.equal(payload.body.description, "");
            assert.isNumber(payload.body.id);
            assert.isTrue(categoryMock.alwaysCalledWith({...createCategoryMock, description: ""}));
            done()
        })
    });

    it("Should be 400 when name is null", (done) => {
        chai.request(sut)
        .post("/categories")
        .send({...createCategoryMock, name: ""})
        .end((err, res) => {
            assert.equal(res.status, 400);
            done();
        })
    });
})