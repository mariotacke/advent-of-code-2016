class Keypad {
  constructor () {
    this._pad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    this._x = 1;
    this._y = 1;
  }

  get number () {
    return this._pad[this._y][this._x];
  }

  move (direction) {
    const x = direction === 'L' ? -1 : direction === 'R' ? 1 : 0;
    const y = direction === 'U' ? -1 : direction === 'D' ? 1 : 0;

    this._x = this._x + x < 0 ? 0 : this._x + x > 2 ? 2 : this._x + x;
    this._y = this._y + y < 0 ? 0 : this._y + y > 2 ? 2 : this._y + y;
  }
}

const bathroom = (input) => {
  const keypad = new Keypad();

  const sequence = input
    .split('\n')
    .map((x) => x.trim().split(''))
    .map((x) => {
      x.forEach((direction) => keypad.move(direction));

      return keypad.number;
    });

  return sequence.join('');
};

module.exports = bathroom;
