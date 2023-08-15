import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentProps } from "../../components/QuestionComponents";
// import produce from "immer";

export type ComponentInfo = {
  fe_id: string; // todo
  type: string;
  title: string;
  props: ComponentProps;
};

export type ComponentState = {
  //   componentList: Array<ComponentInfo>
  componentList: ComponentInfo[];
  selectedId: string;
};

const INIT_STATE: ComponentState = {
  componentList: [],
  selectedId: "",
};

const componentsSlice = createSlice({
  name: "componentState",
  initialState: INIT_STATE,
  reducers: {
    // reset all components
    resetComponents: (state: ComponentState, action: PayloadAction<ComponentState>) => {
      return action.payload;
    },

    // update selected component id
    // changeSelectedId: (state: ComponentState, action: PayloadAction<string>) => {},
    SelectedIdChanged(state: ComponentState, action: PayloadAction<string>) {
      state.selectedId = action.payload;
    },
  },
});

export const { resetComponents: resetComponentsAction, SelectedIdChanged: selectedIdChangedAction } =
  componentsSlice.actions;

export default componentsSlice.reducer;
