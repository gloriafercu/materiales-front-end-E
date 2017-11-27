#### Calculador de pagos para comidas

Vamos a crear una aplicación usando `prompt` que primero pregunte cuanto ha sido la cuenta, luego cuantos comensales hay y por último muestre una alerta que diga `"Cada comensal debe pagar: __"`

**Nota:** Prompt guarda los datos como texto (`string`), por lo que si introducimos un número, lo guardará como si fuese un texto y no podremos operar con él. Para poder hacerlo utilizaremos `parseInt(numero)` donde número será la variable o texto que queremos convertir en número.
Ejemplo:

```js
var numberAsAString = "4";
var number = parseInt(numberAsAString); // se guarda en la variable number el número 4
alert(number + 1);
```
