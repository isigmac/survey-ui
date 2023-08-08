import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";
import { useRequest } from "ahooks";
import { getUserInfoService } from "../services/user";
import { removeToken } from "../utilites/user-token";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

const UserInfo: FC = () => {
  const { data } = useRequest(getUserInfoService);
  const nav = useNavigate();

  const { nickname, username } = data || {};

  function logout() {
    removeToken();
    nav(LOGIN_PATHNAME);
  }

  const UserBlock = (
    <>
      <span style={{ color: "#e8e8e8" }}>
        <UserOutlined />
        {nickname || username}
      </span>
      <Button type="link" onClick={logout}>
        Logout
      </Button>
    </>
  );

  const Login = <Link to={LOGIN_PATHNAME}>Login</Link>;

  return <div>{username ? UserBlock : Login}</div>;
};

export default UserInfo;
