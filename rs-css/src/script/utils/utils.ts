
export const isHtmlElement = (element: unknown): element is HTMLElement =>
  element instanceof HTMLElement

export function getStoredLevel(): number {
    const check = localStorage.getItem('activeLevel');
    return check ? +check : 1;
}

export function setStorage(level: number, doneArr: number[], helpArr: number[]): void {
    localStorage.setItem('activeLevel', `${level}`);
    localStorage.setItem('doneLevels', doneArr.join(','));
    localStorage.setItem('doneWithHelp', helpArr.join(','));
}

export function clearStorage(): void {
    localStorage.clear();
}

export function getStoredDone(): number[] {
    const str = localStorage.getItem('doneLevels');
    return str ? str.split(',').map((item) => +item) : [];
}

export function getStoredHelp(): number[] {
    const str = localStorage.getItem('doneWithHelp');
    return str ? str.split(',').map((item) => +item) : [];
}
