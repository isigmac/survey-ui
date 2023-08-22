export type QuestionInputProps = {
  title?: string;
  placeholder?: string;

  onChange?: (newProps: QuestionInputProps) => void;

  disabled?: boolean;
};

export const QuestionInputPropsDefault: QuestionInputProps = {
  title: "input title",
  placeholder: "please input...",
};
