import { StateInterface } from "./states/StateInterface";

export class Player {
  private state: StateInterface;

  public playList = ["Ariana Grande", "Justin Bieber", "Beyonce", "Green Day"];
  public currentSong = 0;

  public setState(state: StateInterface) {
    this.state = state;
  }
  public clickLock(): void {
    this.state.clickLock();
  }
  public clickPlay(): void {
    this.state.clickPlay();
  }
  public clickNext(): void {
    this.state.clickNext();
  }
  public clickPrev(): void {
    this.state.clickPrev();
  }
  public startPlayback() {
    console.log("I am starting playing");
  }
  public stopPlayback() {
    console.log("I stopped playing");
  }
  public nextSong() {
    if (this.currentSong === 3) {
      this.currentSong = 0;
    } else {
      this.currentSong++;
    }
    console.log(`Current song: ${this.playList[this.currentSong]}`);
  }
  public prevSong() {
    if (this.currentSong === 0) {
      this.currentSong = 3;
    } else {
      this.currentSong--;
    }
    console.log(`Current song: ${this.playList[this.currentSong]}`);
  }
}
