import { useSelector } from "react-redux";
import { RootState } from "../store";

function useGetComponentsInfo() {
  const componentState = useSelector((root: RootState) => root.components);
  const { componentList, selectedId } = componentState;

  return { componentList, selectedId };
}

export default useGetComponentsInfo;
