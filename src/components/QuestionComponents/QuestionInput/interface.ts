export type QuestionInputProps = {
  title?: string;
  placeholder?: string;

  onChange?: (newProps: QuestionInputProps) => void;
};

export const QuestionInputPropsDefault: QuestionInputProps = {
  title: "input title",
  placeholder: "please input...",
};
