import { ComponentInfo, ComponentState } from "./index";
import { arrayMove } from "@dnd-kit/sortable";
import { ActionCreators as UndoActionCreators } from "redux-undo";

export function getNextSelectedId(delete_id: string, componentList: ComponentInfo[]) {
  const availableComponents = getAvailableComponents();
  const index = availableComponents.findIndex((c) => c.fe_id === delete_id);

  if (index < 0) return "";

  if (index === 0 && availableComponents.length === 1) return "";

  if (index === availableComponents.length - 1) return availableComponents[index - 1].fe_id;

  return availableComponents[index + 1].fe_id;

  function getAvailableComponents() {
    return componentList.filter((c) => !c.isHidden);
  }
}

export function insertComponent(state: ComponentState, newComponent: ComponentInfo) {
  const { selectedId } = state;
  const index = state.componentList.findIndex((c) => c.fe_id === selectedId);

  if (index < 0) {
    state.componentList.push(newComponent);
  } else {
    state.componentList.splice(index + 1, 0, newComponent);
  }
  state.selectedId = newComponent.fe_id;
}

export function switchComponent(componentList: ComponentInfo[], oldIndex: number, newIndex: number): ComponentInfo[] {
  return arrayMove(componentList, oldIndex, newIndex);
}

export function undo() {
  UndoActionCreators.undo();
}

export function redo() {
  UndoActionCreators.redo();
}
