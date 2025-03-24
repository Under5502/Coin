// BinanceBody.jsx
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ApexCharts from "react-apexcharts";
import "./BinanceBody.scss";

const BinanceBody = () => {
  const [candlestickData, setCandlestickData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M");
  const wsRef = useRef(null);

  const handleTimeframeChange = (value) => {
    setSelectedTimeframe(value);
  };

  const getIntervalFromTimeframe = (tf) => {
    switch (tf) {
      case "1M":
        return "1d";
      case "1D":
        return "1h";
      case "1H":
        return "1m";
      default:
        return "1h";
    }
  };

  useEffect(() => {
    const interval = getIntervalFromTimeframe(selectedTimeframe);

    const fetchInitialData = async () => {
      try {
        const res = await axios.get(
          `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${interval}&limit=50`
        );
        const initialCandles = res.data.map((c) => ({
          x: new Date(c[0]),
          y: [
            parseFloat(c[1]),
            parseFloat(c[2]),
            parseFloat(c[3]),
            parseFloat(c[4]),
          ],
        }));
        setCandlestickData(initialCandles);

        const lastClose = parseFloat(res.data[res.data.length - 1][4]);
        const prevClose = parseFloat(res.data[res.data.length - 2][4]);
        setCurrentPrice(lastClose);
        setPriceChange(((lastClose - prevClose) / prevClose) * 100);
      } catch (err) {
        console.error("Error fetching initial candles", err);
      }
    };

    fetchInitialData();

    const wsInterval = getIntervalFromTimeframe(selectedTimeframe);
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/btcusdt@kline_${wsInterval}`
    );
    wsRef.current = ws;

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const k = message.k;

      const newCandle = {
        x: new Date(k.t),
        y: [parseFloat(k.o), parseFloat(k.h), parseFloat(k.l), parseFloat(k.c)],
      };

      setCandlestickData((prevData) => {
        const lastCandle = prevData[prevData.length - 1];
        const updated =
          lastCandle && lastCandle.x.getTime() === newCandle.x.getTime()
            ? [...prevData.slice(0, -1), newCandle]
            : [...prevData, newCandle].slice(-50);

        const lastClose = newCandle.y[3];
        const prevClose = updated[updated.length - 2]?.y[3];
        if (lastClose && prevClose) {
          setCurrentPrice(lastClose);
          setPriceChange(((lastClose - prevClose) / prevClose) * 100);
        }

        return updated;
      });
    };

    return () => {
      if (wsRef.current) wsRef.current.close();
    };
  }, [selectedTimeframe]);

  const chartOptions = {
    chart: {
      type: "candlestick",
      background: "transparent",
      toolbar: { show: false },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: { enabled: true },
      opposite: true,
    },
    grid: {
      borderColor: "#ffffff22", // nhẹ nhàng, không quá nổi
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true, // ✅ Hiện đường lưới dọc theo ngày
        },
      },
      yaxis: {
        lines: {
          show: true, // ✅ Hiện đường lưới ngang theo giá
        },
      },
    },
    theme: {
      mode: "dark",
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#e11d48", // nến tăng
          downward: "#dc2626", // nến giảm
        },
      },
    },
  };

  return (
    <div className="binance-body">
      <div className="header">
        <div className="price-info">
          <h2>
            {currentPrice?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}{" "}
            USD
          </h2>
          <p className={priceChange < 0 ? "down" : "up"}>
            {(priceChange < 0 ? "" : "+") + Math.abs(priceChange).toFixed(2)}%
          </p>
        </div>

        <div className="dropdown">
          <button className="dropdown-button">
            {selectedTimeframe === "1M"
              ? "Monthly"
              : selectedTimeframe === "1D"
              ? "Daily"
              : "Hourly"}
            <span className="arrow">▼</span>
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => handleTimeframeChange("1M")}>Monthly</li>
            <li onClick={() => handleTimeframeChange("1D")}>Daily</li>
            <li onClick={() => handleTimeframeChange("1H")}>Hourly</li>
          </ul>
        </div>
      </div>

      <ApexCharts
        options={chartOptions}
        series={[{ data: candlestickData }]}
        type="candlestick"
        height={300}
      />
    </div>
  );
};

export default BinanceBody;
