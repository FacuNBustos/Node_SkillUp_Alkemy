const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const { user, transaction, category } = require('../../database/models');
const createHttpError = require('http-errors');
const { encode } = require('../../config/jwt');

module.exports = {
  getById: catchAsync(async (req, res, next) => {
    const { id } = req.params;

    try {
      const getTransaction = await transaction.findByPk(id, {
        attributes: ['description', 'amount', 'date'],
        include: [
          { model: user, attributes: ['firstName', 'lastName', 'email'] },
          { model: category, attributes: ['name'] },
        ],
      });

      if (!getTransaction) {
        throw new ErrorObject('The transaction could not be found', 404);
      }
      const jwtGetTransaction = encode(getTransaction.dataValues);

      endpointResponse({
        res,
        code: 200,
        body: jwtGetTransaction,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving transaction] - [transaction - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
