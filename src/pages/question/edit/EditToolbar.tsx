import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  deleteComponentAction,
  hideComponentAction,
  lockUnlockComponentAction,
  copyComponentAction,
  pasteComponentAction,
} from "../../../store/componentsReducer";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";

//ui
import { Space, Button, Tooltip } from "antd";
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined, CopyOutlined, BlockOutlined } from "@ant-design/icons";

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, selectedComponent, copiedComponent } = useGetComponentsInfo();
  const { isLocked } = selectedComponent || {};

  function handleDelete() {
    dispatch(deleteComponentAction());
  }

  function handleHide() {
    dispatch(hideComponentAction());
  }

  function handleLock() {
    dispatch(lockUnlockComponentAction());
  }

  function handleCopy() {
    dispatch(copyComponentAction());
  }

  function handlePaste() {
    dispatch(pasteComponentAction());
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
            onClick={handleHide}
            disabled={!selectedId || isLocked}
          ></Button>
        </Tooltip>
        <Tooltip title="lock">
          <Button
            shape="circle"
            icon={<LockOutlined />}
            onClick={handleLock}
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
      </Space>
    </div>
  );
};

export default EditToolbar;
