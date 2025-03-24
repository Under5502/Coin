import React, { useEffect, useState } from "react";
import "./USDCWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const USDCWidget = () => {
  const numTicks = 70;
  const maxPrice = 100000;

  const [price, setPrice] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const data = [
    { label: "Fees", value: "0.18 ETH", color: "#FFD166" },
    { label: "Rewards", value: "0.18 ETH", color: "#7E7E7E" },
    { label: "Fees", value: "0.18 ETH", color: "#BFBFBF" },
    { label: "Staked", value: "0.18 ETH", color: "#5AA9E6" },
    { label: "Supply", value: "0.18 ETH", color: "#78E586" },
  ];

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const livePrice = parseFloat(data.p);
      setPrice(livePrice);

      const percent = Math.min((livePrice / maxPrice) * 90, 100);
      const index = Math.floor((percent / 100) * numTicks);
      setHighlightIndex(index);
    };

    return () => ws.close();
  }, []);

  return (
    <div className="current-round">
      <div className="current-round__header">
        <h2>Current Round</h2>
        <span className="status">Initialised <FontAwesomeIcon icon={faCheck} /></span>
      </div>

      <div className="current-round__content">
        <div className="circle-wrapper">
          <div className="circle-border">
            <div className="ticks">
              {/* Nền tick liền mạch (tối) */}
              {[...Array(numTicks)].map((_, i) => (
                <div
                  key={`bg-${i}`}
                  className="tick tick-bg"
                  style={{ transform: `rotate(${(270 / numTicks) * i}deg)` }}
                />
              ))}
              {/* Tick active (màu đỏ) */}
              {[...Array(numTicks)].map((_, i) => (
                <div
                  key={`active-${i}`}
                  className={`tick ${i <= highlightIndex ? "active" : ""}`}
                  style={{ transform: `rotate(${(270 / numTicks) * i}deg)` }}
                />
              ))}
            </div>
          </div>

          <div className="center-info">
            <div className="currency">BTC/USDT</div>
            <div className="amount">
              ${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        <div className="details">
          {data.map((item, index) => (
            <div className="detail-item" key={index}>
              <span
                className="dot"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="label">{item.label}</span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default USDCWidget;
