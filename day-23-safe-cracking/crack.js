const crack = (input, registers = { a: 0, b: 0, c: 0, d: 0 }) => {
  const instructions = input
    .split('\n')
    .map((x) => {
      const parts = x.trim().match(/(\w+) (-?\w+)(?: (-?\w+))?/);

      const cmd = parts[1];
      const instruction = { cmd };

      if (cmd === 'cpy' || cmd === 'jnz') {
        instruction['registerA'] = Number.isInteger(+parts[2]) ? +parts[2] : parts[2];
        instruction['registerB'] = Number.isInteger(+parts[3]) ? +parts[3] : parts[3];
      } else if (cmd === 'inc' || cmd === 'dec') {
        instruction['registerB'] = parts[2];
      } else if (cmd === 'tgl') {
        instruction['registerB'] = parts[2];
      }

      return instruction;
    });

  let position = 0;

  while (position < instructions.length) {
    const { cmd, registerA, registerB } = instructions[position];

    if (cmd === 'cpy') {
      if (Number.isInteger(registerA) && Number.isInteger(registerB)) {
        // invalid, skip
      } else {
        const value = Number.isInteger(registerA)
          ? registerA
          : registers[registerA];

        registers[registerB] = value;
      }
    } else if (cmd === 'inc' || cmd === 'dec') {
      registers[registerB] += cmd === 'inc' ? 1 : -1;
    } else if (cmd === 'jnz') {
      const value = Number.isInteger(registerA)
        ? registerA
        : registers[registerA];

      if (value !== 0) {
        position += Number.isInteger(registerB) ? registerB : registers[registerB];

        continue;
      }
    } else if (cmd === 'tgl') {
      const distance = registers[registerB];
      const otherInstruction = instructions[position + distance];

      if (!otherInstruction) {
        // do nothing
      } else if (!otherInstruction.registerA) {
        otherInstruction.cmd = otherInstruction.cmd === 'inc' ? 'dec' : 'inc';
      } else {
        otherInstruction.cmd = otherInstruction.cmd === 'jnz' ? 'cpy' : 'jnz';
      }
    }

    position++;
  }

  return registers;
};

module.exports = crack;
