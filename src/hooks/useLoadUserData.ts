import { useEffect, useState } from "react";
import { useRequest } from "ahooks";
import { useDispatch } from "react-redux";

import { loginAction } from "../store/userReducer";

import useGetUserInfo from "./useGetUserInfo";
import { getUserInfoService } from "../services/user";

function useLoadUserData() {
  const dispatch = useDispatch();
  const [waitingUserData, setWaitingUserData] = useState(true);

  const { username } = useGetUserInfo();

  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result;
      dispatch(loginAction({ username, nickname }));
    },
    onFinally() {
      setWaitingUserData(false);
    },
  });

  useEffect(() => {
    if (username) {
      setWaitingUserData(false);
      return;
    }

    run();
  }, [username, run]);
  return { waitingUserData };
}

export default useLoadUserData;
