import { ComponentConfig } from "..";
import QuestionTextArea from "./Component";
import PropComponent from "./PropComponent";
import { QuestionTextAreaPropsDefault } from "./interface";

export const QuestionTextAreaConfig: ComponentConfig = {
  title: "Question Text Area",
  type: "questionTextArea",
  Component: QuestionTextArea,
  PropComponent: PropComponent,
  defaultProps: QuestionTextAreaPropsDefault,
};
