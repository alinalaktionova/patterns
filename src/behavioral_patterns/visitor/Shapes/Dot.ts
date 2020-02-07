import {Shape} from "./Shape";
import {VisitorInterface} from "../interfaces/VisitorInterface";

export class Dot extends Shape{
    public accept(v: VisitorInterface): void {
        v.visitDot(this)
    }
    public draw(): void {
        console.log("Dot is drawing")
    }
}