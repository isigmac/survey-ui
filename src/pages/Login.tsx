import { FC } from "react";
import { Link } from "react-router-dom";

import { REGISTER_PATHNAME } from "../router";

import { Button, Checkbox, Space, Form, Input, Typography } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import styles from "./Login.module.scss";

type UserLogin = {
  username: string;
  password: string;
  remember: boolean;
};

const onFinish = (values: UserLogin) => {
  console.log("Success:", values);
};

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:", errorInfo);
// };

const Login: FC = () => {
  // const nav = useNavigate();
  const { Title, Text } = Typography;

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <LoginOutlined />
          </Title>
          <Title level={2}>Log in</Title>
        </Space>
      </div>

      <div className={styles.form}>
        <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
          // style={{ maxWidth: 800 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
              {
                min: 6,
                max: 20,
                message: "Username must be between 6 and 20 characters.",
              },
              { pattern: /^\w+$/, message: "Username must be alphanumeric." },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                max: 20,
                message: "Password must be between 6 and 20 characters.",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 10, span: 10 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Space direction="vertical">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Text>
                Don’t have an account? <Link to={REGISTER_PATHNAME}>Sign up</Link>
              </Text>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
// Don’t have an account? Sign up
export default Login;
