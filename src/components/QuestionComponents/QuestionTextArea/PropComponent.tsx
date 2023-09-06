import { FC, useEffect } from "react";

//ui
import { Form, Input } from "antd";
import { QuestionTextAreaProps } from "./interface";

const PropComponent: FC<QuestionTextAreaProps> = (props: QuestionTextAreaProps) => {
  const { title, placeholder, onChange, disabled } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ title, placeholder });
  }, [form, title, placeholder]);

  function handleValueChange() {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  }

  return (
    <Form
      form={form}
      initialValues={{ title, placeholder }}
      disabled={disabled}
      onValuesChange={handleValueChange}
      layout="vertical"
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            message: "please input title!",
          },
        ]}
      >
        <Input></Input>
      </Form.Item>

      <Form.Item name="placeholder" label="Placeholder">
        <Input.TextArea rows={4}></Input.TextArea>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
