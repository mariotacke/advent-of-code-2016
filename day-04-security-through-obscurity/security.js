const validate = ({ checksum, encryptedName, sectorId }) => {
  const sequence = encryptedName.replace(/-/g, '').split('');

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

  return topFiveLetters === checksum ? sectorId : 0;
};

const sumSectorIds = (input) => {
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
    .reduce((a, b) => a + b, 0);
};

module.exports = {
  sumSectorIds,
  validate,
};
