define([
    'application/specification/Between'
],  function (Between) {
    'use strict';

    return describe('application/specification/Between', function () {
        var between = null,
            min     = 5,
            max     = 10;

        beforeEach(function () {
            between = new Between({
                min : min,
                max : max
            });
        });

        it ('returns false if value is smaller than min', function() {
            expect(between.isSatisfiedBy(1)).toBe(false);
        });

        it ('returns false if value is greater than max', function() {
            expect(between.isSatisfiedBy(100)).toBe(false);
        });

        it ('returns true if value is between min and max', function() {
            expect(between.isSatisfiedBy(7)).toBe(true);
        });

        it ('returns true if value is equal to min', function() {
            expect(between.isSatisfiedBy(min)).toBe(true);
        });

        it ('returns true if value is equal to max', function() {
            expect(between.isSatisfiedBy(max)).toBe(true);
        });
    });
});