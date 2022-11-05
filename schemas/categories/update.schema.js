const updateSchema = {
    name: {
      in: ['body'],
      optional: false,
      notEmpty: true,
      errorMessage: 'category name is required',
    },
  };
  
  module.exports = updateSchema;