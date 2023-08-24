import { FC, useEffect } from "react";
import { QuestionParagraphProps } from ".";
import { Checkbox, Form, Input } from "antd";

//ui
const { TextArea } = Input;

const PropComponent: FC<QuestionParagraphProps> = (props: QuestionParagraphProps) => {
  const { text, isCenter, onChange, disabled } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ text, isCenter });
  }, [text, isCenter, form]);

  function handleValueChange() {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{ text, isCenter }}
      form={form}
      onValuesChange={handleValueChange}
      disabled={disabled}
    >
      <Form.Item
        label="paragraph"
        name="text"
        rules={[
          {
            required: true,
            message: "Please input paragraph",
          },
        ]}
      >
        <TextArea></TextArea>
      </Form.Item>
      <Form.Item label="display in center" name="isCenter" valuePropName="checked">
        <Checkbox name="isCenter">Center Align</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
