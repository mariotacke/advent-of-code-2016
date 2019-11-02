const crypto = require('crypto');

const chess = (input) => {
  let password = [];
  let counter = 0;

  while (password.length < 8) {
    const hash = crypto
      .createHash('md5')
      .update(`${input}${counter}`)
      .digest('hex');

    if (hash.substr(0, 5) === '00000') {
      password.push(hash[5]);
    }

    counter++;
  }

  return password.join('');
};

module.exports = chess;
