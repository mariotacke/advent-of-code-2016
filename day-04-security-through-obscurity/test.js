const assert = require('assert');

const { sumSectorIds, validate } = require('./security');
const { decrypt } = require('./security2');

describe('Day 4: Security Through Obscurity', () => {
  it('should validate if `aaaaa-bbb-z-y-x-123[abxyz]` is real', () => {
    assert.strictEqual(validate({
      checksum: 'abxyz',
      encryptedName: 'aaaaa-bbb-z-y-x',
      sectorId: 123,
    }), 123);
  });

  it('should validate if `a-b-c-d-e-f-g-h-987[abcde]` is real', () => {
    assert.strictEqual(validate({
      checksum: 'abcde',
      encryptedName: 'a-b-c-d-e-f-g-h',
      sectorId: 987,
    }), 987);
  });

  it('should validate if `not-a-real-room-404[oarel]` is real', () => {
    assert.strictEqual(validate({
      checksum: 'oarel',
      encryptedName: 'not-a-real-room',
      sectorId: 404,
    }), 404);
  });

  it('should validate if `totally-real-room-200[decoy]` is real', () => {
    assert.strictEqual(validate({
      checksum: 'decoy',
      encryptedName: 'totally-real-room',
      sectorId: 200,
    }), 0);
  });

  it('should determine sum of the sector IDs of the real rooms', () => {
    const rooms =
      `aaaaa-bbb-z-y-x-123[abxyz]
       a-b-c-d-e-f-g-h-987[abcde]
       not-a-real-room-404[oarel]
       totally-real-room-200[decoy]`;

    assert.strictEqual(sumSectorIds(rooms), 1514);
  });

  describe('Part Two', () => {
    it('should decrypt `qzmt-zixmtkozy-ivhz-343`', () => {
      assert.strictEqual(decrypt('qzmt-zixmtkozy-ivhz', 343), 'very encrypted name');
    });
  });
});
