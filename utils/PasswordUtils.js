const bcryptjs = require("bcryptjs");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcryptjs.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcryptjs.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

// decrypt password with bcryptjs module using the hash password make it promise
const decryptPassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcryptjs.compare(password, hash, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = { hashPassword, decryptPassword };
