const createHttpError = require('http-errors');
const { encode } = require('../config/jwt');
const { ErrorObject } = require('../helpers/error');
const { endpointResponse } = require('../helpers/success');

module.exports = {
  tokenGen: async (req, res, next) => {
    try {
      
      let JWTbody;
      if (req.body.length) {
        let pagination = req.body.filter((el) => {
          return el.nextPage || el.prevPage;
        });
       
        if (pagination) {

          const filterArr = req.body.filter((el) => {
            return !el.nextPage && !el.prevPage;
          });

          JWTbody = filterArr.map((el) => {
            return encode(el.dataValues);
          });

          JWTbody.push(pagination);
          
        } else {

          JWTbody = req.body.map((el) => {
            return encode(el.dataValues);
          });

        }
      } else {
        JWTbody = encode(req.body.dataValues);
      }

      endpointResponse({
        res: res,
        code: res.statusCode,
        message: req.body.message,
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
