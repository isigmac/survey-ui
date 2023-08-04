import { useParams } from "react-router-dom";

import { useRequest } from "ahooks";

import { getQuestionService } from "../services/question";

function useLoadQuestionData() {
  const { id = "" } = useParams();

  async function getQuestionData() {
    const data = await getQuestionService(id);
    return data;
  }

  const { loading, data, error } = useRequest(getQuestionData);

  return { id, loading, data, error };
}

export default useLoadQuestionData;
