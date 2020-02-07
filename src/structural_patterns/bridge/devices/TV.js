"use strict";
exports.__esModule = true;
var TV = /** @class */ (function () {
    function TV(volume) {
        this.state = false;
        this.volume = volume;
    }
    ;
    TV.prototype.isEnabled = function () {
        return this.state;
    };
    TV.prototype.enable = function () {
        this.state = true;
    };
    TV.prototype.disable = function () {
        this.state = false;
    };
    TV.prototype.getVolume = function () {
        return this.volume;
    };
    TV.prototype.increaseVolume = function () {
        this.volume++;
    };
    TV.prototype.decreaseVolume = function () {
        this.volume--;
    };
    return TV;
}());
exports.TV = TV;
