import { FC } from "react";
import { useNavigate } from "react-router-dom";

//ui
import styles from "./EditHeader.module.scss";
import { Button, Typography, Space } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const EditHeader: FC = () => {
  const nav = useNavigate();
  const { Title } = Typography;

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space direction="horizontal">
            <Button type="link" icon={<LeftOutlined onClick={() => nav(-1)} />}>
              Return
            </Button>
            <Title className={styles["survey-title"]}>Survey Title</Title>
          </Space>
        </div>
        <div className={styles.center}>center</div>
        <div className={styles.right}>
          {" "}
          <Space direction="horizontal">
            <Button type="link">Save</Button>
            <Button type="primary">Publish</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;
