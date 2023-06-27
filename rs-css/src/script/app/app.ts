import WallView from '../view/wallView';
import LevelsView from '../view/levelsView';

export default class App {

    createView(): void {
        const levels = new LevelsView();

        const wall  = new WallView(levels.getActiveLevel());
        wall.updateWallView();
    }

}