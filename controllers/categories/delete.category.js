const createHttpError = require('http-errors');
const { category, transaction } = require('../../database/models');
const { catchAsync } = require('../../helpers/catchAsync');
const { ErrorObject } = require('../../helpers/error');
const { endpointResponse } = require('../../helpers/success');

module.exports = {
  delete: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const categoryExists = await category.findByPk(id);
      if (!categoryExists) {
        throw new ErrorObject('The category could not be found', 404);
      }
      await transaction.update(
        { categoryId: null },
        { where: { categoryId: id } }
      );
      await category.destroy({
        where: {
          id: id
        },
        force: true,
      });
      endpointResponse({
        res,
        code: 200,
        message: 'The category was successfully deleted',
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting category] - [category - DELETE]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
