export const isHtmlElement = (element: unknown): element is HTMLElement =>
  element instanceof HTMLElement

export function getStoredLevel(): number {
    const check = localStorage.getItem('activeLevel');
    return check ? +check : 1;
}

export function setStorage(level: number, arr: number[]): void {
    localStorage.setItem('activeLevel', `${level}`);
    localStorage.setItem('doneLevels', arr.join(','));
}

export function clearStorage(): void {
    localStorage.clear();
}

export function getStoredDone(): number[] {
    const str = localStorage.getItem('doneLevels');
    return str ? str.split(',').map((item) => +item) : [];
}
