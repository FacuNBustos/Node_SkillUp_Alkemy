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
<<<<<<< HEAD
        `[Error retrieving index] - [index - GET]: ${error.message}`,
=======
        `[Error getting all users] - [user - GET]: ${error.message}`,
>>>>>>> 215ff2239663a2fd01f72554d48ac3391e8a6c1e
      )
      next(httpError);
    }
  }),
}
