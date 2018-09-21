# solidity-bls

**Note**: This repository is a WIP and will be updated frequently in the coming weeks.

---

This is a library for verifying [BLS signatures](https://en.wikipedia.org/wiki/Boneh%E2%80%93Lynn%E2%80%93Shacham) over [bn128](https://www.cryptojedi.org/papers/pfcpo.pdf) in Solidity. Almost all of the code here is taken from [BjornvdLaan's work](https://gist.github.com/BjornvdLaan/ca6dd4e3993e1ef392f363ec27fe74c4) and the work on ZoKrates available [here](https://github.com/JacobEberhardt/ZoKrates/blob/da5b13f845145cf43d555c7741158727ef0018a2/zokrates_core/src/verification.rs).

## Testing
We use [Truffle](https://truffleframework.com/) for testing.

```
$ truffle test
Compiling ./contracts/BLS.sol...
Compiling ./contracts/BLSTest.sol...
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/Pairing.sol...


  Contract: BLS
    ✓ should verify a valid signature (302ms)
    ✓ should not verify a invalid signature (59ms)
    ✓ should not verify a invalid message (291ms)
```

## Gas Cost
The cost of verifying a signature is currently ~365,000 gas. 
