const deleteSchema = {
    id:{
        in:['params'],
        isInt:true,
        toInt:true,
        errorMessage: 'ID is wrong'
    }
}

module.exports = deleteSchema;