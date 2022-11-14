const { describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');
const user_tokens = require('../../mocks/user/userTokens');

const expect = chai.expect;
chai.use(chaiHttp);

describe('getUsers', function () {
  it('get all users successfully', function (done) {
    chai
      .request(app)
      .get('/users')
      .set({ Authorization: `Bearer ${user_tokens.normal}` })
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        done();
      });
  });
});
