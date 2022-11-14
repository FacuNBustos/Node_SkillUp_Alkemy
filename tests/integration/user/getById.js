const { describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');
const user_tokens = require('../../mocks/user/userTokens');

const expect = chai.expect;
chai.use(chaiHttp);

describe('getUser', function () {
  it('user get his own information successfully', function (done) {
    chai
      .request(app)
      .get('/users/1')
      .set({ Authorization: `Bearer ${user_tokens.normal}` })
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        done();
      });
  });
  it('regular user fail trying to get someone else information', function (done) {
    chai
      .request(app)
      .get('/users/7')
      .set({ Authorization: `Bearer ${user_tokens.normal}` })
      .end((err, res) => {
        expect(res.status).to.be.equal(403);
        done();
      });
  });
  it('admin user get someone else information successfully', function (done) {
    chai
      .request(app)
      .get('/users/7')
      .set({ Authorization: `Bearer ${user_tokens.admin}` })
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        done();
      });
  });
  it('admin fail trying to get inexistent user information', function (done) {
    chai
      .request(app)
      .get('/users/25')
      .set({ Authorization: `Bearer ${user_tokens.admin}` })
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });
});
