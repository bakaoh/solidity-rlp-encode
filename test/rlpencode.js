let RLPEncode = artifacts.require('TestingWrapper');

contract('RLPEncode', (accounts) => {
  it('should encode bytes correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeBytes('0xdeadbeef');
    }).then((encoded) => {
      assert.equal(encoded, '0x84deadbeef', 'Bytes not correctly encoded');
    });
  });
  it('should encode an encoded short integer correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeBytes('0x0f');
    }).then((encoded) => {
      assert.equal(encoded, '0x0f', 'Encoded short integer not correctly encoded');
    });
  });
  it('should encode an encoded long integer correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeBytes('0x0400');
    }).then((encoded) => {
      assert.equal(encoded, '0x820400', 'Encoded long integer not correctly encoded');
    });
  });

  it('should encode the null string correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeString('');
    }).then((encoded) => {
      assert.equal(encoded, '0x80', 'Null string not correctly encoded');
    });
  });
  it('should encode a short string correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeString('dog');
    }).then((encoded) => {
      assert.equal(encoded, '0x83646f67', 'Short string not correctly encoded');
    });
  });
  it('should encode a long string correctly', () => {
    return RLPEncode.deployed().then((instance) => {
      return instance.encodeString('Lorem ipsum dolor sit amet, consectetur adipisicing elit');
    }).then((encoded) => {
      assert.equal(encoded, '0xb8384c6f72656d20697073756d20646f6c6f722073697420616d65742c20636f6e7365637465747572206164697069736963696e6720656c6974', 'Long string not correctly encoded');
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
