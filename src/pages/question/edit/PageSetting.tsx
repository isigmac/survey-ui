import { FC, useEffect } from "react";
import useGetPageInfo from "../../../hooks/useGetPageInfo";

//ui
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { resetPageInfoAction } from "../../../store/pageInfoReducer";

const PageSetting: FC = () => {
  const pageInfo = useGetPageInfo();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  function handleValueChange() {
    dispatch(resetPageInfoAction(form.getFieldsValue()));
  }

  useEffect(() => {
    form.setFieldsValue(pageInfo);
  }, [pageInfo, form]);

  return (
    <Form layout="vertical" initialValues={pageInfo} onValuesChange={handleValueChange} form={form}>
      <Form.Item
        name="title"
        label="Survey Title"
        rules={[
          {
            required: true,
            message: "Please input survey title.",
          },
        ]}
      >
        <Input placeholder="input survey title"></Input>
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea autoSize={{ minRows: 3, maxRows: 10 }}></Input.TextArea>
      </Form.Item>

      <Form.Item name="js" label="JS Code">
        <Input.TextArea autoSize={{ minRows: 3, maxRows: 10 }}></Input.TextArea>
      </Form.Item>

      <Form.Item name="css" label="CSS">
        <Input.TextArea autoSize={{ minRows: 3, maxRows: 10 }}></Input.TextArea>
      </Form.Item>
    </Form>
  );
};

export default PageSetting;
