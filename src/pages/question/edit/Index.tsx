import { FC } from "react";
import { useDispatch } from "react-redux";

import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

//ui

import styles from "./Index.module.scss";
import EditCanvas from "./EditCanvas";
import { selectedIdChangedAction } from "../../../store/componentsReducer";

const Edit: FC = () => {
  const { loading } = useLoadQuestionData();
  const dispatch = useDispatch();

  function clearSelectedId() {
    dispatch(selectedIdChangedAction(""));
  }

  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: "white", height: "40px " }}> header</div>

      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main} onClick={clearSelectedId}>
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
