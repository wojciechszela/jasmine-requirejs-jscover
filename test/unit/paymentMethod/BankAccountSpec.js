define([
    'application/paymentMethod/BankAccount'
],  function (BankAccount) {
    'use strict';

    return describe('application/paymentMethod/BankAccount', function () {
        var bankAccount = null;

        beforeEach(function () {
            bankAccount = new BankAccount({
                balance : 100
            });
        });

        it ('balance can be obtained', function() {
            expect(bankAccount.balance()).toBe(100);
        });

        it ('allows making deposits', function() {
            bankAccount.credit(10);

            expect(bankAccount.balance()).toBe(110);
        });

        it ('allows withrawals', function() {
            bankAccount.debit(10);

            expect(bankAccount.balance()).toBe(90);
        });

        it ('rejects withrawals when amount exceends balance', function() {
            var withdrawTooMuch = function () {
                bankAccount.debit(bankAccount.balance() + 1);
            };

            expect(withdrawTooMuch).toThrowError('Amount exceeds balance');
        });
    });
});