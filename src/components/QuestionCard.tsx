import { FC } from "React";
import { useNavigate, Link } from "react-router-dom";
import { QUESTION_EDIT_PATHNAME, QUESTION_STATISTICS_PATHNAME } from "../router";

import { Card, Button, Space, Divider, Tag, Popconfirm, Modal, message, notification } from "antd";
import {
  EditOutlined,
  CopyOutlined,
  DeleteOutlined,
  StarOutlined,
  LineChartOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import styles from "./QuestionCard.module.scss";

type QuestionCardProps = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
  deleteQuestion?: (id: string) => void;
  publishQuestion?: (id: string) => void;
  revokeQuestion?: (id: string) => void;
};

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const nav = useNavigate();
  const {
    _id,
    title,
    isPublished,
    isStar,
    answerCount,
    createdAt,
    // deleteQuestion,
    // publishQuestion,
    // revokeQuestion,
  } = props;

  const { confirm } = Modal;

  function handleLike() {
    message.info("like...");
  }

  const [api, contextHolder] = notification.useNotification();
  const handleCopyByNotification = () => {
    api.info({
      message: "Notification",
      description: "Copy completed",
      duration: 3,
    });
  };

  function handleDelete() {
    confirm({
      title: "confirm to delete this survey?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        alert("delete...");
      },
    });
  }

  return (
    <Card hoverable={true} style={{ marginTop: 16, width: "100%" }}>
      {contextHolder}
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={(isPublished ? QUESTION_STATISTICS_PATHNAME : QUESTION_EDIT_PATHNAME) + "/" + _id}>
            <Space>
              {isStar && <StarOutlined style={{ color: "red" }}></StarOutlined>}
              {title}
            </Space>
          </Link>
        </div>

        <div className={styles.right}>
          <Space>
            {/* {isPublished ?  <span style={{ color: "green" }}>Published</span> : <span>Draft</span>} */}
            {isPublished ? <Tag color="processing">Published</Tag> : <Tag>Draft</Tag>}
            <span>Answer: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>

      <Divider style={{ margin: "12px 0" }}></Divider>

      <div className={styles["button-container"]}>
        <div className={styles.left}>
          <Space>
            <Button
              type="text"
              size="small"
              icon={<EditOutlined />}
              onClick={() => nav(QUESTION_EDIT_PATHNAME + "/" + _id)}
            >
              Edit
            </Button>
            <Button
              type="text"
              size="small"
              icon={<LineChartOutlined />}
              onClick={() => nav(QUESTION_STATISTICS_PATHNAME + "/" + _id)}
              disabled={!isPublished}
            >
              Statistics
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button type="text" size="small" icon={<StarOutlined />} onClick={handleLike}>
              {isStar ? "Dislike" : "Like"}
            </Button>
            <Popconfirm
              title={`Confirm to create a copy of the survey[${title}]?`}
              okText="Confirm"
              cancelText="Cancel"
              onConfirm={handleCopyByNotification}
            >
              <Button type="text" size="small" icon={<CopyOutlined />}>
                Copy
              </Button>
            </Popconfirm>

            <Button type="text" size="small" icon={<DeleteOutlined />} onClick={handleDelete}>
              Delete
            </Button>
          </Space>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
