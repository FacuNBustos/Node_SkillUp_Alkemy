const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');
const { user } = require('../../database/models');
const { ErrorObject } = require('../../helpers/error');
const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
const bcrypt = require('bcrypt');

module.exports = {
  createUsers: catchAsync(async (req, res, next) => {
    try {
      const userEmailExist = await user.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (userEmailExist) {
        throw new ErrorObject('This mail already exists', 404);
      }

      req.body.password = bcrypt.hashSync(req.body.password, 10);
      await user.create(req.body);

      const response = await user.findOne({
        attributes: [
          'firstName',
          'lastName',
          'email',
          'avatar',
          'roleId',
          'createdAt',
        ],
        where: { email: req.body.email },
      });

      const jwtResponse = jwt.sign(
        response.dataValues,
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      endpointResponse({
        res,
        code: 200,
        body: jwtResponse,
        message: 'The user was successfully created',
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating user] - [user - CREATE]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
