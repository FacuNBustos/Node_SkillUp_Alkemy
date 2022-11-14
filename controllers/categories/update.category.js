const createHttpError = require('http-errors');
const { category } = require('../../database/models');
const { catchAsync } = require('../../helpers/catchAsync');
const { ErrorObject } = require('../../helpers/error');
const { endpointResponse } = require('../../helpers/success');

module.exports = {
  put: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const newData = req.body;
      const categoryFound = await category.findByPk(id);
      if (!categoryFound) {
        throw new ErrorObject('The category could not be found', 404);
      }

      await category.update({...newData}, {
        where: {
          id: id
        }
      });

      endpointResponse({
        res,
        code: 200,
        message: 'The category was successfully updated',
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating category] - [category - UPDATE]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
