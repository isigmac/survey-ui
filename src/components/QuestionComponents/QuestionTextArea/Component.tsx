import { FC } from "react";
import { QuestionTextAreaProps, QuestionTextAreaPropsDefault } from "./interface";
import { Input, Typography } from "antd";

const QuestionTextArea: FC<QuestionTextAreaProps> = (props: QuestionTextAreaProps) => {
  const { title, placeholder } = { ...QuestionTextAreaPropsDefault, ...props };

  return (
    <div>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Input.TextArea autoSize={{ minRows: 3, maxRows: 6 }} placeholder={placeholder}></Input.TextArea>
    </div>
  );
};

export default QuestionTextArea;
