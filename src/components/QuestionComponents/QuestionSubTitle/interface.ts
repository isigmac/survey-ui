export type QuestionSubtitleProps = {
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  isCenter?: boolean;

  onChange?: (newProps: QuestionSubtitleProps) => void;
  disabled?: boolean;
};

export const QuestionSubtitleDefault: QuestionSubtitleProps = {
  text: "Subtitle",
  level: 1,
  isCenter: false,
};
