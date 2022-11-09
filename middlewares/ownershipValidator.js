const createHttpError = require('http-errors');
const { catchAsync } = require('../helpers/catchAsync');
const { ErrorObject } = require('../helpers/error');

module.exports = {
  ownershipValidator: catchAsync(async (req, res, next) => {
    try {
      const { user } = req;
      const { id } = req.params;

      //users with roleId 1 are admin users
      if (id !== user.id && user.roleId !== 1) {
        throw new ErrorObject('Authorization error', 403);
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
