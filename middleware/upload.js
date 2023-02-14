const path = require("path");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
console.log(storage);

let upload = multer({
  storage: storage,
  fieldFilter: function (req, file, callback) {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpg") {
      callback(null, true);
    } else {
      console.log(`only jpg and png supported.`);
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = upload;
