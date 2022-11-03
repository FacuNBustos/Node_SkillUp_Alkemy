const { catchAsync } = require("../../helpers/catchAsync");
const { endpointResponse } = require("../../helpers/success");
const { ErrorObject }= require("../../helpers/error");
const { user, transaction } = require("../../database/models");
const createHttpError = require("http-errors");

module.exports = {
    run: catchAsync(async (req, res, next) => {
      try {
        const userSaved = await user.findOne({
            where: {
                id : req.params.id
            }
        });
        if (!userSaved) {
            throw new ErrorObject("The user could not be found", 404);
        };

        await user.destroy({
            where: {
                id: req.params.id
            }
        });
        await transaction.destroy({
          where: {
            userId: req.params.id
          }
        });

        endpointResponse({
          res,
          code: 200,
          message: 'The user was successfully deleted',
        })
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error removing user] - [user - DELETE]: ${error.message}`,
        )
        next(httpError)
      }
    }),
  }
  