import { FC, useState } from "react";
import { useTitle } from "ahooks";

import { Typography, Empty } from "antd";

import styles from "./common.module.scss";
import QuestionCard from "../../components/QuestionCard";

const questions = [
  {
    _id: "q1",
    title: "question1",
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: "July 31st 12:35",
  },
  {
    _id: "q2",
    title: "question2",
    isPublished: false,
    isStar: true,
    answerCount: 2,
    createdAt: "July 31st 12:35",
  },
  {
    _id: "q3",
    title: "question3",
    isPublished: false,
    isStar: true,
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

const Star: FC = () => {
  useTitle("Star Survey");

  const { Title } = Typography;

  const [questionList] = useState(questions);

  return (
    <div>
      {/* header  */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Star Survey</Title>
        </div>
        <div className={styles.right}>Search</div>
      </div>

      {/* content  */}
      <div className={styles.content}>
        {questionList.length === 0 ? (
          <Empty description="no data found" />
        ) : (
          questionList.map((q) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q}></QuestionCard>;
          })
        )}
      </div>

      {/* footer  */}
      <div className={styles.footer}>pagination... </div>
    </div>
  );
};

export default Star;
