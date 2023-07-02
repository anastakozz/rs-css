import { isHtmlElement } from "../utils/utils";
import { getStoredLevel } from '../utils/utils';
import LevelsView from '../view/levelsView';
// import { levelsArr } from "../levels/levels";

export default class Controller {

    button: HTMLElement | null;
    input: HTMLInputElement | null;

    constructor() {
        this.button = document.querySelector('.enter-btn');
        this.input = document.querySelector('.code-input');

        const startLevel = getStoredLevel();
        const levels = new LevelsView(startLevel);
        levels.createLevelsView();
    }

    public initializeInput() {
        this.button?.addEventListener('click', this.testInput.bind(this));
        this.input?.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.testInput();
            }
        });
    }

    public testInput(): boolean {
        //get true
        const trueNodes = Array.from(document.querySelectorAll('.glowing'));
        

        //get answer
        const answer = this.input?.value;

        //check answer
        const wall = document.querySelector('.wall');
        let result = false;
        if (isHtmlElement(wall)) {
            if (answer && (answer !== '.glowing')) {
                const answerNodes = Array.from(wall?.querySelectorAll(`${answer}`));
                if (trueNodes.every((item) => answerNodes.includes(item)) && answerNodes.length === trueNodes.length){
                    result = true;
                }
            } 
        }
        console.log(result);
        //clear input
        if (isHtmlElement(this.input)) {
            this.input.value = '';
        }
        return true;
    }
}