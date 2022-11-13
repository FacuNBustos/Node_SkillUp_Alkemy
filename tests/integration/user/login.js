const { describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');
const editUser = require('../../mocks/user/editUser');
const user_credentials = require('../../mocks/user/loginUser');

const expect = chai.expect;
chai.use(chaiHttp);

describe('login', function () {
  it('user sign in successfully', function (done) {
    chai
      .request(app)
      .post('/auth/login')
      .send(user_credentials.valid)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        done();
      });
  });
  it('user try to sign in with wrong credentials', function (done) {
    chai
      .request(app)
      .post('/auth/login')
      .send(user_credentials.invalid)
      .end((err, res) => {
        expect(res.status).to.be.equal(403);
        done();
      });
  });
});
