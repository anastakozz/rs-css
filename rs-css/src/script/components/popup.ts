export default class PopUp {
  popup: HTMLElement | null;

  constructor() {
    this.popup = document.querySelector(".popup-wrapper");
    this.setListeners();
  }

  public togglePopup(): void {
    this.popup?.classList.toggle("hidden");
  }

  private setListeners(): void {
    this.popup?.addEventListener("click", this.togglePopup.bind(this));
  }
}
