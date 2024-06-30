import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex ">
      <div className="flex sticky top-0 h-[100vh]">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
