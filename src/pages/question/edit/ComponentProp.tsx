import { FC } from "react";
import { useDispatch } from "react-redux";
import useGetComponentsInfo from "../../../hooks/useGetComponentsInfo";
import { getComponentConfigByType, ComponentProps } from "../../../components/QuestionComponents";
import { ComponentInfo, changeComponentAction } from "../../../store/componentsReducer";

//ui

const NoProp: FC = () => {
  return <div style={{ textAlign: "center" }}>no component selected</div>;
};

const ComponentProp: FC = () => {
  const dispatch = useDispatch();
  const { selectedComponent } = useGetComponentsInfo();

  if (!selectedComponent) return <NoProp />;

  const { type, props, isLocked } = selectedComponent as ComponentInfo;

  const componentConfig = getComponentConfigByType(type);

  if (!componentConfig) return <NoProp />;

  function changeProps(newProps: ComponentProps) {
    if (!selectedComponent) return;

    const { fe_id } = selectedComponent;
    dispatch(changeComponentAction({ fe_id, props: newProps }));
  }

  const { PropComponent } = componentConfig;

  return <PropComponent {...props} onChange={changeProps} disabled={isLocked === true} />;
};

export default ComponentProp;
