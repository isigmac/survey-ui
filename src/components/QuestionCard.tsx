import { FC } from "React";
import styles from "./QuestionCard.module.scss";

type QuestionCardProps = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStart: boolean;
  answerCount: number;
  createdAt: string;
  deleteQuestion?: (id: string) => void;
  publishQuestion?: (id: string) => void;
  revokeQuestion?: (id: string) => void;
};

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const {
    // _id,
    title,
    isPublished,
    // isStart,
    answerCount,
    createdAt,
    // deleteQuestion,
    // publishQuestion,
    // revokeQuestion,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{title}</a>
        </div>

        <div className={styles.right}>
          {isPublished ? (
            <span style={{ color: "green" }}>Published</span>
          ) : (
            <span>Draft</span>
          )}
          &nbsp;
          <span>Answer: {answerCount}</span>
          &nbsp;
          <span>{createdAt}</span>
        </div>
      </div>

      <div className={styles["button-container"]}>
        <div className={styles.left}>
          <button>Edit</button>
          <button>Statistics</button>
        </div>
        <div className={styles.right}>
          <button>Like</button>
          <button>Copy</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
