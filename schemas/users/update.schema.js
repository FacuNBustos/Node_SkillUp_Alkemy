const updateSchema = {
  id: {
    in: ['params'],
    isInt: true,
    toInt: true,
    errorMessage: 'ID is wrong',
  },
  email: {
    in: ['body'],
    optional: true,
    isEmail: true,
    errorMessage: 'email is wrong',
  },
  password: {
    in: ['body'],
    optional: true,
    isLength: {
      errorMessage: 'password is wrong',
      options: { min: 4 },
    },
  },
};

module.exports = updateSchema;
