import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetPageInfo from "../../../hooks/useGetPageInfo";

//ui
import { Button, Typography, Space, Input } from "antd";
import { EditOutlined, LeftOutlined } from "@ant-design/icons";
import styles from "./EditHeader.module.scss";
import EditToolbar from "./EditToolbar";
import { useDispatch } from "react-redux";
import { changeSurveyTitleAction } from "../../../store/pageInfoReducer";

const SurveyTitle: FC = () => {
  const { Title } = Typography;
  const { title } = useGetPageInfo();
  const [editState, setEditState] = useState(false);
  const dispatch = useDispatch();

  function handleEditTitle() {
    setEditState(true);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newTitle = event.currentTarget.value.trim();

    dispatch(changeSurveyTitleAction(newTitle));
  }

  if (editState) {
    return (
      <Input
        value={title}
        onChange={handleChange}
        onPressEnter={() => setEditState(false)}
        onBlur={() => setEditState(false)}
      />
    );
  }

  return (
    <Space direction="horizontal">
      <Title className={styles["survey-title"]}>{title}</Title>
      <Button icon={<EditOutlined />} type="text" onClick={handleEditTitle}></Button>
    </Space>
  );
};

const EditHeader: FC = () => {
  const nav = useNavigate();

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space direction="horizontal">
            <Button type="link" icon={<LeftOutlined onClick={() => nav(-1)} />}>
              Return
            </Button>
            <SurveyTitle />
          </Space>
        </div>
        <div className={styles.center}>
          <EditToolbar></EditToolbar>
        </div>
        <div className={styles.right}>
          {" "}
          <Space direction="horizontal">
            <Button type="link">Save</Button>
            <Button type="primary">Publish</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;
