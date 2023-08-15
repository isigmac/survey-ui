export type QuestionTitleProps = {
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  isCenter?: boolean;
};

export const QuestionTitleDefault: QuestionTitleProps = {
  text: "Title",
  level: 1,
  isCenter: false,
};
