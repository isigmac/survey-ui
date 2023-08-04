import { FC } from "react";

import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

const Edit: FC = () => {
  const { id, questionData, loading } = useLoadQuestionData();
  return (
    <div>
      <p>Edit: {id}</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(questionData)}</p>}
    </div>
  );
};

export default Edit;
