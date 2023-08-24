// import { FC } from "react";
import QuestionParagraph from "./Component";
import { QuestionParagraphPropsDefault } from "./interface";
import PropComponent from "./PropComponent";

export * from "./interface";

// export type QuestionParagraphConfig = {
//   title: string;
//   type: string;
//   Component: FC<QuestionParagraphProps>;
//   PropComponent: FC<QuestionParagraphProps>;
//   defaultProps: QuestionParagraphProps;
// };

export const QuestionParagraphConfig = {
  title: "Paragraph",
  type: "questionParagraph",
  Component: QuestionParagraph,
  PropComponent: PropComponent,
  defaultProps: QuestionParagraphPropsDefault,
};
