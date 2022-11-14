const createHttpError = require('http-errors');
const { category: Category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');

module.exports = {
  run: catchAsync(async (req, res, next) => {
    try {
      const categories = await Category.findAll();

      endpointResponse({
        res,
        code: 200,
        status: 'OK',
        message: 'The categories were succesfully retrieved',
        body: categories,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error getting all categories] - [user - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
