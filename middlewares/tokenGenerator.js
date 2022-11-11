const createHttpError = require('http-errors');
const { encode } = require('../config/jwt');
const { ErrorObject } = require('../helpers/error');
const { endpointResponse } = require('../helpers/success');

module.exports = {
  tokenGen: async (newResponse, req, res, next) => {
    try {
      let JWTbody;

      if (newResponse.body.length) {
        JWTbody = newResponse.body.map((el) => {
          return encode(el.dataValues);
        });
      } else {
        JWTbody = encode(newResponse.body.dataValues);
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
