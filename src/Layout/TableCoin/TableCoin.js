import TableBottom from "../../components/chart/TableCoinBottom/TableBottom";
import NarrativesTable from "../../components/chart/TableCoinMid/NarrativesTable";
import BitcoinExchange from "../../components/chart/TableCoinTop/BitcoinExchange";
import NetFlowChart from "../../components/chart/TableCoinTop/NetFlowChart";

function Body() {
  return (
    <div className="Table-container">
      <div className="top-coin">
        <NetFlowChart />
        <BitcoinExchange />
      </div>
      <div className="mid-coin">
        <NarrativesTable />
      </div>
      <div className="bottom-coin">
        <TableBottom />
      </div>
    </div>
  );
}

export default Body;
