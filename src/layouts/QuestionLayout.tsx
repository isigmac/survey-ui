import { FC } from "react";
import { Outlet } from "react-router-dom";
import useLoadUserData from "../hooks/useLoadUserData";
import { Spin } from "antd";
import useAutoNavigation from "../hooks/useAutoNavigation";

const QuestionLayout: FC = () => {
  const { waitingUserData } = useLoadUserData();
  useAutoNavigation(waitingUserData);

  return (
    <div>
      <p>QuestionLayout</p>
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
