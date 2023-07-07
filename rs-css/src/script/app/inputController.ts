import { isHtmlElement } from "../utils/utils";
import { getStoredLevel, getStoredDone, getStoredHelp } from "../utils/utils";
import LevelsView from "../view/levelsView";
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
    this.button = document.querySelector(".enter-btn");
    this.input = document.querySelector(".code-input");

    this.helpBtn = document.querySelector(".help-btn");
    this.help = new Help();
    this.helpBtn?.addEventListener("click", this.showHint.bind(this));

    this.levels = new LevelsView(
      getStoredLevel(),
      getStoredDone(),
      getStoredHelp()
    );
    this.levels.createLevelsView();

    this.wall = document.querySelector(".wall");
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
    const trueNodes = Array.from(document.querySelectorAll(".glowing"));
    const answer = this.input?.value;
    let result = false;

    if (isHtmlElement(this.wall)) {
      if (answer && answer !== ".glowing") {
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
          this.input.classList.remove("hinted");
        }
      }, 1000);
    } else {
      this.animateError();
    }
  }

  private animateError(): void {
    this.wall?.classList.toggle("blinking");
    setTimeout(() => {
      this.wall?.classList.toggle("blinking");
    }, 800);
  }

  private animateSuccess(): void {
    this.wall?.classList.toggle("success");
    setTimeout(() => {
      this.wall?.classList.toggle("success");
    }, 800);
  }

  private showHint(): void {
    const hint = this.help.getHint(this.levels.getActiveLevel());

    let charIndex = 0;
    setInterval(() => {
      if (charIndex <= hint.length - 1) {
        if (this.input) this.input.value += hint[charIndex];
        charIndex += 1;
      }
    }, 120);

    this.input?.focus();
  }
}
