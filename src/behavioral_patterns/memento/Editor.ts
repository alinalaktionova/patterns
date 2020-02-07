import { Snapshot } from "./Snapshot";

export class Editor {
  private selectionWidth: number;
  private text: string;
  public setText(text: string) {
    this.text = text;
  }
  public setSelectionWidth(selectionWidth: number) {
    this.selectionWidth = selectionWidth;
  }
  public createSnapshot() {
    console.log("Snapshot was made");
    return new Snapshot(this, this.text, this.selectionWidth);
  }
}
