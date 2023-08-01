import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <>
      <div>MainLayout header</div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>MainLayout footer</div>
    </>
  );
};

export default MainLayout;
