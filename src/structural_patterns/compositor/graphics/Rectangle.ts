import {Dot} from "./Dot";

export class Rectangle extends Dot{
    constructor(x: number, y: number, protected width: number, protected height: number) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
    public draw(): void {
        super.draw();
        console.log(`with square ${this.height * this.width}`)
    }
}