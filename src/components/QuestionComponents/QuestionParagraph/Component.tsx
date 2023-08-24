import { FC } from "react";
import { QuestionParagraphPropsDefault, QuestionParagraphProps } from "./interface";

//ui
import { Typography } from "antd";

const QuestionParagraph: FC<QuestionParagraphProps> = (props: QuestionParagraphProps) => {
  const { text = "", isCenter = false } = { ...QuestionParagraphPropsDefault, ...props };
  const { Paragraph } = Typography;

  return (
    <div>
      <Paragraph style={{ textAlign: isCenter ? "center" : "start", marginBottom: "0px" }}>
        <p style={{ whiteSpace: "pre-line" }}>{text}</p>
      </Paragraph>
    </div>
  );
};

export default QuestionParagraph;
