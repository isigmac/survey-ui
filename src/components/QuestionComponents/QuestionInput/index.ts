import QuestionInput from "./Component.tsx";
import PropComponent from "./PropComponent.tsx";
import { QuestionInputPropsDefault } from "./interface.ts";

export * from "./interface.ts";

// export type QuestionInputConfig = {
//   title: string;
//   type: string;
//   Component: FC<QuestionInputProps>;
//   PropComponent: FC<QuestionInputProps>;
//   defaultProps: QuestionInputProps;
// };

export const QuestionInputConfig = {
  title: "input box",
  type: "questionInput",
  Component: QuestionInput,
  PropComponent: PropComponent,
  defaultProps: QuestionInputPropsDefault,
};
