import LevelsView from '../view/levelsView';
import { getStoredLevel } from '../utils/utils';

export default class App {

    createView(): void {
        const startLevel = getStoredLevel();
        const levels = new LevelsView(startLevel);
        levels.createLevelsView();
    }

}