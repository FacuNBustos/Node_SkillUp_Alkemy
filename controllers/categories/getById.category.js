const createHttpError = require('http-errors');
const { category } = require('../../database/models');
const { catchAsync } = require('../../helpers/catchAsync');
const { ErrorObject } = require('../../helpers/error');
const { endpointResponse } = require('../../helpers/success');

module.exports = {
  run: catchAsync(async (req, res, next) => {
    try {
      const categorySaved = await category.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!categorySaved) {
        throw new ErrorObject('The category could not be found', 404);
      }

      endpointResponse({
        res,
        message: 'Category search successfully',
        body: categorySaved,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error seaching by id category] - [category - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
