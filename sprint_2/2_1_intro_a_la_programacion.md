# Introducción a la programación

<!-- TOC START min:2 max:2 link:true update:true -->
- [Antes de comenzar](#antes-de-comenzar)
- [¿Qué es programar?](#qu-es-programar)
- [¿Qué es JavaScript?](#qu-es-javascript)
- [Nuestro primer código en JavaScript](#nuestro-primer-cdigo-en-javascript)
- [Tipos de datos](#tipos-de-datos)
- [El código como una caja negra](#el-cdigo-como-una-caja-negra)
- [Variables](#variables)
- [Prompt](#prompt)
- [Resumen](#resumen)

<!-- TOC END -->


## Antes de comenzar

A lo largo de este documento se mostrarán ejemplos de código. Te recomendamos sin lugar a dudas, que pruebes dichos ejemplos (más adelante te enseñaremos cómo hacerlo). La idea de estas pequeñas partes de código es que juegues con ellas en el navegador y así puedas ver cómo funcionan y probar qué pasaría si las modificas, todo esto hará que interiorices mejor el aprendizaje. Se trata de descubrir los horizontes de la programación y saber cómo funciona el lenguaje de JavaScript en concreto, saber qué se puede hacer y qué no.

## ¿Qué es programar?

La programación consiste básicamente en realizar unas operaciones con unos datos para obtener el resultado deseado. Los resultados obtenidos pueden ser otros datos o acciones llevadas a cabo por un dispositivo electrónico (emitir un sonido, mostrar algo en la pantalla, guardar datos en una memoria, etc). Estos resultados se consiguen a través de un conjunto de operaciones llevadas a cabo por un programa, a ese conjunto se le llama algoritmo.

Por lo tanto, para hacer un resumen, programar es lo siguiente:

1. Tenemos unos datos iniciales
1. Realizamos operaciones con esos datos (el conjunto de operaciones se llama algoritmo)
1. Obtenemos un resultado que puede ser un dato nuevo, algo que se muestra en una pantalla, un sonido, etc.

Algunos ejemplos en los que se ve claramente estos pasos:

- El traductor de Google:
  1. En el traductor de Google introducimos una palabra (datos iniciales)
  1. Realiza una serie de operaciones para traducir esa palabra a otro idioma (operaciones)
  1. Se muestra en la pantalla la palabra traducida (resultado)

- Contador:
  1. Tenemos la cantidad inicial, que es cero (datos iniciales)
  1. Si pulsamos en la tecla "+" o la tecla "-" esa cantidad aumenta o disminuye (operaciones)
  1. Se actualiza el mensaje de la cantidad total (resultado)

- Pestañas:
  1. Tenemos varios textos y una pestaña asociada a cada uno de ellos (datos iniciales)
  1. Si pulsamos en cualquiera de las pestañas, se muestra el texto que tiene asociado (operaciones)
  1. Vemos el texto que necesitamos (resultado)

- Cámara de un teléfono:
  1. Recibimos unos datos captados por el sensor de la cámara de fotos del teléfono
  1. El teléfono realiza una serie de operaciones para convertir esos datos en una imagen y corregir los desperfectos
  1. Obtenemos la imagen como resultado

Podemos hacer este tipo de cosas y otras más complejas pero visuales como esta [demo](https://codepen.io/trhino/pen/JFmiK?limit=all&page=2&q=canvas). En este caso los datos que recibe son colores y a partir de esos colores, se realizan operaciones que muestran círculos con tamaño y posición aleatoria y el resultado son los distintos círculos que se muestran en la pantalla.

Si pensamos en cualquier aplicación, veremos que todas ellas siguen este patrón. Obviamente, los procesos que hemos descrito están simplificados, pero el resto de las fases que no mencionamos no dejan de ser procesos aplicados sobre datos para obtener otros datos o acciones que llevar a cabo, en otras palabras, más de lo mismo.

Queda claro con esto que programar es decir a un ordenador lo que tiene que hacer paso a paso, esto es lo más parecido a la magia que vamos a tener en nuestra vida, pero no es otra cosa que operaciones realizadas por máquinas que son muy tontas pero muy rápidas y precisas. ¿Y por qué digo que son tontas? Porque pueden realizar millones de operaciones por segundo pero no saben qué operaciones realizar a no ser que se lo digamos nosotros mediante código.

Hasta ahora hemos estado trabajando con HTML y CSS y, aunque mucha gente se refiere a ellos como lenguajes de programación, realmente son un lenguaje de marcado y un lenguaje de estilos respectivamente. Estos lenguajes encapsulan datos y estilos que el navegador web traduce en páginas pero tenemos que tener claro que HTML y CSS no son lenguajes de programación y no permiten programar sino estructurar una información y darle estilos. Ahora es el momento de meternos de lleno en un lenguaje de programación como tal, JavaScript.

## ¿Qué es JavaScript?

JavaScript, a diferencia de HTML y CSS, sí que es un lenguaje de programación. Este lenguaje nos permite dar instrucciones al ordenador, en este caso al navegador web, para explicarle cómo debe mostrar nuestra página y que debe hacer en qué situación (si se pulsa un botón, si se rellena un campo, si pulsamos un enlace, etc.)

JavaScript en su día fue creado para realizar validaciones sobre datos en un formulario, pero ese tiempo quedó ya muy atrás. Hoy en día es uno de los lenguajes más populares y gran parte de ese mérito se debe a que es el lenguaje de la web, es decir, es el único lenguaje de programación que entienden los navegadores (debemos recordar que HTML y CSS no son lenguajes de programación). Desde su inicio se ha expandido y sus fronteras han ido más allá de la web hasta llegar al punto en el que se utiliza JavaScript para programar aplicaciones para ordenador, servidores, robots e incluso proyectos espaciales llevados a cabo por la NASA.

En lo que a nosotros nos respecta y enfocándonos en la web, JavaScript va a ser la herramienta que nos permita hacer páginas dinámicas. Nos va a permitir realizar tareas como cambiar el contenido de una web en función de eventos (al hacer clic en el ratón, con el paso del tiempo, pulsando una tecla, etc.), obtener datos de un servidor para mostrarlos en la página o mostrar una información u otra en función de una serie de datos. Pero dejémonos de teoría, es el momento de crear nuestro primer código.

## Nuestro primer código en JavaScript

Vamos a dejar a un lado la explicación y vamos a ponernos manos a la obra. Para ello vamos a crear nuestro primer código JavaScript y este lo que hará será mostrar en la pantalla el mensaje _"Hello world"_.

Lo primero que debemos hacer es crear un archivo HTML. Al igual que pasa con CSS, JavaScript solo funciona en un navegador si lo incluimos en nuestro HTML. Como en este caso no queremos ninguna etiqueta ni ningún estilo, crearemos el html más simple del mundo:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi primer código JavaScript</title>
  </head>
  <body>

  </body>
</html>
```

Hasta aquí todo normal, ahora viene la parte interesante. ¿Cómo utilizamos un código JavaScript dentro de esta página? Por norma general, de momento enlazaremos JavaScript al final de la web, antes del cierre de la etiqueta `body`. Más adelante veremos el por qué, pero de momento tienes que confiar en nosotros. Al igual que sucedía con CSS, podemos introducir JavaScript de dos formas en nuestra página, escribiendo el código directamente dentro de ésta o escribiendo código en un archivo distinto y enlazándolo. Para hacerlo de la primera manera, simplemente creamos una etiqueta `<script>` y metemos el código JavaScript dentro de ella:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi primer código JavaScript</title>
  </head>
  <body>

    <!-- De momento, colocaremos la etiqueta script justo antes de cerrar la etiqueta body -->
    <script type="text/javascript">
      // Aquí iría el código JavaScript
    </script>
  </body>
</html>
```

> **Nota:** Como puedes ver, dentro del archivo de JavaScript hemos escrito un mensaje precedido del texto `//`. Esta combinación escrita al principio de una linea, marca esa línea como un comentario de JavaScript, esto funciona igual que los comentarios en CSS y HTML. De esta forma podemos ponernos anotaciones sin que se ejecuten o produzca un error en el código. En JavaScript existen también comentarios multilínea, estos son mensajes envueltos entre `/*` (al comienzo) y `*/` (al final) (ejemplo: `/* Este es un comentario */`). Este tipo de comentarios se utiliza cuando queremos escribir mensajes que ocupen más de una línea dentro de nuestro código.

En el caso de enlazar un JavaScript externo, utilizaremos también la etiqueta `<script>` pero esta vez le añadiremos un atributo HTML `src=""` en el que escribiremos como valor la ruta del archivo JavaScript que hemos creado. El resultado sería el siguiente (imaginando que el archivo `main.js` está en la misma carpeta que la página HTML que hemos creado):


**main.js**

```js
// Aquí iría el código JavaScript
```

**index.html**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi primer código JavaScript</title>
  </head>
  <body>

    <script type="text/javascript" src="main.js"></script>
  </body>
</html>
```

Por el momento y como norma general, utilizaremos la opción de enlazar un JavaScript externo en todos los ejercicios que realicemos.

Bien, ya hemos visto cómo enlazar JavaScript en nuestra página, ahora es el momento de ver nuestro primer código JavaScript. Partiendo del código que mostrabamos en el ejemplo anterior con los archivo `main.js` e `index.html`, vamos a añadir el código que aparece a continuación en el archivo `main.js`. Una vez añadido, abre desde tu navegador web el archivo HTML donde has enlazado ese JavaScript y observa qué sucede.

```js
'use strict';

alert('Hello world!');
```

Si has realizado los pasos anteriores y has copiado el código correctamente se mostrará una ventana en tu navegador con el mensaje "Hello world". Si es así, ¡enhorabuena! acabas de crear tu primer código JavaScript.

En este momento estarás pensando «sí, lo he escrito pero no tengo ni idea de cómo funciona». No te preocupes, vamos a entender cómo funciona ahora mismo.

La primera línea del archivo JavaScript (`'use strict';`) sirve para mejorar la rapidez de ejecución del código y hará que el navegador nos muestre errores que, de no ponerlo, no lo haría y por tanto nuestro código será más estable o, dicho de otra forma, menos propenso a fallos. Como norma general, escribiremos siempre esta linea al comienzo de todos nuestros archivos JavaScript y para que funcione correctamente deberá ser la primera línea del documento (sin contar los comentarios y las líneas en blanco).

La otra línea (`alert('Hello world!');`) describe una acción o _statement_. En programación un _statement_ es la unidad mínima que expresa una acción a llevar a cabo, en este caso, por el navegador. Básicamente le decimos "Hey navegador, haz esto."

De momento para la sintaxis utilizada en `alert('Hello world!');`, solo comentaremos que `alert()` permite mostrar un mensaje en el navegador con el texto que va entre los paréntesis. Para escribir un texto en JavaScript y que lo entienda como tal, debemos escribirlo entre comillas simples (`''`) o comillas dobles (`""`). Podéis utilizar la que queráis de éstas, ya que ambas funcionan exactamente igual. El único requisito es que siempre debe coincidir el estilo de la comilla de apertura con la de cierre:

```
'esto es un texto válido'
'esto no es válido"
```

Otro aspecto a destacar del código, es que escribimos cada orden en una línea y ponemos un punto y coma al final de ésta. En JavaScript se pueden escribir varias órdenes en una misma línea si se separan por un punto y coma (`;`), por ejemplo `'use strict';alert('Hello world!');` sería válido. Esto es totalmente desaconsejable y evitaremos hacerlo para que nuestro código sea más fácil de leer. Escribiremos como máximo una orden por línea y siempre añadiremos el punto y coma al final de esta para evitar posibles problemas.

Puede que en este punto aún sigas perdida y no te haya quedado muy claro cómo usar realmente JavaScript pero no te preocupes, de momento sólo debes entender que programar no es otra cosa que pensar en los pasos para resolver un problema y traducirlo a órdenes con un lenguaje que entienda el navegador (JavaScript). Por tanto, lo que tenemos que hacer es practicar la lógica, familiarizarnos con la sintaxis de JavaScript y aprender a traducir pasos a este lenguaje para ir poco a poco mejorando y cogiendo soltura.

***
EJERCICIO 1: Mensaje de navegador obsoleto

En este ejercicio y con lo poquito que hemos visto hasta ahora de JavaScript, vamos a crear un código que muestre una ventana con el mensaje "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente.". Para ello utilizaremos `alert` tal y como hemos visto en los ejemplos anteriores.

Una vez que lo hayáis realizado podéis enviárselo a algún amigo o familiar y decirle que os diga que le parecen los colores de vuestra nueva web para que pase un rato divertido intentando actualizar el navegador :).

***
EJERCICIO 2: Presentando con alert

La idea de este ejercicio es mostrar un mensaje de alerta en el navegador y que, cuando le demos a aceptar, aparezca otro y así hasta tres mensajes. Como idea podéis poner algo así como lo siguiente:

- Mensaje 1: "Hola mi nombre es \_\_\_\_"
- Mensaje 2: "Nací el \_\_\_\_ de \_\_\_\_, en \_\_\_\_"
- Mensaje 3: "Me gusta \_\_\_\_ y \_\_\_\_"

***

## Tipos de datos

Al principio de esta sesión hemos hablado de que programar es básicamente realizar operaciones sobre datos para obtener un resultado concreto. Bien, esos datos con los que trabajamos en nuestro código se representan mediante valores. Por tanto un valor no es más que la representación de un dato sobre la que podemos aplicar las reglas comentadas anteriormente. Si queremos mostrar la temperatura en una pantalla, necesitaremos el valor numérico (por ejemplo, 27) que represente el dato de esa temperatura y sobre ese valor aplicaremos las reglas para obtener el resultado deseado (sacar la media de temperatura, calcular el día que más calor ha hecho, etc.).

Se aprecia con esto que la base de la información de nuestra aplicación reside en los valores. Éstos serán los encargados de representar los datos y serán sobre los que apliquemos las operaciones necesarias.

En JavaScript existen por defecto seis tipos distintos de datos, todos ellos los veremos a lo largo del curso, pero por el momento vamos a centrarnos en dos: `number` (número) y `string` (cadena de caracteres).

Cada uno de ellos, según sus características, se utilizará para representar un tipo de valor concreto. El tipo `number`, como habrás podido deducir, se utilizará para representar números, mientras que el tipo `string` se utilizará para representar texto. Este segundo se llama `string` porque está compuesto de varios caracteres (letras) que unidos entre sí forman una cadena (string).

### String

_String_ traducido al español significa cadena y como su nombre indica es el tipo de valor utilizado para representar cadenas de caracteres, que viene a ser básicamente texto. Cualquier tipo de texto, ya sean caracteres sueltos ("a", "b", "0") o en conjunto ("hola", "las 13:40", "2312312") estará incluido dentro de este tipo de valor.

En los ejercicios anteriores, siempre que hemos escrito entre comillas (`''`) un texto, lo que hemos hecho es incluir en el código un _string_, decirle al programa encargado de ejecutar nuestro código que eso es un texto y que debe utilizarlo como tal en vez de entenderlo como una orden (como hace con `alert`).

Para representar un string en JavaScript, como se comenta en la sección anterior, se puede utilizar tanto texto envuelto entre comillas simples (`''`) como dobles (`""`). Ambas son totalmente válidas y funcionan de la misma manera salvo que las comillas simples no pueden contener dentro otras comillas simples y las dobles no pueden contener dobles. De esta forma, `'Esto es un 'bug''` da error porque el navegador al ejecutar el código entiende que un texto termina antes de `bug` y comienza otro texto después de `bug`. Pasaría lo mismo si usamos `"Esto es un "bug""`.

Para evitar estos errores producidos por el uso de comillas anidadas existen dos soluciones:
- Usar comillas simples siempre que el texto contenga comillas dobles o viceversa
- Usar la barra inclinada (`\`) delante de las comillas anidadas (Ej: `'I\'m a front-end developer'`). De esta forma decimos a JavaScript que esas comillas son texto normal y no van a ser usadas para marcar el final del string y por tanto no se produce el error.

**Nota:** Como sabemos que os gustan las normas y las cosas claras, a la hora de trabajar con distintos tipos de comillas, la opción recomendable es usar un único tipo a lo largo de todo el código de tu programa y usar `\` para "escapar" (convertir a un caracter normal) las comillas anidadas (ej: `'What\'s up!'`).

Ejemplos de `string`s válidos en JavaScript:

```js
"a"                                   // Devuelve "a"
'b'                                   // Devuelve "b"
"Hola"                                // Devuelve "Hola"
'¿Qué tal?   '                        // Devuelve "¿Qué tal?   " (nótese los espacios)
"%^%&^%Ω"                             // Devuelve "%^%&^%Ω"
"Lorem ipsum dolor"                   // Devuelve "Lorem ipsum dolor"
"123123"                              // Devuelve "123123"
'"Lorem ipsum dolor sit amet..."'     // Devuelve ""Lorem ipsum dolor sit amet...""
"\"Lorem ipsum dolor sit amet...\""   // Devuelve ""Lorem ipsum dolor sit amet...""
'It\'s ok'                            // Devuelve "It's ok"
```

### Number

Cómo su nombre indica, el tipo de valor _number_ comprende cualquier tipo de número utilizado en JavaScript. Hay varios subtipos de números en JavaScript pero de momento aprenderemos los más importantes, números enteros o _integers_ y números decimales o _floating point numbers_.

En JavaScript los números enteros se representan directamente con cifras, por lo que es totalmente válido escribir `14232` o `-42` en nuestro código. Por otro lado, los números decimales se escriben igual que en inglés, es decir, utilizando puntos en vez de comas. Por ejemplo, podemos representar el número _1,32_ escribiendo `1.32`.

Las anteriores son las únicas reglas gramaticales a la hora de escribir números enteros y decimales. Pero escribir números sin hacer nada con ellos no tiene ninguna utilidad, lo que queremos es poder obtener otros números, es decir, poder operar con ellos. Esto lo podemos conseguir mediante los operadores de suma, resta, multiplicación, división y módulo.

Es importante saber que cualquier número entre comillas, como por ejemplo `"232"`, será considerado como texto (string). Por tanto tenemos que estar atentos a las comillas para saber diferenciar entre uno y otro.

#### Suma, resta, multiplicación y división

En JavaScript, los operadores de suma (`+`), resta (`-`), multiplicación (`*`) y división (`/`) se utiliza exactamente igual que en matemáticas.

```js
1 + 2        // Devuelve 3
1.4 - 2.4    // Devuelve -1
+ 7          // Devuelve 7
-40          // Devuelve -40
-+8          // Devuelve -8
30 + 20 - 4  // Devuelve 46
3 + 3 + 3    // Devuelve 9

4 * 4        // Devuelve 16
8 * -7       // Devuelve -56
4 * 2 / 8    // Devuelve 1
0 / 8        // Devuelve 0
1.6 / 0.2    // Devuelve 8
```

**Nota:** El espacio entre los números no es necesario, podríamos poner `4+4` y funcionaría perfectamente. La finalidad de ese espacio es ayudar a visualizar mejor el código y la mayoría de los programadores en JavaScript suelen utilizarlos, por tanto, nosotros también lo haremos así.

El orden en el que se ejecutan los operadores también es igual que el utilizado en matemáticas. De izquierda a derecha y evaluándolos en el siguiente orden:

1. Operaciones entre paréntesis.
2. Multiplicación y división.
3. Suma y resta.

Los paréntesis en JavaScript, a la hora de aplicarlos a los números, funcionan igual que en matemáticas.

```js
4 + 4 * 4 / 8     // Devuelve 6
(4 + 4) * 4 / 8   // Devuelve 4
(4 + 4) * (4 / 8) // Devuelve 4 también
```

#### Módulo

El operador de resto (`%`), también llamado operador de módulo (_module_), es un operador especial utilizado en JavaScript para obtener el resto de la división entre dos valores. Si escribimos `5 % 2` en nuestro código, este nos devolverá el resto de esa operación, 1.

```js
0 % 80 // Devuelve 0
4 % 5  // Devuelve 4
13 % 5 // Devuelve 3
9 % 3  // Devuelve 0
```

El operador de módulo tiene el mismo orden de ejecución que los operadores de multiplicación y división.


## El código como una caja negra

JavaScript, al igual que otros lenguajes de programación, ejecuta el código de manera similar a una caja negra. Todas las operaciones se ejecutan pero si no indicamos de forma explícita que muestre algo (como cuando lo hacemos con el `alert`) no se mostrará nada en la pantalla y será como si ese código no se hubiera ejecutado, aunque lo haya hecho.

Podéis probar esto escribiendo el siguiente código en un archivo de JavaScript, enlazandolo a un archivo HTML y abriendo ese HTML en un navegador:

```js
10 + 10 + 10;
240 / 3;
4 * 8 - 12;
```

Al escribir este código y ejecutarlo en nuestro navegador, será como si no hubiésemos hecho nada pero, en realidad, este se habrá ejecutado sin que se perciba o eso nos han contado, porque no podemos saberlo :).

Debido a este comportamiento, vamos a utilizar por el momento `alert` para ver el resultado de las operaciones en una ventana de alerta. Si lo hacemos con el anterior ejemplo, podremos ver el resultado de las operaciones:

```js
alert(10 + 10 + 10); // Muestra 30 en la ventana de alerta
```

En el futuro veremos cómo mostrar este código directamente en la página sin que tenga que aparecer la ventana, pero de momento trabajaremos así para no añadir demasiada complejidad al proceso de aprendizaje.


***
EJERCICIO 3: El precio de la fruta

Imagina que vamos a la frutería y compramos lo siguiente:

- 2 kilos de kiwis a 5€/kg
- 3 kilos de peras conferencia (no una cualquiera) a 2€/kg
- medio kilo de uvas a 4€/kg

Con lo que hemos visto durante los ejemplos y textos anteriores y usando JavaScript, vamos a calcular el precio total como si lo hiciesemos en una hoja de toda la vida pero de manera mucho más guay. El resultado debe mostrarse en una ventana de alerta.

***
EJERCICIO 4: ¡Págame, tía!

Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo.

***
EJERCICIO 5: Calcular cuál va a ser el siguiente año bisiesto

Vamos a escribir un pequeño programa que nos permita saber cuál será el siguiente año bisiesto. Para aportar un poco de información, sabemos que los años bisiestos se producen cada cuatro años a partir del año 0. El primer año bisiesto fue 4, el segundo 8 y así progresivamente. La idea de este ejercicio es que, si estuviésemos en el año 3, al ejecutarlo apareciese una ventana de alerta con el texto "4", ya que el año 4 sería el siguiente año bisiesto.

**Nota:** En este caso tenemos que escribir nosotros el año en el que estamos para saber cuando será el siguiente año bisiesto pero en los siguientes párrafos veremos cómo introducir un dato desde el navegador para poder utilizarlo desde nuestro código. Esto nos permitirá hacer un programa más lógico, porque podremos mostrar cuál será el siguiente año bisiesto a partir del año que hemos introducido.

***
EJERCICIO 6: Calcular el número total de horas que hemos vivido

En este caso vamos a crear un código que nos diga cuantas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería de mostrar un mensaje con el número "525600".

**Nota:** En este caso no tendremos en cuenta los años bisiestos para no complicar mucho el ejercicio.
***

## Variables

Uno de los problemas que no sabemos resolver aún es como guardar los datos de una operación o un texto para poder utilizarlo en otra operación posterior. JavaScript tiene un recurso para poder hacer esto, las variables. Para tener una idea de que es una variable, podríamos pensar en ella como si fuese una caja con una etiqueta dentro de la que guardamos algo. Para crearla creamos la caja con la etiqueta, para guardar algo metemos esa información dentro de la caja y para obtener la información utilizamos la etiqueta de la caja.

Una cosa importante a saber es que las variables permiten guardar información de forma temporal y estarán disponibles hasta que la página web en donde se está ejecutando el código se cierre o se recargue.

Veamos cómo trabajar con variables en JavaScript.

#### Crear una variable

El primer paso a la hora de utilizar variables es crearlas. Para crear una variable, escribimos `var` seguido de un espacio y posteriormente del nombre que queremos dar a la variable. Vamos a crear por ejemplo una variable para la dirección postal de una oficina y la llamaremos `officeAddress`:

```js
var officeAddress;
```

Existen una serie de reglas importantes a la hora de establecer el nombre de una variable:

- Las escribiremos en inglés como todo nuestro código JavaScript porque es el lenguaje que utilizan prácticamente todas las empresas
- Deberán empezar por una letra y podrán contener letras y números
- No podremos usar espacios ni puntos para separar los nombres de variables
- Utilizaremos el estilo [_camel case_](https://es.wikipedia.org/wiki/CamelCase) para nombrar las variables. Este estilo se basa en juntar varias palabras en una haciendo que cada palabra empiece por mayúscula excepto la primera de todas ellas (ej: `'miNombreDeVariableMolon'`)


#### Asignar un valor a una variable

Una vez hemos creado una variable, es el momento de asignarle un valor. Este sería el paso en el que guardamos algo dentro de la caja para poder luego cogerlo y utilizarlo cuantas veces queramos. Para asignar un valor a una variable, escribiremos el nombre de la variable seguido del símbolo `=` y finalmente el valor que queremos almacenar.

```js
var officeAddress;
officeAddress = 'Calle Leganitos, 24';
```

> **Nota:** Es importante que creemos una variable siempre antes de asignarle un valor.

Cosas importantes a tener en cuenta a la hora de asignar una variable:

- En vez de asignar un valor a una variable podemos asignar una operación. JavaScript lo que hace es que primero realiza las operaciones a la derecha del símbolo de igual y después el resultado de esas operaciones lo almacena en la variable.

```js
var totalHours;
totalHours = 10 + 20 + 30;
```

- Las variables pueden ser reasignadas, por lo que podemos cambiar el valor que almacenan las veces que queramos.

```js
var officeAddress;
officeAddress = 'Calle Leganitos, 24';
officeAddress = 'Calle Mayor, 7';
officeAddress = 'Calle Embajadores, 7';
```

Por último, los pasos para crear una variable y asignarle un valor pueden combinarse y realizarse en una única linea:

```js
var officeAddress = 'Calle Leganitos, 24';
```

Normalmente utilizaremos esta combinación de creación y asignación para hacer más sencillo y más claro nuestro código y porque, no nos engañemos, a nadie le gusta escribir de más cuando es innecesario.


#### Utilizar una variable

Hemos creado nuestra cajita y hemos guardado la información en ella. Hasta ahí todo bien, pero nada de esto tiene sentido si no podemos utilizar posteriormente eso que hemos guardado en la cajita. Para utilizar ese valor, lo que tenemos que hacer es escribir el nombre de la variable en el lugar en el que queramos utilizar su valor:

```js
var earnings = 12020;
var expenses = 5342;
var benefits = earnings - expenses;
```

En el momento en el que se ejecuta el código, las variables se sustituyen por los valores que almacenan. En el ejemplo anterior, la linea final se convertiría en `var benefits = 12020 - 5342`.


Con esto tendríamos la información necesaria para poder trabajar con variables sin problemas.

Para finalizar, una de las cualidades fundamentales que las variables nos aportan es la capacidad de poder poner nombres descriptivos a nuestro código y poder dividir en varias partes las operaciones que realizamos. Un ejemplo:

```js
(620 - 72 - 24) / 4
```

¿Sabrías decir para qué sirve el código anterior? Yo probablemente en el momento de crearlo sí pero pasada una semana estaría en la misma situación que tú. ¿Por qué? Porque el código no es descriptivo y no sabemos qué representa cada número. En ese caso estaríamos realizando un mal código porque si estamos trabajando en una empresa y nos cambiamos y le toca trabajar con esto a otra persona probablemente tarde mucho tiempo en poder entenderlo para modificarlo o incluso no pueda y la empresa se vaya a pique (cosa que ha pasado en varias ocasiones en la realidad). Tenemos que tener en cuenta que el código se escribe para que otra persona (o nosotros mismos dentro de un tiempo) pueda entenderlo. Veamos cómo las variables nos pueden ayudar en esto:

```js
var headerHeight = 72;
var subheaderHeight = 24;
var screenHeight = 620;
var remainingSpace = screenHeight - headerHeight - subheaderHeight;
var sections = 4;
var sectionSize = remainingSpace / sections;
```

En este caso el código es mucho más verboso y más largo pero se entiende mucho mejor para que sirve - establecer la altura de una sección en función de la altura de la pantalla sin tener en cuenta la cabecera y la subcabecera. La idea es que nuestro código sea así, semántico y que se entienda perfectamente qué queremos hacer en cada momento. Por eso, a partir de ahora, todos nuestro ejercicios en JavaScript deberán intentar parecerse a este lo máximo posible para adquirir esta buena práctica muy bien valorada en las empresas.


***
EJERCICIO 7: Utilizar variables para mejorar nuestro código

Vamos a reescribir los ejercicios de la fruta y de la cena de Navidad utilizando variables para que sean más semánticos y por tanto aumentemos su calidad.

También vamos a reescribir los ejercicios del año bisiesto y del cálculo de horas vividas.
***

## Prompt

Como hemos comentado antes, existen diversas formas de poder introducir datos para utilizarlos dentro de nuestro código. Una de ellas es `prompt`. Prompt es un comando de JavaScript que muestra una ventana con un texto y un campo donde podemos introducir una información para luego guardarla en una variable y poder trabajar con ella.

```js
var firstName = prompt('¿Cuál es tu nombre?');
alert(firstName);
```

```js
var firstName = prompt('¿Cuál es tu nombre?');
var lastName = prompt('¿Cuál es tu apellido?');
alert('Mi nombre es ' + firstName + ' ' + lastName);
```

Quizás te haya explotado la cabeza al ver en el ejemplo el uso del símbolo de `+` con dos strings.

En el caso de los `string`s, la única forma de operar con ellos es usar el operador de concatenación (`+`). Este operador nos permitirá unir – concatenar – dos o más textos para obtener uno nuevo. Algunos ejemplos:

```js
"Fecha de conexión: " + "jueves 15"  // Devuelve "Fecha de conexión: jueves 15"
'H' + 'o' + 'l' + 'a'                // Devuelve "Hola"
"Faltan " + "3" + " días"            // Devuelve "Faltan 3 días"
```

**Nota:** Aunque el símbolo utilizado para concatenar strings (`+`) es el mismo que el utilizado para sumar números, JavaScript es capaz de saber que operación llevar a cabo en función de los datos que le pasemos. Si le pasamos `string`s concatenará los números y si pasamos `number`s los sumará. Si intentamos sumar un número y un texto siempre convertirá primero el número a string y posteriormente juntará ambos textos (ej: `5 + "5"` devuelve `"55"`)


***
EJERCICIO 8: Hello world de verdad

Utilizando `prompt` vamos a crear un programa que pregunte por el nombre y posteriormente muestre el mensaje "Hola _nombre_, encantado de conocerte". Donde _nombre_ será el nombre que ha introducido el usuario previamente.

***
EJERCICIO 9: Calculador de pagos para comidas

Vamos a crear una aplicación usando `prompt` que primero pregunte cuanto ha sido la cuenta, luego cuantos comensales hay y por último muestre una alerta que diga `"Cada comensal debe pagar: __"`

> **Nota:** Prompt guarda los datos como texto (`string`), por lo que si introducimos un número, lo guardará como si fuese un texto y no podremos operar con él. Para poder hacerlo utilizaremos `parseInt(numero)` donde número será la variable o texto que queremos convertir en número.
Ejemplo:

>```js
var numberAsAString = "4";
var number = parseInt(numberAsAString); // se guarda en la variable number el número 4
alert(number + 1);
```

***
EJERCICIO 10: Generador de historias de usuario

Vamos a crear un generador de historias de usuario. Una historia de usuario es una descripción simple de una característica nueva que queremos que tenga un programa pero enfocado desde el usuario que necesita esa nueva característica.

Para definirlas seguimos una estructura muy simple:

    Yo como un <usuario>,
    necesito <funcionalidad>
    con la finalidad de <razón>.

Vamos a poner un ejemplo

    Yo como un cliente de Netflix
    necesito más episodios de Stranger Things
    con la finalida de que mi vida no sea un infierno.

Pues vamos a crear un generador de historias de usuario usando JavaScript. Para ello, vamos a pedir los datos que necesitamos para definir la historia usando `prompt`: usuario, funcionalidad y razón. Con esta información, vamos a crear una ventana de alerta con la historia de usuario completa. ¡Vamos a ello!

***

## Resumen

Como hemos visto durante esta sesión, programar es simplemente dar órdenes al ordenador para conseguir un resultado a partir de unos datos previos. Para trabajar con el navegador lo que haremos será aprender a darle esas órdenes en código.

Aparte de ver qué es programar también hemos visto algunos de los tipos de valores que se usan en JavaScript, como los _strings_ y los _numbers_ y cómo operar con ellos para obtener distintos resultados.

Por último hemos visto cómo utilizar `prompt` y `alert` para obtener y mostrar información del usuario.

Con esto hemos iniciado nuestro viaje en el mundo de la programación y hemos empezado a aprender las bases pero ya podemos crear pequeños programas que tienen utilidad, todo en el primer día con este lenguaje de programación.
