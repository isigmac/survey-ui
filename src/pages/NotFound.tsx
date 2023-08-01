import { FC } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

import { MANAGE_LIST_PATHNAME } from "../router";

const NotFound: FC = () => {
  const nav = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => nav(MANAGE_LIST_PATHNAME)}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
