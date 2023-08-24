import QuestionInfo from "./Component.tsx";
import PropComponent from "./PropComponent.tsx";
import { QuestionInfoPropsDefault } from "./interface.ts";

// export { QuestionInfoPropsDefault } from "./interface";
// export type { QuestionInfoProps } from "./interface";

export * from "./interface.ts";

export const QuestionInfoConfig = {
  title: "Question Info",
  type: "questionInfo",
  Component: QuestionInfo,
  PropComponent: PropComponent,
  defaultProps: QuestionInfoPropsDefault,
};
