import { ChangeEvent, FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import { useDispatch } from "react-redux";
import { changeSurveyTitleAction } from "../../../store/pageInfoReducer";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";
import { updateQuestionService } from "../../../services/question";
import { useDebounceEffect, useKeyPress, useRequest } from "ahooks";

//ui
import { Button, Typography, Space, Input, message } from "antd";
import { EditOutlined, LeftOutlined, LoadingOutlined } from "@ant-design/icons";
import styles from "./EditHeader.module.scss";
import EditToolbar from "./EditToolbar";
import { QUESTION_STATISTICS_PATHNAME } from "../../../router";

const PublishButton: FC = () => {
  const { id } = useParams();
  const { componentList } = useGetComponentsInfo();
  const pageInfo = useGetPageInfo();
  const nav = useNavigate();

  const { loading, run: publish } = useRequest(
    async () => {
      if (!id) return;
      await updateQuestionService(id, { ...pageInfo, componentList, isPublished: true });
    },
    {
      manual: true,
      onSuccess() {
        message.success("success to publish");
        nav(QUESTION_STATISTICS_PATHNAME + "/" + id);
      },
    }
  );

  return (
    <Button type="primary" onClick={publish} disabled={loading} icon={loading ? <LoadingOutlined /> : null}>
      Publish
    </Button>
  );
};

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

  //auto save after data changed
  useDebounceEffect(
    () => {
      save();
    },
    [pageInformation, componentList],
    {
      wait: 1000,
    }
  );

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
            <PublishButton />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;
