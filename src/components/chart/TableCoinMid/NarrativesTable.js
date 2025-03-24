// src/components/NarrativesTable/NarrativesTable.jsx
import React from "react";
import "./NarrativesTable.scss";

import { narrativesCoins, narrativesSummary } from "./narrativesData";
const NarrativesTable = () => {
  return (
    <div className="narratives">
      <div className="narratives-top">
        <div className="narratives__header">
          <h2>Narratives performance</h2>
          <div className="narratives__tabs">
            <button className="active">24h</button>
            <button>1w</button>
            <button>1m</button>
            <button>1y</button>
          </div>
        </div>

        <div className="narratives__grid">
          <div className="narratives__item active">
            <p>Dom: 100%</p>
            <h4>All</h4>
          </div>
          {narrativesSummary.map((item, index) => (
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
              <th>Net Inflow</th>
            </tr>
          </thead>
          <tbody>
            {narrativesCoins.map((coin, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{coin.name}</td>
                <td>{coin.price}</td>
                <td className={coin.change >= 0 ? "green" : "red"}>
                  {coin.change >= 0 ? "↑" : "↓"} {Math.abs(coin.change)}%
                </td>
                <td className={coin.inflow >= 0 ? "green" : "red"}>
                  {coin.inflow >= 0 ? "+" : ""}
                  {coin.inflow}%
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
