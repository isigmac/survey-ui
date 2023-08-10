import { FC } from "react";
import { Outlet } from "react-router-dom";

import useLoadUserData from "../hooks/useLoadUserData";

//ui
import { Layout, Spin } from "antd";
import styes from "./MainLayout.module.scss";
import Logo from "../components/Logo";
import UserInfo from "../components/UserInfo";
import useAutoNavigation from "../hooks/useAutoNavigation";

const MainLayout: FC = () => {
  const { waitingUserData } = useLoadUserData();
  useAutoNavigation(waitingUserData);

  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header className={styes.header}>
        <div className={styes.left}>
          <Logo></Logo>
        </div>
        <div className={styes.right}>
          <UserInfo></UserInfo>
        </div>
      </Header>
      <Content className={styes.main}>
        {waitingUserData ? (
          <div style={{ textAlign: "center", verticalAlign: "middle", marginTop: "60px" }}>
            <Spin size="large" />
          </div>
        ) : (
          <Outlet />
        )}
      </Content>
      <Footer className={styes.footer}>Survey·&copy;·2023·-·present.·Created·by·C</Footer>
    </Layout>
  );
};

export default MainLayout;
