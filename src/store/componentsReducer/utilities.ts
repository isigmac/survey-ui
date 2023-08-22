import { ComponentInfo } from "./index";

export function getNextSelectedId(delete_id: string, componentList: ComponentInfo[]) {
  const availableComponents = getAvailableComponents();
  const index = availableComponents.findIndex((c) => c.fe_id === delete_id);

  if (index < 0) return "";

  if (index === 0 && availableComponents.length === 1) return "";

  if (index === availableComponents.length - 1) return availableComponents[index - 1].fe_id;

  return availableComponents[index + 1].fe_id;

  function getAvailableComponents() {
    return componentList.filter((c) => !c.isHidden);
  }
}
