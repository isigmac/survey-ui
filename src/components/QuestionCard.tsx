import { FC, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRequest } from "ahooks";
import { QUESTION_EDIT_PATHNAME, QUESTION_STATISTICS_PATHNAME } from "../router";
import { updateQuestionService, copyQuestionService, deleteQuestionService } from "../services/question";

// ui
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
import classNames from "classnames";

type QuestionCardProps = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
  isDeleted: boolean;
};

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const nav = useNavigate();
  const { _id, title, isPublished, isStar, answerCount, createdAt, isDeleted } = props;

  const { confirm } = Modal;

  // #region star
  const [isStarState, setIsStarState] = useState(isStar);
  const { loading: changeStarLoading, run: handleStarChange } = useRequest(
    async () => {
      await updateQuestionService(_id, { isStar: !isStarState });
    },
    {
      manual: true,
      onSuccess() {
        setIsStarState(!isStarState);
        message.success("updated");
      },
    }
  );

  const isStarClass = styles["star"];
  const disStarClass = styles["dis-star"];
  const starClassName = classNames({
    [isStarClass]: isStarState,
    [disStarClass]: !isStarState,
  });
  //#endregion

  // #region create a copy
  const [api, contextHolder] = notification.useNotification();
  const { loading: copyLoading, run: handleCopy } = useRequest(
    // async () => {
    //   return await copyQuestionService(_id);
    // },
    async () => await copyQuestionService(_id),
    {
      manual: true,
      onSuccess(reponse) {
        const { id } = reponse;
        message.success("Copy completed, new survey:" + id);
        api.info({
          message: "Notification",
          description: "Copy completed, new survey:" + id,
          duration: 3,
        });

        nav(`${QUESTION_EDIT_PATHNAME}/${id}`);
      },
    }
  );

  //#endregion

  // #region delete
  const [isDeletedState, setIsDeletedState] = useState(isDeleted || false);
  const { loading: deleteLoading, run: deleteQuestion } = useRequest(async () => await deleteQuestionService(_id), {
    manual: true,
    onSuccess() {
      message.success("deleted");
      setIsDeletedState(true);
    },
  });

  function handleDelete() {
    confirm({
      title: "confirm to delete this survey?",
      icon: <ExclamationCircleOutlined />,
      onOk: deleteQuestion,
    });
  }
  // #endregion

  if (isDeletedState === true) return null;

  return (
    <Card hoverable={true} style={{ marginTop: 16, width: "100%" }}>
      {contextHolder}
      {isDeleted}: {isDeletedState}
      {/* top  */}
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={(isPublished ? QUESTION_STATISTICS_PATHNAME : QUESTION_EDIT_PATHNAME) + "/" + _id}>
            <Space>
              <StarOutlined
                className={starClassName}
                onClick={handleStarChange}
                disabled={changeStarLoading}
              ></StarOutlined>
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
      {/* footer  */}
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
            <Button
              type="text"
              size="small"
              icon={<StarOutlined className={starClassName} />}
              onClick={handleStarChange}
            >
              {isStarState ? "Dislike" : "Like"}
            </Button>
            <Popconfirm
              title={`Confirm to create a copy of the survey[${title}]?`}
              okText="Confirm"
              cancelText="Cancel"
              onConfirm={handleCopy}
            >
              <Button type="text" size="small" icon={<CopyOutlined />} disabled={copyLoading}>
                Copy
              </Button>
            </Popconfirm>

            <Button type="text" size="small" icon={<DeleteOutlined />} onClick={handleDelete} disabled={deleteLoading}>
              Delete
            </Button>
          </Space>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
