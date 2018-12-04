const asm = (input, a = 0, b = 0, c = 0, d = 0) => {
  const instructions = input
    .split('\n')
    .map((x) => {
      const parts = x.trim().match(/(\w+) (\w+)(?: (-?\w+))?/);

      const cmd = parts[1];
      const instruction = { cmd };

      if (cmd === 'cpy' || cmd === 'jnz') {
        instruction['registerA'] = +parts[2] || parts[2];
        instruction['registerB'] = +parts[3] || parts[3];
      } else if (cmd === 'inc' || cmd === 'dec') {
        instruction['registerB'] = parts[2];
      }

      return instruction;
    });

  const registers = { a, b, c, d };

  let position = 0;

  while (position < instructions.length) {
    const { cmd, registerA, registerB } = instructions[position];

    if (cmd === 'cpy') {
      const value = Number.isInteger(registerA)
        ? registerA
        : registers[registerA];

      registers[registerB] = value;
    } else if (cmd === 'inc' || cmd === 'dec') {
      registers[registerB] += cmd === 'inc' ? 1 : -1;
    } else if (cmd === 'jnz') {
      const value = Number.isInteger(registerA)
        ? registerA
        : registers[registerA];

      if (value !== 0) {
        position += registerB;

        continue;
      }
    }

    position++;
  }

  return registers;
};

module.exports = asm;
