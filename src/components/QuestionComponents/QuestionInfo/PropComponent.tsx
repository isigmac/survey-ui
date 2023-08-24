import { FC } from "react";

//ui
import { Form, Input } from "antd";
import { QuestionInfoProps } from ".";

const PropComponent: FC<QuestionInfoProps> = (props: QuestionInfoProps) => {
  const { title, text, onChange, disabled } = props;

  const [form] = Form.useForm();

  function handleValueChange() {
    if (onChange) onChange(form.getFieldsValue());
  }

  return (
    <Form
      initialValues={{ title, text }}
      form={form}
      onValuesChange={handleValueChange}
      disabled={disabled}
      layout="vertical"
    >
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

      <Form.Item label="Question Information" name="text">
        <Input.TextArea rows={4} placeholder={text}></Input.TextArea>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
