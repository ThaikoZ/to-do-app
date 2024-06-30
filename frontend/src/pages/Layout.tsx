import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-[100vh]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
