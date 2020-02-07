import {GraphicComponentInterface} from "../interfaces/interfaceGraphicComponent";

export class Dot implements GraphicComponentInterface {
    constructor( protected x: number, protected y: number){
        this.x = x;
        this.y = y;
    }
    public move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }
    public draw(): void{
        console.log(`I am drawing x: ${this.x}, y: ${this.y}`)
    }
}