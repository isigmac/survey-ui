import Component from "./Component.tsx";
import PropComponent from "./PropComponent.tsx";
import { QuestionTitleDefault } from "./interface.ts";

export * from "./interface.ts";

export default {
  title: "Title",
  type: "questionTitle",
  Component,
  PropComponent,
  defaultProps: QuestionTitleDefault,
};
