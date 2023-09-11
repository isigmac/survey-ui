import { FC } from "react";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData.ts";

//ui
import { Button, Result, Spin } from "antd";
import useGetPageInfo from "../../../hooks/useGetPageInfo.ts";
import { useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";

const Statistics: FC = () => {
  const { loading } = useLoadQuestionData();
  const { isPublished, title } = useGetPageInfo();
  const nav = useNavigate();

  useTitle(`Statistics - ${title}`);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <Spin></Spin>
      </div>
    );
  }

  if (!isPublished) {
    return (
      <div style={{ flex: "1" }}>
        <Result
          status="warning"
          title="This survey is not published yet."
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={() => nav(-1)}>
              Return
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div>
      <p>Statistics: </p>
      {/* {loading ? <p>loading</p> : <p>{loading}</p>} */}
    </div>
  );
};

export default Statistics;
