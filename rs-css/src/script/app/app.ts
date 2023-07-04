import Controller from "../app/inputController";

export default class App {
  startGame(): void {
    const controller = new Controller();
    controller.initializeInput();
  }
}
