import { FC } from "react";

import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

const Edit: FC = () => {
  const { id, data, loading } = useLoadQuestionData();
  // console.log(JSON.stringify(data));
  return (
    <div>
      <p>Edit: {id}</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default Edit;
