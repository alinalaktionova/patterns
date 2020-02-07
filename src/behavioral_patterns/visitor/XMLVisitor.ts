import {VisitorInterface} from "./interfaces/VisitorInterface";
import {Circle} from "./Shapes/Circle";
import {Rectangle} from "./Shapes/Rectangle";
import {Dot} from "./Shapes/Dot";

export class XMLVisitor implements VisitorInterface{
    public visitCircle(c: Circle): void {
        c.draw();
    }
    public visitRectangle(r: Rectangle): void {
        r.draw();
    }
    public visitDot(d: Dot): void {
        d.draw();
    }
}