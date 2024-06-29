import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-[100vh] ">
      {/* <div className="w-60 bg-primary-100"></div> */}
      <Outlet />
    </div>
  );
};

export default Layout;
