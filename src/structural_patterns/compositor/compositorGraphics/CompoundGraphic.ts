import { GraphicComponentInterface } from "../interfaces/interfaceGraphicComponent";

export class CompoundGraphic implements GraphicComponentInterface {
  private children: Array<GraphicComponentInterface> = [];

  public add(child: GraphicComponentInterface) {
    this.children.push(child);
  }
  public remove(child: GraphicComponentInterface) {
    this.children.filter(child => child);
  }
  public draw(): void {
    this.children.forEach(child => child.draw());
  }

  public move(x: number, y: number): void {
    this.children.forEach(child => child.move(x, y));
  }
}
