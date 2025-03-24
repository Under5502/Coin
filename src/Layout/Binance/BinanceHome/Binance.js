import BinanceTop from "../BinanceTop/BinanceTop";
import "./Binance.scss";
import BinanceBody from "../BinanceBody/BinanceBody";
import USDCWidget from "../BinanceBody/USDCWidget";
import CryptoTable from "../BinanceBody/CryptoTable";

function Binance() {
  return (
    <div className="binance-container">
      <BinanceTop />
      <BinanceBody />
      <USDCWidget />
      <CryptoTable />
    </div>
  );
}

export default Binance;
