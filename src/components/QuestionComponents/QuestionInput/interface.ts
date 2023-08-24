export type QuestionInputProps = {
  title?: string;
  placeholder?: string;

  onChange?: (newProps: QuestionInputProps) => void;

  disabled?: boolean;
};

export const QuestionInputPropsDefault: QuestionInputProps = {
  title: "Input Title",
  placeholder: "please input...",
};
