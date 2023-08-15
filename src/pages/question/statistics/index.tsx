import { FC } from "react";

import useLoadQuestionData from "../../../hooks/useLoadQuestionData.ts";

const Statistics: FC = () => {
  const { loading } = useLoadQuestionData();

  return (
    <div>
      <p>Statistics: </p>
      {loading ? <p>loading</p> : <p>{loading}</p>}
    </div>
  );
};

export default Statistics;
