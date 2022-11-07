const createSchema = {
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
    isDate: true,
    errorMessage: 'date is wrong',
  },
};

module.exports = createSchema;
