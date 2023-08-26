import QuestionCheckbox from "./Component";
import PropComponent from "./PropComponent";
import { QuestionCheckboxPropsDefault } from "./interface";

export const QuestionCheckboxConfig = {
  title: "Checkbox",
  type: "questionCheckbox",
  Component: QuestionCheckbox,
  PropComponent: PropComponent,
  defaultProps: QuestionCheckboxPropsDefault,
};
