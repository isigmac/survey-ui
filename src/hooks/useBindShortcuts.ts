import { useKeyPress } from "ahooks";
import { useDispatch } from "react-redux";
import {
  copyComponentAction,
  deleteComponentAction,
  pasteComponentAction,
  redoComponentPropChangeAction,
  selectNextComponentAction,
  selectPreviousComponentAction,
  undoComponentPropChangeAction,
} from "../store/componentsReducer";
import useGetComponentsInfo from "./useGetComponentsInfo";

function isActiveElementValid(selectedId: string) {
  const activeElement = document.activeElement;

  //without dnd-kits
  // if (activeElement === document.body && selectedId !== "") return true;

  //with dnd-kits
  if (activeElement === document.body && selectedId !== "") return true;
  if (activeElement?.matches('div[role="button"]')) return true;

  return false;
}

function useCanvasShortcuts() {
  const dispatch = useDispatch();
  const { selectedId, copiedComponent } = useGetComponentsInfo();

  // delete selected component
  useKeyPress(["Delete", "backspace"], () => {
    if (!isActiveElementValid(selectedId)) return;

    dispatch(deleteComponentAction());
  });

  // copy selected component
  useKeyPress(["ctrl.c", "meta.c"], () => {
    if (!isActiveElementValid(selectedId)) return;

    dispatch(copyComponentAction());
  });

  //paste copied component
  useKeyPress(["ctrl.v", "meta.v"], () => {
    if (!copiedComponent) return;

    dispatch(pasteComponentAction());
  });

  // select previous component
  useKeyPress(["uparrow"], () => {
    if (!isActiveElementValid(selectedId)) return;

    dispatch(selectPreviousComponentAction());
  });

  // select next component
  useKeyPress(["downarrow"], () => {
    if (!isActiveElementValid(selectedId)) return;

    dispatch(selectNextComponentAction());
  });

  //undo
  useKeyPress(
    ["ctrl.z", "meta.z"],
    () => {
      dispatch(undoComponentPropChangeAction());
    },
    {
      exactMatch: true,
    }
  );

  //redo
  useKeyPress(
    ["ctrl.shift.z", "meta.shift.z"],
    () => {
      dispatch(redoComponentPropChangeAction());
    },
    {
      exactMatch: true,
    }
  );
}

export default useCanvasShortcuts;
