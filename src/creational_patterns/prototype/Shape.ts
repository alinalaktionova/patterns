import {ShapeInterface} from "./shapeInterface";

export abstract class Shape implements ShapeInterface {
    protected x: number;
    protected y: number;
    protected color: string;

    protected constructor(source: Shape) {
        this.x = source.x;
        this.y = source.y;
        this.color = source.color;
    }

    abstract clone(): Shape
}