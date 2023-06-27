import {levelsArr} from '../levels/levels'
import { markupI } from '../utils/types';
import { ElementsGenerator, isHtmlElement } from '../utils/utils';

export default class WallView {
    fragment: DocumentFragment;
    level: number

    constructor(level: number){
        this.level = level;
        this.fragment = document.createDocumentFragment();
        this.createWallView(level);
    }

    createWallView(level: number):void {
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

    appendWallView():void {
        const wall = document.querySelector('.wall');
        const title = document.querySelector('.order-title');
        if (isHtmlElement(wall)) {
            wall.append(this.fragment);
        }
        console.log(title)

        // 

        if(isHtmlElement(title)) {
            console.log('hi')
            title.textContent = levelsArr[this.level].order;
        }
    }





}