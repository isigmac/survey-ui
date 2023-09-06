import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  deleteComponentAction,
  hideUnHideComponentAction,
  lockUnlockComponentAction,
  copyComponentAction,
  pasteComponentAction,
  switchComponentAction,
} from "../../../store/componentsReducer";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";

//ui
import { Space, Button, Tooltip } from "antd";
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined,
  UpOutlined,
  DownOutlined,
  UndoOutlined,
  RedoOutlined,
} from "@ant-design/icons";

import { ActionCreators as UndoActionCreators } from "redux-undo";

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, selectedComponent, copiedComponent, componentList } = useGetComponentsInfo();
  const { isLocked } = selectedComponent || {};

  const selectedIndex = componentList.findIndex((c) => c.fe_id === selectedId);
  const isTop = selectedIndex === 0;
  const isBottom = selectedIndex === componentList.length - 1;

  function handleDelete() {
    dispatch(deleteComponentAction());
  }

  function handleHide(id: string) {
    dispatch(hideUnHideComponentAction(id));
  }

  function handleLock(id: string) {
    dispatch(lockUnlockComponentAction(id));
  }

  function handleCopy() {
    dispatch(copyComponentAction());
  }

  function handlePaste() {
    dispatch(pasteComponentAction());
  }

  function handleMoveUp() {
    if (isTop) return;
    dispatch(switchComponentAction({ oldIndex: selectedIndex, newIndex: selectedIndex - 1 }));
  }

  function handleMoveDown() {
    if (isBottom) return;
    dispatch(switchComponentAction({ oldIndex: selectedIndex, newIndex: selectedIndex + 1 }));
  }

  function handleUndo() {
    dispatch(UndoActionCreators.undo());
  }

  function handleRedo() {
    dispatch(UndoActionCreators.redo());
  }

  return (
    <div>
      <Space>
        <Tooltip title="delete">
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={handleDelete}
            disabled={!selectedId || isLocked}
          ></Button>
        </Tooltip>
        <Tooltip title="hide">
          <Button
            shape="circle"
            icon={<EyeInvisibleOutlined />}
            onClick={() => handleHide(selectedId)}
            disabled={!selectedId || isLocked}
          ></Button>
        </Tooltip>

        <Tooltip title="lock">
          <Button
            shape="circle"
            icon={<LockOutlined />}
            onClick={() => handleLock(selectedId)}
            type={isLocked ? "primary" : "default"}
            disabled={!selectedId}
          ></Button>
        </Tooltip>

        <Tooltip title="copy">
          <Button shape="circle" icon={<CopyOutlined />} onClick={handleCopy} disabled={!selectedId}></Button>
        </Tooltip>

        <Tooltip title="paste">
          <Button shape="circle" icon={<BlockOutlined />} onClick={handlePaste} disabled={!copiedComponent}></Button>
        </Tooltip>

        <Tooltip title="move up">
          <Button shape="circle" icon={<UpOutlined />} onClick={handleMoveUp} disabled={isTop}></Button>
        </Tooltip>

        <Tooltip title="move down">
          <Button shape="circle" icon={<DownOutlined />} onClick={handleMoveDown} disabled={isBottom}></Button>
        </Tooltip>

        <Tooltip title="undo">
          <Button shape="circle" icon={<UndoOutlined />} onClick={handleUndo}></Button>
        </Tooltip>

        <Tooltip title="redo">
          <Button shape="circle" icon={<RedoOutlined />} onClick={handleRedo}></Button>
        </Tooltip>
      </Space>
    </div>
  );
};

export default EditToolbar;
