var Migrations = artifacts.require("./Migrations.sol");
var RLPEncode = artifacts.require("./RLPEncode.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(RLPEncode);
};
