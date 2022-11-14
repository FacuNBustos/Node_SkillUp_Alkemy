const { describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');
const editUser = require('../../mocks/user/editUser');
const user_tokens = require('../../mocks/user/userTokens');

const expect = chai.expect;
chai.use(chaiHttp);

describe('updateUser', function () {
  it('user edit his information successfully', function (done) {
    chai
      .request(app)
      .put('/users/1')
      .set({ Authorization: `Bearer ${user_tokens.normal}` })
      .send(editUser.valid)
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        done();
      });
  });
  it('user fail trying to edit with invalid data', function (done) {
    chai
      .request(app)
      .put('/users/1')
      .set({ Authorization: `Bearer ${user_tokens.normal}` })
      .send(editUser.invalid)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        done();
      });
  });
  it('normal user fail trying to edit someone else data', function (done) {
    chai
      .request(app)
      .put('/users/4')
      .set({ Authorization: `Bearer ${user_tokens.normal}` })
      .send(editUser.valid)
      .end((err, res) => {
        expect(res.status).to.be.equal(403);
        done();
      });
  });
});
