import { FC } from "react";
import { QuestionInputConfigDefault, QuestionInputProps } from "./QuestionInput";
import QuestionSubtitleConfig, { QuestionSubtitleProps } from "./QuestionSubtitle";
import { QuestionParagraphConfig, QuestionParagraphProps } from "./QuestionParagraph";
import { QuestionInfoConfig, QuestionInfoProps } from "./QuestionInfo";

export type ComponentProps = QuestionInputProps & QuestionSubtitleProps & QuestionParagraphProps & QuestionInfoProps;

export type ComponentConfig = {
  title: string;
  type: string;
  Component: FC<ComponentProps>;
  PropComponent: FC<ComponentProps>;
  defaultProps: ComponentProps;
};

const componentConfigList: ComponentConfig[] = [
  QuestionInputConfigDefault,
  QuestionSubtitleConfig,
  QuestionParagraphConfig,
  QuestionInfoConfig,
];

export const componentConfigGroup = [
  {
    id: 1,
    groupName: "Text Display",
    components: [QuestionInfoConfig, QuestionSubtitleConfig, QuestionParagraphConfig],
  },
  { id: 2, groupName: "User Input", components: [QuestionInputConfigDefault] },
];

export function getComponentConfigByType(type: string): ComponentConfig {
  const config = componentConfigList.find((c) => c.type === type);
  if (config === null) throw new Error("unknown component type");

  return config as ComponentConfig;
}
