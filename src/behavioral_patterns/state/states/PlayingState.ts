import { State } from "./State";
import { ReadyState } from "./ReadyState";
import { LockedState } from "./LockedState";

export class PlayingState extends State {
  public clickPlay(): void {
    this.player.stopPlayback();
    this.player.setState(new ReadyState(this.player));
  }
  public clickLock(): void {
    this.player.setState(new LockedState(this.player));
  }
  public clickPrev(): void {
    this.player.nextSong();
  }

  public clickNext(): void {
    this.player.prevSong();
  }
}
