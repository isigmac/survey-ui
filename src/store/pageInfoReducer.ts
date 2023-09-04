import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PageInfo = {
  id: string;
  title: string;
  description?: string;
  js?: string;
  css?: string;
};

const INIT_STATE: PageInfo = {
  id: "",
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
      state.id = action.payload.id ? action.payload.id : state.id;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.js = action.payload.js;
      state.css = action.payload.css;
    },

    changeSurveyTitle(state: PageInfo, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { resetPageInfo: resetPageInfoAction, changeSurveyTitle: changeSurveyTitleAction } =
  componentsSlice.actions;

export default componentsSlice.reducer;
