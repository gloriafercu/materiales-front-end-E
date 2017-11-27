'use strict';

// Sin Variables
alert('Cada una tendrá que pagar ' + (128 - 2) / 9 + '€ y Ana pagará ' + ((128 - 2) / 9 + 2) + '€');

// Con variables

var diners = 9;
var shotPrice = 2;
var bill = 128;

var pricePerDiner = (bill - shotPrice) / diners;
var priceIncludingShot = pricePerDiner + shotPrice;

alert('Cada una tendrá que pagar ' + pricePerDiner + '€ y Ana pagará ' + priceIncludingShot + '€');
