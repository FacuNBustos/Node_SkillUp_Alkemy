const createHttpError = require('http-errors');
const { user } = require('../../database/models');
const jwt = require('jsonwebtoken');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');

module.exports = {
  getAllUsers: catchAsync(async (req, res, next) => {
    try {
      const response = await user.findAll({
        attributes: ['firstName', 'lastName', 'email', 'createdAt'],
      });

      const jwtResponse = response.map((el) => {
        return jwt.sign(el.dataValues, process.env.JWT_SECRET, {expiresIn: '1h'});
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
