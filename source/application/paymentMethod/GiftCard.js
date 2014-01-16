define(function () {
    'use strict';

    var GiftCard = function (spec) {
        this._balance = spec.balance;
    };

    GiftCard.prototype.debit = function (amount) {
        if (amount > this._balance) {
            throw new Error('Amount exceeds balance');
        }

        this._balance -= amount;
    };

    GiftCard.prototype.credit = function (amount) {
        throw new Error('Gift cards can not be credited');
    };

    GiftCard.prototype.balance = function () {
        return this._balance;
    };

    return GiftCard;
});