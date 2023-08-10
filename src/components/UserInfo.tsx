import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";
import { removeToken } from "../utilites/user-token";
import { UserOutlined } from "@ant-design/icons";

import useGetUserInfo from "../hooks/useGetUserInfo";
import { logoutAction } from "../store/userReducer";
import { useDispatch } from "react-redux";

//ui
import { Button } from "antd";

const UserInfo: FC = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { nickname, username } = useGetUserInfo();

  function logout() {
    dispatch(logoutAction());

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
