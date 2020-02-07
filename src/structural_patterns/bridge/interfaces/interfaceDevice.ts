export interface Device {
    isEnabled(): boolean,
    enable(): void,
    disable(): void,
    getVolume(): number,
    increaseVolume(): void,
    decreaseVolume(): void
}