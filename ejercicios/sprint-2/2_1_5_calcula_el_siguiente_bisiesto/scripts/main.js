'use strict';

/*
- Estamos en 2017
- Un año bisiesto se produce cada 4 años (con algunas otras reglas que no vamos a ver)
- Para saber cuántos años han pasado desde el último año bisiesto dividimos el
año actual entre cuatro y el resto serán los años transcurridos
- Como un año bisiesto se produce cada cuatro años y sabemos cuantos han pasado
desde el último, restamos a 4 el resto del año actual entre 4
- Una vez que tenemos los años que quedan para el siguiente año bisiesto, lo
sumamos al año actual y ya tendríamos el resultado
*/

// Sin variables

alert(4 - 2017 % 4 + 2017);

// Con variables

var leapInterval = 4;
var currentYear = 2017;
var yearsSinceLastLeapYear = currentYear % leapInterval;

var result = currentYear + leapInterval - yearsSinceLastLeapYear;

alert(result + ' será el siguiente año bisiesto');
