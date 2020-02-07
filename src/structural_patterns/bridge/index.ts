import {TV} from "./devices/TV";
import { RemoteControl} from "./remoteAbstraction/RemoteControl";

const tv = new TV(23);
const remote = new RemoteControl(tv);
remote.toggleState();
remote.volumeUp();
console.log(remote.getVolume());