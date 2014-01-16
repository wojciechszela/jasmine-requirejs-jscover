define([
    'application/paymentMethod/GiftCard'
],  function (GiftCard) {
    'use strict';

    return describe('application/paymentMethod/GiftCard', function () {
        var giftCard = null;

        beforeEach(function () {
            giftCard = new GiftCard({
                balance : 100
            });
        });

        it ('balance can be obtained', function() {
            expect(giftCard.balance()).toBe(100);
        });

        it ('does not allows making deposits', function() {
            var canNotDeposit = function () {
                giftCard.credit(10);
            };

            expect(canNotDeposit).toThrowError('Gift cards can not be credited');
        });

        it ('allows withrawals', function() {
            giftCard.debit(10);

            expect(giftCard.balance()).toBe(90);
        });

        it ('rejects withrawals when amount exceends balance', function() {
            var withdrawTooMuch = function () {
                giftCard.debit(giftCard.balance() + 1);
            };

            expect(withdrawTooMuch).toThrowError('Amount exceeds balance');
        });
    });
});