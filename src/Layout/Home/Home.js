import "./Home.scss";
import Body from "../../components/Body/Body";
import DashBoard from "../../components/DashBoard/DashBoard";

import TableCoin from "../TableCoin/TableCoin";
import Heatmap from "../../components/chart/StockHeatmap/StockHeatmap";

function Signal() {
  return (
    <div className="home-container">
      <Heatmap />
      <TableCoin />
      <Body />
      <DashBoard />
    </div>
  );
}

export default Signal;
