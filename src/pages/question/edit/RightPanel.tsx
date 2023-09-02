import { FC, useEffect, useState } from "react";

//ui
import { Tabs } from "antd";
import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";
import ComponentProp from "./ComponentProp";
import PageSetting from "./PageSetting";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";

enum TAB_KEYS {
  PROP_KEY = "prop",
  SETTING_KEY = "setting",
}

const RightPanel: FC = () => {
  const { selectedId } = useGetComponentsInfo();

  const [activeKey, setActiveKey] = useState(TAB_KEYS.PROP_KEY);

  useEffect(() => {
    if (selectedId !== "") {
      setActiveKey(TAB_KEYS.PROP_KEY);
    } else {
      setActiveKey(TAB_KEYS.SETTING_KEY);
    }
  }, [selectedId]);

  const tabItems = [
    {
      key: TAB_KEYS.PROP_KEY,
      label: (
        <span>
          <FileTextOutlined /> Properties
        </span>
      ),
      children: <ComponentProp />,
    },
    {
      key: TAB_KEYS.SETTING_KEY,
      label: (
        <span>
          <SettingOutlined /> Setting
        </span>
      ),
      children: <PageSetting></PageSetting>,
    },
  ];

  return <Tabs items={tabItems} activeKey={activeKey} />;
};

export default RightPanel;
