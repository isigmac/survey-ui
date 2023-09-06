import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentProps } from "../../components/QuestionComponents";
import { getNextSelectedId, insertComponent, redo, switchComponent, undo } from "./utilities";
import { nanoid } from "nanoid";
import cloneDeep from "lodash.clonedeep";

export type ComponentInfo = {
  fe_id: string;
  type: string;
  title: string;
  isHidden?: boolean;
  isLocked?: boolean;
  props: ComponentProps;
};

export type ComponentState = {
  //   componentList: Array<ComponentInfo>
  componentList: ComponentInfo[];
  selectedId: string;
  copiedComponent?: ComponentInfo | null;
};

const INIT_STATE: ComponentState = {
  componentList: [],
  selectedId: "",
  copiedComponent: null,
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

      insertComponent(state, newComponent);
    },

    //change component props
    changeComponent(state: ComponentState, action: PayloadAction<{ fe_id: string; props: ComponentProps }>) {
      const target = state.componentList.find((c) => c.fe_id === action.payload.fe_id);

      if (!target) return;

      target.props = action.payload.props;
    },

    //delete selected component
    deleteComponent(state: ComponentState) {
      const { selectedId } = state;
      const index = state.componentList.findIndex((c) => c.fe_id === selectedId);

      const nextSelectedId = getNextSelectedId(selectedId, state.componentList);
      state.componentList.splice(index, 1);

      state.selectedId = nextSelectedId;
    },

    //hide selected component
    hideOrDisplayComponent(state: ComponentState, action: PayloadAction<string>) {
      const id = action.payload;
      if (!id) return;

      const target = state.componentList.find((c) => c.fe_id === id);
      if (!target) return;

      const nextSelectedId = getNextSelectedId(id, state.componentList);
      target.isHidden = !target.isHidden;

      state.selectedId = nextSelectedId;
    },

    //lock selected component
    lockUnlockComponent(state: ComponentState, action: PayloadAction<string>) {
      const id = action.payload;
      if (!id) return;

      const target = state.componentList.find((c) => c.fe_id === id);
      if (!target) return;

      target.isLocked = !target.isLocked;
    },

    //copy selected component
    copyComponent(state: ComponentState) {
      if (!state.selectedId) return;

      const target = state.componentList.find((c) => c.fe_id === state.selectedId);
      if (!target) return;

      state.copiedComponent = cloneDeep(target);
    },

    //paste copied component
    pasteComponent(state: ComponentState) {
      if (!state.copiedComponent) return;
      const newComponent = state.copiedComponent;
      const newId = nanoid();
      newComponent.fe_id = newId;

      insertComponent(state, newComponent);
    },

    // select previous component
    selectPreviousComponent(state: ComponentState) {
      const { selectedId, componentList } = state;
      if (!state.selectedId) return;

      const index = componentList.findIndex((c) => c.fe_id === selectedId);

      if (index < 1) return;
      state.selectedId = componentList[index - 1].fe_id;
    },

    // select next component
    selectNextComponent(state: ComponentState) {
      const { selectedId, componentList } = state;
      if (!state.selectedId) return;

      const index = componentList.findIndex((c) => c.fe_id === selectedId);

      if (index === componentList.length - 1) return;
      state.selectedId = componentList[index + 1].fe_id;
    },

    //modify title
    modifyComponentTitle(state: ComponentState, action: PayloadAction<{ id: string; newTitle: string }>) {
      const { id, newTitle } = action.payload;
      if (!newTitle) return;
      if (!id) return;

      const target = state.componentList.find((c) => c.fe_id === id);
      if (!target) return;

      target.title = newTitle;
    },

    //switch component
    switchComponent(state: ComponentState, action: PayloadAction<{ oldIndex: number; newIndex: number }>) {
      const list = state.componentList;
      state.componentList = switchComponent(list, action.payload.oldIndex, action.payload.newIndex);
    },

    //undo
    undoComponentPropChange() {
      undo();
    },

    //redo
    redoComponentPropChange() {
      redo();
    },
  },
});

export const {
  resetComponents: resetComponentsAction,
  SelectedIdChanged: selectedIdChangedAction,
  addComponent: addComponentAction,
  changeComponent: changeComponentAction,
  deleteComponent: deleteComponentAction,
  hideOrDisplayComponent: hideUnHideComponentAction,
  lockUnlockComponent: lockUnlockComponentAction,
  copyComponent: copyComponentAction,
  pasteComponent: pasteComponentAction,
  selectPreviousComponent: selectPreviousComponentAction,
  selectNextComponent: selectNextComponentAction,
  modifyComponentTitle: modifyComponentTitleAction,
  switchComponent: switchComponentAction,
  undoComponentPropChange: undoComponentPropChangeAction,
  redoComponentPropChange: redoComponentPropChangeAction,
} = componentsSlice.actions;

export default componentsSlice.reducer;
