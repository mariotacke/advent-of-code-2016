const assert = require('assert');

const denoise = require('./denoise');

describe('Day 6: Signals and Noise', () => {
  it('should denoise message', () => {
    const signals =
      `eedadn
       drvtee
       eandsr
       raavrd
       atevrs
       tsrnev
       sdttsa
       rasrtv
       nssdts
       ntnada
       svetve
       tesnvt
       vntsnd
       vrdear
       dvrsen
       enarar`;

    assert.strictEqual(denoise(signals), 'easter');
  });
});
