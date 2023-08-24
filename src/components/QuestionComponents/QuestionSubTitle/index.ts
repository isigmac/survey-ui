import Component from "./Component.tsx";
import PropComponent from "./PropComponent.tsx";
import { QuestionSubtitleDefault } from "./interface.ts";

export * from "./interface.ts";

export default {
  title: "Subtitle",
  type: "questionSubtitle",
  Component,
  PropComponent,
  defaultProps: QuestionSubtitleDefault,
};
