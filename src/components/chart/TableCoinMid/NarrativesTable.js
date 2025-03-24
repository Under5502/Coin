// src/components/NarrativesTable/NarrativesTable.jsx
import React from "react";
import "./NarrativesTable.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const NarrativesTable = () => {
  const [coins, setCoins] = useState([]);
  const [narratives, setNarratives] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 11,
              page: 1,
            },
          }
        );

        const totalMarketCap = response.data.reduce(
          (acc, coin) => acc + coin.market_cap,
          0
        );

        const narrativesData = response.data.map((coin) => ({
          name: coin.symbol.toUpperCase(),
          value: `${((coin.market_cap / totalMarketCap) * 100).toFixed(2)}%`,
          change: coin.market_cap_change_percentage_24h.toFixed(2),
        }));

        setNarratives(narrativesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(res.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchTopCoins();
  }, []);
  return (
    <div className="narratives">
      <div className="narratives-top">
        <div className="narratives__header">
          <h2>Narratives performance</h2>
          <div className="narratives__tabs">
            <button className="active">24h</button>
            <button disabled>1w</button>
            <button disabled>1m</button>
            <button disabled>1y</button>
          </div>
        </div>

        <div className="narratives__grid">
          <div className="narratives__item active">
            <p>Dom: 100%</p>
            <h4>All</h4>
          </div>
          {narratives.map((item, index) => (
            <div className="narratives__item" key={index}>
              <p>{item.value}</p>
              <h4>{item.name}</h4>
              <span className={item.change >= 0 ? "green" : "red"}>
                {item.change >= 0 ? "+" : ""}
                {item.change}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="narratives__table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={coin.id}>
                <td>{index + 1}</td>
                <td className="coin-name">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    width={20}
                    height={20}
                    style={{ marginRight: 8 }}
                  />
                  {coin.name}
                </td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td
                  className={
                    coin.price_change_percentage_24h >= 0 ? "green" : "red"
                  }
                >
                  {coin.price_change_percentage_24h >= 0 ? "↑" : "↓"}{" "}
                  {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NarrativesTable;
