const crypto = require('crypto');
// Asynchronous
module.exports =  ({
  stringBase = 'base64',
  byteLength = 48,
} = {}) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(byteLength, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer.toString(stringBase));
      }
    });
  });
};

