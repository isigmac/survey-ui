import { FC } from "react";
import { useTitle } from "ahooks";

import useLoadQuestionListData from "../../hooks/useLoadQuestionListData";

//ui
import { Typography, Empty, Spin } from "antd";

import styles from "./common.module.scss";
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";

const Star: FC = () => {
  useTitle("Star Survey");

  const { Title } = Typography;

  const { data = {}, loading } = useLoadQuestionListData({ isStar: true });
  const { list = [], total = 0 } = data;

  return (
    <div>
      {/* header  */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Star Survey({total})</Title>
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
      <div className={styles.footer}>pagination... </div>
    </div>
  );
};

export default Star;
