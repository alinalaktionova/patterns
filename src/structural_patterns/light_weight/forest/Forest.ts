import { Tree } from "./Tree";
import { TreeFactory } from "../factory/TreeFactory";

export class Forest {
  private trees: Array<Tree> = [];
  public planTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string
  ) {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }
  public draw() {
    this.trees.forEach(tree => tree.draw());
  }
}
