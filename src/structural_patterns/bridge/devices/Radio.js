"use strict";
exports.__esModule = true;
var Radio = /** @class */ (function () {
    function Radio(volume) {
        this.state = false;
        this.volume = volume;
    }
    ;
    Radio.prototype.isEnabled = function () {
        return this.state;
    };
    Radio.prototype.enable = function () {
        this.state = true;
    };
    Radio.prototype.disable = function () {
        this.state = false;
    };
    Radio.prototype.getVolume = function () {
        return this.volume;
    };
    Radio.prototype.increaseVolume = function () {
        this.volume++;
    };
    Radio.prototype.decreaseVolume = function () {
        this.volume--;
    };
    return Radio;
}());
exports.Radio = Radio;
