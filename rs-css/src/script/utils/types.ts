export interface LevelI {
  selectorName: string;
  levelNumber: number;
  order: string;
  selector: string;
  syntax: string;
  help?: string;
  svgMarkup?: markupI[];
}

export interface markupI {
    tag: string;
    class?: string[];
    children?: markupI[];
}