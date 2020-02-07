import { TreeType } from "../lightWeight/TreeType";

export class Tree {
  constructor(private x: number, private y: number, private type: TreeType) {
    this.y = y;
    this.x = x;
    this.type = type;
  }

  public draw() {
    this.type.draw(this.x, this.y);
  }
}
