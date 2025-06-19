import React from 'react';
export default function Dashboard() {
  return (
    <div style={{ padding: '1rem', background: '#161b22' }}>
      <h2>Solana Trading Bot Demo</h2>
      <p>Status: <strong style={{ color: 'lime' }}>Running</strong></p>
      <p>Connected Wallet: <code>FakePhantom123...abcd</code></p>
    </div>
  );
}
