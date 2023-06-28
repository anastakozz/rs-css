import {levelsArr} from '../levels/levels'
import { markupI } from '../utils/types';
import { ElementsGenerator, isHtmlElement } from '../utils/utils';

export default class WallView {

    fragment: DocumentFragment;
    level: number;
    wall: HTMLElement | null;
    title: HTMLElement | null;

    constructor(level: number){
        this.level = level;
        this.fragment = document.createDocumentFragment();
        this.createWallView(level);
        this.wall = document.querySelector('.wall');
        this.title = document.querySelector('.order-title');
    }

    private createWallView(level: number):void {
        const params = levelsArr[level - 1].svgMarkup;

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

    public updateWallView():void {
        if (isHtmlElement(this.wall)) {
            this.wall.replaceChildren(this.fragment);
        }

        if(isHtmlElement(this.title)) {
            this.title.textContent = levelsArr[this.level - 1].order;
        }

    }

}