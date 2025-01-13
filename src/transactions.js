const { Connection, Transaction, SystemProgram } = require('@solana/web3.js');

async function sendTransaction(fromWallet, toPublicKey, lamports) {
  const connection = new Connection('https://api.mainnet-beta.solana.com');
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromWallet.publicKey,
      toPubkey: toPublicKey,
      lamports,
    })
  );
  const signature = await connection.sendTransaction(transaction, [fromWallet]);
  console.log('Transaction Signature:', signature);
}

module.exports = { sendTransaction };
