define(function () {
    'use strict';

    var Between = function (spec) {
        this._min = spec.min;
        this._max = spec.max;
    };

    Between.prototype.isSatisfiedBy = function (value) {
        if (this._min <= value && value <= this._max) {
            return true;
        }

        return false;
    };

    return Between;
});