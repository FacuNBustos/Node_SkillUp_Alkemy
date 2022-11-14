const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const { user: User, transaction } = require('../../database/models');
const createHttpError = require('http-errors');
const { encode } = require('../../config/jwt');

module.exports = {
  getid: catchAsync(async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: { id: req.params.id },
        attributes: ['firstName', 'lastName', 'email', 'createdAt'],
      });
      if (!user) {
        throw new ErrorObject('The user could not be found', 404);
      }
      req.body = user;
      req.message = 'Users search successfully';

      next();
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
