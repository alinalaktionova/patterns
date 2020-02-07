import {Player} from "./Player";
import {LockedState} from "./states/LockedState";
import {ReadyState} from "./states/ReadyState";
import {PlayingState} from "./states/PlayingState";

const player = new Player();
const lockState = new LockedState(player);
const readyState = new ReadyState(player);
const playingState = new PlayingState(player);

player.setState(lockState);
player.clickLock();
player.nextSong();
