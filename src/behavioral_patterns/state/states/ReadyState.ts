import { State } from "./State";
import { PlayingState } from "./PlayingState";
import { LockedState } from "./LockedState";

export class ReadyState extends State {
  public clickLock(): void {
    this.player.setState(new LockedState(this.player));
  }

  public clickPlay(): void {
    this.player.startPlayback();
    this.player.setState(new PlayingState(this.player));
  }

  public clickNext(): void {
    this.player.nextSong();
  }
  public clickPrev(): void {
    this.player.prevSong();
  }
}
