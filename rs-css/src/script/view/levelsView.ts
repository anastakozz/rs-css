import { levelsArr } from "../levels/levels";
import { ElementsGenerator, isHtmlElement } from "../utils/utils";
import WallView from "./wallView";

export default class LevelsView {
    level: number
    levelsTotal: number

    constructor () {
        this.level = 1;
        this.levelsTotal = levelsArr.length;
        this.createLevelsView();
    }

    public getActiveLevel (): number {
        return this.level;
    }

    private createLevelsView (): void {
        const wrapper = document.querySelector('.levels-wrapper');
        if (isHtmlElement(wrapper)){
                for (let i = 1; i <= this.levelsTotal; i++){
                    const levelBlock = new ElementsGenerator({tag: 'div', class: ['level', 'link']}).getElement();
                    wrapper.append(levelBlock);
                    levelBlock.append(new ElementsGenerator({tag: 'span', class: ['checkmark']}).getElement());
                    const levelNumber = new ElementsGenerator({tag: 'span', class: ['level-number']}).getElement();
                    levelNumber.textContent = `${i}`;
                    levelBlock.append(levelNumber);
                    levelBlock.addEventListener('click', this.switchLevel);
                }
        }
    }

    private switchLevel(event: Event): void {
        const target = event.currentTarget as HTMLElement;
        const newLevel: string | null = target.children[1].textContent;
        if (newLevel){
            this.level = +newLevel;
            const wall  = new WallView(this.level);
            wall.updateWallView();
        }
    }

}