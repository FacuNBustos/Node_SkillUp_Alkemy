const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/static/user'));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_avatar_${path.extname(file.originalname)}`);
  },
});

const filterMimetype = (req, file, cb) => {
  const mimetypeRegex = /^image\/(jpg|jpeg|png|svg|webp)$/;
  if (file && !mimetypeRegex.test(file.mimetype)) {
    return cb(new Error('invalid image'));
  }
  cb(null, true);
};

const uploadImage = multer({ storage, fileFilter: filterMimetype });

module.exports = uploadImage;
