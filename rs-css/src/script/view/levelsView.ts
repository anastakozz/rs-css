import { levelsArr } from "../levels/levels";
import { ElementsGenerator, isHtmlElement } from "../utils/utils";
import HtmlView from "./htmlView";
import WallView from "./wallView";
import { setStorage, clearStorage } from "../utils/utils";

export default class LevelsView {
    level: number;
    levelsTotal: number;
    wrapper: HTMLElement | null;

    constructor (level:number) {
        this.wrapper = document.querySelector('.levels-wrapper');
        this.level = level;
        this.levelsTotal = levelsArr.length;
        this.createClearButton();
    }

    public createLevelsView (): void {
        if (isHtmlElement(this.wrapper)){
                for (let i = 1; i <= this.levelsTotal; i++){
                    const levelBlock = new ElementsGenerator({tag: 'div', class: ['level', 'link']}).getElement();
                    this.wrapper.append(levelBlock);
                    levelBlock.append(new ElementsGenerator({tag: 'span', class: ['checkmark']}).getElement());
                    const levelNumber = new ElementsGenerator({tag: 'span', class: ['level-number']}).getElement();
                    levelNumber.textContent = `${i}`;
                    levelBlock.append(levelNumber);
                    levelBlock.addEventListener('click', this.switchLevel.bind(this));
                }
        }
        this.styleActiveLevel();
        this.updateHtmlWallView(this.level);
    }

    private createClearButton() {
        const progressButton = new ElementsGenerator({tag: 'button', class: ['button', 'hist-btn']}).getElement();
        progressButton.textContent = 'clear'
        this.wrapper?.after(progressButton);
        progressButton.addEventListener('click', this.clearProgress.bind(this));
    }

    public getActiveLevel ():number {
        return this.level;
    }


    private deselectLevel(): void {
        const previousLevel = document.querySelector('.active-level');
        previousLevel?.classList.remove('active-level');
    }

    private styleActiveLevel(): void {
        const block = this.wrapper?.children[this.level - 1];
        block?.classList.add('active-level');
    }

    private switchLevel(event: Event): void {
        const target = event.currentTarget as HTMLElement;
        const newLevel: string | null = target.children[1].textContent;
        if (newLevel){
            this.level = +newLevel;
            this.deselectLevel();
            this.styleActiveLevel();
            this.updateHtmlWallView(this.level)
            setStorage(this.level);
        }
    }

    private updateHtmlWallView(level: number): void {
        const wall  = new WallView(level);
            wall.updateWallView();
            const html = new HtmlView(level);
            html.updateHtmlView();
    }

    private clearProgress(): void {
        clearStorage();
        this.wrapper?.replaceChildren('');
        this.level = 1;
        this.createLevelsView();
    }

}