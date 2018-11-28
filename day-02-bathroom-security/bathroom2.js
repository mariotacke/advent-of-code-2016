class Keypad {
  constructor () {
    this._pad = [
      ['',  '',  '1', '',  ''],
      ['',  '2', '3', '4', ''],
      ['5', '6', '7', '8', '9'],
      ['',  'A', 'B', 'C', ''],
      ['',  '',  'D', '',  ''],
    ];

    this._x = 0;
    this._y = 2;
  }

  get number () {
    return this._pad[this._y][this._x];
  }

  move (direction) {
    const x = direction === 'L' ? -1 : direction === 'R' ? 1 : 0;
    const y = direction === 'U' ? -1 : direction === 'D' ? 1 : 0;

    this._x = (this._pad[this._y] || [])[this._x + x] ? this._x + x : this._x;
    this._y = (this._pad[this._y + y] || [])[this._x] ? this._y + y : this._y;
  }
}

const bathroom = (input) => {
  const keypad = new Keypad();

  const sequence = input
    .split('\n')
    .map((line) => {
      line
        .trim()
        .split('')
        .forEach((direction) => keypad.move(direction));

      return keypad.number;
    });

  return sequence.join('');
};

module.exports = bathroom;
