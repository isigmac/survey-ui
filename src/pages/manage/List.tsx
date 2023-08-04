import { FC } from "react";
// import { useSearchParams } from "react-router-dom";
import { useTitle, useRequest } from "ahooks";

import { getQuestionListService } from "../../services/question";

// ui
import { Typography, Spin } from "antd";

import styles from "./common.module.scss";
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";

const List: FC = () => {
  useTitle("Survey - My Survey");

  const { Title } = Typography;

  const { data = {}, loading } = useRequest(getQuestionListService);
  const { list = [], total = 0 } = data;

  return (
    <>
      {/* header  */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>My Survey({total}) </Title>
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
        {!loading &&
          list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q}></QuestionCard>;
          })}
      </div>
      <div className={styles.footer}>load more... </div>
    </>
  );
};

export default List;
