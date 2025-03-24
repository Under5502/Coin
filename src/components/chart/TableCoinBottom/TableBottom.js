import { narrativesCoins } from "../TableCoinMid/narrativesData";
import "./TableBottom.scss";
function TableBottom() {
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
}

export default TableBottom;
