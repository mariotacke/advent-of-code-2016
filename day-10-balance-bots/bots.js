class Bot {
  constructor (factory) {
    this.chips = [];
    this._factory = factory;
  }

  add (chip) {
    this.chips = [...this.chips, chip].sort((a, b) => a - b);
  }

  distribute () {
    const [low, high] = this.chips;

    if (this._lowTo.match(/output/g)) {
      this._factory.outputs[this._lowTo] = low;
    } else {
      this._factory.bots[this._lowTo].add(low);
    }

    if (this._highTo.match(/output/g)) {
      this._factory.outputs[this._highTo] = high;
    } else {
      this._factory.bots[this._highTo].add(high);
    }

    this.chips = [];
  }

  setBehavior (lowTo, highTo) {
    this._lowTo = lowTo;
    this._highTo = highTo;
  }
}

const bots = (input, low, high) => {
  const factory = {
    bots: {},
    outputs: {},
  };

  const instructions = input
    .split('\n')
    .map((x) => x.trim());

  // determine unique bots
  [...new Set(instructions
    .filter((x) => x.includes('bot'))
    .map((x) => x.match(/bot \d+/g))
    .reduce((a, b) => a.concat(b), []))]
    .forEach((x) => factory.bots[x] = new Bot(factory));

  // determine unique outputs
  [...new Set(instructions
    .filter((x) => x.includes('output'))
    .map((x) => x.match(/output \d+/g))
    .reduce((a, b) => a.concat(b), []))]
    .forEach((x) => factory.outputs[x] = null);

  // seed bots with starting values
  instructions
    .filter((x) => x.match(/value \d+ goes to bot \d+/))
    .forEach((x) => {
      const [, value, bot] = x.match(/value (\d+) goes to (bot \d+)/);

      factory.bots[bot].add(+value);
    });

  // determine bot behavior
  instructions
    .filter((x) => x.match(/bot \d+ gives low to \w+ \d+ and high to \w+ \d+/))
    .forEach((x) => {
      const [, bot, lowTo, highTo] = x.match(/(bot \d+) gives low to (\w+ \d+) and high to (\w+ \d+)/);

      factory.bots[bot].setBehavior(lowTo, highTo);
    });

  let result = null;

  // simulate factory
  while (Object.values(factory.outputs).some((x) => x === null)) {
    Object.keys(factory.bots).forEach((bot) => {
      if (factory.bots[bot].chips.length === 2) {
        const [ chipLow, chipHigh ] = factory.bots[bot].chips;

        // determine bot comparing target values
        if (low === chipLow && high === chipHigh) {
          result = +bot.match(/(\d+)/g);
        }

        factory.bots[bot].distribute();
      }
    });
  }

  return result;
};

module.exports = bots;
