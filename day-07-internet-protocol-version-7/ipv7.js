const hasAbba = (sequence) => {
  for (let i = 0; i < sequence.length - 3; i++) {
    if (sequence[i + 0] === sequence[i + 3] && // first and fourth the same
        sequence[i + 1] === sequence[i + 2] && // second and third the same
        sequence[i + 0] !== sequence[i + 1]) { // first and second not the same
      return true;
    }
  }

  return false;
};

const supportsTls = (ip) => {
  const parts = ip.match(/(\w+)\[(\w+)\](\w+)(?:\[(\w+)\])?(\w+)?(?:\[(\w+)\])?(\w+)?/);

  const addresses = [parts[1], parts[3], parts[5], parts[7]].filter((x) => x);
  const hypernets = [parts[2], parts[4], parts[6]].filter((x) => x);

  return addresses.some((x) => hasAbba(x)) && hypernets.every((x) => !hasAbba(x));
};

const countIps = (input) => {
  return input
    .split('\n')
    .map(supportsTls)
    .filter((x) => x)
    .length;
};

module.exports = {
  countIps,
  supportsTls,
};
