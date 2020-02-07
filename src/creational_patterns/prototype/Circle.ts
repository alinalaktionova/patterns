import {Shape} from "./Shape";


export class Circle extends Shape{
    private radius: number;
    constructor(source: Circle) {
        super(source);
        this.radius = source.radius;
    }

    public clone(): Shape {
        return new Circle(this);
    }
}