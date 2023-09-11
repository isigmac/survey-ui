import { FC } from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData.ts";

//ui
import { Button, Result, Spin } from "antd";
import useGetPageInfo from "../../../hooks/useGetPageInfo.ts";
import { useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";

import styles from "./index.module.scss";

const Statistics: FC = () => {
  const { loading } = useLoadQuestionData();
  const { isPublished, title } = useGetPageInfo();
  const nav = useNavigate();

  useTitle(`Statistics - ${title}`);

  const LoadingElement = (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <Spin></Spin>
    </div>
  );

  function generateContentElement() {
    if (!isPublished) {
      return (
        <div style={{ flex: "1" }}>
          <Result
            status="warning"
            title="This survey is not published yet."
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Button type="primary" onClick={() => nav(-1)}>
                Return
              </Button>
            }
          />
        </div>
      );
    }

    return (
      <>
        <div className={styles.left}>left</div>
        <div className={styles.main}>middle</div>
        <div className={styles.right}>right</div>
      </>
    );
  }

  return (
    <div className={styles["content-wrapper"]}>
      {loading && LoadingElement}
      <div className={styles.content}>{loading ? LoadingElement : generateContentElement()}</div>
    </div>
  );
};

export default Statistics;
