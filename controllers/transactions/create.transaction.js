const createHttpError = require('http-errors');
const { transaction } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');
const { ErrorObject } = require('../../helpers/error');
const { user } = require('../../database/models');
const { category } = require('../../database/models');
const { encode } = require('../../config/jwt');
// example of a controller. First call the service, then build the controller method
module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const users = await user.findOne({
        where: {
          id: req.body.userId,
        },
      });
      console.log(users);
      if (!users) {
        throw new ErrorObject('This user already not exists', 404);
      }
      const categories = await category.findOne({
        where: {
          id: req.body.categoryId,
        },
      });
      if (!categories) {
        throw new ErrorObject('This category already not exists', 404);
      }

      const { description, amount, date, userId, categoryId } = req.body;
      const newTransaction = await transaction.create({
        description,
        amount,
        date,
        userId,
        categoryId,
      });
      if (!newTransaction) {
        return next(
          new createHttpError.InternalServerError(
            ErrorObject('Error creating transaction')
          )
        );
      }
      req.body = newTransaction
      res.statusCode = 201
      req.body.message = 'The transaction was successfully created'
      
      next();
      
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,

        `[Error updating transaction] - [transaction - CREATE]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
