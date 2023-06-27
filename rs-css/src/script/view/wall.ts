import {levelsArr} from '../levels/levels'
import { markupI } from '../utils/types';
import { ElementsGenerator, isHtmlElement } from '../utils/utils';

export default class WallView {
    fragment: DocumentFragment

    constructor(level: number){
        this.fragment = document.createDocumentFragment();
        this.createView(level);
    }

    createView(level: number):void {
        const params = levelsArr[level].svgMarkup;

        const generateMarkup = (params: markupI[], parent: DocumentFragment | HTMLElement):void => {
            params.forEach((param) => {
                const elem = new ElementsGenerator(param).getElement();
                if (isHtmlElement(elem)){
                    parent.append(elem);
                }
                if (param.children){
                    generateMarkup(param.children, elem)
                }
            })
        }

        if(params) {
            generateMarkup(params, this.fragment)
        }
    }

    getDocumentFragment():DocumentFragment {
        return this.fragment;
    }



}