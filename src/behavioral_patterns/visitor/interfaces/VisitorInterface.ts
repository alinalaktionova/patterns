import {Circle} from "../Shapes/Circle";
import {Dot} from "../Shapes/Dot";
import {Rectangle} from "../Shapes/Rectangle";

export interface VisitorInterface {
    visitCircle(c: Circle): void
    visitDot(d: Dot): void
    visitRectangle(r: Rectangle): void
}