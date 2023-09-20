import { markupI } from "../utils/types";
import ElementsGenerator from "../utils/ElementsGenerator";
import { isHtmlElement } from "../utils/utils";

const generateMarkup = (
  params: markupI[],
  parent: DocumentFragment | HTMLElement
): void => {
  params.forEach((param) => {
    const elem = new ElementsGenerator(param).getElement();

    if (isHtmlElement(elem)) {
      parent.append(elem);
    }

    if (param.children) {
      generateMarkup(param.children, elem);
    }
  });
};

export default generateMarkup;
