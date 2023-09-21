export interface LevelI {
  selectorName: string;
  levelNumber: number;
  order: string;
  selector: string;
  syntax: string;
  help?: string;
  svgMarkup?: markupI[];
  htmlMarkup?: string[];
}

export interface markupI {
  tag: string;
  class?: string[];
  id?: string;
  children?: markupI[];
  textContent?: string;
}

export type trueNodesParams = {
  classname: string;
  parent: HTMLElement | undefined | Element;
};
