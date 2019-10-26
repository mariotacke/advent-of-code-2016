module.exports = (initialState, diskLength) => {
  let state = initialState;

  while (state.length < diskLength) {
    const a = state;
    const b = a
      .slice()
      .split('')
      .reverse()
      .map((c) => c === '0' ? '1' : '0')
      .join('');

    state = `${a}0${b}`;
  }

  state = state.slice(0, diskLength);

  let checksum = state;

  while (checksum.length % 2 === 0) {
    let nextChecksum = [];

    for (let i = 0; i < checksum.length; i += 2) {
      const pair = checksum.slice(i, i + 2);

      nextChecksum.push(pair === '00' || pair === '11' ? '1' : '0');
    }

    checksum = nextChecksum.join('');
  }

  return checksum;
};
