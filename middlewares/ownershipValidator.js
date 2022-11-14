const createHttpError = require('http-errors');
const { catchAsync } = require('../helpers/catchAsync');
const { ErrorObject } = require('../helpers/error');
const { transaction: Transaction, user: User } = require('../database/models/');

module.exports = {
  ownershipValidator: catchAsync(async (req, res, next) => {
    try {
      const { user } = req;
      const { id } = req.params;
      const controller = req.originalUrl.split(/[/\?]/)[1];

      switch (controller) {
        case 'users':
          //users with roleId 1 are admin users
          if (id !== user.id && user.roleId !== 1) {
            throw new ErrorObject('Authorization error', 403);
          }
          break;
        case 'transactions':
          const transaction = await Transaction.findByPk(id);
          console.log(transaction.dataValues.userId, user.id);
          if (transaction.userId !== user.id && user.roleId !== 1) {
            throw new ErrorObject('Authorization error', 403);
          }
      }
      next();
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error authorizing user] : ${error.message}`
      );
      next(httpError);
    }
  }),
};
