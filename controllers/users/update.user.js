const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const { user: User, sequelize } = require('../../database/models');
const createHttpError = require('http-errors');

module.exports = {
  run: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      const newData = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        throw new ErrorObject('The user could not be found', 404);
      }

      if (newData.email) {
        const existUserSameEmail = await User.findOne({
          where: {
            email: newData.email,
            id: { [Op.not]: id },
          },
        });
        if (existUserSameEmail) {
          throw new ErrorObject('The email is not valid', 400);
        }
      }

      if (newData.password) {
        req.body.password = bcrypt.hashSync(newData.password, 10);
      }

      const avatar = req.file;
      if (avatar) {
        newData.avatar = avatar.filename;
      }

      user.set(newData);
      await sequelize.transaction(async (t) => {
        await user.save({ transaction: t });
      });

      endpointResponse({
        res,
        code: 200,
        message: 'The user was successfully updated',
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating user] - [user - UPDATE]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
