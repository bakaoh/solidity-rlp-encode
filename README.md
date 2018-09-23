# solidity-rlp-encode
`RLPEncode` is an [RLP encoding]() library written in Solidity. The original author of this library is [Bakaoh](). This repository cleans up the original code and adds tests for the standard RLP encoding test cases.

## TODO
- [ ] Fix support for ABIEncoderV2.
- [ ] Add tests for `encodeList`.
- [ ] Add all tests as per RLP encoding specification.
- [ ] See if there are any obvious optimizations.
- [ ] Add documentation.

## Requirements
This repository hosts a [Truffle]() project. Install truffle globally via NPM:

```
$ npm install -g truffle
```

## Testing
You can test this code by running:

```
$ truffle test
```
