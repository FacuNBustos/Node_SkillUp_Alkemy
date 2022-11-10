const multer = require('multer');
const fs = require('fs');
const path = require('path');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, path.join(__dirname, '../public/static/user'));
    },
    filename: function (req, file, cb) {
       cb(null, `${Date.now()}_avatar_${path.extname(file.originalname)}`);  }
  })

const filterMimetype = (req, file, cb) => {
   const filetypes = /jpg|png|svg|webp/
   const mimetype = filetypes.test(file.mimetype)
   const extname = filetypes.test(path.extname(file.originalname))
   if (mimetype && extname) {
      return cb(null, true)
   }
   cb('Solo se admiten jpg,png,svg o webp')
}

  const uploadImage = multer({ storage, fileFilter:filterMimetype });

  module.exports = uploadImage;

        