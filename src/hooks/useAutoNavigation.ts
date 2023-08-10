import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useGetUserInfo from "./useGetUserInfo";
import { LOGIN_PATHNAME, MANAGE_LIST_PATHNAME, isLoginOrRegister, isNoNeedLogin } from "../router";

function useAutoNavigation(waitingUserData: boolean) {
  const { username } = useGetUserInfo();
  const { pathname } = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    if (waitingUserData) return;

    // already logged in
    if (username) {
      if (isLoginOrRegister(pathname)) {
        nav(MANAGE_LIST_PATHNAME);
      }
      return;
    }

    // guest
    if (!isNoNeedLogin(pathname)) {
      nav(LOGIN_PATHNAME);
    }
  }, [username, pathname, waitingUserData, nav]);
}

export default useAutoNavigation;
