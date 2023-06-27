import WallView from '../view/wall';

export default class App {

    createView(): void {
        const wall  = new WallView(1);
        wall.appendWallView();
        // const levels = new levelsView();
        // const HtmlArea = new HtmlView();

    }
}