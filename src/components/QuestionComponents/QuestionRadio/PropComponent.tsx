import { FC } from "react";
import { QuestionRadioProps, RadioOption } from "./interface";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";

const PropComponent: FC<QuestionRadioProps> = (props: QuestionRadioProps) => {
  const { title, options = [], isVertical, value, onChange, disabled } = props;
  const [form] = Form.useForm();

  const handleValueChange = () => {
    if (onChange) {
      const newValues = form.getFieldsValue();
      const { options = [] } = newValues;

      options.forEach((o: RadioOption) => {
        if (o.value) return;
        o.value = nanoid(5);
      });

      onChange(form.getFieldsValue());
    }
  };

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ value, title, options, isVertical }}
      onValuesChange={handleValueChange}
      disabled={disabled}
    >
      <Form.Item
        name="title"
        label="Radio Title"
        rules={[
          {
            required: true,
            message: "Please input radio title.",
          },
        ]}
      >
        <Input></Input>
      </Form.Item>

      <Form.Item label="Options">
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }, index) => {
                return (
                  <Space key={key} align="baseline">
                    {/* input of current option  */}
                    <Form.Item
                      name={[name, "text"]}
                      rules={[
                        {
                          required: true,
                          message: " Please input option descrition.",
                        },
                        {
                          validator(_, value) {
                            const { options = [] } = form.getFieldsValue();

                            const isDuplicated = options.filter((o: RadioOption) => o.text === value).length > 1;

                            if (isDuplicated) {
                              return Promise.reject(new Error("It's a duplicated option!"));
                            }
                          },
                        },
                      ]}
                    >
                      <Input placeholder="Input option descrition"></Input>
                    </Form.Item>

                    {/* delete action for current option */}
                    {index > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                  </Space>
                );
              })}
              <Form.Item>
                <Button type="link" onClick={() => add({ value: "", text: "" })} icon={<PlusOutlined />} block>
                  Add
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item name="value" label="Default Option">
        <Select
          value={value}
          options={options.map(({ value, text }) => {
            return { value, label: text || "" };
          })}
        ></Select>
      </Form.Item>

      <Form.Item name="isVertical" label="Display in vertical" valuePropName="checked">
        <Checkbox name="isVerticalCheckBox">Display in Vertical</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
