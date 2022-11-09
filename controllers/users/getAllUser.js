const createHttpError = require('http-errors');
const { user } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');
const { encode } = require('../../config/jwt');

module.exports = {
  getAllUsers: catchAsync(async (req, res, next) => {
    try {
      const response = await user.findAll({
        attributes: ['firstName', 'lastName', 'email', 'createdAt'],
      });

      const jwtResponse = response.map((el) => {
        return encode(el.dataValues);
      });

      endpointResponse({
        res,
        message: 'Users search successfully',
        body: jwtResponse,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error getting all users] - [user - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
