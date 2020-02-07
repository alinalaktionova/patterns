import { MementoInterface } from "./MementoInterface";
import { Editor } from "./Editor";

export class Command {
  private backUp: MementoInterface;
  constructor(private editor: Editor) {
    this.editor = editor;
  }
  public makeBackUp() {
    this.backUp = this.editor.createSnapshot();
  }
  public undo() {
    if (this.backUp != null) {
      this.backUp.restore();
    }
  }
}
