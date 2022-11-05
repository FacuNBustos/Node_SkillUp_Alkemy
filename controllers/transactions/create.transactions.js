const createHttpError = require('http-errors')
const { transaction } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')
const { catchAsync } = require('../../helpers/catchAsync')
const { ErrorObject } = require('../../helpers/error')

// example of a controller. First call the service, then build the controller method
module.exports = {
   post: catchAsync(async (req, res, next) => {
          try {
        
        const { description, amount, date, userId, categoryId } = req.body
        const newTransaction = await transaction.create({ description, amount, date, userId, categoryId })
        if (!newTransaction) {
             return next(new createHttpError.InternalServerError(ErrorObject('Error creating transaction')))
        }
        endpointResponse({
            res,
            code: 200,
            body: newTransaction,
            message: 'The transaction was successfully created',
        })
    
     } catch (error) {
          const httpError = createHttpError(
            error.statusCode,
            
            `[Error updating transaction] - [transaction - CREATE]: ${error.message}`,
          )
          next(httpError)
        }
      }),
     }
    
    



    
       

       