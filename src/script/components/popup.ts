import { ClassItems } from "../lib/enum";
import generateMarkup from "../utils/generateMarkup";
import { markupI } from "../utils/types";
import ElementsGenerator from "../utils/ElementsGenerator";

const popUPMarkup: markupI = {
  tag: "div",
  class: ["popup"],
  children: [
    {
      tag: "b",
      class: ["popup-msg"],
      textContent: "Good job! You rock it!",
    },
  ],
};

export default class PopUp {
  popup: HTMLElement | null;

  constructor() {
    this.popup = this.createPopup();
    this.setListeners();
  }

  public togglePopup(): void {
    this.popup?.classList.toggle(`${ClassItems.hidden}`);
  }

  private setListeners(): void {
    this.popup?.addEventListener("click", this.togglePopup.bind(this));
  }

  private createPopup(): HTMLElement {
    const popup = new ElementsGenerator({
      tag: "div",
      class: ["popup-wrapper", "hidden"],
    }).getElement();
    generateMarkup([popUPMarkup], popup);

    document.body.children[0].append(popup);

    return popup;
  }
}
