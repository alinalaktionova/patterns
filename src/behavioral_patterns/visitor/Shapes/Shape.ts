import {ShapeInterface} from "../interfaces/ShapeInterface";
import {VisitorInterface} from "../interfaces/VisitorInterface";

export abstract class Shape implements ShapeInterface {
    constructor(protected x: number, protected y: number) {
        this.x = x;
        this.y = y;
    }

    public move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }
    
    abstract draw(): void
    abstract accept(v: VisitorInterface): void
}