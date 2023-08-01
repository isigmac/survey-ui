import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Space, Divider } from "antd";

import styles from "./ManageLayout.module.scss";

const ManageLayout: FC = () => {
  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />} block>
            Create Survey
          </Button>
          <Divider style={{ borderTop: "transparent" }} />
          <Button
            type="text"
            size="large"
            icon={<BarsOutlined />}
            block
            onClick={() => nav("/manage/list")}
          >
            My Survey
          </Button>
          <Button
            type="text"
            size="large"
            icon={<StarOutlined />}
            block
            onClick={() => nav("/manage/star")}
          >
            Star Survey
          </Button>
          <Button
            type="text"
            size="large"
            icon={<DeleteOutlined />}
            block
            onClick={() => nav("/manage/trash")}
          >
            Trash
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ManageLayout;
