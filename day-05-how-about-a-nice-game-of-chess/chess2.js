const crypto = require('crypto');

const chess = (input) => {
  let password = Array.from({ length: 8 });
  let counter = 0;

  while (!password.every((x) => x)) {
    const hash = crypto
      .createHash('md5')
      .update(`${input}${counter}`)
      .digest('hex');

    if (hash.substr(0, 5) === '00000') {
      const position = parseInt(hash[5]);

      if (position < password.length && !password[position]) {
        password[parseInt(hash[5])] = hash[6];

        // optional: animation
        // console.log(password.map((x) => !x ? '_' : x).join(''));
      }
    }

    counter++;
  }

  return password.join('');
};

module.exports = chess;
