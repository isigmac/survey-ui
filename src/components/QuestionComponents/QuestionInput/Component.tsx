import { FC } from "react";

//ui
import { Typography, Input } from "antd";
import { QuestionInputProps, QuestionInputPropsDefault } from "./interface.ts";

const QuestionInput: FC<QuestionInputProps> = (props: QuestionInputProps) => {
  const { title, placeholder } = { ...QuestionInputPropsDefault, ...props };
  const { Paragraph } = Typography;

  return (
    <>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </>
  );
};

export default QuestionInput;
