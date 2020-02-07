import { State } from "./State";
import { ReadyState } from "./ReadyState";

export class LockedState extends State {
  public clickPlay(): void {
    console.log("I am locked");
  }
  public clickLock(): void {
    this.player.setState(new ReadyState(this.player));
  }
  public clickPrev(): void {
    console.log("I am locked");
  }

  public clickNext(): void {
    console.log("I am locked");
  }
}
