const updateSchema = {
  id: {
    in: ['params'],
    isInt: true,
    toInt: true,
    errorMessage: 'ID is wrong',
  },
  name: {
    in: ['body'],
    optional: true,
    notEmpty: true,
    errorMessage: 'category name cannot be empty',
  },
  description: {
    in: ['body'],
    optional: true,
  },
};

module.exports = updateSchema;
