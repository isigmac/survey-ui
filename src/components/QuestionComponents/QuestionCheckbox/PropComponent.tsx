import { FC } from "react";
import { CheckboxOption, QuestionCheckboxProps } from "./interface";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";

const PropComponent: FC<QuestionCheckboxProps> = (props: QuestionCheckboxProps) => {
  const { title, options = [], isVertical, onChange, disabled } = props;
  const [form] = Form.useForm();

  const handleValueChange = () => {
    if (onChange) {
      const newValues = form.getFieldsValue();
      const { options } = newValues;

      options.forEach((o: CheckboxOption) => {
        if (o.value) return;

        o.value = nanoid(5);
      });

      console.log(JSON.stringify(options));
      onChange(newValues);
    }
  };

  return (
    <Form
      form={form}
      initialValues={{ title, options, isVertical }}
      disabled={disabled}
      onValuesChange={handleValueChange}
      layout="vertical"
    >
      <Form.Item
        name="title"
        label="Checkbox Title"
        rules={[
          {
            required: true,
            message: "Please input a title!",
          },
        ]}
      >
        <Input placeholder="input checkbox title"></Input>
      </Form.Item>

      <Form.Item label="Options">
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }, index) => {
                return (
                  <Space key={key} align="baseline">
                    <Form.Item name={[name, "checked"]} valuePropName="checked">
                      <Checkbox></Checkbox>
                    </Form.Item>

                    {/* input of current option  */}
                    <Form.Item
                      name={[name, "text"]}
                      rules={[
                        {
                          required: true,
                          message: " Please input option description.",
                        },
                        {
                          validator(_, value) {
                            const { options = [] } = form.getFieldsValue();

                            const isDuplicated = options.filter((o: CheckboxOption) => o.text === value).length > 1;

                            if (isDuplicated) {
                              return Promise.reject(new Error("It's a duplicated option!"));
                            }
                          },
                        },
                      ]}
                    >
                      <Input placeholder="Input option description"></Input>
                    </Form.Item>

                    {/* delete action for current option */}
                    {index > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  type="link"
                  onClick={() => add({ value: "", text: "", checked: false })}
                  icon={<PlusOutlined />}
                  block
                >
                  Add
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item name="isVertical" valuePropName="checked" label="Display Settings">
        <Checkbox>Display in Vertical</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
