import { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteComponentAction } from "../../../store/componentsReducer";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";

//ui
import { Space, Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId } = useGetComponentsInfo();

  function handleDelete() {
    dispatch(deleteComponentAction());
  }

  return (
    <div>
      <Space>
        <Tooltip title="delete">
          <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete} disabled={!selectedId}></Button>
        </Tooltip>
      </Space>
    </div>
  );
};

export default EditToolbar;
