const { wallet, transactions, analytics } = require('../src');

// Create a new wallet
const newWallet = wallet.createWallet();

// Example transaction
(async () => {
  const toPublicKey = 'TARGET_PUBLIC_KEY';
  const lamports = 1000000; // 0.001 SOL
  await transactions.sendTransaction(newWallet, toPublicKey, lamports);
})();

// Example analytics
const mockTransactionData = [
  {
    signature: 'EXAMPLE_SIGNATURE',
    meta: {
      preBalances: [5000000, 0],
      postBalances: [4000000, 1000000],
    },
  },
];
analytics.analyzeTransactionData(mockTransactionData);
