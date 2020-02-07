import {Device} from "../interfaces/interfaceDevice";

export class TV implements Device {
    protected state = false;
    protected volume: number;
    constructor(volume: number){
        this.volume = volume;
    };
    public isEnabled(): boolean {
        return this.state
    }

    public enable(): void {
        this.state = true
    }

    public disable(): void {
        this.state = false
    }

    public getVolume(): number {
        return this.volume
    }

    public increaseVolume(): void {
        this.volume++
    }

    public decreaseVolume(): void {
        this.volume--
    }
}