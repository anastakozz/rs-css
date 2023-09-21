import { isHtmlElement } from "../utils/utils";
import { getStoredLevel, getStoredDone, getStoredHelp } from "../utils/utils";
import LevelsView from "../view/levelsView";
import { levelsArr } from "../levels/levels";
import PopUp from "../components/popup";
import Help from "../components/help";
import { ClassItems } from "../lib/enum";
import {
  getWall,
  getHelpButton,
  getEnterButton,
  getCodeInput,
} from "../utils/getters";
import getTrueNodes from "../utils/getTrueNodes";

export default class Controller {
  button: HTMLElement | undefined;
  input: HTMLInputElement | undefined;
  levels: LevelsView;
  wall: HTMLElement | undefined;
  popup: PopUp;
  help: Help;
  helpBtn: HTMLElement | undefined;

  constructor() {
    this.wall = getWall();
    this.popup = new PopUp();

    this.button = getEnterButton();
    this.input = getCodeInput();

    this.helpBtn = getHelpButton();
    this.help = new Help();
    this.helpBtn?.addEventListener("click", this.showHint.bind(this));

    this.levels = new LevelsView(
      getStoredLevel(),
      getStoredDone(),
      getStoredHelp()
    );
    this.levels.createLevelsView();

    this.wall = getWall();
    this.popup = new PopUp();
  }

  public initializeInput() {
    this.button?.addEventListener("click", this.testInput.bind(this));
    this.input?.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        this.testInput();
      }
    });
  }

  private testInput(): void {
    const trueNodes = getTrueNodes(`${ClassItems.glowing}`, this.wall);
    const answer = this.input?.value;
    let result = false;

    if (isHtmlElement(this.wall)) {
      if (answer && answer !== `.${ClassItems.glowing}`) {
        try {
          const answerNodes = Array.from(
            this.wall.querySelectorAll(`${answer}`)
          );
          if (
            trueNodes.every((item) => answerNodes.includes(item)) &&
            answerNodes.length === trueNodes.length
          ) {
            result = true;
          }
        } catch {
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
        const nextLevel = this.levels.getActiveLevel() + 1;
        //check if the level is last in levelArr
        this.levels.markLevelDone(
          this.levels.getActiveLevel(),
          this.help.getHelpFlag()
        );
        this.help.clearHelpFlag();

        // check if layer is final
        if (getStoredDone().size === levelsArr.length) {
          this.popup.togglePopup();
        }

        if (nextLevel <= levelsArr.length) {
          this.levels.switchLevel(nextLevel);
        }

        //clear input
        if (isHtmlElement(this.input)) {
          this.input.value = "";
          this.input.classList.remove(`${ClassItems.hinted}`);
        }
      }, 1000);
    } else {
      this.animateError();
    }
  }

  private animateError(): void {
    this.wall?.classList.toggle(`${ClassItems.blinking}`);
    setTimeout(() => {
      this.wall?.classList.toggle(`${ClassItems.blinking}`);
    }, 800);
  }

  private animateSuccess(): void {
    this.wall?.classList.toggle(`${ClassItems.success}`);
    setTimeout(() => {
      this.wall?.classList.toggle(`${ClassItems.success}`);
    }, 800);
  }

  private showHint(): void {
    const hint = this.help.getHint(this.levels.getActiveLevel());

    let charIndex = 0;
    const timing = setInterval(() => {
      if (charIndex <= hint.length - 1) {
        if (this.input) this.input.value += hint[charIndex];
        charIndex += 1;
      } else {
        clearInterval(timing);
      }
    }, 120);

    this.input?.focus();
  }
}
