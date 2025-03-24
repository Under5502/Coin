import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Signal from "./Layout/Home/Home";
import Binance from "./Layout/Binance/BinanceHome/Binance";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout là route cha */}
        <Route path="/" element={<Layout />}>
          {/* Signal là route con, sẽ render trong <Outlet /> */}
          <Route index element={<Signal />} />
          <Route path="binance" element={<Binance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
