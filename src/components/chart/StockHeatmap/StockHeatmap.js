import React from "react";
import "./StockHeatmap.scss";

const sampleData = [
  { symbol: "AAPL", name: "Apple", change: 2.15, price: 184.35, size: 2 },
  { symbol: "MSFT", name: "Microsoft", change: -1.12, price: 320.55, size: 2 },

  { symbol: "AAPL", name: "Apple", change: 2.15, price: 184.35, size: 2 },
  { symbol: "MSFT", name: "Microsoft", change: -1.12, price: 320.55, size: 2 },
  { symbol: "AAPL", name: "Apple", change: 2.15, price: 184.35, size: 2 },

  { symbol: "AAPL", name: "Apple", change: 2.15, price: 184.35, size: 2 },
  { symbol: "MSFT", name: "Microsoft", change: -1.12, price: 320.55, size: 2 },
  { symbol: "AAPL", name: "Apple", change: 2.15, price: 184.35, size: 2 },
  { symbol: "MSFT", name: "Microsoft", change: -1.12, price: 320.55, size: 2 },
  { symbol: "TSLA", name: "Tesla", change: 4.21, price: 202.76, size: 1 },
  { symbol: "GOOGL", name: "Google", change: -0.85, price: 128.44, size: 1 },
  { symbol: "NVDA", name: "NVIDIA", change: 3.67, price: 678.12, size: 1 },
  { symbol: "AMZN", name: "Amazon", change: -2.31, price: 115.2, size: 1 },
  { symbol: "META", name: "Meta", change: 1.75, price: 312.3, size: 1 },
  { symbol: "NFLX", name: "Netflix", change: -0.53, price: 398.1, size: 1 },
  { symbol: "INTC", name: "Intel", change: 0.32, price: 41.2, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "INTC", name: "Intel", change: 0.32, price: 41.2, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "AMZN", name: "Amazon", change: -2.31, price: 115.2, size: 1 },
  { symbol: "META", name: "Meta", change: 1.75, price: 312.3, size: 1 },
  { symbol: "NFLX", name: "Netflix", change: -0.53, price: 398.1, size: 1 },
  { symbol: "INTC", name: "Intel", change: 0.32, price: 41.2, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "INTC", name: "Intel", change: 0.32, price: 41.2, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "INTC", name: "Intel", change: 0.32, price: 41.2, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "INTC", name: "Intel", change: 0.32, price: 41.2, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "INTC", name: "Intel", change: 0.32, price: 41.2, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
  { symbol: "ORCL", name: "Oracle", change: -1.12, price: 105.3, size: 1 },
];

const StockHeatmap = () => {
  return (
    <div className="heatmap-grid">
      {sampleData.map((stock, index) => {
        const colorClass =
          stock.change > 0
            ? "positive"
            : stock.change < 0
            ? "negative"
            : "neutral";

        return (
          <div
            key={index}
            className={`heatmap-item ${colorClass}`}
            style={{
              gridColumnEnd: `span ${stock.size}`,
              gridRowEnd: `span ${stock.size}`,
            }}
          >
            <div className="symbol">{stock.symbol}</div>
            <div className="price">${stock.price.toFixed(2)}</div>
            <div className="change">
              {stock.change > 0 ? "+" : ""}
              {stock.change.toFixed(2)}%
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StockHeatmap;
