import { trueNodesParams } from "./types";

export default function getTrueNodes(
  {classname, parent}:trueNodesParams
): Element[] {
  const result: Element[] = [];

  const checkElements = (
    classname: string,
    parent: HTMLElement | undefined | Element
  ) => {
    if (parent) {
      const elements = Array.from(parent.children);
      elements.forEach((item) => {
        if (item.classList.contains(classname)) {
          result.push(item);
        }
        if (item.firstChild) {
          checkElements(classname, item);
        }
      });
      result;
    }
  };

  checkElements(classname, parent);
  return result;
}
