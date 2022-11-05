const updateSchema = {
    id: {
      in: ['params'],
      isInt: true,
      toInt: true,
      errorMessage: 'ID is wrong',
    },
    userId: {
      in: ['body'],
      exists: true,
      isInt: true,
      toInt: true,
      errorMessage: 'user is wrong',
    },
    categoryId: {
      in: ['body'],
      exists: true,
      isInt: true,
      toInt: true,
      errorMessage: 'category is wrong',
    },
    amount: {
      in: ['body'],
      exists: true,
      isFloat: true,
      errorMessage: 'amount is wrong',
    },
    date: {
      in: ['body'],
      exists: true,
      isDate: true,
      errorMessage: 'date is wrong',
    },
  };
  
  module.exports = updateSchema;