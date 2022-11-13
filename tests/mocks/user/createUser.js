const { email } = require('../../../schemas/users/create.schema');

exports.valid = {
  firstName: 'Cristiano',
  lastName: 'Ronaldo',
  email: 'cr7@gmail.com',
  password: '777777',
};

exports.invalid = {
  lastName: 'Ronaldo',
  email: 'cr7@gmail.com',
  password: '777777',
};
