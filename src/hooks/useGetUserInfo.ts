import { useSelector } from "react-redux";
import { UserStateType } from "../store/userReducer";
import { RootState } from "../store";

function useGetUserInfo(): UserStateType {
  const userState = useSelector((state: RootState) => state.user);
  const { username, nickname } = userState;

  return { username, nickname };
}

export default useGetUserInfo;
