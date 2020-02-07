import {Shape} from "./Shape";
import {VisitorInterface} from "../interfaces/VisitorInterface";

export class Circle extends Shape{
    public accept(v: VisitorInterface): void {
        v.visitCircle(this)
    }
    public draw(): void {
        console.log("Circle is drawing")
    }
}