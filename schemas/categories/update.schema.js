const updateSchema = {
    name: {
      in: ['body'],
      optional: false,
      notEmpty: false,
      
    },
    description: {
      in: ['body'],
      optional: false,
      notEmpty: false,
      
    },
  };
  
  module.exports = updateSchema;