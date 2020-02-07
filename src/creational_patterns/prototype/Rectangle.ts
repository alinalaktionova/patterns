import {Shape} from "./Shape";


export class Rectangle extends Shape{
    private width: number;
    private height: number;
    constructor(source: Rectangle) {
        super(source);
        this.height = source.height;
        this.width = source.width;
    }

    clone(): Shape {
        return new Rectangle(this);
    }
}