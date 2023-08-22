import { FC } from "react";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";
import { ComponentInfo } from "../../../store/componentsReducer";
import { getComponentConfigByType } from "../../../components/QuestionComponents";
import { useDispatch } from "react-redux";
import { selectedIdChangedAction } from "../../../store/componentsReducer";
import useCanvasShortcuts from "../../../hooks/useCanvasShortcuts";

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

  useCanvasShortcuts();

  function handleClick(e: React.MouseEvent<Element, MouseEvent>, id: string) {
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
  const lockedClassName = styles["locked"];

  return (
    <div className={styles.canvas}>
      {componentList
        .filter((c) => c.isHidden === false)
        .map((c) => {
          const { fe_id } = c;

          const itemClassName = classNames({
            [wrapperClassName]: true,
            [selectedClassName]: fe_id === selectedId,
            [lockedClassName]: c.isLocked === true,
          });

          return (
            <div
              key={fe_id}
              className={itemClassName}
              onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleClick(e, fe_id)}
            >
              <div className={styles["readonly-component"]}>{buildComponent(c)}</div>
            </div>
          );
        })}
    </div>
  );
};

export default EditCanvas;
