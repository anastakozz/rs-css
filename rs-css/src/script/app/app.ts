import WallView from '../view/wallView';
import LevelsView from '../view/levelsView';
import HtmlView from '../view/htmlView';

export default class App {

    createView(): void {
        const levels = new LevelsView();

        const wall  = new WallView(levels.getActiveLevel());
        wall.updateWallView();

        const html = new HtmlView(levels.getActiveLevel());
        html.updateHtmlView();
    }

}