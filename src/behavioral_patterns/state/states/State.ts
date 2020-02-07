import { StateInterface } from "./StateInterface";
import { Player } from "../Player";

export abstract class State implements StateInterface {
  constructor(protected player: Player) {
    this.player = player;
  }
  abstract clickPrev(): void;
  abstract clickNext(): void;
  abstract clickPlay(): void;
  abstract clickLock(): void;
}
