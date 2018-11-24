const decompress = (input) => {
  let position = 0;
  let compressed = input.split('');
  let decompressed = [];

  while (position < compressed.length) {
    if (compressed[position] === '(') {
      const closingIndex = compressed.indexOf(')', position + 1);

      if (closingIndex) {
        const match = compressed
          .slice(position, closingIndex + 1)
          .join('')
          .match(/\((\d+)x(\d+)\)/);

        const length = +match[1];
        const repetitions = +match[2];

        const data = compressed.slice(closingIndex + 1, closingIndex + length + 1);
        const repeated = data.join('').repeat(repetitions);

        decompressed.push(repeated);

        position = closingIndex + length;
      }
    } else {
      decompressed.push(compressed[position]);
    }

    position++;
  }

  return decompressed.join('');
};

module.exports = decompress;
