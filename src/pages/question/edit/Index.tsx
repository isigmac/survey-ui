import { FC } from "react";
import { useDispatch } from "react-redux";

import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

//ui

import styles from "./Index.module.scss";
import EditCanvas from "./EditCanvas";
import { selectedIdChangedAction } from "../../../store/componentsReducer";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import EditHeader from "./EditHeader";

const Edit: FC = () => {
  const { loading } = useLoadQuestionData();
  const dispatch = useDispatch();

  function clearSelectedId() {
    dispatch(selectedIdChangedAction(""));
  }

  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: "white", height: "40px " }}>
        {" "}
        <EditHeader />
      </div>

      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div style={{ padding: "15px" }}>
              <LeftPanel></LeftPanel>
            </div>
          </div>

          <div className={styles.main} onClick={clearSelectedId}>
            <div className={styles["canvas-wrapper"]}>
              <div style={{ height: "900px" }}>
                <EditCanvas loading={loading}></EditCanvas>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div style={{ padding: "15px" }}>
              <RightPanel></RightPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
