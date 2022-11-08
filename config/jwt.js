const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

exports.encode = (payload) => jwt.sign(payload, secret);

exports.decode = (token) => jwt.decode(token);

exports.verify = (token) => jwt.verify(token, secret);
