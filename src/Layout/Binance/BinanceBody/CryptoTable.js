// src/components/CryptoTable.jsx
import React, { useEffect, useState } from 'react';
import './CryptoTable.scss';
import axios from 'axios';

const CryptoTable = () => {
  const [coins, setCoins] = useState([]);

  // Fetch 15 top coins từ CoinGecko
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 15,
            page: 1,
            sparkline: false,
          },
        });

        const mappedCoins = res.data.map((coin) => ({
          id: coin.id,
          name: coin.name.toUpperCase(),
          symbol: coin.symbol.toLowerCase() + 'usdt', // dùng cho Binance WebSocket
          image: coin.image,
          price: coin.current_price,
          change: coin.price_change_percentage_24h,
          marketCap: formatNumber(coin.market_cap),
          volume: formatNumber(coin.total_volume),
          supply: formatSupply(coin.circulating_supply, coin.symbol),
        }));

        setCoins(mappedCoins);
      } catch (err) {
        console.error('Error fetching CoinGecko data:', err);
      }
    };

    fetchCoins();
  }, []);

  // WebSocket cập nhật real-time từ Binance
  useEffect(() => {
    if (coins.length === 0) return;

    const streams = coins
      .map((c) => `${c.symbol}@ticker`)
      .filter((s) => s !== undefined)
      .join('/');

    const ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const data = message.data;
      const symbol = data.s.toLowerCase();

      setCoins((prev) =>
        prev.map((coin) =>
          coin.symbol === symbol
            ? {
                ...coin,
                price: parseFloat(data.c).toFixed(2),
                change: parseFloat(data.P).toFixed(2),
              }
            : coin
        )
      );
    };

    return () => ws.close();
  }, [coins]);

  return (
    <div className="crypto-table">
      <h2 className="title">Top performance altcoin</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Cryptocoin</th>
            <th>Price</th>
            <th>Change 24h</th>
            <th>Mkt Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td className="coin-name">
                <img src={coin.image} alt={coin.name} width="20" style={{ marginRight: 8 }} />
                {coin.name}
              </td>
              <td>${coin.price}</td>
              <td className={coin.change >= 0 ? 'up' : 'down'}>
                {coin.change >= 0 ? '↑' : '↓'} {Math.abs(coin.change)}%
              </td>
              <td>{coin.marketCap}</td>
              <td>{coin.volume}</td>
              <td>{coin.supply}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Format số có đơn vị như B (Billion), M (Million)
const formatNumber = (num) => {
  if (!num) return 'N/A';
  if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  return num.toLocaleString();
};

const formatSupply = (supply, symbol) => {
  if (!supply) return 'N/A';
  const value = formatNumber(supply);
  return `${value} ${symbol.toUpperCase()}`;
};

export default CryptoTable;
