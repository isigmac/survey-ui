export type QuestionParagraphProps = {
  text?: string;
  isCenter?: boolean;

  onChange?: (newProps: QuestionParagraphProps) => void;
  disabled?: boolean;
};

export const QuestionParagraphPropsDefault: QuestionParagraphProps = {
  text: "Paragraph",
  isCenter: false,
};
