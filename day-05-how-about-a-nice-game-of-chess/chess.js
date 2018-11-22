const md5 = require('md5');

const chess = (input) => {
  let password = [];
  let counter = 0;

  while (password.length < 8) {
    const hash = md5(`${input}${counter}`);

    if (hash.substr(0, 5) === '00000') {
      password.push(hash[5]);
    }

    counter++;
  }

  return password.join('');
};

module.exports = chess;
