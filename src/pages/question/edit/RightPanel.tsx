import { FC } from "react";

//ui
import { Tabs } from "antd";
import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";
import ComponentProp from "./ComponentProp";

const RightPanel: FC = () => {
  const tabItems = [
    {
      key: "prop",
      label: (
        <span>
          <FileTextOutlined /> Properties
        </span>
      ),
      children: <ComponentProp />,
    },
    {
      key: "setting",
      label: (
        <span>
          <SettingOutlined /> Setting
        </span>
      ),
      children: <div>Setting</div>,
    },
  ];

  return <Tabs defaultActiveKey="componentLib" items={tabItems}></Tabs>;

  return <Tabs items={tabItems} defaultActiveKey="prop" />;
};

export default RightPanel;
