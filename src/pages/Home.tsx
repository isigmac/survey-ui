import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";

import { MANAGE_LIST_PATHNAME } from "../router";

import styles from "./Home.module.scss";

const Home: FC = () => {
  const nav = useNavigate();
  const { Title, Paragraph } = Typography;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>Survey | Vote online</Title>
        <Paragraph>
          Total Survey 100, published Survey 90, completed Survey 821{" "}
        </Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGE_LIST_PATHNAME)}>
            Quick Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
