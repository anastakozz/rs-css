import { levelsArr } from "../levels/levels";
import { ElementsGenerator, isHtmlElement } from "../utils/utils";
import HtmlView from "./htmlView";
import WallView from "./wallView";
import { setStorage } from "../utils/utils";

export default class LevelsView {
    level: number;
    levelsTotal: number;
    wrapper: HTMLElement | null;

    constructor (level:number) {
        this.wrapper = document.querySelector('.levels-wrapper');
        this.level = level;
        this.levelsTotal = levelsArr.length;
        this.createLevelsView();
        this.styleActiveLevel();
    }

    public getActiveLevel (): number {
        return this.level;
    }

    private createLevelsView (): void {
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
            const wall  = new WallView(this.level);
            wall.updateWallView();
            const html = new HtmlView(this.level);
            html.updateHtmlView();
            setStorage(this.level);
        }
    }

}