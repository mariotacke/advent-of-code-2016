const rotate = (letter, steps) => {
  if (letter === '-') {
    return ' ';
  }

  let rotatedLetter = letter.charCodeAt(0);

  for (let i = 0; i < steps; i++) {
    rotatedLetter = rotatedLetter + 1 <= 122 ? rotatedLetter + 1 : 97;
  }

  return String.fromCharCode(rotatedLetter);
};

const decrypt = (encryptedName, sectorId) => {
  return encryptedName
    .split('')
    .map((letter) => rotate(letter, sectorId))
    .join('');
};

const validate = (room) => {
  const sequence = room.encryptedName.replace(/-/g, '').split('');

  const topFiveLetters = [...new Set([...sequence])]
    .map((letter) => {
      return {
        letter,
        score: sequence.filter((x) => x === letter).length
      };
    })
    .sort((a, b) => {
      return a.score !== b.score
        ? b.score - a.score
        : a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
    })
    .slice(0, 5)
    .map(({ letter }) => letter)
    .join('');

  return topFiveLetters === room.checksum ? room : false;
};

const findNorthPole = (input) => {
  return input
    .split('\n')
    .map((room) => {
      const parts = room.match(/(.*)-(\d+)\[(\w+)\]/);

      return {
        encryptedName: parts[1].trim(),
        sectorId: parseInt(parts[2]),
        checksum: parts[3],
      };
    })
    .map((room) => validate(room))
    .filter((room) => room)
    .map(({ encryptedName, sectorId }) => ({
      decryptedName: decrypt(encryptedName, sectorId),
      sectorId,
    }))
    .find(({ decryptedName }) => decryptedName === 'northpole object storage')
    .sectorId;
};

module.exports = {
  decrypt,
  findNorthPole,
};
