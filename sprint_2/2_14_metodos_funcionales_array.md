# Métodos funcionales de array

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [¿En qué casos se utiliza?](#¿en-qué-casos-se-utiliza)
- [Métodos funcionales de array](#métodos-funcionales-de-array)
  - [`map`](#map)
  - [`filter`](#filter)
  - [`reduce`](#reduce)
  - [BONUS: `sort`](#bonus-sort)
- [Recursos externos](#recursos-externos)

## Introducción

En esta sesión vamos a ver cómo trabajar con arrays de forma eficiente en JavaScript. Hasta ahora hemos trabajado con arrays y conocemos algunos métodos del objeto array, como `push` para meter nuevos elementos en el array
o `join` para unir todos los elementos de un array en una cadena. Y cuando queremos acceder todos los elementos de un array, usamos un bucle para recorrerlo. Pero en esta sesión vamos a aprender a realizar acciones con varios elementos de un array pero sin necesidad de bucles, usando los denominados *métodos funcionales* de array. Se llaman métodos funcionales porque están alineados con una forma de programar que da mucha importancia a las funciones... ¡nuestras amigas las funciones!


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Usar los métodos funcionales de array nos sirve para poder operar con los valores contenidos en un array de una forma elegante a la vez que fácil de leer.


## ¿En qué casos se utiliza?

Los métodos funcionales de array pueden ser utilizados en cualquier aplicación que trabaje con arrays, y es muy usado en entornos concretos como React, una tecnología que veremos más adelante en el curso.

Con estos métodos funcionales podemos realizar las mismas acciones para las que necesitaríamos un bucle, por ejemplo:
- buscar un elemento en un array
- sumar los elementos de un array
- aplicar una transformación a todos los elementos de un array
- filtrar los elementos de un array, es decir, quedarnos sólo con los que cumplen un criterio
- ordenar los elementos de un array según un criterio

## Métodos funcionales de array

Vamos a ver algunos de estos métodos y descubriremos su utilidad usando ejemplos de ejercicios que ya hemos hecho en el pasado pero ahora con métodos funcionales.

### map

El método `map` nos permite aplicar una función a todos los elementos de un array y devuelve otro array de la misma longitud con los resultados de aplicar esa función sobre cada elemento.

Vamos a ver cómo usarlo. [En este ejemplo](https://codepen.io/adalab/pen/wppeQx?editors=0011), partimos de un array con nombres `names` y queremos obtener otro array con los nombres en mayúscula `capitalNames`:

```js
var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
var capitalNames = [];

for (var i = 0; i < names.length; i++) {
  var capitalName = names[i].toUpperCase();
  capitalNames.push(capitalName);
}

console.log(capitalNames);
```
En el bucle, simplemente llamamos a la función `toUpperCase` sobre cada elemento del array de forma que la cadena se convierte en mayúsculas. Después, sólo metemos el resultado en el array de resultados `capitalNames` usando `push`.

Ahora vamos a ver cómo [realizar esto mismo usando `map`](https://codepen.io/adalab/pen/gooREe?editors=0011):

```js
var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
var capitalNames = names.map(function(name){
  return name.toUpperCase();
});

console.log(capitalNames);
```

En este caso ejecutamos el método `map` sobre el array de nombres `names`. A `map` le pasamos un único parámetro que es una función que se va a aplicar sobre cada elemento del array. Esta función (que hemos decidido hacer anónima en este caso) toma como parámetro el elemento del array, al que hemos llamado `name`. Nosotros no ejecutamos esta función, sino que solo se la pasamos como parámetro a `map`, justo de la misma forma que hacíamos con los callbacks, y será `map` quien la ejecute pasándoles como argumento cada elemento del array. Dentro de la función tenemos el elemento del array (el nombre, por ejemplo, en primer lugar 'María') sobre el que ejecutamos directamente el método `toUppercase` (pasar a mayúscula). Devolvemos (`return`) el resultado para que pase al array de resultados `capitalNames`. En este caso nosotros no hemos tenido que crear el array `capitalNames` a mano sino que `map` lo crea solo directamente porque así es como funciona: devuelve un array del mismo tamaño que el original con el resultado de aplicar una función a cada elemento del array.

> NOTA: es importante recordar que el array resultante de aplicar map va a ser siempre de la misma longitud que el array original.

***

EJERCICIO 1: Inflar las notas

¡Ya tenemos las notas  del examen! Los profes, como somos así, las hemos metido en un array: `var marks = [5, 4, 6, 7, 9];`. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo `map` para crear un nuevo array `inflatedMarks` con las notas modificadas. Finalmente, mostraremos en la consola las notas modificadas para ver que funciona correctamente. ¡Al lío!

***

EJERCICIO 2: Saludar es de buena educación

Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación `var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];` y queremos conseguir otro array con los saludos, por ejemplo, *'Bienvenida Yolanda'*. ¿Podríamos usar `map` para que nos echase una mano?

***

EJERCICIO 3: Gracias por confiar en nosotros

Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así *'Bienvenida Yolanda. Gracias por confiar en nosotros.'*, y mantener el saludo simple *'Bienvenida Yolanda'* para el resto de usuarios.

Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no. ¿Podremos hacerlo con `map`?

```js
var users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false}
];
```

***

### filter

El siguiente método funcional que vamos a ver es `filter`. `filter` nos ayuda a, como su propio nombre indica, filtrar un array y elegir algunos de sus elementos dado un criterio. La forma de uso es muy parecida a `map` ya que toma como único argumento una función que se aplica sobre cada elemento del array. Si al ejecutar la función sobre un elemento esa función devuelve `true` el elemento se mantiene en el array de resultados, pero si es `false`, no se meterá. Por tanto, el array que crea `filter` siempre va a tener una longitud igual o menor que el original: va a tener como máximo los elementos del original y como mínimo estará vacío.

[Partimos de un ejemplo](https://codepen.io/adalab/pen/vppJVQ?editors=0011) en el que, dado un listado de nombres queremos quedarnos solo con los que tienen más de 5 letras, es decir, 6 o más. Primero vamos a solucionarlo con un bucle:

```js
var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
var longNames = [];

for (var i = 0; i < names.length; i++) {
  var nameLength = names[i].length; // ¡Si, podemos .lenght con strings para saber su longitud!
  if(nameLength > 5){
    longNames.push(names[i]);
  }
}

console.log(longNames);
```
Como en el caso del `map` recorremos el array usando un bucle y hemos creado un array `longNames` para almacenar el resultado. Dentro del bucle accedemos a la longitud del nombre con la propiedad `length`. Después lo comparamos con 5: si es mayor lo metemos en el array de resultados, pero si no lo es pues no lo metemos.

Ahora vamos a realizar [este mismo ejemplo con `filter`](https://codepen.io/adalab/pen/PEEKVr?editors=0011):

```js
var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
var longNames = names.filter(function(name){
  return name.length > 5;
});

console.log(longNames);
```

En este caso hemos ejecutado el método `filter` sobre el array `names` y le pasamos como parámetro una función que es la que se ejecuta sobre cada elemento del array. Esta función (anónima) define un parámetro que hemos llamado `name` que representa el elemento del array, por ejemplo, 'María'. Dentro de la función comparamos la longitud (`length`) del nombre con 5, y devolvemos el resultado de esa comparación. Es decir, devolvemos `true` (si la longitud del nombre es mayor que 5) o `false` (si no lo es).

>NOTA: El return siempre deberá devolver un booleano o una operación que devuelva un valor de este tipo, por ejemplo, `3 < 4` o `'hola' === 'adios'`.

***

EJERCICIO 4: Solo los premium

Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Pero ahora queremos tener un listado de usuarios (en un array `premiumUsers`) que solo tenga los usuarios premium. ¿Sabremos hacerlo con `filter`?

***

EJERCICIO 5: Los pares pueden entrar

Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de nuestra web:

```js
var pins = [2389, 2384, 2837, 5232, 8998];
```

De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer [A/B testing](https://es.wikipedia.org/wiki/Test_A/B). ¿Nos ayudas a encontrar las contraseñas usando `filter`?

> PISTA: Recuerda que el resto de la división entera (módulo `%`) de número par es 0.

***

EJERCICIO 6: Los usuarios que pueden entrar

Ya hemos conseguido las contraseñas pertenecientes a cada usuario. ¿Podrías darnos un array con los usuarios que pueden acceder a la aplicación, es decir, los que tienen como PIN un número par?

```js
var users = [
  {name: 'María', isPremium: false, pin: 2389},
  {name: 'Lucía', isPremium: true, pin: 2384},
  {name: 'Susana', isPremium: true, pin: 2837},
  {name: 'Rocío', isPremium: false, pin: 5232},
  {name: 'Inmaculada', isPremium: false, pin: 8998}
];
```

***

### reduce

El método `reduce` es un método funcional complejo que nos permite realizar cálculos o acciones que requieran utilizar varios elementos de un array. A diferencia de `map` o `filter` el resultado de `reduce` no es un array sino un valor del tipo que queramos. Se basa en aplicar una función a todos los elementos de un array (como las anteriores) y se va trabajando con resultados parciales hasta que se llega al resultado final. Se usa cuando queremos obtener un resultado que depende de varios de los elementos del array, por ejemplo, calcular la media de un listado de números.

Vamos a empezar con un [ejemplo de la sesión 2.5 sobre arrays](../sprint_2/2_5_arrays.md) que calcula la suma de un listado de números:

```js
var scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
var result = 0;

for (var i = 0; i < scores.length; i++) {
  result += scores[i];
}

console.log(result);
```

En la variable `result`, que comienza siendo 0, vamos acumulando la suma de todos los números del array accediendo a cada uno como `scores[i]` dentro del bucle.

Vamos a ver cómo haríamos este mismo ejemplo con `reduce`:

```js
var scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

var result = scores.reduce(function(acc, number){
  return acc + number;
}, 0);

console.log(result);
```

En este caso ejecutamos el método `reduce` sobre el array `scores` y le pasamos como parámetros 1) una función y 2) un valor.

1) La función se ejecuta por cada elemento del array y toma como parámetros: a) un *acumulador* `acc`, que acumula el resultado de un elemento al siguiente; y b) el elemento del array, por ejemplo, 4.

2) El valor segundo parámetro, en este caso `0`, es el valor inicial del acumulador.

La función lo que hace es sumar al acumulador el valor del número actual y devuelve el resultado y ese mismo resultado se convierte en el acumulador del siguiente paso. Vamos a ver cómo funciona internamente:
1. Se ejecuta la función sobre el primer valor del array (`4`) que tiene como argumentos `acc` con valor 0 (valor inicial que hemos pasado al acumulador) y `number`que es 4, y devuelve la suma `4 + 0` que es 4 y se convierte en el valor del acumulador.
2. Para el segundo valor, los argumentos son `acc` que vale 4 y `number` que es 2, y devuelve la suma que es 6 y será el valor del acumulador en el siguiente paso
3. La función toma como argumentos `acc=6` y `number=7` y devuelve 13
4. Y así sucesivamente hasta llegar al último elemento del array, que sumará al acumulado 7 y devolverá el resultado final, que es la suma de todos los números del array (59).

> NOTA: el segundo parámetro de `reduce` (el valor del acumulador) es opcional y si no lo pasamos se toma como valor inicial el primer elemento del array. En nuestro ejemplo anterior sería válido no indicar segundo parámetro y comenzaríamos a aplicar la función a partir del segundo elemento (en el caso anterior el `2`) que toma como acumulador el primero (en el caso anterior el `4`).

Esta forma de trabajar es bastante compleja y requiere de mucha práctica, así que vamos a practicar realizando unos ejercicios.

***

EJERCICIO 7: La media de la carrera

Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando `reduce`?

```js
var times = [56, 9, 45, 28, 35];
```

***

EJERCICIO 8: El ganador de la carrera

Ya hemos conseguido los nombres de los competidores y nos gustaría que usases `reduce` para averiguar quién ha ganado.

> PISTA: en este caso el acumulador puede ser no sólo un número sino cualquier valor. Por ejemplo un objeto que sea nuestro candidato a ganador :)

```js
var users = [
  {name: 'Gregory Goyle', time: 56},
  {name: 'Nymphadora Tonks', time: 9},
  {name: 'Luna Lovegood', time: 45},
  {name: 'Cedric Diggory', time: 28},
  {name: 'Cho Chang', time: 35}
];
```

***


### BONUS: sort

Para terminar, vamos a ver un último método que nos permite ordenar los elementos de un array. Es diferente de los anteriores en que, en lugar de devolver un nuevo array, modifica directamente el array original. Vamos a ver [algunos ejemplos](https://codepen.io/adalab/pen/jYYzZe?editors=0011).

Para ordenar valores que son cadenas, no es necesario usar ninguna función de ordenación ya que por defecto `sort` ordena los elementos de un array alfabéticamente.

```js
var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

names.sort();
console.log(names);
```

Si queremos indicar otro tipo de orden, tendremos que pasar al método `sort` una función que sepa qué hacer para ordenar 2 elementos. Esta función toma 2 parámetros (`a` y `b`) que son 2 elementos cualquiera del array y tenemos que devolver:
- un número negativo si queremos que `a` se posicione antes que `b` en el array
- un número positivo si queremos que `b` se posicione antes que `a` en el array
- cero si queremos se comporten como valores iguales y en la ordenación aparezcan juntos

Vamos a ver un ejemplo de la función de ordenación para ordenar números:

```js
var times = [56, 9, 45, 28, 35];

times.sort(function(a, b){
  return a - b;
});
console.log(times);
```
De esta forma, si un número `a` es mayor que otro `b` el resultado es positivo y `b` se posiciona antes en el resultado. Lo contrario ocurre cuando `a` es menor que `b`. Si son iguales, el resultado es 0 y se quedan como están.

***

EJERCICIO 9: Clasificación de la carrera

Volviendo a nuestra carrera de escobas, queremos tener el array del ejercicio 8 ordenado para poder tener una clasificación de la carrera: ¿nos ayudar a hacerlo usando `sort`?

> PISTA: la función que le pasamos a sort toma como parámetros 2 elementos del array, así que para acceder a una propiedad de un objeto en la función podemos hacerlo con el operador punto (`a.time`), como hemos hecho hasta ahora ;).

***

EJERCICIO 10: Poniendo orden en nuestros usuarios

Vamos a volver al listado de usuarios del ejercicio 6, porque nos ha dado la manía de tenerlos ordenados. ¿Podrías ordenarlos por orden alfabético? ¿Y por su número de PIN?

***

## Recursos externos

- [Array `map` en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array `filter` en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array `reduce` en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array `sort` en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
