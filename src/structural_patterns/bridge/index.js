"use strict";
exports.__esModule = true;
var TV_1 = require("./devices/TV");
var RemoteControl_1 = require("./remoteAbstraction/RemoteControl");
var tv = new TV_1.TV(23);
var remote = new RemoteControl_1.RemoteControl(tv);
remote.toggleState();
remote.volumeUp();
console.log(remote.getVolume());
