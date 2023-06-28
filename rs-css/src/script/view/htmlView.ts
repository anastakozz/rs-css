import { levelsArr } from "../levels/levels";
import { ElementsGenerator } from "../utils/utils";
import { escapeHtml } from "../utils/utils";

export default class HtmlView {

    fragment: DocumentFragment;
    level: number;
    area: HTMLElement | null;

    constructor(level: number) {
        this.level = level;
        this.fragment = document.createDocumentFragment();
        this.createHtmlView(level);
        this.area = document.querySelector('.html-pre');
    }

    private appendCodeElement(str: string): void {
        const codeElement = new ElementsGenerator({tag: 'code', class: ['language-html']}).getElement();
        codeElement.textContent = str;
        this.fragment.append(codeElement);
        // if(isHtmlElement(this.fragment)){
        //     console.log('hi')
        //     this.fragment.append(codeElement);
        // }
    }

    private createHtmlView(level: number): void {
        const params = levelsArr[level - 1].htmlMarkup;

        if(params) {
            params.forEach((param) => {
                this.appendCodeElement(escapeHtml(param));
            })
        }
    }

    public updateHtmlView(): void {
        this.area?.replaceChildren(this.fragment);
    }


}