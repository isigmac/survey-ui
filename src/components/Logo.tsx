import { FC, useEffect, useState } from "react";

import useGetUserInfo from "../hooks/useGetUserInfo";
import { HOME_PATHNAME, MANAGE_LIST_PATHNAME } from "../router/index";

//ui
import { Space, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  const { Title } = Typography;

  const { username } = useGetUserInfo();

  const [pathname, setPathname] = useState(HOME_PATHNAME);

  useEffect(() => {
    if (username) {
      setPathname(MANAGE_LIST_PATHNAME);
    }
  }, [username]);

  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined></FormOutlined>
          </Title>
          <Title>Survey</Title>
        </Space>
      </Link>
    </div>
  );
};

export default Logo;
