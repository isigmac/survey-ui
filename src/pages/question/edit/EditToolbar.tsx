import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  deleteComponentAction,
  hideComponentAction,
  lockUnlockComponentAction,
} from "../../../store/componentsReducer";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";

//ui
import { Space, Button, Tooltip } from "antd";
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from "@ant-design/icons";

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, selectedComponent } = useGetComponentsInfo();
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
      </Space>
    </div>
  );
};

export default EditToolbar;
