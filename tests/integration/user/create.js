const { describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');
const createUser = require('../../mocks/user/createUser');

const expect = chai.expect;
chai.use(chaiHttp);

describe('createUser', function () {
  it('create user successfully', function (done) {
    chai
      .request(app)
      .post('/users')
      .send(createUser.valid)
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        done();
      });
  });
});

describe('createUser', function () {
  it('fail trying create user with invalid data', function (done) {
    chai
      .request(app)
      .post('/users')
      .send(createUser.invalid)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        done();
      });
  });
});
