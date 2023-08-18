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
      state.componentList = action.payload.componentList;
      state.selectedId = action.payload.selectedId;
    },

    // update selected component id
    // changeSelectedId: (state: ComponentState, action: PayloadAction<string>) => {},
    SelectedIdChanged(state: ComponentState, action: PayloadAction<string>) {
      state.selectedId = action.payload;
    },

    //add new component from lib to canvas
    addComponent(state: ComponentState, action: PayloadAction<ComponentInfo>) {
      const newComponent = action.payload;

      const { selectedId } = state;
      const index = state.componentList.findIndex((c) => c.fe_id === selectedId);

      if (index < 0) {
        state.componentList.push(newComponent);
      } else {
        state.componentList.splice(index + 1, 0, newComponent);
      }
      state.selectedId = newComponent.fe_id;
    },

    //change component props
    changeComponent(state: ComponentState, action: PayloadAction<{ fe_id: string; props: ComponentProps }>) {
      const target = state.componentList.find((c) => c.fe_id === action.payload.fe_id);

      if (!target) return;

      target.props = action.payload.props;
    },
  },
});

export const {
  resetComponents: resetComponentsAction,
  SelectedIdChanged: selectedIdChangedAction,
  addComponent: addComponentAction,
  changeComponent: changeComponentAction,
} = componentsSlice.actions;

export default componentsSlice.reducer;
