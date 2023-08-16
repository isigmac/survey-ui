import { FC } from "react";
import { ComponentConfig, componentConfigGroup } from "../../../components/QuestionComponents";

//ui
import { Typography } from "antd";
import styles from "./ComponentLib.module.scss";

function buildComponent(componentConfig: ComponentConfig) {
  const { Component } = componentConfig;

  return (
    <div className={styles.wrapper}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  );
}

const ComponentLib: FC = () => {
  const { Title } = Typography;
  return (
    <div>
      {componentConfigGroup.map((group, index) => {
        const { id, groupName, components } = group;
        return (
          <div key={id}>
            <Title level={3} style={{ fontSize: "16px", marginTop: index > 0 ? "2 0px" : "0px" }}>
              {groupName}
            </Title>
            <div>{components.map((c) => buildComponent(c))}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentLib;
