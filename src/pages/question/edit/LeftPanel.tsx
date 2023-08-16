import { FC } from "react";

//ui
import { Tabs } from "antd";
import { AppstoreAddOutlined, BarsOutlined } from "@ant-design/icons";
import ComponentLib from "./ComponentLib";

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
      children: <div>Layers</div>,
    },
  ];

  return <Tabs defaultActiveKey="componentLib" items={tabItems}></Tabs>;
};

export default LeftPanel;
