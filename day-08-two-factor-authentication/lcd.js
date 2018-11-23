class Display {
  constructor (width = 50, height = 7) {
    this._width = width;
    this._height = height;

    this._grid = Array
      .from({ length: height })
      .map(() => Array
        .from({ length: width })
        .map(() => false));
  }

  get lights () {
    return this._grid.reduce((a, b) => a + b.filter((x) => x).length, 0);
  }

  apply (input) {
    input
      .split('\n')
      .forEach((command) => {
        if (command.slice(0, 4) === 'rect') {
          const parts = command.match(/(\d+)x(\d+)/);

          this.drawRect(parseInt(parts[1]), parseInt(parts[2]));
        } else if (command.slice(0, 10) === 'rotate row') {
          const parts = command.match(/y=(\d+) by (\d+)/);

          this.rotateRow(parseInt(parts[1]), parseInt(parts[2]));
        } else if (command.slice(0, 13) === 'rotate column') {
          const parts = command.match(/x=(\d+) by (\d+)/);

          this.rotateColumn(parseInt(parts[1]), parseInt(parts[2]));
        }
      });
  }

  drawRect (width, height) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this._grid[y][x] = true;
      }
    }
  }

  rotateColumn (column, steps) {
    const values = this._grid.map((row) => row[column]);

    for (let i = 0; i < steps; i++) {
      values.unshift(values.pop());
    }

    this._grid = this._grid.map((row, i) => {
      row[column] = values[i];

      return row;
    });
  }

  rotateRow (row, steps) {
    const values = this._grid[row];

    for (let i = 0; i < steps; i++) {
      values.unshift(values.pop());
    }

    this._grid[row] = values;
  }

  print () {
    return this._grid
      .map((row) => row
        .map((col) => col ? '#' : '.')
        .join(''))
      .join('\n');
  }
}

module.exports = Display;
