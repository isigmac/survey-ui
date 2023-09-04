import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import { useDispatch } from "react-redux";
import { changeSurveyTitleAction } from "../../../store/pageInfoReducer";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";
import { updateQuestionService } from "../../../services/question";
import { useKeyPress, useRequest } from "ahooks";

//ui
import { Button, Typography, Space, Input } from "antd";
import { EditOutlined, LeftOutlined, LoadingOutlined } from "@ant-design/icons";
import styles from "./EditHeader.module.scss";
import EditToolbar from "./EditToolbar";

const SaveButton: FC = () => {
  const { componentList } = useGetComponentsInfo();
  const pageInformation = useGetPageInfo();

  //shortcuts
  useKeyPress(["ctrl.s", "meta.s"], (event: KeyboardEvent) => {
    event.preventDefault();
    if (!loading) {
      save();
    }
  });

  const { loading, run: save } = useRequest(
    async () => {
      await updateQuestionService(pageInformation.id, { ...pageInformation, componentList });
    },
    {
      manual: true,
    }
  );

  return (
    <Button type="link" onClick={save} disabled={loading} icon={loading ? <LoadingOutlined /> : null}>
      Save
    </Button>
  );
};

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
            <SaveButton />
            <Button type="primary">Publish</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;
