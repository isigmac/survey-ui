import { FC } from "react";

//ui
import { Tabs } from "antd";
import { AppstoreAddOutlined, BarsOutlined } from "@ant-design/icons";
import ComponentLib from "./ComponentLib";
import Layers from "./Layers";

const LeftPanel: FC = () => {
  const tabItems = [
    {
      key: "componentLib",
      label: (
        <span>
          <AppstoreAddOutlined /> Component Lib
        </span>
      ),
      children: <ComponentLib></ComponentLib>,
    },
    {
      key: "layers",
      label: (
        <span>
          <BarsOutlined /> Layers
        </span>
      ),
      children: <Layers />,
    },
  ];

  return <Tabs defaultActiveKey="componentLib" items={tabItems}></Tabs>;
};

export default LeftPanel;
