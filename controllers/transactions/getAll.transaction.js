const createHttpError = require('http-errors');
const { transaction, user, category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const { query: userId } = req.query;

      const response = await transaction.findAll({
        attributes: ['id', 'description', 'amount', 'date'],
        include: [
          {
            attributes: ['firstName', 'lastName', 'email'],
            model: user,
          },
          {
            attributes: ['name'],
            model: category,
          },
        ],
        where: {
          ...(userId && { '$user.id$': userId }),
        },
      });

      endpointResponse({
        res,
        message: 'transactions retrieved successfully',
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving transactions] - [transaction - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
