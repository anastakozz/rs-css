import WallView from '../view/wall';
import {isHtmlElement} from '../utils/utils'

export default class App {

    createView(): void {
        const wallObjects: DocumentFragment = new WallView(0).getDocumentFragment();
        // const levels = new levelsView();
        // const HtmlArea = new HtmlView();

        const wall = document.querySelector('.wall');
        if (isHtmlElement(wall)) {
            wall.append(wallObjects);
        }
    }
}