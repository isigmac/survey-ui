import { FC } from "react";
import QuestionInput from "./Component.tsx";
import { QuestionInputProps, QuestionInputPropsDefault } from "./interface.ts";

export * from "./interface.ts";

// component configuration
// export default {
//   title: 'input box',
//   type: 'questionInput',
//   Component: QuestionInput,
//   defaultProps: QuestionInputPropsDefault,
// }

export type QuestionInputConfig = {
  title: string;
  type: string;
  Component: FC<QuestionInputProps>;
  defaultProps: QuestionInputProps;
};

export const QuestionInputConfigDefault = {
  title: "input box",
  type: "questionInput",
  Component: QuestionInput,
  defaultProps: QuestionInputPropsDefault,
};
