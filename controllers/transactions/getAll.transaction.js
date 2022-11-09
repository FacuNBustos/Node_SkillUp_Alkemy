const createHttpError = require('http-errors');
const { transaction, user, category } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');
const { encode } = require('../../config/jwt');

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const { query: userId, page} = req.query;

      let response = await transaction.findAll({
        attributes: ['id', 'description', 'amount', 'date'],
        include: [
          {
            attributes: ['firstName', 'lastName', 'email'],
            model: user,
          },
          {
            attributes: ['name'],
            model: category,
          },
        ],
        where: {
          ...(userId && { '$user.id$': userId }),
        },
        limit: (Number(page) >= 1)? Number(page)*10 : 100
      });
      
      let jwtResponse = response.map((el) => {
        return encode(el.dataValues);
      });

      if (Number(page) >= 1) {
        let pageLenght = page*10;
        jwtResponse = jwtResponse.slice(pageLenght-10, pageLenght);

        response.push({
          previous: (Number(page) > 1)? `http://localhost:3000/transactions${req.url.replace(`page=${page}`, `page=${Number(page)-1}`)}` : null,
          next: (jwtResponse.length == 10)? `http://localhost:3000/transactions${req.url.replace(`page=${page}`, `page=${Number(page)+1}`)}`: null
        })
      };

      endpointResponse({
        res,
        message: 'transactions retrieved successfully',
        body: jwtResponse,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving transactions] - [transaction - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
