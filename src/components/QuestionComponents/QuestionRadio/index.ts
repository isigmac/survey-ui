import { ComponentConfig } from "..";
import QuestionRadio from "./Component";
import PropComponent from "./PropComponent";
import { QuestionRadioPropsDefault } from "./interface";

export const QuestionRadioConfig: ComponentConfig = {
  title: "Radio",
  type: "questionRadio",
  Component: QuestionRadio,
  PropComponent: PropComponent,
  defaultProps: QuestionRadioPropsDefault,
};
