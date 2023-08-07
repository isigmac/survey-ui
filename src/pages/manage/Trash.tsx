import { FC, useState } from "react";
import { useTitle, useRequest } from "ahooks";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData.ts";

import { purgeQuestionService, recoverQuestionService } from "../../services/question.ts";

//ui
import { Typography, Empty, Table, Tag, Space, Button, Modal, Spin, message } from "antd";
import { StarOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

import styles from "./common.module.scss";
import ListSearch from "../../components/ListSearch";
import ListPagination from "../../components/ListPagination.tsx";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title", //默认会取 dataIndex值
  },
  {
    title: "Published",
    dataIndex: "isPublished",
    render: (isPublished: boolean) => {
      return isPublished ? <Tag color="processing">Published</Tag> : <Tag>Draft</Tag>;
    },
  },
  {
    title: "Star",
    dataIndex: "isStar",
    render: (isStar: boolean) => {
      return isStar ? <StarOutlined style={{ color: "hotpink" }}></StarOutlined> : <StarOutlined></StarOutlined>;
    },
  },
  {
    title: "Answer Count",
    dataIndex: "answerCount",
  },
  {
    title: "Created DateTime",
    dataIndex: "createdAt",
  },
];

const Trash: FC = () => {
  useTitle("Trash");

  const { Title } = Typography;
  const { confirm } = Modal;

  const { data = {}, loading, refresh } = useLoadQuestionListData({ isDeleted: true });
  const { list: questionList = [], total = 0 } = data;

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  // #region delete
  const { loading: purgeLoading, run: purgeQuestion } = useRequest(
    async () => await purgeQuestionService(selectedKeys),
    {
      manual: true,
      debounceWait: 1000,
      onSuccess() {
        message.success("Purge completed");
        setSelectedKeys([]);
        refresh();
      },
    }
  );

  function handleDelete() {
    confirm({
      title: "confirm to delete?",
      icon: <ExclamationCircleOutlined />,
      content: "Survey can not recover after this action.",
      onOk: purgeQuestion,
    });
  }

  // #endregion

  // #region recover
  const { loading: recoverLoading, run: recoverQuestion } = useRequest(
    async () => await recoverQuestionService(selectedKeys),
    {
      manual: true,
      debounceWait: 1000,
      onSuccess() {
        message.success("recovered");
        setSelectedKeys([]);
        refresh();
      },
    }
  );

  function handleRecover() {
    confirm({
      title: "confirm to recover?",
      icon: <ExclamationCircleOutlined />,
      // content: "Survey can not recover after this action.",
      onOk: recoverQuestion,
    });
  }
  // #endregion

  const TableElement = (
    <>
      <div style={{ marginBottom: 16 }}>
        <Space>
          <Button
            type="primary"
            onClick={handleRecover}
            disabled={selectedKeys.length === 0 || purgeLoading || recoverLoading}
          >
            Recover
          </Button>
          <Button danger onClick={handleDelete} disabled={selectedKeys.length === 0 || purgeLoading || recoverLoading}>
            Delete
          </Button>
        </Space>
      </div>
      <Table
        rowKey={(q) => q._id}
        dataSource={questionList}
        columns={columns}
        pagination={false}
        // rowSelection={rowSelection}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            setSelectedKeys(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );
  return (
    <div>
      {/* header  */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Trash({total})</Title>
        </div>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </div>

      {/* content  */}
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: "center" }}>
            <Spin></Spin>
          </div>
        )}
        {!loading && questionList.length === 0 && <Empty description="no data found" />}
        {questionList.length > 0 && TableElement}
      </div>

      {/* footer  */}
      <div className={styles.footer}>
        <ListPagination total={total}></ListPagination>
      </div>
    </div>
  );
};

export default Trash;
