import { levelsArr } from "../levels/levels";
import { isHtmlElement } from "../utils/utils";
import { getWall, getTitle } from "../utils/getters";
import generateMarkup from "../utils/generateMarkup";

export default class WallView {
  fragment: DocumentFragment;
  level: number;
  wall: HTMLElement | undefined;
  title: HTMLElement | undefined;

  constructor(level: number) {
    this.level = level;
    this.fragment = document.createDocumentFragment();
    this.createWallView(level);
    this.wall = getWall();
    this.title = getTitle();
  }

  private createWallView(level: number): void {
    const params = levelsArr[level - 1].svgMarkup;

    if (params) {
      generateMarkup(params, this.fragment);
    }
  }

  public updateWallView(): void {
    if (isHtmlElement(this.wall)) {
      this.wall.replaceChildren(this.fragment);
    }

    if (isHtmlElement(this.title)) {
      this.title.textContent = levelsArr[this.level - 1].order;
    }
  }
}
