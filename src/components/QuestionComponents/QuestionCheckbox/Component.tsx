import { FC } from "react";
import { QuestionCheckboxProps, QuestionCheckboxPropsDefault } from "./interface";

//ui
import { Checkbox, Typography, Space } from "antd";

const QuestionCheckbox: FC<QuestionCheckboxProps> = (props: QuestionCheckboxProps) => {
  const { isVertical, options, title } = { ...QuestionCheckboxPropsDefault, ...props };

  // const plainOptions = options.map((o) => o.text);

  // const checkedOptions = options.filter((o) => o.checked).map((o) => o.text);
  return (
    <div>
      <Typography.Paragraph strong>{title}</Typography.Paragraph>
      <Space direction={isVertical ? "vertical" : "horizontal"}>
        {options.map((o) => {
          return (
            <Checkbox checked={o.checked} key={o.value} value={o.value}>
              {o.text}
            </Checkbox>
          );
        })}
        {/* <Checkbox.Group options={plainOptions} value={checkedOptions}></Checkbox.Group> */}
        {/* <Checkbox.Group options={plainOptions} value={checkedOptions}></Checkbox.Group> */}
      </Space>
    </div>
  );
};

export default QuestionCheckbox;
