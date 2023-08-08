import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_PATHNAME, MANAGE_LIST_PATHNAME } from "../router";

import { useRequest } from "ahooks";
import { loginService } from "../services/user";
import { setToken } from "../utilites/user-token";

// ui
import { Button, Checkbox, Space, Form, Input, Typography, message } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import styles from "./Login.module.scss";

type UserLogin = {
  username: string;
  password: string;
  remember: boolean;
};

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:", errorInfo);
// };

const Login: FC = () => {
  const nav = useNavigate();
  const { Title, Text } = Typography;
  const SignInPath = REGISTER_PATHNAME;

  // #region remember

  const USERNAME_KEY = "USERNAME";
  const PASSWORD_KEY = "PASSWORD";

  function rememberUser(username: string, password: string) {
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(PASSWORD_KEY, password);
  }

  function deleteUserFromRemember() {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(PASSWORD_KEY);
  }

  function getUserFromRemember() {
    const username = localStorage.getItem(USERNAME_KEY);
    const password = localStorage.getItem(PASSWORD_KEY);
    return { username, password };
  }

  const [form] = Form.useForm();

  useEffect(() => {
    const { username, password } = getUserFromRemember();
    form.setFieldsValue({ username: username, password: password });
  }, [form]);

  // #endregion

  const { run: login } = useRequest(
    async (username: string, password: string) => {
      return await loginService(username, password);
    },
    {
      manual: true,
      onSuccess(response) {
        const { token } = response;
        setToken(token);
        message.success("Login Success", token);

        nav(MANAGE_LIST_PATHNAME);
      },
    }
  );

  const onFinish = (values: UserLogin) => {
    const { username, password, remember } = values;
    login(username, password);

    if (remember) {
      rememberUser(username, password);
    } else {
      deleteUserFromRemember();
    }
  };

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
          form={form}
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
                Don’t have an account? <Link to={SignInPath}>Sign up</Link>
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
