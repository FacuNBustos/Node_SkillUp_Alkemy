const createHttpError = require('http-errors')
const { transaction } = require('../../database/models')
const { endpointResponse } = require('../../helpers/success')
const { catchAsync } = require('../../helpers/catchAsync')
const { ErrorObject } = require('../../helpers/error')

// example of a controller. First call the service, then build the controller method
module.exports = {
    deleteOne: catchAsync(async (req, res, next) => {
        try {
            const transactionSave = await transaction.findOne({
                where: {
                    id: req.params.id
                }
            })

            if (!transactionSave) {
                throw new ErrorObject('Transaction could not be found')
            }
            await transaction.destroy({
                where: {
                    id: req.params.id
                }
            })

            endpointResponse({
                res,
                message: 'Transaction has been deleted',
                status: 200

            })
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error retrieving index] - [index - GET] ${error.message}`
            )
            next(httpError)
        }
    })
}