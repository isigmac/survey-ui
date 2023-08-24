import { FC } from "react";
import { ComponentConfig, componentConfigGroup } from "../../../components/QuestionComponents";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { ComponentInfo, addComponentAction } from "../../../store/componentsReducer";

//ui
import { Typography } from "antd";
import styles from "./ComponentLib.module.scss";

function BuildComponent(componentConfig: ComponentConfig) {
  const dispatch = useDispatch();
  const { type, title, Component, defaultProps } = componentConfig;

  function handleClick() {
    const newComponent: ComponentInfo = {
      fe_id: nanoid(),
      title: title,
      type: type,
      props: defaultProps,
      isHidden: false,
      isLocked: false,
    };
    dispatch(addComponentAction(newComponent));
  }

  return (
    <div key={type} className={styles.wrapper} onClick={() => handleClick()}>
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
            <div>{components.map((c) => BuildComponent(c))}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentLib;
