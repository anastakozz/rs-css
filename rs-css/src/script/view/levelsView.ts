import { levelsArr } from "../levels/levels";
import { ElementsGenerator, isHtmlElement } from "../utils/utils";

export default class LevelsView {
    level: number
    levelsTotal: number

    constructor () {
        this.level = 1;
        this.levelsTotal = levelsArr.length;
        this.createLevelsView();
    }

    getActiveLevel () {
        return this.level;
    }

    createLevelsView () {
        const wrapper = document.querySelector('.levels-wrapper');
        if (isHtmlElement(wrapper)){
                for (let i = 1; i <= this.levelsTotal; i++){
                    const levelBlock = new ElementsGenerator({tag: 'div', class: ['level', 'link']}).getElement();
                    wrapper.append(levelBlock);
                    levelBlock.append(new ElementsGenerator({tag: 'span', class: ['checkmark']}).getElement());
                    const levelNumber = new ElementsGenerator({tag: 'span', class: ['level-number']}).getElement();
                    levelNumber.textContent = `${i}`;
                    levelBlock.append(levelNumber);
                }
        }


    }

//     <div class="level link">
//     <span class="checkmark checked"></span>
//     <span class="level-number">1</span>
//   </div>



}