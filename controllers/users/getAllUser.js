const createHttpError = require('http-errors');
const { user } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');
const { Op } = require('sequelize');

module.exports = {
  getAllUsers: catchAsync(async (req, res, next) => {
    try {
      let actualPage = Number(req.query.page);
      let from = 1;
      let to = 10
      let total = await user.count();
      if( actualPage === 0 || !actualPage) {
        to = total
      }
      if (actualPage > 1 ) {
        from = (to*actualPage)-(to-1);
        to = from+(to-1)
      };
      let response = await user.findAll({
        where: {
          id: {
            [Op.between]: [from, to]
          }
        },
        attributes: ['firstName', 'lastName', 'email', 'createdAt'],
      });
      response.push({
        prevPage: (actualPage > 1 && to !== total)? `http://localhost:3000/users${req.url.replace(`page=${actualPage}`, `page=${Number(actualPage)-1}`)}` : null,
        prevPage: (to === total && actualPage)? `http://localhost:3000/users${req.url.replace(`page=${actualPage}`, `page=${Number(actualPage)-1}`)}` : null,
        nextPage: (actualPage > 1 && to !== total)? `http://localhost:3000/users${req.url.replace(`page=${actualPage}`, `page=${Number(actualPage)+1}`)}`: null,
        nextPage: (actualPage === 1 && actualPage !== 0)? `http://localhost:3000/users${req.url.replace(`page=${actualPage}`, `page=${Number(actualPage)+1}`)}`: null,
      })
      endpointResponse({
        res,
        message: 'Users search successfully',
        body: response,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error getting all users] - [user - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};


