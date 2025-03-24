import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Trang con sẽ render tại đây */}
      </main>
      <Sidebar />
    </>
  );
};

export default Layout;
