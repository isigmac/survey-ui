import { useSelector } from "react-redux";
import { RootState } from "../store";

function useGetComponentsInfo() {
  const componentState = useSelector((root: RootState) => root.components.present);
  const { componentList, selectedId, copiedComponent } = componentState;

  const selectedComponent = componentList.find((c) => c.fe_id === selectedId);

  return { componentList, selectedId, selectedComponent, copiedComponent };
}

export default useGetComponentsInfo;
