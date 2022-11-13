const { describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');
const user_tokens = require('../../mocks/user/userTokens');

const expect = chai.expect;
chai.use(chaiHttp);

describe('deleteUser', function () {
  it('regular user delete himself', function (done) {
    chai
      .request(app)
      .delete('/users/6')
      .set({ Authorization: `Bearer ${user_tokens.normal_delete}` })
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        done();
      });
  });
  it('regular user fail trying to get delete someone else information', function (done) {
    chai
      .request(app)
      .delete('/users/2')
      .set({ Authorization: `Bearer ${user_tokens.normal}` })
      .end((err, res) => {
        expect(res.status).to.be.equal(403);
        done();
      });
  });
  it('admin user delete someone else information successfully', function (done) {
    chai
      .request(app)
      .delete('/users/2')
      .set({ Authorization: `Bearer ${user_tokens.admin}` })
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        done();
      });
  });
  it('admin user fail trying to delete inexistent user', function (done) {
    chai
      .request(app)
      .delete('/users/40')
      .set({ Authorization: `Bearer ${user_tokens.admin}` })
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });
});
