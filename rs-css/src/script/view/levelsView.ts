import { levelsArr } from "../levels/levels";
import { isHtmlElement } from "../utils/utils";
import HtmlView from "./htmlView";
import WallView from "./wallView";
import ElementsGenerator from "../utils/ElementsGenerator";
import { setStorage, clearStorage } from "../utils/utils";
import { filterActiveLevel, getWrapper } from "../utils/getters";
import { ClassItems } from "../lib/enum";

export default class LevelsView {
  level: number;
  levelsTotal: number;
  wrapper: HTMLElement | undefined;
  done: Set<number>;
  help: Set<number>;

  constructor(level: number, doneArr: Set<number>, helpArr: Set<number>) {
    this.help = helpArr;
    this.done = doneArr;
    this.wrapper = getWrapper();
    this.level = level;
    this.levelsTotal = levelsArr.length;
    this.createClearButton();
  }

  public createLevelsView(): void {
    if (isHtmlElement(this.wrapper)) {
      for (let i = 1; i <= this.levelsTotal; i++) {
        const levelBlock = new ElementsGenerator({
          tag: "div",
          class: ["level", "link"],
        }).getElement();

        this.wrapper.append(levelBlock);
        levelBlock.append(
          new ElementsGenerator({
            tag: "span",
            class: ["checkmark"],
          }).getElement()
        );

        const levelNumber = new ElementsGenerator({
          tag: "span",
          class: ["level-number"],
        }).getElement();

        levelNumber.textContent = `${i}`;
        levelBlock.append(levelNumber);
        levelBlock.addEventListener("click", this.chooseLevel.bind(this));

        if (this.done.has(i)) {
          levelBlock.classList.add(`${ClassItems.done}`);
        }

        if (this.help.has(i)) {
          levelBlock.classList.add(`${ClassItems.helped}`);
        }
      }
    }

    this.styleActiveLevel();
    this.updateHtmlWallView(this.level);
  }

  private createClearButton() {
    const progressButton = new ElementsGenerator({
      tag: "button",
      class: ["button", "hist-btn"],
      textContent: "clear"
    }).getElement();
    this.wrapper?.after(progressButton);
    progressButton.addEventListener("click", this.clearProgress.bind(this));
  }

  public getActiveLevel(): number {
    return this.level;
  }

  private deselectLevel(): void {
    const previousLevel = filterActiveLevel();
    previousLevel?.classList.remove(`${ClassItems.active}`);
  }

  private styleActiveLevel(): void {
    const block = this.wrapper?.children[this.level - 1];
    block?.classList.add(`${ClassItems.active}`);
  }

  private chooseLevel(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    const newLevel: string | null = target.children[1].textContent;
    if (newLevel) this.switchLevel(+newLevel);
  }

  public switchLevel(level: number): void {
    this.level = +level;
    this.deselectLevel();
    this.styleActiveLevel();
    this.updateHtmlWallView(this.level);
    setStorage(this.level, this.done, this.help);
  }

  private updateHtmlWallView(level: number): void {
    const wall = new WallView(level);
    wall.updateWallView();
    const html = new HtmlView(level);
    html.updateHtmlView();
  }

  private clearProgress(): void {
    clearStorage();
    this.wrapper?.replaceChildren("");
    this.level = 1;
    this.done.clear();
    this.help.clear();
    this.createLevelsView();
  }

  public markLevelDone(level: number, help?: boolean): void {
    const block = this.wrapper?.children[level - 1];
    block?.classList.add(`${ClassItems.done}`);
    this.done.add(level);

    if (help) {
      this.help.add(level);
      block?.classList.add(`${ClassItems.helped}`);
    }

    setStorage(this.level, this.done, this.help);
  }
}
