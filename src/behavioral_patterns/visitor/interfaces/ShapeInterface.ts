import {VisitorInterface} from "./VisitorInterface";

export interface ShapeInterface {
    move(x: number, y: number): void
    draw(): void
    accept(v: VisitorInterface): void
}