# Métodos funcionales de array

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [¿En qué casos se utiliza?](#¿en-qué-casos-se-utiliza)
- [Métodos funcionales de array](#métodos-funcionales-de-array)
  - [`map`](#map)
  - [`filter`](#filter)
  - [`reduce`](#reduce)
  - [BONUS: `sort`](#bonus:-sort)
- [Recursos externos](#recursos-externos)

## Introducción

En esta sesión vamos a ver cómo trabajar con arrays de forma eficiente en JavaScript. Hasta ahora hemos trabajado con arrays y conocemos algunos métodos del objeto array, como `push` para meter nuevos elementos en el array
o `join` para unir todos los elementos de un array en una cadena. Y cuando queremos acceder todos los elementos de un array, usamos un bucle para recorrerlo. Pero en esta sesión vamos a aprender a realizar acciones con varios elementos de un array pero sin necesidad de bucles, usando los denominados *métodos funcionales* de array.  Se llaman métodos funcionales porque está alineadas con una forma de programar que da mucha importancia a las funciones... ¡nuestras amigas las funciones!


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Usar los métodos funcionales de array nos sirve para poder operar con los valores contenidos en un array de una forma elegante a la vez que fácil de leer.


## ¿En qué casos se utiliza?

Los métodos funcionales de array pueden ser utilizados en cualquier aplicación que trabaje con arrays, y es muy usado en entornos concretos como React, una tecnología que veremos más adelante en el curso.

Con estos métodos funcionales podemos realizar las mismas acciones para las que necesitaríamos un bucle, por ejemplo
- buscar un elemento en un array
- sumar los elementos de un array
- aplicar una transformación a todos los elementos de un array
- filtrar los elementos de un array, es decir, quedarnos sólo con los que cumplen un criterio
- ordenar los elementos de un array según un criterio

## Métodos funcionales de array

Vamos a ver algunos de estos métodos y descubriremos su utilidad usando ejemplos de ejercicios que ya hemos hecho en el pasado pero ahora con métodos funcionales.

### map

El método `map` nos permite aplicar una función a todos los elementos de un array y devuelve otro array de la misma longitud que tiene el resultado.

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

En este caso ejecutamos el método `map` sobre el array de nombres `names`. A `map` le pasamos un único parámetro que es una función que se va a aplicar sobre cada elemento del array. Esta función (que hemos decidido hacer anónima en este caso) toma como parámetro el elemento del array al que hemos llamado `name`. Nosotros no ejecutamos esta función, sino que sólo se la pasamos como parámetro a `map`, justo de la misma forma que hacíamos con los callbacks, y será `map` quien la ejecute pasándoles como argumento cada elemento del array. Dentro de la función como tenemos el elemento del arra (el nombre, en primer lugar 'María') ejecutamos directamente el método `toUppercase` y devolvemos (`return`) el resultado para que pase al array de resultados `capitalNames`. En este caso nosotros no hemos tenido que crear el array `capitalNames` a mano sino que `map` lo crea sólo directamente porque así es como funciona: devuelve un array del mismo tamaño que el original con el resultado de aplicar una función a cada elemento del array.

> NOTA: es importante recordar que el array resultante de aplicar map va a ser siempre de la misma longitud que el array original.

***

EJERCICIO 1: Inflar las notas

¡Ya tenemos las notas  del examen! Los profes, como somos así, las hemos metido en un array: `var marks = [5, 4, 6, 7, 9];`. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo `map` para crear un nuevo array `inflatedMarks` con las notas modificadas. ¡Al lío!

***

EJERCICIO 2: Saludar es de buena educación

Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación `var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];` y queremos conseguir otro array con los saludos, por ejemplo, *'Bienvenida Yolanda'*. ¿Podríamos usar `map` para que nos echase una mano?

***

EJERCICIO 3: Gracias por confiar en nosotros

Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecera nuestro usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así *'Bienvenida Yolanda. Gracias por confiar en nosotros.'*, y mantener el saludo simple *'Bienvenida Yolanda'* para el resto de usuarios.

Vamos a partir de este array con el listado de usuarios que incluy tanto su nombre como si son usuarios premium o no. ¿Podremos hacerlo con `map`?

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

El siguiente método funcional que vamos a ver es `filter`. `Filter` nos ayuda a, como su propio nombre indica, filtrar un array y elegir algunos de sus elementos dado un criterio. La forma de uso el muy parecida a `map` ya que toma como único argumento una función que se aplica sobre cada elemento del array. Si el resultado de aplicar la función sobre un elemento es `true` el elemento se mantiene en el array de resultados, pero si es `false` no. Por tanto, el array que crea `filter` siempre va a tener una longitud igual o menor que el original ya que va a tener como máximo los elementos del original y como mínimo estará vacío.

[Partimos de un ejemplo](https://codepen.io/adalab/pen/vppJVQ?editors=0011) en el que, dado un listado de nombres queremos quedarnos sólo con los que tienen más de 5 letras, es decir, 6 o más. Primero vamos a solucionarlo con un bucle:

```js
var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
var longNames = [];

for (var i = 0; i < names.length; i++) {
  var nameLength = names[i].length;
  if(nameLength > 5){
    longNames.push(names[i]);
  }
}

console.log(longNames);
```
Como en el caso del `map` recorremos el array usando un bucle y hemos creado un array `longNames` para almacenar el resultado. Dentro del bucle accedemos a la longitud del nombre con la propiedad `length`. Después lo comparamos con 5: si es mayor lo metemos en el array de resultados, pero si no lo es pues no lo hacemos.

Ahora vamos a realizar [este mismo ejemplo con `filter`](https://codepen.io/adalab/pen/PEEKVr?editors=0011):

```js
var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
var longNames = names.filter(function(name){
  return name.length > 5;
});

console.log(longNames);
```

En este caso hemos ejecutado el método `filter` sobre el array `names` y le pasamos como parámetro una función que es la que se ejecuta sobre cada elemento del array. Esta función (anónima) define un parámetro que hemos llamado `name` que representa el elemento del array, por ejemplo, 'María'. Dentro de la función comparamos la longitud (`length`) del nombre y devolvemos el resultado de esa comparación, es decir, devolvemos `true` (si la longitud del nombre es mayor que 5) o `false` (si no lo es).

***

EJERCICIO 4: Sólo los premium

Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Pero ahora queremos tener un listado de usuarios (en un array `premiumUsers`) que sólo tenga los usuarios premium. ¿Sabremos hacerlo con `filter`?

***

EJERCICIO 5: Los pares pueden entrar

Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de neustra web. Pero queremos que sólo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrarlas usando `filter`? Recuerda que el resto de la división entera (módulo `%`) de número par es 0.

```js
var pins = [2389, 2384, 2837, 5232, 8998];
```

***

EJERCICIO 6: Los usuarios que pueden entrar

Ya hemos conseguido las contraseñas pertenecientes a cada usuario. ¿Podrías darnos un array con los usuarios que pueden acceder a la aplicación, es decir, lo que tienen como PIN un número par?

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



### BONUS: sort



## Recursos externos

- [{{resource.link_name}}]({{resource.url}})
