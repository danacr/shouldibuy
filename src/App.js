import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
let price = 150

function App() {

  const [eth, setData] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.coinbase.com/v2/prices/ETH-USD/buy',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  // console.log()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <pre>

  {eth.data.base} price is {eth.data.amount} {eth.data.currency}

          </pre>
        </div>
        <a
    className="App-link"
    href="https://www.coinbase.com/join/acrist_0"
    target="_blank"
    rel="noopener noreferrer">

           {Buy(eth.data.amount)}
           </a>
        
      </header>
    </div>
  );
}

function Buy(eth) {
  if (eth<price) {
    return  "Buy"
  }
  return (
    "Wait a bit"
  )
}

export default App;
