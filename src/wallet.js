const { Keypair } = require('@solana/web3.js');

function createWallet() {
  const keypair = Keypair.generate();
  console.log('New Wallet Created:', keypair.publicKey.toString());
  return keypair;
}

module.exports = { createWallet };
