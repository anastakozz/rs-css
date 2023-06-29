export default class ProgressSaver {
    active: number

    constructor(level: number) {
        this.active = level;
    }

    public setStorage(level: number): void {
        localStorage.setItem('activeLayer', `${level}`)
    }

}