const expand = (section) => {
  let position = 0;
  let length = 0;

  while (position < section.length) {
    if (section[position] === '(') {
      const markerEndIndex = section.indexOf(')', position + 1);

      const marker = section
        .slice(position, markerEndIndex + 1)
        .join('')
        .match(/\((\d+)x(\d+)\)/);

      const dataLength = +marker[1];
      const repetitions = +marker[2];

      const data = section.slice(markerEndIndex + 1, markerEndIndex + dataLength + 1);

      length += expand(data) * repetitions;
      position = markerEndIndex + dataLength;
    } else {
      length++;
    }

    position++;
  }

  return length;
};

const decompress = (input) => {
  let compressed = input.split('');

  return expand(compressed);
};

module.exports = decompress;
