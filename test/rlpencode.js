let RLPEncode = artifacts.require('TestingWrapper');

contract('RLPEncode', (accounts) => {
  it('should encode bytes correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeBytes('0xdeadbeef');
    }).then((encoded) => {
      assert.equal(encoded, '0x84deadbeef', 'Bytes not correctly encoded');
    });
  });
  it('should encode an address correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeAddress('0xaa6e07ac6b69723ecadfe1483a75d72e7740ecdc');
    }).then((encoded) => {
      assert.equal(encoded, '0x94aa6e07ac6b69723ecadfe1483a75d72e7740ecdc', 'Address not correctly encoded');
    });
  });
  it('should encode zero correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeUint(0);
    }).then((encoded) => {
      assert.equal(encoded, '0x80', 'Zero not correctly encoded');
    });
  });
  it('should encode an integer correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeUint(12345);
    }).then((encoded) => {
      assert.equal(encoded, '0x823039', 'Integer not correctly encoded');
    });
  });
  it('should encode "true" correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeBool(true);
    }).then((encoded) => {
      assert.equal(encoded, '0x01', '"true" not correctly encoded');
    });
  });
  it('should encode "false" correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeBool(false);
    }).then((encoded) => {
      assert.equal(encoded, '0x80', '"false" not correctly encoded');
    });
  });
});
