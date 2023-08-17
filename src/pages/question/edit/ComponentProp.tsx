import { FC } from "react";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";
import { getComponentConfigByType } from "../../../components/QuestionComponents";
import { ComponentInfo } from "../../../store/componentsReducer";

//ui

const NoProp: FC = () => {
  return <div style={{ textAlign: "center" }}>no component selected</div>;
};

const ComponentProp: FC = () => {
  //   debugger;
  const { selectedComponent } = useGetComponentsInfo();

  if (!selectedComponent) return <NoProp />;

  const { type, props } = selectedComponent as ComponentInfo;

  //   debugger;
  const componentConfig = getComponentConfigByType(type);

  if (!componentConfig) return <NoProp />;

  const { PropComponent } = componentConfig;

  return <PropComponent {...props} />;
};

export default ComponentProp;
