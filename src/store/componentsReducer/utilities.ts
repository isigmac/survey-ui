import { ComponentInfo } from "./index";

export function getNextSelectedId(delete_id: string, componentList: ComponentInfo[]) {
  const index = componentList.findIndex((c) => c.fe_id === delete_id);

  if (index < 0) return "";

  if (index === 0 && componentList.length === 1) return "";

  if (index === componentList.length - 1) return componentList[index - 1].fe_id;

  return componentList[index + 1].fe_id;
}
