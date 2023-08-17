import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserStateType = {
  username: string;
  nickname: string;
};

const INIT_STATE: UserStateType = { username: "", nickname: "" };

const userStateSlice = createSlice({
  name: "userState",
  initialState: INIT_STATE,
  reducers: {
    loginReducer(state: UserStateType, action: PayloadAction<UserStateType>) {
      state.username = action.payload.username;
      state.nickname = action.payload.nickname;
    },

    logoutReducer: () => INIT_STATE,
  },
});

export const { loginReducer: loginAction, logoutReducer: logoutAction } = userStateSlice.actions;

// // 实际导出的是slice中的reducer
export default userStateSlice.reducer;
