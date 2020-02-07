import {DesktopInterface} from "../interfaces/deviceInterface";

export abstract class Desktop implements DesktopInterface {
    protected state = false;
    public on(): void {
        this.state = true
    }
    public off(): void {
        this.state = false
    }
    abstract play(): void
}