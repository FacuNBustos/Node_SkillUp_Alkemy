const {user} = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const {ErrorObject} = require('../../helpers/error');
const {catchAsync} = require('../../helpers/catchAsync')

module.exports = {
    login: catchAsync(async (req, res, next) => {

        const { email, password } = req.body;

        
        try {
            const user = await user.findOne({email});
            const passwordUser = bcrypt.compareSync(password, user?.password)
            if(!user || !passwordUser){
                throw new ErrorObject({ok:false}, 400);
            }
            /* if(!passwordUser){
                throw new ErrorObject({ok:false}, 400);
            } */
            endpointResponse({
                res,
                code: 200,
                ok:'true',
                body:user,
              })
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error login user] - [user - POST]: ${error.message}`,
              )
            next(httpError)
        }
    }),
}

/* run: catchAsync(async (req, res, next) => {
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
  }), */