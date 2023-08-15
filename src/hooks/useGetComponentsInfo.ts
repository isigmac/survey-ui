import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ComponentInfo } from "../store/componentsReducer";

function useGetComponentsInfo(): ComponentInfo[] {
  const componentState = useSelector((root: RootState) => root.components);
  const { componentList } = componentState;

  return componentList;
}

export default useGetComponentsInfo;
