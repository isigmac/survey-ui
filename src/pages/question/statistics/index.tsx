import { FC } from "react";

import useLoadQuestionData from "../../../hooks/useLoadQuestionData.ts";

const Statistics: FC = () => {
  const { id, loading, questionData } = useLoadQuestionData();

  return (
    <div>
      <p>Statistics: {id}</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(questionData)}</p>}
    </div>
  );
};

export default Statistics;
