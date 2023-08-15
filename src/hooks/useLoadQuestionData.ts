import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRequest } from "ahooks";
import { resetComponentsAction } from "../store/componentsReducer";

import { getQuestionService } from "../services/question";

function useLoadQuestionData() {
  const { id = "" } = useParams();
  const dispatch = useDispatch();

  //ajax loading
  const { loading, data, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error("not survey id.");
      const data = await getQuestionService(id);

      return data;
    },
    {
      manual: true,
    }
  );

  //set redux by data
  useEffect(() => {
    if (!data) return;

    const { componentList = [] } = data;

    // store components list into redux store
    dispatch(resetComponentsAction({ componentList: componentList }));
  }, [data, dispatch]);

  // execute ajax by id
  useEffect(() => {
    run(id);
  }, [id, run]);

  return { loading, error };
}

export default useLoadQuestionData;
