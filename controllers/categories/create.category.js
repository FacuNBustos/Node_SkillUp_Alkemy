const createHttpError = require('http-errors');
const { category: Category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');

module.exports = {
  run: catchAsync(async (req, res, next) => {
    try {
      const categoryData = req.body;
      const newCategory = await Category.create(categoryData);

      endpointResponse({
        res,
        code: 201,
        status: 'Created',
        message: 'The category was successfully created',
        body: newCategory,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating category] - [category - POST]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
