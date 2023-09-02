import { useSelector } from "react-redux";
import { RootState } from "../store";
import { PageInfo } from "../store/pageInfoReducer";

function useGetPageInfo(): PageInfo {
  const pageInfo = useSelector((root: RootState) => root.pageInfo) as PageInfo;

  return pageInfo;
}

export default useGetPageInfo;
