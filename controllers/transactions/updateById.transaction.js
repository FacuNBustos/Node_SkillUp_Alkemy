const { catchAsync } = require("../../helpers/catchAsync");
const { endpointResponse } = require("../../helpers/success");
const { ErrorObject }= require("../../helpers/error");
const { user,transaction,category } = require("../../database/models");
const createHttpError = require("http-errors");

module.exports = {
    updateById: catchAsync(async (req, res, next) => {
      try {
        const newData = req.body;
        const getTransaction = await transaction.findOne({
          where: { id: req.params.id },
        });
        if(!getTransaction){
          throw new ErrorObject(
              "The transaction could not be found", 404
            );
        };

        if (newData.userId) {
          const existUser = await user.findOne({
            where: {
              id: newData.userId,
            },
          });
          if (!existUser) {
            throw new ErrorObject('The user is not valid', 400);
          }
        }

        if (newData.categoryId) {
          const existCategory = await category.findOne({
            where: {
              id: newData.categoryId,
            },
          });
          if (!existCategory) {
            throw new ErrorObject('The category is not valid', 400);
          }
        }

        await transaction.update(req.body, {
          where: { id: req.params.id },
        });

        endpointResponse({
          res,
          code: 200,
          message: 'The transaction was successfully updated',
        });
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error updating transaction] - [transaction - UPDATE]: ${error.message}`,
        )
        next(httpError)
      };
    }),
  };