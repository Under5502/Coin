import { narrativesCoins } from "../TableCoinMid/narrativesData";
import "./TableBottom.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function TableBottom() {
  const [coins, setCoins] = useState([]);

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
    <div className="navigates-bottom">
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
}

export default TableBottom;
