import { FC } from "react";
import { QuestionInputConfig, QuestionInputProps } from "./QuestionInput";
import QuestionSubtitleConfig, { QuestionSubtitleProps } from "./QuestionSubtitle";
import { QuestionParagraphConfig, QuestionParagraphProps } from "./QuestionParagraph";
import { QuestionInfoConfig, QuestionInfoProps } from "./QuestionInfo";
import { QuestionTextAreaConfig } from "./QuestionTextArea";
import { QuestionTextAreaProps } from "./QuestionTextArea/interface";

const componentConfigList: ComponentConfig[] = [
  QuestionInputConfig,
  QuestionSubtitleConfig,
  QuestionParagraphConfig,
  QuestionInfoConfig,
  QuestionTextAreaConfig,
];

type ComponentProps = QuestionInfoProps &
  QuestionSubtitleProps &
  QuestionParagraphProps &
  QuestionInputProps &
  QuestionTextAreaProps;

export type ComponentConfig = {
  title: string;
  type: string;
  Component: FC<ComponentProps>;
  PropComponent: FC<ComponentProps>;
  defaultProps: ComponentProps;
};

export const componentConfigGroup = [
  {
    id: 1,
    groupName: "Text Display",
    components: [QuestionInfoConfig, QuestionSubtitleConfig, QuestionParagraphConfig],
  },
  { id: 2, groupName: "User Input", components: [QuestionInputConfig, QuestionTextAreaConfig] },
];

export function getComponentConfigByType(type: string): ComponentConfig {
  const config = componentConfigList.find((c) => c.type === type);
  if (config === null) throw new Error("unknown component type");

  return config as ComponentConfig;
}
