const createHttpError = require('http-errors');
const { user } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');

module.exports = {
  getAllUsers: catchAsync(async (req, res, next) => {
    try {
      const response = await user.findAll({
        attributes: [
          'firstName', 
          'lastName', 
          'email', 
          'createdAt'
          ]
      });
      endpointResponse({
        res,
        message: 'Users search successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError);
    }
  }),
}
