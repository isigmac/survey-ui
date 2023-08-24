export type QuestionTextAreaProps = {
  title?: string;
  placeholder?: string;

  onChange?: (newProps: QuestionTextAreaProps) => void;
  disabled?: boolean;
};

export const QuestionTextAreaPropsDefault: QuestionTextAreaProps = {
  title: "Text Area",
  placeholder: "input...",
};
