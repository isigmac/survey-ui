import { FC } from "react";
import { useTitle } from "ahooks";

// ui
import { Typography, Spin, Empty } from "antd";

import styles from "./common.module.scss";
import ListSearch from "../../components/ListSearch.tsx";
import QuestionCard from "../../components/QuestionCard.tsx";
import ListPagination from "../../components/ListPagination.tsx";
import useLoadQuestionListData from "../../hooks/useLoadQuestionListData.ts";

const MyList: FC = () => {
  useTitle("Survey - My Survey");

  const { Title } = Typography;

  const { data = {}, loading } = useLoadQuestionListData({});
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
        {!loading && list.length === 0 ? (
          <Empty description="no data found" />
        ) : (
          list.map((q: any) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q}></QuestionCard>;
          })
        )}
      </div>

      {/* footer  */}
      <div className={styles.footer}>
        <ListPagination total={total}></ListPagination>
      </div>
    </>
  );
};

export default MyList;
