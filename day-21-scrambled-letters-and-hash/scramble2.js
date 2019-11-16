const swapPositions = (password, x, y) => {
  const scrambledPassword = [...password];

  scrambledPassword[parseInt(x)] = password[parseInt(y)];
  scrambledPassword[parseInt(y)] = password[parseInt(x)];

  return scrambledPassword;
};

const swapLetters = (password, x, y) => {
  const scrambledPassword = password;
  const previousX = password.indexOf(x);
  const previousY = password.indexOf(y);

  scrambledPassword[previousX] = y;
  scrambledPassword[previousY] = x;

  return scrambledPassword;
};

const rotate = (password, direction, steps) => {
  steps = (direction === 'left' ? 1 : -1) * parseInt(steps);
  steps = (steps % password.length + password.length) % password.length;

  return [
    ...password.slice(password.length - steps),
    ...password.slice(0, password.length - steps),
  ];
};

const rotateByPosition = (password, x) => {
  for (let i = 1; i <= password.length; i++) {
    const candidate = rotate(password, 'right', i);
    const index = candidate.indexOf(x);
    const steps = 1 + index + (index >= 4 ? 1 : 0);
    const result = rotate(candidate, 'left', steps);

    if (result.join('') === password.join('')) {
      return candidate;
    }
  }
};

const reversePositions = (password, x, y) => {
  return [
    ...password.slice(0, parseInt(x)),
    ...password.slice(parseInt(x), parseInt(y) + 1).reverse(),
    ...password.slice(parseInt(y) + 1),
  ];
};

const movePositions = (password, y, x) => {
  const scrambledPassword = [...password];

  const character = scrambledPassword.splice(parseInt(x), 1)[0];

  scrambledPassword.splice(parseInt(y), 0, character);

  return scrambledPassword;
};

const commands = [
  { pattern: /swap position (\d) with position (\d)/, fn: swapPositions },
  { pattern: /swap letter (\w) with letter (\w)/, fn: swapLetters },
  { pattern: /reverse positions (\d) through (\d)/, fn: reversePositions },
  { pattern: /rotate (left|right) (\d) step/, fn: rotate },
  { pattern: /move position (\d) to position (\d)/, fn: movePositions },
  { pattern: /rotate based on position of letter (\w)/, fn: rotateByPosition },
];

module.exports = (input, seed = 'fbgdceah') => {
  const instructions = input
    .split('\n')
    .map((line) => {
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern.test(line)) {
          return [commands[i].fn, line.match(commands[i].pattern).slice(1)];
        }
      }
    })
    .reverse();

  const initialPassword = seed.split('');

  return instructions
    .reduce((password, [fn, args]) => fn(password, ...args), initialPassword)
    .join('');
};
