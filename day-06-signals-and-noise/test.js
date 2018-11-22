const assert = require('assert');

const denoise = require('./denoise');
const denoise2 = require('./denoise2');

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

  describe('Part Two', () => {
    it('should properly denoise message', () => {
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

      assert.strictEqual(denoise2(signals), 'advent');
    });
  });
});
