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

export function getStoredLevel(): number {
    const check = localStorage.getItem('activeLevel');
    return check ? +check : 1;
}

export function setStorage(level: number, arr: number[]): void {
    localStorage.setItem('activeLevel', `${level}`);
    localStorage.setItem('doneLevels', arr.join(','));
}

export function clearStorage(): void {
    localStorage.clear();
}

export function getStoredDone(): number[] {
    const str = localStorage.getItem('doneLevels');
    return str ? str.split(',').map((item) => +item) : [];
}
