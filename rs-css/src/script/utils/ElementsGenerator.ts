import { markupI } from "./types";

export default class ElementsGenerator {
  element: HTMLElement;
  constructor(params: markupI) {
    this.element = this.createElement(params);
  }

  private createElement(params: markupI): HTMLElement {
    const elem: HTMLElement = document.createElement(params.tag);
    if (params.class) {
      params.class.forEach((item) => elem.classList.add(item));
    }

    if (params.id) {
      elem.id = params.id;
    }

    if (params.textContent) {
      elem.textContent = params.textContent;
    }

    return elem;
  }

  public getElement(): HTMLElement {
    return this.element;
  }
}
