const assert = require('assert');

const Display = require('./lcd');

const displayHelper = (expectedOutput) => expectedOutput.replace(/^ +/gm, '');

describe('Day 8: Two-Factor Authentication', () => {
  it('should initialize empty display', () => {
    const display = new Display(7, 3);

    assert.strictEqual(
      display.print(),
      displayHelper(
        `.......
         .......
         .......`
      )
    );

    assert.strictEqual(display.lights, 0);
  });

  it('should create a small rectangle in the top-left corner', () => {
    const display = new Display(7, 3);

    display.drawRect(3, 2);

    assert.strictEqual(
      display.print(),
      displayHelper(
        `###....
         ###....
         .......`
      ));
  });

  it('should rotate the second column down by one pixel', () => {
    const display = new Display(7, 3);

    display.drawRect(3, 2);
    display.rotateColumn(1, 1);

    assert.strictEqual(
      display.print(),
      displayHelper(
        `#.#....
         ###....
         .#.....`
      ));
  });

  it('should rotate the top row right by four pixels', () => {
    const display = new Display(7, 3);

    display.drawRect(3, 2);
    display.rotateColumn(1, 1);
    display.rotateRow(0, 4);

    assert.strictEqual(
      display.print(),
      displayHelper(
        `....#.#
         ###....
         .#.....`
      ));
  });

  it('should again rotate the second column down by one pixel', () => {
    const display = new Display(7, 3);

    display.drawRect(3, 2);
    display.rotateColumn(1, 1);
    display.rotateRow(0, 4);
    display.rotateColumn(1, 1);

    assert.strictEqual(
      display.print(),
      displayHelper(
        `.#..#.#
         #.#....
         .#.....`
      ));
  });
});
