import React from 'react';
export default function TokenTable() {
  return (
    <div style={{ padding: '1rem', background: '#0d1117' }}>
      <h3>Detected Tokens (Simulated)</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead><tr><th>Name</th><th>Price</th><th>Volume</th></tr></thead>
        <tbody>
          <tr><td>Token_001</td><td>0.001 SOL</td><td>1200</td></tr>
          <tr><td>Token_002</td><td>0.002 SOL</td><td>980</td></tr>
        </tbody>
      </table>
    </div>
  );
}
