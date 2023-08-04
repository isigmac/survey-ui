import { FC } from "react";

import useLoadQuestionData from "../../../hooks/useLoadQuestionData.ts";

const Statistics: FC = () => {
  const { id, loading, data } = useLoadQuestionData();

  return (
    <div>
      <p>Statistics: {id}</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default Statistics;
