import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.jsx';
import TokenTable from './components/TokenTable.jsx';
import TradeLog from './components/TradeLog.jsx';
import './App.css';

export default function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const token = `Token_${Math.floor(Math.random() * 1000)}`;
      const newLog = `Detected ${token} on Pump.fun - Simulating Buy`;
      setLogs(prev => [newLog, ...prev]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <Dashboard />
      <TokenTable />
      <TradeLog logs={logs} />
    </div>
  );
}
