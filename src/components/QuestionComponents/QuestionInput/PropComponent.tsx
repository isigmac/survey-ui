import { FC, useEffect } from "react";

import { QuestionInputProps } from "./interface";

//ui
import { Form, Input } from "antd";

const PropComponent: FC<QuestionInputProps> = (props: QuestionInputProps) => {
  const { title, placeholder } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      title,
      placeholder,
    });
  }, [title, placeholder, form]);

  return (
    <Form layout="vertical" initialValues={{ title, placeholder }} form={form}>
      <Form.Item
        label="Title"
        name="title"
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
        label="Placeholder"
        name="placeholder"
        rules={[
          {
            required: false,
            message: "Please input placeholder",
          },
        ]}
      >
        <Input></Input>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
