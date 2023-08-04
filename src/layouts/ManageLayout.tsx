import { FC } from "react";
import { useRequest } from "ahooks";
import { createQuestionService } from "../services/question";

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { MANAGE_LIST_PATHNAME, MANAGE_STAR_PATHNAME, MANAGE_TRASH_PATHNAME, QUESTION_EDIT_PATHNAME } from "../router";

// ui
import { Button, Space, Divider, message } from "antd";
import styles from "./ManageLayout.module.scss";
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from "@ant-design/icons";

const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const {
    loading,
    // error,
    run: handleCreateClick,
  } = useRequest(createQuestionService, {
    manual: true,
    onSuccess(result) {
      const { id = "" } = result;
      message.info("create survey successfully.");
      nav(`${QUESTION_EDIT_PATHNAME}/${id}`);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            block
            onClick={handleCreateClick}
            disabled={loading}
          >
            Create Survey
          </Button>
          <Divider style={{ borderTop: "transparent" }} />
          <Button
            type={pathname.startsWith(MANAGE_LIST_PATHNAME) ? "default" : "text"}
            size="large"
            icon={<BarsOutlined />}
            block
            onClick={() => nav("/manage/list")}
          >
            My Survey
          </Button>
          <Button
            type={pathname.startsWith(MANAGE_STAR_PATHNAME) ? "default" : "text"}
            size="large"
            icon={<StarOutlined />}
            block
            onClick={() => nav("/manage/star")}
          >
            Star Survey
          </Button>
          <Button
            type={pathname.startsWith(MANAGE_TRASH_PATHNAME) ? "default" : "text"}
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
