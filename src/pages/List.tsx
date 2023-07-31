import { FC, useState } from "react";

import styles from "./List.module.scss";
import QuestionCard from "../components/QuestionCard";

const questions = [
  {
    _id: "q1",
    title: "question1",
    isPublished: false,
    isStart: false,
    answerCount: 3,
    createdAt: "July 31st 12:35",
  },
  {
    _id: "q2",
    title: "question2",
    isPublished: false,
    isStart: false,
    answerCount: 2,
    createdAt: "July 31st 12:35",
  },
  {
    _id: "q3",
    title: "question3",
    isPublished: false,
    isStart: false,
    answerCount: 1,
    createdAt: "July 31st 12:35",
  },
  {
    _id: "q4",
    title: "question4",
    isPublished: true,
    isStart: true,
    answerCount: 5,
    createdAt: "July 31st 12:35",
  },
];

const List: FC = () => {
  const [questionList] = useState(questions);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>My Survey</div>
        <div className={styles.right}>Search</div>
      </div>
      <div className={styles.content}>
        {questionList.map((q) => {
          const { _id } = q;
          return <QuestionCard key={_id} {...q}></QuestionCard>;
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
};

export default List;
