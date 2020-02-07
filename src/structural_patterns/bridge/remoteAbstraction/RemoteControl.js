"use strict";
exports.__esModule = true;
var RemoteControl = /** @class */ (function () {
    function RemoteControl(device) {
        this.device = device;
    }
    RemoteControl.prototype.toggleState = function () {
        this.device.isEnabled() ? this.device.disable() : this.device.enable();
    };
    RemoteControl.prototype.volumeUp = function () {
        this.device.increaseVolume();
    };
    RemoteControl.prototype.volumeDown = function () {
        this.device.decreaseVolume();
    };
    RemoteControl.prototype.getVolume = function () {
        return this.device.getVolume();
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
