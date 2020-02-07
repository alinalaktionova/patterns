import { TreeType } from "../lightWeight/TreeType";

export class TreeFactory {
  static treeTypes: Array<TreeType> = [];
  static getTreeType(name: string, color: string, texture: string) {
    let type = TreeFactory.treeTypes.find(
      tree =>
        tree.name === name && tree.texture === texture && tree.color === color
    );
    if( type == null){
        type = new TreeType(name, color, texture);
        this.treeTypes.push(type);
    }
    return type;
  }
}
