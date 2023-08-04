import { useRequest } from "ahooks";

import { useSearchParams } from "react-router-dom";
import { getQuestionListService } from "../services/question";

import { LIST_SEARCH_KEY } from "../constant";

function useLoadQuestionListData() {
  const [searchParams] = useSearchParams();
  console.log(LIST_SEARCH_KEY, searchParams.get(LIST_SEARCH_KEY));

  const {
    data = {},
    loading,
    error,
  } = useRequest(
    async () => {
      const keyword: string = searchParams.get(LIST_SEARCH_KEY) || ""; //default value is an empty string, then keyword is string

      const data = await getQuestionListService({ keyword });

      return data;
    },
    {
      refreshDeps: [searchParams],
    }
  );

  return { loading, data, error };
}
export default useLoadQuestionListData;
