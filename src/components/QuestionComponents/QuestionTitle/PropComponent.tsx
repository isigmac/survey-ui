import { FC, useEffect } from "react";

import { QuestionTitleProps } from "./interface";

//ui
import { Form, Input, Select, Checkbox } from "antd";

const PropComponent: FC<QuestionTitleProps> = (props: QuestionTitleProps) => {
  const { text, level, isCenter, onChange, disabled } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      text,
      level,
      isCenter,
    });
  }, [text, level, isCenter, form]);

  function handleValueChange() {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{ text, level, isCenter }}
      onValuesChange={handleValueChange}
      form={form}
      disabled={disabled === true}
    >
      <Form.Item
        label="Title"
        name="text"
        rules={[
          {
            required: true,
            message: "Please input title",
          },
        ]}
      >
        <Input></Input>
      </Form.Item>

      <Form.Item
        label="Level"
        name="level"
        rules={[
          {
            required: true,
            message: "Please input display level",
          },
        ]}
      >
        <Select
          options={[
            { value: 1, text: 1 },
            { value: 2, text: 2 },
            { value: 3, text: 3 },
          ]}
        ></Select>
      </Form.Item>

      <Form.Item label="Display Center" name="isCenter" valuePropName="checked">
        <Checkbox name="isCenter">Center Align</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
