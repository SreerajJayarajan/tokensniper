import React from 'react';
export default function TradeLog({ logs }) {
  return (
    <div style={{ padding: '1rem', background: '#161b22' }}>
      <h3>Trade Logs</h3>
      <ul>
        {logs.map((log, index) => <li key={index}>{log}</li>)}
      </ul>
    </div>
  );
}
