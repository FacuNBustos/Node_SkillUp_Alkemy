const loginSchema = {
  email: {
    in: ['body'],
    isEmail: true,
    notEmpty: true,
    errorMessage: 'email is wrong',
  },
  password: {
    in: ['body'],
    notEmpty: true,
    isLength: {
      errorMessage: 'password is wrong',
      options: { min: 4 },
    },
  },
};

module.exports = loginSchema;
