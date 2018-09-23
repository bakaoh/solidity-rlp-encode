# solidity-rlp-encode
`RLPEncode` is an [RLP encoding](https://github.com/ethereum/wiki/wiki/RLP) library written in Solidity. The original author of this library is [Bakaoh](https://github.com/bakaoh). This repository cleans up the original code and adds tests for the standard RLP encoding test cases.

## TODO
- [ ] Fix support for ABIEncoderV2.
- [ ] Add tests for `encodeList`.
- [ ] See if there are any obvious optimizations.
- [ ] Add documentation.

## Requirements
This repository hosts a [Truffle](https://truffleframework.com/) project. Install truffle globally via NPM:

```
$ npm install -g truffle
```

## Testing
You can test this code by running:

```
$ truffle test
```
