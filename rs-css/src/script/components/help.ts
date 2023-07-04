import { levelsArr } from "../levels/levels";

export default class Help {
  helpFlag: boolean;

  constructor() {
    this.helpFlag = false;
  }

  public getHelpFlag(): boolean {
    return this.helpFlag;
  }

  public clearHelpFlag(): void {
    this.helpFlag = false;
  }

  public showHint(level: number): string {
    this.helpFlag = true;
    const hint = levelsArr[level - 1].selector;
    return hint;
  }
}
