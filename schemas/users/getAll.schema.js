const getAllSchema = {
  page: {
    in: ['query'],
    optional: true,
    isInt: true,
    toInt: true,
    errorMessage: 'page is wrong',
  },
};

module.exports = getAllSchema;
