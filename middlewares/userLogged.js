const createHttpError = require('http-errors');
const { request, response } = require('express');
const { verify } = require('../config/jwt');
const db = require('../database/models');
const { ErrorObject } = require('../helpers/error');
const { catchAsync } = require('../helpers/catchAsync');

const userLogged = catchAsync(async (req = request, res = response, next) => {
  const token = req.header('Authorization').split('Bearer ')[1];
  if (!token) {
    throw new ErrorObject('authorization error', 403);
  }
  try {
    const { id } = verify(token);
    const userLogged = await db.user.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });
    if (!userLogged) {
      throw new ErrorObject('user not found', 404);
    }
    req.user = userLogged;
    next();
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `[Error in token verify] - [token - POST]: ${error.message}`
    );
    next(httpError);
  }
});

module.exports = {
  userLogged,
};
