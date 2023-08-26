import { FC } from "react";
import { QuestionRadioProps, QuestionRadioPropsDefault } from "./interface";

//ui
import { Radio, Space, Typography } from "antd";

const QuestionRadio: FC<QuestionRadioProps> = (props: QuestionRadioProps) => {
  const { title, options, value, isVertical } = { ...QuestionRadioPropsDefault, ...props };

  return (
    <div>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Radio.Group value={value}>
        <Space direction={isVertical ? "vertical" : "horizontal"}>
          {options.map((o) => {
            return (
              <Radio key={o.value} value={o.value}>
                {o.text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default QuestionRadio;
