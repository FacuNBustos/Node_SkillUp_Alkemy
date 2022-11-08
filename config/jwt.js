const jwt = require('jsonwebtoken');

module.exports = () => {
  return {
    encode: jwt.sign,
    decode: jwt.decode,
    verify: jwt.verify,
  };
};
