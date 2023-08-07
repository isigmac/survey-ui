import { useRequest } from "ahooks";

import { useSearchParams } from "react-router-dom";
import { getQuestionListService } from "../services/question";

import { LIST_SEARCH_KEY, LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE_PARAM_KEY, LIST_PAGE_SIZE } from "../constant";

type OptionType = {
  isStar: boolean;
  isDeleted: boolean;
};

function useLoadQuestionListData(criteria: Partial<OptionType> = {}) {
  const { isStar: _isStar = false, isDeleted: _isDeleted = false } = criteria;
  const [searchParams] = useSearchParams();

  const {
    data = {},
    loading,
    error,
  } = useRequest(
    async () => {
      const _keyword: string = searchParams.get(LIST_SEARCH_KEY) || ""; //default value is an empty string, then keyword is string
      const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || "1");
      const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || `${LIST_PAGE_SIZE}`);

      const data = await getQuestionListService({
        keyword: _keyword,
        isDeleted: _isDeleted,
        isStar: _isStar,
        page: page,
        pageSize: pageSize,
      });

      return data;
    },
    {
      refreshDeps: [searchParams],
    }
  );

  return { loading, data, error };
}
export default useLoadQuestionListData;
