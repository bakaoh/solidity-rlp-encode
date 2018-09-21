var Migrations = artifacts.require("./Migrations.sol");
var BLS = artifacts.require("./BLSTest.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(BLS);
};
