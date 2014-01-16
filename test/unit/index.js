define([
    'test/unit/paymentMethod/index',
    'test/unit/specification/index'
], function (paymentMethod, specification) {
    'use strict';

    return [].concat(paymentMethod, specification);
});