import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "ahooks";

import { Typography } from "antd";

import styles from "./common.module.scss";
import QuestionCard from "../../components/QuestionCard";

const questions = [
  {
    _id: "q1",
    title: "question1",
    isPublished: false,
    isStar: false,
    answerCount: 3,
    createdAt: "July 31st 12:35",
  },
  {
    _id: "q2",
    title: "question2",
    isPublished: false,
    isStar: false,
    answerCount: 2,
    createdAt: "July 31st 12:35",
  },
  {
    _id: "q3",
    title: "question3",
    isPublished: false,
    isStar: false,
    answerCount: 1,
    createdAt: "July 31st 12:35",
  },
  {
    _id: "q4",
    title: "question4",
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createdAt: "July 31st 12:35",
  },
];

const List: FC = () => {
  useTitle("Survey - My Survey");

  const { Title } = Typography;

  const [searchParams] = useSearchParams();
  console.log("keyword:", searchParams.get("keyword"));

  const [questionList] = useState(questions);

  return (
    <>
      {/* header  */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>My Survey</Title>
        </div>
        <div className={styles.right}>Search</div>
      </div>

      {/* content  */}
      <div className={styles.content}>
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q}></QuestionCard>;
          })}
      </div>
      <div className={styles.footer}>load more... </div>
    </>
  );
};

export default List;
