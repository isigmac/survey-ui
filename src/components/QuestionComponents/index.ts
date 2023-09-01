import { FC } from "react";
import { QuestionInputConfig, QuestionInputProps } from "./QuestionInput";
import QuestionSubtitleConfig, { QuestionSubtitleProps } from "./QuestionSubtitle";
import { QuestionParagraphConfig, QuestionParagraphProps } from "./QuestionParagraph";
import { QuestionInfoConfig, QuestionInfoProps } from "./QuestionInfo";
import { QuestionTextAreaConfig } from "./QuestionTextArea";
import { QuestionTextAreaProps } from "./QuestionTextArea/interface";
import { QuestionRadioProps } from "./QuestionRadio/interface";
import { QuestionRadioConfig } from "./QuestionRadio";
import { QuestionCheckboxConfig } from "./QuestionCheckbox";
import { QuestionCheckboxProps } from "./QuestionCheckbox/interface";

const componentConfigList: ComponentConfig[] = [
  QuestionInputConfig,
  QuestionSubtitleConfig,
  QuestionParagraphConfig,
  QuestionInfoConfig,
  QuestionTextAreaConfig,
  QuestionRadioConfig,
  QuestionCheckboxConfig,
];

export type ComponentProps = QuestionInfoProps &
  QuestionSubtitleProps &
  QuestionParagraphProps &
  QuestionInputProps &
  QuestionTextAreaProps &
  QuestionRadioProps &
  QuestionCheckboxProps;

export type ComponentPropsBase = {
  onChange?: (newProps: QuestionTextAreaProps) => void;
  disabled?: boolean;
};

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
  {
    id: 2,
    groupName: "User Input",
    components: [QuestionInputConfig, QuestionTextAreaConfig, QuestionRadioConfig, QuestionCheckboxConfig],
  },
];

export function getComponentConfigByType(type: string): ComponentConfig {
  const config = componentConfigList.find((c) => c.type === type);
  if (config === null) throw new Error("unknown component type");

  return config as ComponentConfig;
}
