'use strict';

/*
- Un año tiene 365 dias (sin contar bisiestos)
- Un día tiene 24 horas
- Si hemos vivido 60 años, será cada año por 365 para saber días y cada día porque
24 para saber horas
*/

// Sin variables
alert('Has vivido ' + 60 * 365 * 24 + ' horas');

// Con variables

var userAge = 60;
var daysPerYear = 365;
var hoursPerDay = 24;

var ageInHours = userAge * daysPerYear * hoursPerDay;

alert('Has vivido ' + ageInHours + ' horas');
