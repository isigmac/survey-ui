export type QuestionInfoProps = {
  title?: string;
  text?: string;

  onChange?: (newProps: QuestionInfoProps) => void;
  disabled?: boolean;
};

export const QuestionInfoPropsDefault: QuestionInfoProps = {
  title: "Survey Title",
  text: "Survey description...",
};
