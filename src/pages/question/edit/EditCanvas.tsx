import { FC } from "react";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";
import { ComponentInfo } from "../../../store/componentsReducer";
import { getComponentConfigByType } from "../../../components/QuestionComponents";

//ui
import { Spin } from "antd";
import styles from "./EditCanvas.module.scss";
import classNames from "classnames";

type PropsType = {
  loading: boolean;
};

//定义在外面，每次刷新不用重新注册
function buildComponent(componentInfo: ComponentInfo) {
  const { type, props } = componentInfo;
  const config = getComponentConfigByType(type);
  if (config === null) {
    return null;
  }

  const { Component } = config;

  return <Component {...props} />;
}

const EditCanvas: FC<PropsType> = ({ loading }) => {
  const componentList = useGetComponentsInfo();

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Spin></Spin>
      </div>
    );
  }

  const wrapperClass = styles["component-wrapper"];
  const itemClassName = classNames({
    [wrapperClass]: true,
  });

  return (
    <div className={styles.canvas}>
      {componentList.map((c) => {
        const { fe_id } = c;
        return (
          <div key={fe_id} className={itemClassName}>
            <div className={styles["readonly-component"]}>{buildComponent(c)}</div>
          </div>
        );
      })}

      {/* <div className={itemClassName}>
        <div className={styles['readonly-component']}>
          <QuestionTitle></QuestionTitle>
        </div>
      </div>
      <div className={itemClassName}>
        <div className={styles['readonly-component']}>
          <QuestionInput></QuestionInput>
        </div>
      </div> */}
    </div>
  );
};

export default EditCanvas;
