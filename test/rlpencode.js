let RLPEncode = artifacts.require('RLPEncode');

contract('RLPEncode', (accounts) => {
  it('should verify a valid signature', () => {
    return BLS.deployed().then((instance) => {
      let signatureX = '11181692345848957662074290878138344227085597134981019040735323471731897153462';
      let signatureY = '6479746447046570360435714249272776082787932146211764251347798668447381926167';
      return instance.verify(message, signatureX, signatureY);
    });
  });
});
