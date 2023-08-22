import { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteComponentAction, hideComponentAction } from "../../../store/componentsReducer";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";

//ui
import { Space, Button, Tooltip } from "antd";
import { DeleteOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId } = useGetComponentsInfo();

  function handleDelete() {
    dispatch(deleteComponentAction());
  }

  function handleHide() {
    dispatch(hideComponentAction());
  }

  return (
    <div>
      <Space>
        <Tooltip title="delete">
          <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete} disabled={selectedId === ""}></Button>
        </Tooltip>
        <Tooltip title="hide">
          <Button
            shape="circle"
            icon={<EyeInvisibleOutlined />}
            onClick={handleHide}
            disabled={selectedId === ""}
          ></Button>
        </Tooltip>
      </Space>
    </div>
  );
};

export default EditToolbar;
