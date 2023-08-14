import { FC } from "react";
import { Outlet } from "react-router-dom";
import useLoadUserData from "../hooks/useLoadUserData";
import useAutoNavigation from "../hooks/useAutoNavigation";

//ui
import { Spin } from "antd";

const QuestionLayout: FC = () => {
  const { waitingUserData } = useLoadUserData();
  useAutoNavigation(waitingUserData);

  return (
    <div style={{ height: "100vh" }}>
      <div>
        {waitingUserData ? (
          <div style={{ textAlign: "center", verticalAlign: "middle", marginTop: "60px" }}>
            <Spin size="large" />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default QuestionLayout;
