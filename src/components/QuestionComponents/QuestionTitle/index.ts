import Component from "./Component.tsx";
import { QuestionTitleDefault } from "./interface.ts";

export * from "./interface.ts";

export default {
  title: "Title",
  type: "questionTitle",
  Component,
  defaultProps: QuestionTitleDefault,
};
