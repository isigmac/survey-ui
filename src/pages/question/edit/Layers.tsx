import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";
import {
  hideUnHideComponentAction,
  lockUnlockComponentAction,
  modifyComponentTitleAction,
  selectedIdChangedAction,
  switchComponentAction,
} from "../../../store/componentsReducer";

//ui
import styles from "./Layers.module.scss";
import { Button, Input, Space, message } from "antd";
import classNames from "classnames";
import { EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";
import SortableContainer from "../../../components/DragSortable/SortableContainer";
import SortableItem from "../../../components/DragSortable/SortableItem";

const Layers: FC = () => {
  const { componentList, selectedId } = useGetComponentsInfo();
  const dispatch = useDispatch();

  const [editingTitleId, setEditTitleId] = useState("");

  // 点击选中组件
  function handleTitleClick(fe_id: string) {
    const currentComponent = componentList.find((c) => c.fe_id === fe_id);
    if (currentComponent && currentComponent.isHidden) {
      message.info("不能选中隐藏的组件");
      return;
    }

    if (fe_id !== selectedId) {
      // 当前组件未被选中，执行选中
      dispatch(selectedIdChangedAction(fe_id));
      setEditTitleId("");
      return;
    }

    setEditTitleId(fe_id);
  }

  //edit title
  function changeTitle(event: ChangeEvent<HTMLInputElement>) {
    const newTitle = event.currentTarget.value.trim();

    if (!newTitle) return;
    if (!selectedId) return;

    dispatch(modifyComponentTitleAction({ id: selectedId, newTitle }));
  }

  // toggle hide/lock
  function toggleHidden(id: string) {
    dispatch(hideUnHideComponentAction(id));
  }

  // toggle lock/unlock
  function toggleLock(id: string) {
    dispatch(lockUnlockComponentAction(id));
  }

  //convert components to sortable components
  const sortableComponentList = componentList.map((c) => {
    return { ...c, id: c.fe_id };
  });

  // handle dragend
  function handleDragEnd(oldIndex: number, newIndex: number) {
    dispatch(switchComponentAction({ oldIndex, newIndex }));
  }

  return (
    <SortableContainer items={sortableComponentList} onDragEnd={handleDragEnd}>
      {componentList.map((c) => {
        const { fe_id, title, isHidden, isLocked } = c;

        // 拼接 title className
        const titleDefaultClassName = styles.title;
        const selectedClassName = styles.selected;
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        });

        return (
          <SortableItem id={fe_id} key={fe_id}>
            <div className={styles.wrapper}>
              <div
                className={titleClassName}
                onClick={() => {
                  handleTitleClick(fe_id);
                }}
              >
                {editingTitleId === fe_id && (
                  <Input
                    value={title}
                    onPressEnter={() => {
                      handleTitleClick("");
                    }}
                    onBlur={() => {
                      handleTitleClick("");
                    }}
                    onChange={changeTitle}
                  ></Input>
                )}
                {editingTitleId !== fe_id && title}
              </div>

              <div className={styles.handler}>
                <Space direction="horizontal">
                  <Button
                    size="small"
                    shape="circle"
                    className={!isHidden ? styles.btn : ""}
                    icon={<EyeInvisibleOutlined type={isHidden ? "primary" : "text"} />}
                    onClick={() => toggleHidden(fe_id)}
                  ></Button>

                  <Button
                    size="small"
                    shape="circle"
                    className={isLocked ? "" : styles.btn}
                    icon={<LockOutlined />}
                    type={isLocked ? "primary" : "text"}
                    onClick={() => toggleLock(fe_id)}
                  ></Button>
                </Space>
              </div>
            </div>
          </SortableItem>
        );
      })}
    </SortableContainer>
  );
};

export default Layers;
