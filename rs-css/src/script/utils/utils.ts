export const isHtmlElement = (element: unknown): element is HTMLElement =>
  element instanceof HTMLElement;

export function getStoredLevel(): number {
  const check = localStorage.getItem("activeLevel");
  return check ? +check : 1;
}

export function setStorage(
  level: number,
  doneArr: Set<number>,
  helpArr: Set<number>
): void {
  localStorage.setItem("activeLevel", `${level}`);
  localStorage.setItem("doneLevels", Array.from(doneArr).join(","));
  localStorage.setItem("doneWithHelp", Array.from(helpArr).join(","));
}

export function clearStorage(): void {
  localStorage.clear();
}

export function getStoredDone(): Set<number> {
  const str = localStorage.getItem("doneLevels");
  const arr = str ? str.split(",").map((item) => +item) : [];
  return new Set(arr);
}

export function getStoredHelp(): Set<number> {
  const str = localStorage.getItem("doneWithHelp");
  const arr = str ? str.split(",").map((item) => +item) : [];
  return new Set(arr);
}
