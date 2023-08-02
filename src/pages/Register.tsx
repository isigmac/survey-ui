import { FC } from "react";
import { Link } from "react-router-dom";

import { LOGIN_PATHNAME } from "../router";

import { Typography, Space, Form, Input, Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

import styles from "./Register.module.scss";

const { Title } = Typography;

type IUser = {
  username: string;
  nickname: string;
  password: string;
  confirm: string;
};

const Register: FC = () => {
  const onFinish = (values: IUser) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>Register New User</Title>
        </Space>
      </div>

      <div className={styles.form}>
        <Form labelCol={{ span: 10 }} wrapperCol={{ span: 16 }} onFinish={onFinish}>
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
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Nick Name"
            name="nickname"
            tooltip="What do you want others to call you?"
            rules={[{ required: true, message: "Please input your nickname!" }]}
          >
            <Input></Input>
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
            hasFeedback
          >
            <Input.Password></Input.Password>
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirm"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                max: 20,
                message: "Password must be between 6 and 20 characters.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The confirm password that you entered do not match!"));
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password></Input.Password>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Space direction="horizontal">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Link to={LOGIN_PATHNAME}>Already have account. Login</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
