import { markupI } from "./types";

export const isHtmlElement = (element: unknown): element is HTMLElement =>
  element instanceof HTMLElement

export class ElementsGenerator {
    element: HTMLElement
    constructor(params:markupI) {
        this.element = this.createElement(params);
    }

    createElement(params: markupI):HTMLElement {
        const elem: HTMLElement = document.createElement(params.tag);
        if (params.class) {elem.classList.add(params.class)}
        return elem;
    }

    getElement():HTMLElement {
        return this.element;
    }
}