define(function () {
    'use strict';

    var BankAccount = function (spec) {
        this._balance = spec.balance;
    };

    BankAccount.prototype.debit = function (amount) {
        if (amount > this._balance) {
            throw new Error('Amount exceeds balance');
        }

        this._balance -= amount;
    };

    BankAccount.prototype.credit = function (amount) {
        this._balance += amount;
    };

    BankAccount.prototype.balance = function () {
        return this._balance;
    };

    return BankAccount;
});