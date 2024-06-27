import { isHtmlElement } from "./utils";

const main = document.body.children[0];
const leftColumn = main.children[0];
const sidebar = main.children[1];
const codeSpace = leftColumn.children[2].children[0].children[1];

export const getWall = (): HTMLElement | undefined => {
  const wall = leftColumn.children[1].children[0];
  if (isHtmlElement(wall)) {
    return wall;
  }
};

export const getHelpButton = () => {
  const button = getWall()?.nextElementSibling;
  if (isHtmlElement(button)) {
    return button;
  }
};

export const getTitle = (): HTMLElement | undefined => {
  const title = leftColumn.children[0].children[0];
  if (isHtmlElement(title)) {
    return title;
  }
};

export const getHtmlArea = (): HTMLElement | undefined => {
  const area =
    leftColumn.children[2].children[1].children[1].children[1].children[0];
  if (isHtmlElement(area)) {
    return area;
  }
};

export const getWrapper = (): HTMLElement | undefined => {
  const levelWrapper = sidebar.children[1];
  if (isHtmlElement(levelWrapper)) {
    return levelWrapper;
  }
};

export const getEnterButton = (): HTMLElement | undefined => {
  const button = codeSpace.children[1].children[0].children[1];
  if (isHtmlElement(button)) {
    return button;
  }
};

export const getCodeInput = (): HTMLInputElement | undefined => {
  const input = getEnterButton()?.previousElementSibling;
  if (input && input instanceof HTMLInputElement) {
    return input;
  }
};

export const filterActiveLevel = () => {
  const levelWrapper = getWrapper();
  if (levelWrapper) {
    const level = Array.from(levelWrapper.children).filter((item) =>
      item.classList.contains("active-level")
    );
    return level[0];
  }
};

