import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getQuestionService } from "../../../services/question.ts";

const Edit: FC = () => {
  const { id = "" } = useParams();

  useEffect(() => {
    async function fn() {
      const data = await getQuestionService(id);
      console.log("edit page data", data);
    }

    fn();
  }, [id]);

  return (
    <div>
      <p>Edit: {id}</p>
    </div>
  );
};

export default Edit;
