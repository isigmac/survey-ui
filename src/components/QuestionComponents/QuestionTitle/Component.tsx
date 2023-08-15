import { FC } from "react";

//ui
import { Typography } from "antd";
import { QuestionTitleProps, QuestionTitleDefault } from "./interface.ts";

const QuestionTitle: FC<QuestionTitleProps> = (props: QuestionTitleProps) => {
  const { text, level = 1, isCenter } = { ...QuestionTitleDefault, ...props };
  const { Title } = Typography;

  const getFontSize = (level: number) => {
    return `${28 - level * 4}px`;
  };

  return (
    <>
      <Title
        level={level}
        style={{ textAlign: isCenter ? "center" : "start", marginBottom: "0", fontSize: getFontSize(level) }}
      >
        {text}
      </Title>
    </>
  );
};

export default QuestionTitle;
