import { FC } from "react";

import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

//ui

import styles from "./Index.module.scss";
import EditCanvas from "./EditCanvas";

const Edit: FC = () => {
  const { loading } = useLoadQuestionData();

  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: "white", height: "40px " }}> header</div>

      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div className={styles["canvas-wrapper"]}>
              <div style={{ height: "900px" }}>
                <EditCanvas loading={loading}></EditCanvas>
              </div>
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
