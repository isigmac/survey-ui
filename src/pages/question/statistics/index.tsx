import { FC } from "react";
import { useParams } from "react-router-dom";

const Statistics: FC = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Statistics: {id}</p>
    </div>
  );
};

export default Statistics;
