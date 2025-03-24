import "./BinanceTop.scss";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function BinanceTop() {
  const data = [
    {
      name: "Binance",
      symbol: "BTC",
      price: "$242,424",
      amount: "3.3223455 BTC",
      change: "-2.4%",
      changeType: "Today",
      changeDirection: "down",
      changeColor: "red",
      progress: -23,
      icon: "🟠",
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      price: "$462,424",
      amount: "3.3223455 LTC",
      change: "+3.2%",
      changeType: "Weekly",
      changeDirection: "up",
      changeColor: "green",
      progress: 22,
      icon: "🔵",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$435,424",
      amount: "3.3223455 ETH",
      change: "+2.4%",
      changeType: "Monthly",
      changeDirection: "up",
      changeColor: "green",
      progress: 30,
      icon: "⚫",
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      price: "$462,424",
      amount: "3.3223455 LTC",
      changeType: "Weekly",
      change: "+3.2%",
      changeDirection: "up",
      changeColor: "green",
      progress: 22,
      icon: "🔵",
    },
  ];

  return (
    <div className="binance-top-container">
      <div className="binance-top-content">
        <div className="binance-top-title">
          <h2 className="bnt-h2">Crypto Market Insights and Analytics</h2>
          <h6 className="bnt-h6">
            TOP Cryptocurrencies Price List by Market Capitalization.
          </h6>
        </div>
        <div className="crypto-card-grid">
          {data.map((coin, index) => (
            <div className="crypto-card" key={index}>
              <div className="card-header">
                <div className="coin-info">
                  <div className="coin-name">{coin.name}</div>
                  <div className="coin-symbol">{coin.symbol}</div>
                </div>
                <div className="coin-icon-wrapper">
                  <div className="coin-icon">{coin.icon}</div>
                  <div className="coin-progress">
                    {coin.progress > 0
                      ? `+${coin.progress}%`
                      : `${coin.progress}%`}
                  </div>
                </div>
              </div>
              <div className="coin-price">{coin.price}</div>
              <div className="coin-amount">{coin.amount}</div>
              <div className={`coin-change change-${coin.changeColor}`}>
                {coin.changeDirection === "up" ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
                <span>
                  {coin.change} / {coin.changeType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BinanceTop;
