# Estructuras de control

## Contenidos

- Tipos de valor booleanos
- Condicionales
- Bucles

## Introducción

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


## Recursos externos

### Videos de Ada Lovelace en YouTube

En este canal tenemos varios viídeos que explican muy bien lo que necesitamos aprender en esta sesión con ejemplos y de forma bastante sencilla:

- [Operadores de comparación](https://www.youtube.com/watch?v=ICZXkflN-CA&index=11&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)
- [Operadores lógicos](https://www.youtube.com/watch?v=S6qx7TCM4hU&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=12)
- [Condicionales. Sentencias If-Else](https://www.youtube.com/watch?v=9hUlwVjBSco&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=20)
- [Repeticiones. Bucle for](https://www.youtube.com/watch?v=IYp2N_V_sMc&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=22)


### Introducción a JavaScript de Libros Web

- [Operadores](http://librosweb.es/libro/javascript/capitulo_3/operadores.html)
- [Estructuras de control de flujo](http://librosweb.es/libro/javascript/capitulo_3/estructuras_de_control_de_flujo.html)

**Nota:** De las estructuras de control de flujo, no vamos a ver el `for...in` de momento y muestra algunas cosas con arrays que por el momento tampoco veremos hasta dentro de un par de sesiones. Lo veremos en el sprint 3.


## Resumen de la sesión

Los puntos más importantes de esta sesión son los siguientes:

- Booleanos
  - Guardan información del tipo verdadero o falso (ej: `var filled = false;`, `var solved = false`, etc.)
  - Pueden ser solo `true` o `false`
  - Se pueden obtener del resultado de una operación booleana
  - Operadores de comparación (todos ellos devuelven un booleano, `true` o `false`):
    - `==` (_equal_ o _igual_) comprueba si dos valores son iguales aunque no sean del mismo tipo (ej: `5 == '5'` numero y string)
    - `!=` (_not equal_ o _diferente_) comprueba si dos valores son diferentes (ej: `5 - 1 != '3'` devolvería falso)
    - `===` (_strict equal_ o _estrictamente igual_) comprueba si dos valores son iguales y son del mismo tipo (ej: `"lechuga" === "lechuga"`). Usaremos siempre esta versión para comparar si algo es igual.
    - `!==` (–strict not equal_ o _estrictamente diferente_) comprueba si dos valores son diferentes en valor y tipo (ej: `5 != '5'` devolvería verdadero). Usaremos siempre esta versión para comparar si algo es distinto.
    - `<` (_less than_ o _menor que_) comprueba si el número a la izquierda del operador es menor que el que está a su derecha
    - `>` (_greater than_ o _mayor que_) comprueba si el número a la izquierda del operador es mayor que el que está a su derecha
    - `<=` (_less than or equal_ o _menor o igual que_) comprueba si el número a la izquierda del operador es menor o igual que el que está a su derecha
    - `>=` (_greater than or equal_ o _mayor o igual que_) comprueba si el número a la izquierda del operador es mayor o igual que el que está a su derecha
  - Pueden combinarse utilizando operadores lógicos:
    - `&&` (_AND_) Devuelve verdadero **SOLO** si ambas condiciones son verdaderas (ej: `8 === 9 && 'hola' !== 'adios'` devolvería falso porque una de las condiciones no se cumple)
    - `||` (_OR_) Devuelve verdadero si una o más condiciones se cumplen (ej: `8 === 8 && 'hola' !== 'adios'` devolvería verdadero porque una de las condiciones se cumple)
    - `!` (_NOT_) Devuelve el valor contrario (ej: `!true` devuelve `false`)
    - Los operadores de comparación se ejecutan siempre después de los operadores numéricos, es decir, si tenemos `5 * 1 - 4 !== '3'`, primero se hará la multiplicación, luego la resta y finalmente se hara la operación de comparación.

- Condicionales:
  - Sirven para ejecutar un código u otro (o ninguno) en función de si se cumple o no una condición
  - En ellos se establece una condición y el código en caso de que se cumpla o no, si esa condición se cumple se ejecuta un código y sino otro o ninguno. _Si esta condición es verdadera, haz esto y sino esto otro_
  - La condición que escribamos siempre se va a convertir en `true` o `false`
  - Podemos pensar en ellos como un _"Si...haz..."_ (`if`), _"Si...haz...sino...haz"_ (`if...else`) o _"Si...haz...sino si...haz"_ (`if...else if`)
  - Son excluyentes, es decir, en un condicional sólo se va a ejecutar el código de un bloque (if, else if o else). En ningún momento se ejecutará el código de dos bloques ya que si se cumple una condición se ejecuta el código de su bloque y se ignoran las posteriores
  - Su estructura es:
    - `if`: `if (condicion) { // código si es true }`
    - `if...else`: `if (condicion) { // código si es true } else { // código si es false }`
    - `if...else if`: `if (condicion1) { // código } else if (condicion2) { // código }`

- Bucle `for`:
  - Podemos incrementar o decrementar el valor de una variable usando `++` o `--`. Si tenemos una variable `i` que es igual 1, y ejecutamos `i++`, `i` pasará a tener un valor de 1. `++` es la abreviación de `i = i + 1`
  - Sirve para ejecutar un mismo código un número determinado de veces. _Haz esto x veces_
  - Su estructura es la siguiente `for (inicialización; condición; actualización) { // código }`:
    - _inicialización_ será una declaración y asignación de variable (ej: `var i = 1`)
    - _condición_ será la condición que debe cumplirse para que se ejecute el bloque de código dentro delo for (ej: `i < 20`)
    - _actualización_ será la operación que se realizará antes de cada iteración del bucle sin contar la primera (ej: `++i`)
    - Ejemplo: `for (var i = 0; i < 20; i++)`
  - El orden de ejecución de un bucle `for` es el siguiente:
    1. Se ejecuta el código de inicialización (`var i = 1`)
    1. Se comprueba que la condición se cumple (`i < 20`)
    1. Si se cumple se ejecuta el código que hay dentro del bloque entre las llaves (`{}`), si no se cumple se termina el bucle
    1. Se ejecuta la operación del bucle (`i++`)
    1. Vuelta al paso 2


## Ejercicios

### Control de acceso

En este ejercicio vamos a crear un control de acceso que muestre una ventana para que el usuario introduzca su nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera muestre el mensaje "Bienvenida, (tu nombre aqui)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".

### Completa las condiciones

Escribe las condiciones para el siguiente ejercicio y utilizando `prompt` haz una prueba para ver que estas se cumplen.

```js
if (/* condicion 1 */) {
  alert('El número es 0')
} else if (/* condicion 1 */) {
  alert('El número no es negativo')
} else if (/* condicion 1 */) {
  alert('El número es múltiplo de 2 y de 3')
} else if (/* condicion 1 */) {
  alert('El número es mayor que 20 pero menor que 50')
} else {
  alert('el número no es 123123125')
}
```

### Conversor de edad de perro a humano

Te habrá pasado varias veces de ir por la calle y que alguien te pregunte "perdona, tienes a mano un conversor de edad de perros a humanos" y tener que contestar con vergüenza que no y que esa persona te mire raro... ¡hasta ahora! Vamos a crearla para evitar esto que pasa tan a menudo. Para ello, las reglas son las siguientes:

- El primer año de un perro equivale a 15 años de humano
- El segundo año de un perro equivale a nueve años de humano
- A partir del tercero, cada año de humano equivale a 5 años de perro.

**Nota:** Prueba que el código funciona correctamente con distintos años (1,2, 12...). Imagina el alcance de los daños si la próxima vez que te pare una persona para preguntarte por el conversor... ¡no funciona correctamente!

### Previsión para ver la _Luna del cazador_

Cada tres años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. Este año se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en pantalla cuando serán las 15 próximas lunas.

### Crea tu árbol de Navidad

Para que no nos pille el toro esta Navidad, vamos a crear un código que muestre un árbol de navidad con triángulos (▲). Nosotros le diremos la altura y creará un triángulo con un número igual de lineas que la altura que le hemos pasado. Por ejemplo si le pasamos 5, creará este árbol:

```
▲  
▲▲
▲▲▲
▲▲▲▲
▲▲▲▲▲
```

#### Bonus 1

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

#### Bonus 2

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
