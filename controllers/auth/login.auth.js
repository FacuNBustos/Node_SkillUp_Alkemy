const {user,role} = require('../../database/models');
const bcrypt = require('bcrypt')
const { endpointResponse } = require('../../helpers/success');
const {catchAsync} = require('../../helpers/catchAsync');
const createHttpError = require("http-errors");

module.exports = {
    login: catchAsync(async (req, res, next) => {

        const { email, password } = req.body;
        try {
          const userFind = await user.findOne({
            where: {email},
            include:[
              { model:role,
                attributes:['name']
              }
            ],
          });
          if (!userFind) {
            return res.status(403).json({
              ok: false
            })
          };
          const passwordUser = bcrypt.compareSync(password, userFind.password)
          if (!passwordUser) {
            return res.status(403).json({
              ok: false
            })
          };
          const {password:pass, deletedAt, ...rest} = userFind.dataValues;
          endpointResponse({
            res,
            code: 200,
            ok: 'true',
            body: rest
          });
        } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            `[Error login user] - [user - POST]: ${error.message}`,
          );
          next(httpError);
        }
    }),
}