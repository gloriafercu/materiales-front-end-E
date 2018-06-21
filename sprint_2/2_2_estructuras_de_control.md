# Estructuras de control

<!-- TOC START min:4 max:4 link:true update:true -->
- [EJERCICIO 1](#ejercicio-1)
- [EJERCICIO 2](#ejercicio-2)
- [EJERCICIO 3](#ejercicio-3)
- [EJERCICIO 4](#ejercicio-4)
- [EJERCICIO 5](#ejercicio-5)
- [EJERCICIO 6](#ejercicio-6)
- [EJERCICIO 7](#ejercicio-7)
- [EJERCICIO BONUS 1](#ejercicio-bonus-1)
- [EJERCICIO BONUS 2](#ejercicio-bonus-2)

<!-- TOC END -->

## Introducción

Utilizando aplicaciones y webs, muchas veces nos encontramos con casos en los que no se nos permite por ejemplo añadir un elemento más al carrito de la compra si hemos superado el límite.

En esta sesión nos centraremos en las estructuras de control del flujo de nuestra aplicación. Reciben ese nombre porque se encargan de determinar que acciones llevará a cabo la aplicación en función de una serie de datos y cuántas veces se ejecutará cada una. Gracias a ellas diremos que pasos queremos que siga la aplicación en cada momento para que se cumpla el objetivo que deseamos alcanzar.

Durante esta sesión veremos cómo controlar qué parte de nuestro código se ejecuta y cuál no, gracias a los condicionales. Esto nos permitirá realizar acciones en función de datos. Por ejemplo, mostrar un nombre o un mensaje de "usuarios no registrado" si no hay un nombre guardado. Es decir, con un condicional podemos establecer las normas al estilo si sucede esto haz esto otro y sino haz una orden alternativa. El condicional es una de las estructuras de control más básicas e importantes de la programación.

También veremos los bucles. Un bucle es otro tipo de estructura que, como su nombre indica, permite repetir un código un número determinado de veces en función de si se cumple una condición. Esto es muy útil para realizar las tareas repetitivas que de otra forma tendríamos que escribir cientos de veces. Si pensamos en el típico castigo de colegio de "Escribe en una hoja 100 veces no volveré a dejarme los libros en casa", gracias al bucle for solo tendríamos que escribirlo 1 y decirle que se repita hasta que llegue a 100 veces. Imagina la cantidad de tiempo y código que permite ahorrarnos este recurso.

Por último, también veremos los tipos de valores _booleanos_. Los booleanos son tipos de datos que solo pueden tener dos valores: verdadero o falso. Este tipo de valores son fundamentales para poder utilizar las estructuras de control que vamos a aprender en esta sesión ya que sirven para saber si una condición se cumple o no.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Los booleanos sirven para tener datos que representen verdadero o falso, como por ejemplo saber si una condicion se cumple o no. Tanto los condicionales como los bucles se basan en condiciones, es decir, la base fundamental para que funcionen correctamente son los booleanos y sin ellos no serían viables.

La mejor forma de explicar para qué sirven las estructuras de control (bucles y condicionales) es explicar cómo sería la programación sin ellas. En un mundo sin estos tendríamos que escribir en nuestro código todos los pasos a llevar a cabo, uno a uno y no podría ejecutar un código u otro en función de una serie de datos. Por ejemplo no podríamos comprobar si un formulario tiene todos los campos rellenos para enviarlo; ni comprobar si hemos hecho scroll hasta una sección concreta de nuestra página para mostrar un elemento o activar una animación. Es decir, no habría distintas vías, sólo un posible camino, cosa que haría prácticamente imposible ejecutar un código realmente útil.

Por otro lado sin los bucles, si quisiesemos repetir una acción 20 veces tendríamos que escribirla esas 20 veces, cosa que no tiene nada de sentido y que haría el código más dificil de leer y de mantener. Piensa en que si cambia un paso, tendríamos que cambiarlo en 20 sitios distintos de nuestro código. Una locura.


## ¿En qué casos se utiliza?

Veamos algunos ejemplos donde se utiliza lo que vamos a ver durante esta sesión.

Los booleanos se utilizan para almacenar datos verdaderos o falsos o convertir comparaciones a verdadero o falso:
  - Guardar información del estilo el usuario está registrado o no, el campo se ha rellenado o no, etc.
  - Guardar info sobre si un número es mayor o menor, si dos strings son iguales o no, si una variable existe, si una texto está vacio, etc.

Los condicionales se usan para realizar o no un código en función de una condición:
  - Mostrar un mensaje de error si falta un campo en un formulario
  - Mostrar el símbolo de usuario verificado en Twitter si la cuenta está verificada
  - Mostrar una película en favoritos si está marcada como favorita

- Los bucles se utilizan para repetir código
  - Si tenemos 48 contactos, por cada contacto mostrar una tarjeta de contacto en la página
  - Mostrar el total de un carrito de la compra sumando todos los precios de los artículos
  - Mostrar todas las fechas hasta la actualidad en un campo de un formulario


## Booleanos

Los booleanos son tipos de datos de JavaScript que guardan información del tipo verdadero o falso. Solo pueden tener los valores `true` o `false`. Por ejemplo:
```js
var filled = false; //Este booleano es falso

var solved = true; //Este booleano es verdadero
```

## Comparaciones
Podemos obtener también un booleano como resultado de una operación booleana, por ejemplo, una comparación. Vamos a ver algunos operadores de comparación que devuelven booelanos.

### Igualdad

El operador comparación de igualdad es `===` (_strict equal_ o _estrictamente igual_) comprueba si dos valores son iguales y son del mismo tipo. Usaremos siempre esta versión para comparar si algo es igual. Existe también una versión `==` que solo compara el valor (no el tipo de datos) pero que NO debemos usar.

Ejemplo:
```js
var letucce = 'lechuga';

(lettuce === 'lechuga'); //El resutaldo es true
(lettuce === 'lettuce'); //El resutaldo es false
```

El operador de comparación de desigualdad es `!==` (_strict not equal_ o _estrictamente diferente_) comprueba si dos valores son diferentes en valor y tipo. Usaremos siempre esta versión para comparar si algo es distinto. Existe también una versión `!=` que solo compara el valor (no el tipo de datos) pero que NO debemos usar.

Ejemplo:
```js
var result = 5;

(result !== 4 + 5); //El resutaldo es true
(result !== 0 + 5); //El resutaldo es false
```

### Desigualdad

Existen los operadores de desigualdad para comparar números:
- `<` (_less than_ o _menor que_) comprueba si el número a la izquierda del operador es menor que el que está a su derecha
- `>` (_greater than_ o _mayor que_) comprueba si el número a la izquierda del operador es mayor que el que está a su derecha
- `<=` (_less than or equal_ o _menor o igual que_) comprueba si el número a la izquierda del operador es menor o igual que el que está a su derecha
- `>=` (_greater than or equal_ o _mayor o igual que_) comprueba si el número a la izquierda del operador es mayor o igual que el que está a su derecha

Ejemplo:
```js
var result = 5;

(result >= 4 + 5); //El resutaldo es false
(result >= 0 + 5); //El resutaldo es true
(result >= 4 - 5); //El resutaldo es true
```
> NOTA
>
> Los operadores de comparación se ejecutan siempre después de los operadores numéricos, es decir, si tenemos `5 * 1 - 4 !== '3'`, primero se hará la multiplicación, luego la resta y finalmente se hara la operación de comparación.


## Operaciones con booleanos
Cuando trabajamos con un valor booleano, podemos realizar algunas operaciones útiles con este valor.

### Negación

El operador `!` (_NOT_) devuelve el valor contrario al valor dado. Por ejemplo:
```js
var filled = false; //Este booleano es falso

var opposite = !filled; //Este booleano es verdadero
```

### _AND_

El operador `&&` (_AND_) devuelve verdadero **SOLO** si ambas condiciones son verdaderas. Por ejemplo:

```js
var name = 'María';
var age = 35;

(name === 'María' && age >= 30); //El resutaldo es true
(name === 'Marta' && age >= 30); //El resutaldo es false
(name === 'María' && age >= 40); //El resutaldo es false
(name === 'Marta' && age >= 40); //El resutaldo es false
```

### _OR_

El perador  `||` (_OR_) devuelve verdadero si una o más condiciones se cumplen. Por ejemplo:

```js
var name = 'María';
var age = 35;

(name === 'María' || age >= 30); //El resutaldo es true
(name === 'Marta' || age >= 30); //El resutaldo es true
(name === 'María' || age >= 40); //El resutaldo es true
(name === 'Marta' || age >= 40); //El resutaldo es false
```


## Condicionales

Los condicionales son estructuras de control de JavaScript que sirven para ejecutar un código u otro (o ninguno) en función de si se cumple o no una condición.

En ellos se establece una condición y el código en caso de que se cumpla o no, si esa condición se cumple se ejecuta un código y sino otro o ninguno. _Si esta condición es verdadera, haz esto y sino esto otro_. La condición que escribamos siempre se va a convertir en `true` o `false`.

La estructura simple de un condicional es la siguiente:
- usamos la palabra `if` para definirlo
- después indicamos entre paréntesis `( )` una condición
- a continuación definimos un bloque de código entre llaves `{ }` que se va a ejercutar si se cumple la condición

Podemos pensar en ellos como un _"Si...haz..."_.

```js
var age = 35;

if (age > 30) {
  alert('Tienes más de 30 años'); //Esta línea se ejecuta solo si se cumple la condición
}
```

Existe otra estructura para el condicional cuando queremos que ejecutar un código diferente cuando no se cumpla la condición. Partiendo de la estructura simple, añadimos:
- usamos la palabra `else` para definir qué hacer cuando NO se cumple la condición
- a continuación definimos un bloque de código entre llaves `{ }` que se va a ejecutar si NO se cumple la condición

Podemos pensar en ello como un _"Si...haz...sino haz..."_.

```js
var age = 35;

if (age > 30) {
  alert('Tienes más de 30 años'); //Esta línea se ejecuta solo si se cumple la condición
} else {
  alert('Como mucho tienes 30 años'); //Esta línea se ejecuta solo si se NO cumple la condición
}
```

* * *

#### EJERCICIO 1

**Control de acceso**

En este ejercicio vamos a crear un control de acceso que muestre una ventana para que el usuario introduzca su nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera muestre el mensaje "Bienvenida, (tu nombre aquí)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".

* * *

Podemos complicar incluso más la estructura del condicional cuando queremos que se ejecute un código si NO se cumple la primera condición pero SOLO si se cumple una segunda condición. En este caso, a la estructura del condicinal simple le añadimos:
- usamos la palabra `else` para definir qué hacer cuando NO se cumple la condición
- usamos la palabra `if` para definir una nueva comprobación
- después indicamos entre paréntesis `( )` una segunda condición
- a continuación definimos un segundo bloque de código entre llaves `{ }` que se va a ejercutar si se cumple esta segunda condición

Podemos pensar en ello como un _"Si...haz...sino si...haz..."_.

```js
var age = 35;

if (age > 30) {
  alert('Tienes más de 30 años'); //Esta línea se ejecuta solo si se cumple la condición
} else if (age >= 20) {
  alert('Tienes entre 20 y 30 años'); //Esta línea se ejecuta solo si se NO cumple la primera condición y SÍ se cumple la segunda
}
```

Si necesitamos una estructura más complicada, siempre podemos poner un `else` al final para ejecutar código cuando no se ha cumplido  ninguna de las condiciones. Además, podemos incluir todas las condiciones que queramos con `else if`.

```js
var age = 35;

if ( age > 30 ){
  alert('Tienes más de 30 años'); //Esta línea se ejecuta solo si se cumple la condición
} else if ( age >= 20) {
  alert('Tienes entre 20 y 30 años'); //Esta línea se ejecuta solo si se NO cumple la primera condición y SÍ se cumple la segunda
} else if ( age >= 10) {
  alert('Tienes entre 10 y 19 años'); //Esta línea se ejecuta solo si se NO cumplen la primeras condiciones y SÍ se cumple la última
} else {
  alert('Eres un niño entre 0 y 9 años'); //Esta línea se ejecuta solo si se NO cumplen ninguna de las condiciones anteriores
}
```

> NOTA: Los bloques de un condional son excluyentes, es decir, solo se va a ejecutar el código de un bloque (if, else if o else). En ningún momento se ejecutará el código de dos bloques ya que si se cumple una condición se ejecuta el código de su bloque y se ignoran las posteriores condiciones.

* * *
#### EJERCICIO 2

**Completa las condiciones**

Escribe las condiciones para el siguiente ejercicio y utilizando `prompt` haz una prueba para ver que estas se cumplen.

```js
if (/* condicion 1 */) {
  alert('El número es 0');
} else if (/* condicion 1 */) {
  alert('El número es negativo');
} else if (/* condicion 1 */) {
  alert('El número es múltiplo de 2 y de 3');
} else if (/* condicion 1 */) {
  alert('El número es mayor que 20 pero menor que 50');
} else {
  alert('el número no es 123123125');
}
```
* * *
#### EJERCICIO 3

**Conversor de edad de perro a humano**

Te habrá pasado varias veces de ir por la calle y que alguien te pregunte "perdona, tienes a mano un conversor de edad de perros a humanos" y tener que contestar con vergüenza que no y que esa persona te mire raro... ¡hasta ahora! Vamos a crearla para evitar esto que pasa tan a menudo. Para ello, las reglas son las siguientes:

- El primer año de un perro equivale a 15 años de humano
- El segundo año de un perro equivale a nueve años de humano
- A partir del tercero, cada año de perro equivale a 5 años de humano.

> NOTA: Prueba que el código funciona correctamente con distintos años (1,2, 12...). Imagina el alcance de los daños si la próxima vez que te pare una persona para preguntarte por el conversor... ¡no funciona correctamente!

* * *

## La consola de JavaScript

En las herramientas para desarrolladores de Chrome (las DevTools) la segunda pestaña es una consola JavaScript. Una consola nos permite escribir instrucciones JavaScript que al dar al Enter se ejecutan. En la consola puedes probar a hacer sumas, declarar variables, funciones, etc.

Con la consola también podemos interactuar desde nuestro programa JavaScript, es decir, desde el código que escribimos en nuestro fichero `.js`. Una de las cosas que podemos hacer es escribir datos que comúnmente se denomina *loguear* datos. Lo hacemos mediantes una función `console.log()` en la que lo que pongamos entre paréntesis será lo que se escriba en la consola. A priori puede parecer que esto no tiene mucha utilidad ya que en nuestra página web no veremos nada, solo si abrimos las herramientas de desarrolladores. Pero con el tiempo le irás comprobando lo útil que es, por ejemplo, para depurar (resolver) errores en el código.

```js
console.log('Hola');

var num = 56;
console.log(num);
```

> Prueba a abrir la consola y escribe instrucciones para que veas cómo puedes ejercutar JS. También prueba a escribir datos en la consola desde tu programa con `console.log`


## Bucles

Sirve para ejecutar un mismo código un número determinado de veces. _Haz esto x veces_.

En el este sprint del curso vamos a aprender el bucle `for` que tiene la siguiente estructura:
- podemos identificarlo por usar al comienzo la palabra `for`
- después irá la _configuración_ del bucle entre paréntesis `( )` que tiene 3 partes, separadas por punto y coma `;`:
  - _inicialización_ será una declaración y asignación de variable (ej: `var i = 1`)
  - _condición_ será la condición que debe cumplirse para que se ejecute el bloque de código (ej: `i < 20`)
  - _actualización_ será la operación que se realizará al final de cada iteración del bucle (ej: `i++`, que es la abreviación de `i = i + 1`)
- al definimos un _bloque de código_ entre llaves `{ }` que se va a ejercutar si se cumple la condición

```js
for (var i = 0; i < 20; i++) {
  console.log('Me encantan los bucles 💪');
}
```

En este ejemplo de código, hacemos aparecer 20 veces en la consola el texto `Me encantan los bucles 💪`. Funciona de la siguiente forma:
  1. Se ejecuta el código de inicialización (`var i = 0`)
  1. Se comprueba que la condición se cumple (`i < 20`), en este caso el resultado de `true`
  1. Como la condición se cumple, se ejecuta el código que hay dentro del bloque entre las llaves (`{}`), es decir el `console.log`
  1. Se ejecuta la actualización del bucle (`i++`) y la variable `i` pasa a valer 1
  1. Vuelta al paso 2
  1. Cuando la variable `i` llega al valor de 20, la condición ya no se cumple (20 no es menor que 20) y el bucle acaba

Otro aspecto interesante de los bucles `for` es que dentro del bloque de código que se repite (el que va entre llaves `{ }`) podemos usar la variable `i`. Por ejemplo:

  ```js
  for (var i = 0; i < 20; i++) {
    console.log('Voy por la vuelta ' + i);
  }
  ```
Este ejemplo hará aparecer 20 veces, en la consola, el texto:
- Voy por la vuelta 0
- Voy por la vuelta 1
- Voy por la vuelta 2

...
- Voy por la vuelta 19

* * *
#### EJERCICIO 4

Partiendo el ejemplo anterior, crea un bucle que muestre 10 veces, en la consola, el texto `Voy por la vuelta X` siendo el número de vuelta desde 1 hasta 10 (no desde 0 hasta 9).

* * *
#### EJERCICIO 5

Vamos a partir de una variable `result` con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable `result` en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto `El resultado es: X`, siendo X el valor de la variable `result`.

> NOTA: Este tipo de variable como `result` que se va actualizando y al final tiene el resultado de varias operaciones se llama _aculumador_. Puede ser de tipo numérico pero también de tipo cadena.

* * *
#### EJERCICIO 6

**Previsión para ver la _Luna del cazador_**

Cada tres años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuando serán las 15 próximas lunas.

<hr>

#### EJERCICIO 7

**Crea tu árbol de Navidad**

Para que no nos pille el toro esta Navidad, vamos a crear un código que muestre en consola un árbol de navidad con triángulos (▲). Nosotros le diremos la altura y creará un triángulo con un número igual de lineas que la altura que le hemos pasado. Por ejemplo si le pasamos 5, creará este árbol:

```
▲  
▲▲
▲▲▲
▲▲▲▲
▲▲▲▲▲
```

*****

#### EJERCICIO BONUS 1

Intenta ponerle una estrella y un tronco al árbol para que quede mucho más mono. Sería algo así:

```
★
▲  
▲▲
▲▲▲
▲▲▲▲
▲▲▲▲▲
|
```

-----

#### EJERCICIO BONUS 2

Intenta cambiar el código para que aparezca el árbol completo.

```
    ★
    ▲  
   ▲▲▲
  ▲▲▲▲▲
 ▲▲▲▲▲▲▲
▲▲▲▲▲▲▲▲▲
    |
```

- - - - -

## Recursos externos

### Videos de Ada Lovelace en YouTube

En este canal tenemos varios vídeos que explican muy bien lo que necesitamos aprender en esta sesión con ejemplos y de forma bastante sencilla:

- [Operadores de comparación](https://www.youtube.com/watch?v=ICZXkflN-CA&index=11&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)
- [Operadores lógicos](https://www.youtube.com/watch?v=S6qx7TCM4hU&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=12)
- [Condicionales. Sentencias If-Else](https://www.youtube.com/watch?v=9hUlwVjBSco&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=20)
- [Repeticiones. Bucle for](https://www.youtube.com/watch?v=IYp2N_V_sMc&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=22)

### Introducción a JavaScript de Libros Web

- [Operadores](http://librosweb.es/libro/javascript/capitulo_3/operadores.html)
- [Estructuras de control de flujo](http://librosweb.es/libro/javascript/capitulo_3/estructuras_de_control_de_flujo.html)

> **Nota:** De las estructuras de control de flujo, no vamos a ver el `for...in` de momento y muestra algunas cosas con arrays que por el momento tampoco veremos hasta dentro de un algunas sesiones.
