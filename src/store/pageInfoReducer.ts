import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PageInfo = {
  title: string;
  description?: string;
  js?: string;
  css?: string;
};

const INIT_STATE: PageInfo = {
  title: "",
  description: "",
  js: "",
  css: "",
};

const componentsSlice = createSlice({
  name: "componentState",
  initialState: INIT_STATE,
  reducers: {
    resetPageInfo(state: PageInfo, action: PayloadAction<PageInfo>) {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.js = action.payload.js;
      state.css = action.payload.css;
    },
  },
});

export const { resetPageInfo: resetPageInfoAction } = componentsSlice.actions;

export default componentsSlice.reducer;