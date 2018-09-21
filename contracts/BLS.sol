pragma solidity ^0.4.0;

import "./Pairing.sol";

library BLS {
    /*
     * Internal functions
     */

    function verify(
        Pairing.G2Point _verificationKey,
        bytes _message,
        Pairing.G1Point _signature
    ) internal returns (bool) {
        Pairing.G1Point memory messageHash = Pairing.hashToG1(_message);
        return Pairing.pairing2(Pairing.negate(_signature), Pairing.P2(), messageHash, _verificationKey);
    }
}
