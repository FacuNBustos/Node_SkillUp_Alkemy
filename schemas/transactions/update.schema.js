const updateSchema = {
    id: {
      in: ['params'],
      isInt: true,
      toInt: true,
      errorMessage: 'ID is wrong',
    },
    user: {
      in: ['body'],
      exists: true,
      errorMessage: 'email is wrong',
    },
    category: {
        in: ['body'],
        exists: true,
        errorMessage: 'email is wrong',
    },
    amount: {
      in: ['body'],
      exists: true,
      isInt: true,
      toInt: true,
    },
    date: {
        in: ['body'],
        exists: true,
    }   ,
  };
  
  module.exports = updateSchema;