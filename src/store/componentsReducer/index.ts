import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentProps } from "../../components/QuestionComponents";

export type ComponentInfo = {
  fe_id: string; // todo
  type: string;
  title: string;
  props: ComponentProps;
};

export type ComponentState = {
  //   componentList: Array<ComponentInfo>
  componentList: ComponentInfo[];
};

const INIT_STATE: ComponentState = {
  componentList: [],
};

const componentsSlice = createSlice({
  name: "componentState",
  initialState: INIT_STATE,
  reducers: {
    resetComponents: (state: ComponentState, action: PayloadAction<ComponentState>) => {
      return action.payload;
    },
  },
});

export const { resetComponents: resetComponentsAction } = componentsSlice.actions;

export default componentsSlice.reducer;
