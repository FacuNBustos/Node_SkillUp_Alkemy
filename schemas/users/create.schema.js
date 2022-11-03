const createSchema = {
    firstName: {
        in: ['body'],
        exists: true,
        errorMessage: 'firstName must be included'
    },
    lastName: {
        in: ['body'],
        exists: true,
        errorMessage: 'firstName must be included'
    },
    email: {
        in: ['body'],
        exists: true,
        isEmail: true,
        errorMessage: 'email is wrong'
    },
    password: {
        in: ['body'],
        isLength: {
                errorMessage: 'password is wrong',
            options: { min: 4 },
          },
    }
};

    

module.exports = createSchema;