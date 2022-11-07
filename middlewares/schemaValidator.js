const { checkSchema, validationResult } = require('express-validator');
const createHttpError = require('http-errors');
const { catchAsync } = require('../helpers/catchAsync');

function schemaValidator(schema) {
  validator = [
    checkSchema(schema),
    catchAsync(async (req, _res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const listErrors = errors.array().map((error) => {
          return `${error.param} : ${error.msg} `;
        });

        const httpError = createHttpError(
          400,
          `[ Error retrieving schema validator - [ Path : ${req.path} ] { Errors : [${listErrors}] } ]`
        );
        next(httpError);
      }
      next();
    }),
  ];

  return validator;
}

module.exports = schemaValidator;
