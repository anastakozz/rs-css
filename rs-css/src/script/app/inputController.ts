import { isHtmlElement } from "../utils/utils";
import { getStoredLevel, getStoredDone, getStoredHelp } from '../utils/utils';
import LevelsView from '../view/levelsView';
import { levelsArr } from "../levels/levels";
import PopUp from "../components/popup";
import Help from "../components/help";

export default class Controller {

    button: HTMLElement | null;
    input: HTMLInputElement | null;
    levels: LevelsView;
    wall: HTMLElement | null;
    popup: PopUp;
    help: Help;
    helpBtn: HTMLElement | null;


    constructor() {
        this.button = document.querySelector('.enter-btn');
        this.input = document.querySelector('.code-input');

        this.helpBtn = document.querySelector('.help-btn');
        this.help = new Help();
        this.helpBtn?.addEventListener('click', this.getHint.bind(this));

        this.levels = new LevelsView(getStoredLevel(), getStoredDone(), getStoredHelp());
        this.levels.createLevelsView();

        this.wall = document.querySelector('.wall');
        this.popup = new PopUp();
    }

    public initializeInput() {
        this.button?.addEventListener('click', this.testInput.bind(this));
        this.input?.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.testInput();
            }
        });
    }

    private testInput(): void {

        const trueNodes = Array.from(document.querySelectorAll('.glowing'));
        const answer = this.input?.value;
        let result = false;

        if (isHtmlElement(this.wall)) {
            if (answer && (answer !== '.glowing')) {
                try {
                    const answerNodes = Array.from(this.wall.querySelectorAll(`${answer}`));
                    if (trueNodes.every((item) => answerNodes.includes(item)) && answerNodes.length === trueNodes.length){
                        result = true;
                    }
                }
                catch {
                    result = false;
                }
            } 
        }

        this.getReaction(result);
    }

    private getReaction(result: boolean): void {

        if (result) {
            this.animateSuccess();

            setTimeout(() => {
                //update layer
                const nextLevel = this.levels.getActiveLevel() + 1;
                // check if layer is final
                if (nextLevel >= levelsArr.length) {
                    this.popup.togglePopup();
                } else {
                    this.levels.markLevelDone(this.levels.getActiveLevel(), this.help.getHelpFlag());
                    this.help.clearHelpFlag();
                    this.levels.switchLevel(nextLevel);
                }
                //clear input
                if (isHtmlElement(this.input)) {
                    this.input.value = '';
                }
            }, 1000);
            
        } else {
            this.animateError();
        }
    }

    private animateError(): void {
        this.wall?.classList.toggle('blinking');
        setTimeout(() => {
            this.wall?.classList.toggle('blinking')
        }, 800);
    }

    private animateSuccess(): void {
        this.wall?.classList.toggle('success');
        setTimeout(() => {
            this.wall?.classList.toggle('success')
        }, 800);
    }

    private getHint(): void {
        console.log(this.help.getHelpFlag());
        this.help.showHint(this.levels.getActiveLevel());
        console.log(this.help.getHelpFlag());
    }

}