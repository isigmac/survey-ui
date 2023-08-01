import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styes from "./MainLayout.module.scss";

const MainLayout: FC = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header className={styes.header}>
        <div className={styes.left}>Logo</div>
        <div className={styes.right}>Login</div>
      </Header>
      <Content className={styes.main}>
        <Outlet></Outlet>
      </Content>
      <Footer className={styes.footer}>
        Survey &copy; 2023 - present. Created by CY
      </Footer>
    </Layout>
  );
};

export default MainLayout;