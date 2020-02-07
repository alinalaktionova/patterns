import { MementoInterface } from "./MementoInterface";
import { Editor } from "./Editor";

export class Snapshot implements MementoInterface {
  constructor(
    private editor: Editor,
    private text: string,
    private selectionWidth: number
  ) {
    this.editor = editor;
    this.selectionWidth = selectionWidth;
    this.text = text;
  }
  public restore(): void {
    this.editor.setText(this.text);
    this.editor.setSelectionWidth(this.selectionWidth);
    console.log(
      `I am restored text: ${this.text}, width: ${this.selectionWidth}`
    );
  }
}
