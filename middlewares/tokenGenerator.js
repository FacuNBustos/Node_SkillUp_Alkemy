const createHttpError = require('http-errors');
const { encode } = require('../config/jwt');
const { ErrorObject } = require('../helpers/error');
const { endpointResponse } = require('../helpers/success');

module.exports = {
  tokenGen: async (newResponse, req, res, next) => {
    try {
      let JWTbody;

      let pagination = newResponse.body.filter((el) => {
        return el.nextPage || el.prevPage;
      });

      if (pagination) {
        const filterArr = newResponse.body.filter((el) => {
          return !el.nextPage && !el.prevPage;
        });

        JWTbody = filterArr.map((el) => {
          return encode(el.dataValues);
        });

        JWTbody.push(pagination);

      } else {

        if (newResponse.body.length) {
          JWTbody = newResponse.body.map((el) => {
            return encode(el.dataValues);
          });
        } else {
          JWTbody = encode(newResponse.body.dataValues);
        }
        
      }
      endpointResponse({
        res: newResponse.res,
        code: newResponse.code,
        message: newResponse.message,
        body: JWTbody,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[ Error generate token ] : ${error.message}`
      );
      next(httpError);
    }
  },
};
