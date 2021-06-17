const JalehsArt = artifacts.require("./JalehsArt.sol");



module.exports = async function (deployer) {
 
  deployer.deploy(JalehsArt);

};