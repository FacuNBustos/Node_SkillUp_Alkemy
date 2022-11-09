const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const { user, transaction } = require('../../database/models');
const createHttpError = require('http-errors');
const jwt = require('jsonwebtoken');

module.exports = {
  getid: catchAsync(async (req, res, next) => {
    try {
      const response = await user.findOne({
        where: { id: req.params.id },
        attributes: ['firstName', 'lastName', 'email', 'createdAt'],
      });

      const jwtResponse = jwt.sign(
        response.dataValues,
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

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
