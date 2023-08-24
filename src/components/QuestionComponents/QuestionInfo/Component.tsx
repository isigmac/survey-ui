import { FC } from "react";
import { QuestionInfoProps, QuestionInfoPropsDefault } from "./interface";

//ui
import { Typography } from "antd";

const { Paragraph, Title } = Typography;
const QuestionInfo: FC<QuestionInfoProps> = (props: QuestionInfoProps) => {
  const { title = "", text = "" } = { ...QuestionInfoPropsDefault, ...props };

  return (
    <div>
      <Title style={{ textAlign: "center" }} level={2}>
        {title}
      </Title>
      <Paragraph style={{ textAlign: "center" }}>
        <p style={{ whiteSpace: "pre-line" }}>{text}</p>
      </Paragraph>
    </div>
  );
};

export default QuestionInfo;
