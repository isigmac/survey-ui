import { FC } from "react";
import { QuestionInputConfigDefault, QuestionInputProps } from "./QuestionInput";
import QuestionTitleConfig, { QuestionTitleProps } from "./QuestionTitle";

export type ComponentProps = QuestionInputProps & QuestionTitleProps;

export type ComponentConfig = {
  title: string;
  type: string;
  Component: FC<ComponentProps>;
  defaultProps: ComponentProps;
};

const componentConfigList: ComponentConfig[] = [QuestionInputConfigDefault, QuestionTitleConfig];

export const componentConfigGroup = [
  { id: 1, groupName: "Text Display", components: [QuestionTitleConfig] },
  { id: 2, groupName: "User Input", components: [QuestionInputConfigDefault] },
];

export function getComponentConfigByType(type: string): ComponentConfig {
  const config = componentConfigList.find((c) => c.type === type);
  if (config === null) throw new Error("unknown component type");

  return config as ComponentConfig;
}