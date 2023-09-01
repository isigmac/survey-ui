import { FC } from "react";
import classNames from "classnames";
import { message } from "antd";
import { useDispatch } from "react-redux";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";
import { selectedIdChangedAction } from "../../../store/componentsReducer";

//ui
import styles from "./Layers.module.scss";

const Layers: FC = () => {
  const { componentList, selectedId } = useGetComponentsInfo();
  const dispatch = useDispatch();

  // 点击选中组件
  function handleTitleClick(fe_id: string) {
    const curComp = componentList.find((c) => c.fe_id === fe_id);
    if (curComp && curComp.isHidden) {
      message.info("不能选中隐藏的组件");
      return;
    }
    if (fe_id !== selectedId) {
      // 当前组件未被选中，执行选中
      dispatch(selectedIdChangedAction(fe_id));
      return;
    }
  }

  return (
    <>
      {componentList.map((c) => {
        const { fe_id, title } = c;

        // 拼接 title className
        const titleDefaultClassName = styles.title;
        const selectedClassName = styles.selected;
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        });

        return (
          <div key={fe_id} className={styles.wrapper}>
            <div
              className={titleClassName}
              onClick={() => {
                handleTitleClick(fe_id);
              }}
            >
              {title}
            </div>
            <div className={styles.handler}>Button</div>
          </div>
        );
      })}
    </>
  );
};

export default Layers;
