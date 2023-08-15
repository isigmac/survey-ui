import { FC } from "react";

//ui
import styles from "./EditCanvas.module.scss";
import QuestionTitle from "../../../components/QuestionComponents/QuestionTitle/Component";
import QuestionInput from "../../../components/QuestionComponents/QuestionInput/Component";
import classNames from "classnames";

const EditCanvas: FC = () => {
  const wrapperClass = styles["component-wrapper"];
  const itemClassName = classNames({
    [wrapperClass]: true,
  });

  return (
    <div className={styles.canvas}>
      <div className={itemClassName}>
        <div className={styles["readonly-component"]}>
          <QuestionTitle></QuestionTitle>
        </div>
      </div>
      <div className={itemClassName}>
        <div className={styles["readonly-component"]}>
          <QuestionInput></QuestionInput>
        </div>
      </div>
    </div>
  );
};

export default EditCanvas;
