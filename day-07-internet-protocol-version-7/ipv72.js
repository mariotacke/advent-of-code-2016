const getSequences = (net) => {
  const sequences = [];

  for (let i = 0; i < net.length - 2; i++) {
    if (net[i + 0] === net[i + 2] && // first and third the same
      net[i + 0] !== net[i + 1]) { // first and second not the same
      sequences.push(net.slice(i, i + 3));
    }
  }

  return sequences;
};

const reverse = (sequence) => {
  return sequence[1] + sequence[0] + sequence[1];
};

const supportsSsl = (ip) => {
  const parts = ip.match(/(\w+)\[(\w+)\](\w+)(?:\[(\w+)\])?(\w+)?(?:\[(\w+)\])?(\w+)?/);

  const abas = [parts[1], parts[3], parts[5], parts[7]]
    .filter((x) => x)
    .map((net) => getSequences(net))
    .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);

  const babs = [parts[2], parts[4], parts[6]]
    .filter((x) => x)
    .map((net) => getSequences(net))
    .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);

  return abas.length &&
         babs.length &&
         abas.some((aba) => babs.some((bab) => reverse(bab) === aba));
};

const countIps = (input) => {
  return input
    .split('\n')
    .map(supportsSsl)
    .filter((x) => x)
    .length;
};

module.exports = {
  countIps,
  supportsSsl,
};
