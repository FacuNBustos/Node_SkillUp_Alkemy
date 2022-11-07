const createHttpError = require('http-errors');
const { transaction } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');
const { ErrorObject } = require('../../helpers/error');

// example of a controller. First call the service, then build the controller method
module.exports = {
  deleteOne: catchAsync(async (req, res, next) => {
    try {
      const transactionSave = await transaction.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!transactionSave) {
        throw new ErrorObject('Transaction could not be found');
      }
      await transaction.destroy({
        where: {
          id: req.params.id,
        },
      });

      endpointResponse({
        res,
        code: 200,
        message: 'Transaction has been deleted',
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error at delete transaction] - [transactions - DELETE] ${error.message}`
      );
      next(httpError);
    }
  }),
};
