import Component from "./Component.tsx";
import PropComponent from "./PropComponent.tsx";
import { QuestionSubtitleDefault } from "./interface.ts";

export * from "./interface.ts";

export default {
  title: "Sub Title",
  type: "questionSubtitle",
  Component,
  PropComponent,
  defaultProps: QuestionSubtitleDefault,
};
