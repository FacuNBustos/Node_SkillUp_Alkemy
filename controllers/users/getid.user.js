const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const { user, transaction } = require('../../database/models');
const createHttpError = require('http-errors');
const { encode } = require('../../config/jwt');

module.exports = {
  getid: catchAsync(async (req, res, next) => {
    try {
      const response = await user.findOne({
        where: { id: req.params.id },
        attributes: ['firstName', 'lastName', 'email', 'createdAt'],
      });

      const jwtResponse = encode(response.dataValues);

      endpointResponse({
        res,
        message: 'Users search successfully',
        body: jwtResponse,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
