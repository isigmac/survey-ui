import QuestionParagraph from "./Component";
import { QuestionParagraphPropsDefault } from "./interface";
import PropComponent from "./PropComponent";

export * from "./interface";

export const QuestionParagraphConfig = {
  title: "Paragraph",
  type: "questionParagraph",
  Component: QuestionParagraph,
  PropComponent: PropComponent,
  defaultProps: QuestionParagraphPropsDefault,
};
