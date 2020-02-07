import {Shape} from "./Shape";
import {VisitorInterface} from "../interfaces/VisitorInterface";

export class Rectangle extends Shape{
    public accept(v: VisitorInterface): void {
        v.visitRectangle(this)
    }
    public draw(): void {
        console.log("Rectange is drawing")
    }
}