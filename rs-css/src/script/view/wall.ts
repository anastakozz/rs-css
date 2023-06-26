import {levelsArr} from '../levels/levels'
import { ElementsGenerator, isHtmlElement } from '../utils/utils';

export default class WallView {
    fragment: DocumentFragment

    constructor(level: number){
        this.fragment = document.createDocumentFragment();
        this.createView(level);
    }

    createView(level: number):void {
        const params = levelsArr[level].svgMarkup;
        if(params) {
            params.forEach((param) => {
                const elem = new ElementsGenerator(param).getElement();
                console.log(elem);
                if (isHtmlElement(elem)){
                    elem.classList.add('shape');
                    this.fragment.append(elem);
                }
            })
        }
    }

    getDocumentFragment():DocumentFragment {
        return this.fragment;
    }



}