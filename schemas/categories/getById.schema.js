const getByIdSchema = {
    id: {
        in: ['params'],
        isInt: true,
        toInt: true,
        errorMessage: 'ID is wrong'
    }
};

module.exports = getByIdSchema;