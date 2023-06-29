import WallView from '../view/wallView';
import LevelsView from '../view/levelsView';
import HtmlView from '../view/htmlView';
import { getStoredLevel } from '../utils/utils';

export default class App {

    createView(): void {
        const startLevel = getStoredLevel();
        const levels = new LevelsView(startLevel);
        const wall  = new WallView(levels.getActiveLevel());
        wall.updateWallView();

        const html = new HtmlView(levels.getActiveLevel());
        html.updateHtmlView();
    }

}