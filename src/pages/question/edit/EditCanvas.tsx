import { FC } from "react";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";
import { ComponentInfo } from "../../../store/componentsReducer";
import { getComponentConfigByType } from "../../../components/QuestionComponents";
import { useDispatch } from "react-redux";
import { selectedIdChangedAction } from "../../../store/componentsReducer";

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
  const dispatch = useDispatch();
  const { componentList, selectedId } = useGetComponentsInfo();

  function handleClick(e: MouseEvent, id: string) {
    e.stopPropagation(); //阻止冒泡
    dispatch(selectedIdChangedAction(id));
  }

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Spin></Spin>
      </div>
    );
  }

  const wrapperClassName = styles["component-wrapper"];
  const selectedClassName = styles["selected"];

  return (
    <div className={styles.canvas}>
      {componentList.map((c) => {
        const { fe_id } = c;

        const itemClassName = classNames({
          [wrapperClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        });

        return (
          <div key={fe_id} className={itemClassName} onClick={(e) => handleClick(e, fe_id)}>
            <div className={styles["readonly-component"]}>{buildComponent(c)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EditCanvas;