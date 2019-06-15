pragma solidity >=0.4.0 < 0.6.0;
pragma experimental ABIEncoderV2;

import "./RLPEncode.sol";


/**
 * @title TestingWrapper
 * @dev Wrapper for RLPEncode for testing.
 */
contract TestingWrapper {
    /*
     * Public functions
     */
    
    /**
     * @dev RLP encodes a byte string.
     * @param self The byte string to encode.
     * @return The RLP encoded string in bytes.
     */
    function encodeBytes(bytes memory self) public pure returns (bytes memory) {
        return RLPEncode.encodeBytes(self);
    }

    /**
     * @dev RLP encodes a list of RLP encoded byte byte strings.
     * @param self The list of RLP encoded byte strings.
     * @return The RLP encoded list of items in bytes.
     */
    function encodeList(bytes[] memory self) public pure returns (bytes memory) {
        return RLPEncode.encodeList(self);
    }

    /**
     * @dev RLP encodes a string.
     * @param self The string to encode.
     * @return The RLP encoded string in bytes.
     */
    function encodeString(string memory self) public pure returns (bytes memory) {
        return RLPEncode.encodeString(self);
    }

    /** 
     * @dev RLP encodes an address.
     * @param self The address to encode.
     * @return The RLP encoded address in bytes.
     */
    function encodeAddress(address self) public pure returns (bytes memory) {
        return RLPEncode.encodeAddress(self);
    }

    /** 
     * @dev RLP encodes a uint.
     * @param self The uint to encode.
     * @return The RLP encoded uint in bytes.
     */
    function encodeUint(uint self) public pure returns (bytes memory) {
        return RLPEncode.encodeUint(self);
    }

    /** 
     * @dev RLP encodes an int.
     * @param self The int to encode.
     * @return The RLP encoded int in bytes.
     */
    function encodeInt(int self) public pure returns (bytes memory) {
        return RLPEncode.encodeInt(self);
    }

    /** 
     * @dev RLP encodes a bool.
     * @param self The bool to encode.
     * @return The RLP encoded bool in bytes.
     */
    function encodeBool(bool self) public pure returns (bytes memory) {
        return RLPEncode.encodeBool(self);
    }
}
