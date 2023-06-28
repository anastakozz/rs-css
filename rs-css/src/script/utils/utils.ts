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
        if (params.class) {
            params.class.forEach((item) => elem.classList.add(item))
            }
        if (params.id) {
            elem.id = params.id;
        }
        return elem;
    }

    getElement():HTMLElement {
        return this.element;
    }
}

export function escapeHtml(str: string): string {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}