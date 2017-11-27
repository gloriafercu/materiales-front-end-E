# Arrays

## Contenidos

- [Introducción](#introducción)
- [¿Qué es un Array?](#¿qué-es-un-array)
- [¿Para qué sirven?](#¿para-qué-sirven)
- [¿En qué casos se utilizan?](#¿en-qué-casos-se-utilizan)
- [Trabajando con arrays](#trabajando-con-arrays)
  - [Declaración de un array](#declaración-de-un-array)
  - [Obtener información de un array](#obtener-información-de-un-array)
  - [Modificar un array](#modificar-un-array)
  - [Propiedades y métodos de los arrays](#propiedades-y-métodos-de-los-arrays)
    - [`concat`](#concat)
    - [`indexOf`](#indexof)
    - [`join`](#join)
    - [`pop`](#pop)
    - [`push`](#push)
    - [`reverse`](#reverse)
    - [`shift`](#shift)
    - [`slice`](#slice)
    - [`splice`](#splice)
    - [`unshift`](#unshift)
  - [Iterar sobre un array](#iterar-sobre-un-array)
  - [Arrays anidados](#arrays-anidados)
  - [Combinando objetos con arrays](#combinando-objetos-con-arrays)
- [Recursos externos adicionales](#recursos-externos-adicionales)

## Introducción

Los arrays, también llamados arreglos o listas, nos permiten guardar datos de forma ordenada en JavaScript. Cuando en JavaScript queramos guardar una lista de datos, utilizaremos este recurso. Algunos ejemplos serían una lista de espera de un hospital, los objetos de una cesta de la compra, los usuarios que han dado like a nuestra foto, etc.

```js
// Array con la lista de espera de los pacientes de un hospital
[
  'Manuela Eufemia',
  'Benigna Imelda',
  'Isaías Paquito',
  'Ximena Adán',
  'Nicolás Emiliana'
];
```

Durante esta sesión veremos cuales son las características principales de este tipo de estructura de datos y veremos cómo trabajar con ellos, modificarlos y obtener información de ellos.


## ¿Qué es un array?

Un array es la estructura que utilizamos en JavaScript para almacenar listas de datos ordenados.

Un array puede contener cualquier tipo de dato (`string`s, `number`s, `boolean`s, etc.). De hecho, un mismo array puede contener datos de distinto tipo mezclados, aunque es algo poco recomendable.

Cada elemento dentro de un array irá asociado a un índice, ese índice nos permitirá obtener el dato de una determinada posición del array, modificarlo y hacer otro tipo de operaciones con él. Un dato importante a tener en cuenta es que el índice de los arrays empieza por el número 0, por lo que el primer elemento tendrá índice 0, el segundo tendrá 1, el tercero 2 y así sucesivamente.

```js
// Array donde el orden es importante
var weekdays = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
];

// Array donde el orden no es importante
var scores = [
  74,
  93,
  64,
  80
];

// Array con distintos tipos de datos (poco recomendable)
var randomData = [
  'Hola',
  123,
  true,
  2323.24
];
```

**NOTA:** Por lo general es poco recomendable mezclar varios datos diferentes en un array, en esos casos es mejor usar un objeto.

```js
// Un array con distintos datos (poco recomendable)
var madrid = [
  'Madrid',
  40.4893538,
  -3.6827461
];

// Tiene más sentido como objeto
var madrid = {
  name: 'Madrid',
  latitude: 40.4893538,
  longitude: -3.6827461
}
```


## ¿Para qué sirven?

Los arrays se utilizan principalmente para almacenar una lista de datos relacionados entre sí. En esa lista de datos el orden puede ser importante (clasificación, posiciones, productos ordenados de más barato a más caro, etc.) o no (usuarios, puntuaciones, etc.)

Si no sabemos cuántos elementos vamos a tener o qué nombre darle a cada elemento, lo habitual es que necesitemos un array.


## ¿En qué casos se utilizan?

Si pensamos en una web, la mayoría de los datos vienen en una lista (solo hace falta recordar la de `ul`s y `li`s que hemos puesto hasta ahora), es por eso que podemos poner infinitos ejemplos de casos de uso.

Algunas de las aplicaciones más típicas de los arrays son los resultados de búsqueda, la lista de coordenadas de un mapa (cada punto es un dato de la lista), los artículos de un carrito de la compra, las tareas de una lista de tareas o los contactos de una lista de contactos.

Todos estos ejemplos anteriores se suelen almacenar en arrays para poderlos modificar (por ejemplo ordenar por orden alfabético o añadir un nuevo elemento), trabajar con ellos de forma sencilla y mostrarlos en nuestra web.


## Trabajando con arrays

A continuación vamos a ver cómo trabajar con arrays, cuales son sus principales propiedades y métodos y cómo realizar operaciones básicas con ellos.

### Declaración de un array

Al igual que los strings y los números, podemos usar un array sin asignarlo a una variable `[1, 2, 3]`, pero normalmente crearemos una variable para guardar su valor.

La sintaxis para declarar una variable y asignarle como valor un array es la siguiente:

```js
// Crea una variable con un array vacío
var arr1 = [];

// Crea un array con dos números
var arr2 = [1, 2];

// Crea un array con cuatro datos
var arr3 = [
  'Laura',
  'Pedro',
  'Marta',
  'Diego'
];
```

**NOTA:** Cuando un array contiene varios elementos suele ponerse en cada uno de ellos en una nueva línea como se ve en `arr3`.

Una cosa importante a tener en cuenta es que cuando asignamos un array a una variable realmente no asignamos a la variable ese valor sino que sería más bien creamos un array y esa variable apuntará a ese array que hemos creado. En el caso de números y strings creamos una variable y guardamos dicho número o string dentro de ella, sin embargo, en el caso de los arrays creamos un dato y la variable en vez de almacenar ese dato almacenará la dirección que apunta al dato. Por hacer un símil, cuando creamos un array es como si construyeramos un edificio y la variable guardará la dirección del edificio.

Y te estarás preguntando, ¿y en qué me afecta esto a mí? Imaginemos que creamos un array llamado `arr`:

```js
var arr = [1,2,3,4];
```

En ese caso estaremos creando un array `[1,2,3,4]` y la variable `arr` apuntará a ese array.

Si más tarde creamos una copia de `arr` llamada `arrCopy` de esta forma:

```js
var arrCopy = arr;
```

Lo que estamos diciendo es que `arrCopy` va a guardar la información que tiene `arr` y por tanto, al igual que `arr` apuntará al array que hemos creado posteriormente.

Bien, el problema viene ahora, ambas variables apuntan al mismo array por lo que si modificamos una estaremos modificando también la otra, porque lo que va a hacer JavaScript es modificar el array al que apunta. Pongamos que añado un 5 al final de `arr`, al hacerlo estaré modificando el array al que apunta `arr` y por tanto este ahora tendrá 5 elementos pero como `arrCopy` apunta al mismo array este también se actualizará.

Este tipo de comportamiento de guardar la dirección a un dato en vez del dato como tal se llama asignación por referencia y así es como almacena JavaScript los arrays. Tener esto en cuenta es muy importante ya que si lo aprendemos evitaremos bastantes problemas en el futuro a la hora de guardar arrays en variables y copiar arrays.


### Obtener información de un array

Bien, ahora que sabemos cómo crear un array, es el momento de descubrir cómo podemos obtener información a partir de él. Como hemos comentado anteriormente, los arrays contienen una lista de datos y cada uno de esos datos va asociado a un número, un índice.

Sabiendo esto, si queremos obtener el valor que hay en una posición concreta de un índice, lo único que deberemos hacer será indicar la variable que contiene el array seguida del índice del valor que buscamos, que irá entre corchetes:

```js
var fruits = ['pera', 'manzana', 'naranja', 'plátano'];
alert(fruits); // Muestra el array completo: 'pera', 'manzana', 'naranja', 'plátano'
alert(fruits[1]); // Muestra 'manzana' (recordemos que el primer índice es 0)
alert(fruits[3]); // Muestra 'plátano'
```

Un dato importante es que para obtener el valor que queremos del array podemos utilizar una variable en vez de un número. Imaginemos que queremos hacer una aplicación que simule el típico sorteo en el que cada uno de los participantes saca un papelito de una urna y tiene un premio asociado. Si quisiéramos hacerlo con JavaScript, podríamos hacer algo parecido a lo siguiente:

```js
var options = ['coche', 'viaje', 'crucero', 'llavero'];
var selection = prompt('Introduce un número del 1 al 4');
var selectedNumber = parseInt(selection);
var index = selectedNumber - 1; // El índice empieza en 0

var result = options[index]; // Utilizamos una variable que contiene un número como valor
alert(result);
```


## Modificar un array

Dentro de un array podemos añadir nuevos elementos o cambiar elementos ya existentes. Más adelante cuando veamos métodos y propiedades de los arrays veremos cómo eliminar un elemento de un array y otras formas de modificar la información que contienen.

### Añadir un elemento

Para añadir un elemento simplemente asignaremos un valor a un índice de un array:

```js
var arr = []; // Creamos un array vacío
arr[0] = 'Hola'; // Añadimos un elemento en el índice 0, la primera posición del array
arr[1] = '¿qué tal?'; // Añadimos un elemento en el índice 0, la primera posición del array

// Tras los pasos anteriores arr será igual a  ['Hola', '¿qué tal?']
```

**NOTA:** Es importante saber que si asignamos un valor a un índice más alto que la longitud del array, se crearán espacios vacíos:

```js
var arr = [1, 2, 3];
arr[8] = 24; // Saltamos del índice 3 al 7 (5 espacios) para añadir un valor en el 8

alert(arr); // Muestra 1,2,3,,,,,,24 (un array con 5 espacios vacíos)
```

### Modificar un valor

Para modificar unos de los valores del array utilizaremos la misma sintaxis que para añadir un nuevo elemento. A la hora de escribirlo no habrá diferencia, pero el funcionamiento será distinto ya que en este caso estaremos sobreescribiendo el valor anterior.

```js
var arr = ['plátano', 'manzana', 'pera']; // Creamos un array con tres elementos
arr[1] = 'limón'; // Sobreescribimos el valor que hay en la segunda posición del array

// Tras los pasos anteriores arr será igual a  ['plátano', 'limón', 'pera']
```
* * *
EJERCICIO: PELÍCULAS  

Vamos a hacer este ejercicio en parejas. ¿Listas? La primera de la pareja con el teclado va a crear un array `movies` con un listado de 3 películas que le gusten. Será un array de cadenas (strings).

Ahora toma el teclado la otra compañera y añade al array anterior otra película más que le guste. No vale modificar la declaración del array, sino que añadiremos la nueva peli metiéndola en la posición 3 del array (recordad que se empiezan a numerar desde el 0). Para comprobar que funciona, tienes que mostrar una alerta con el nombre de la última película del array.

El teclado vuelve a la primera de la pareja. Tienes que modificar la peli que menos te guste de las que hay en el array (¿podría ser la que ha puesto tu compañera? :P) por el nombre de otra que te guste más. Para comprobar que funciona, tienes que mostrar el array completo en una ventana de alerta.

El teclado vuelve a la segunda de la pareja. Ahora es tu turno de modificar la peli que menos te guste del array por otra. De nuevo, muestra el array completo en una ventana de alerta para comprobar que funcionó.

Para terminar este ejericicio, vamos a encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos `workWithMovies`. Ejercutamos la función para comprobar que se muestran los mensajes de alerta correspondientes.

* * *


## Propiedades y métodos de los arrays

Aún no lo hemos comentado pero los arrays son un tipo especial de objetos y, al igual que estos, pueden tener propiedades y métodos. Como hemos visto anteriormente, gracias a las propiedades podremos obtener información del array y gracias a los métodos podremos generar acciones sobre ellas para modificar sus datos u obtener un nuevo resultado.

### La propiedad length

La verdad es que los arrays tienen apenas tres propiedades y de esas tres, la única que suele tener utilidad es la propiedad `length`.

La propiedad `length` sirve para obtener la longitud del array o en otras palabras cuántos elementos contiene. Como cualquier otra propiedad, para utilizarla simplemente escribiremos el nombre del array seguido por un punto y a continuación `length`:

```js
var arr = [1, 2, 3];

alert(arr.length) // Mostrará un mensaje con la longitud del array (3)
```

**NOTA:** Un error que suele producirse a menudo es que escribimos _lenght_ en vez de _length_. La segunda sería la forma correcta. Es importante tener cuidado con esto porque es un error que es difícil de percibir y bastante molesto.

### Métodos

A continuación veremos algunos de los métodos básicos que más se utilizan para trabajar con arrays. Estos métodos los listamos aquí para que sepáis que existen y los vayáis aprendiendo poco a poco pero no es necesario memorizarlos, sino que siempre que necesitemos recurrir a ellos tendremos la información aquí como consulta.

#### `concat`

Este método se utiliza para obtener, a partir de dos o más arrays, uno que combine a todos ellos. Este método no modifica ninguno de los arrays que utiliza para combinarlos en uno nuevo, sino que devuelve un valor, como sucede con las operaciones que hacemos con números, por ejemplo. Para concatenar varios arrays con el método `concat()` lo haremos de la siguiente manera:

```js
var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
var booleans = [true, false];

var result = letters.concat(numbers, booleans);

// result será igual a ['a', 'b', 'c', 1, 2, 3, true, false]
```

El array resultante tendrá los elementos ordenados según el orden en que hemos concatenado los arrays, como se puede observar en el ejemplo.

#### `indexOf`

El método `indexOf()` nos sirve para saber si un array contiene un determinado valor y nos indica la posición en la que se encuentra. Si ese valor se encuentra repetido varias veces dentro del array nos devolverá la posición del primer elemento que coincida.

```js
var classification = [
  'Laura',
  'Pedro',
  'Marta',
  'Diego'
];

var position = classification.indexOf('Marta') + 1; // Sumamos 1 porque el índice empieza en 0

alert('Marta ha quedado en la posición: ' + position);
// Marta ha quedado en la posición: 3
```

En el caso de que el array no contenga el valor que especificamos en `indexOf`, este devolverá `-1`. Podemos utilizar esto para saber si un array contiene un valor determinado o no. Para ello comprobaremos si el resultado de indexOf es igual a `-1`; si lo es, es que el array no contiene ningún elemento que coincida con el valor que se ha especificado; si no, es que el array contiene uno o más elementos que coinciden con ese valor:

```js
var currentDay = 'Tuesday';

var availableDays = [
  'Monday',
  'Wednesday',
  'Sunday'
];

if (availableDays.indexOf(currentDay) !== -1) {
  alert('Establecimiento abierto');
} else {
  alert('Establecimiento cerrado');
}
```

El método `indexOf()` puede recibir un segundo argumento para especificar a partir de qué índice comprobamos si hay una coincidencia, si ese valor es positivo se contará el índice a partir del inicio del array y si es negativo se contará a partir del final:

```js
var arr = ['pera', 'manzana', 'limón'];

alert(arr.indexOf('manzana', -1)); // Muestra -1
alert(arr.indexOf('limón', 2));  // Muestra 2
alert(arr.indexOf('pera', -3)); // Muestra 0
```

**NOTA:** En la nueva versión ES7 de JavaScript, los arrays incluyen un nuevo método llamado `includes()` que devuelve `true` o  `false` según si un array contiene un valor o no, lo cual, si lo comparamos con `indexOf()` lo hace más fácil e intuitivo. Nosotros por el momento estamos aprendiendo ES5 pero en el último sprint veremos algunos de estos nuevos métodos incluidos en la nueva versión.

#### `join`

El método `join()` sirve para combinar los elementos de un array y obtener un nuevo string a partir de esa combinación. Si no le pasamos ningún argumento, por defecto unirá los elementos usando comas:

```js
var selectedCities = ['Tokyo', 'Stockholm', 'New York'];

alert('Las ciudades seleccionadas son: ' + selectedCities.join());
// Se mostrará "Las ciudades seleccionadas son: Tokyo,Stockholm,New York"
```

Como alternativa, podemos pasar un string como argumento para `join()` para especificar el texto que queremos que se añada entre los elementos del array a la hora de combinarlo:

```js
var letters = ['H', 'o', 'l', 'a'];
alert(letters.join('')); // Mostrará una ventana con el mensaje 'Hola'

var selectedCities = ['Tokyo', 'Stockholm', 'New York'];
alert('Las ciudades seleccionadas son:\n' + selectedCities.join('\n'));
// Muestra cada ciudad en una nueva línea
```

**NOTA:** Si introducimos `\n` dentro de un string, se añadirá un salto de línea. La _n_ viene de new line (nueva línea en español). Si tienes curiosidad y quieres conocer otros caracteres especiales, puedes consultarlos en los [docs de MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)

#### `pop`

El método `pop()` elimina el último elemento de un array y devuelve su valor. En este caso estaremos modificando directamente el array sobre el que aplicamos el método y cambiando su longitud.

```js
var arr = [1,2,3];
var last = arr.pop(); // Asigna el último valor de arr (3) a last

alert(arr); // Mostrará 1,2
```

#### `push`

El método `push()` es uno de los más importantes y sirve para agregar uno o más elementos al final de un array. Es la forma común en JavaScript de añadir elementos a un array y suele ser uno de los más utilizados. Este método tras agregar los elementos al array devuelve la nueva longitud de éste.

```js
var arr = [1, 2, 3];
var newLength = arr.push(3, 5, 6, 7);

alert(newLength); // Muestra 7, la nueva longitud de arr
alert(arr); // Muestra 1,2,3,3,5,6,7
```

**NOTA:** Pocas veces es necesarios guardar el resultado del método `push()` en una variable ya que podremos acceder a este valor cuando queramos usando la propiedad `length`. Nosotros normalmente no guardaremos ese valor en una variable, pero es bueno que sepamos cómo funciona exactamente el método.

Como podemos ver, para agregar elementos, pasaremos estos como argumentos del método. Podemos pasar todos los argumentos que queramos sin problema:

```js
var arr = [1, 2, 3];
arr.push(3, 5, 6, 7, 23, 34, 35, 34, 54, 34, 3434, 34); // Esto es totalmente válido
```

#### `reverse`

El método reverse() invierte el orden de un array. El primer elemento pasará a ser colocarse en la última posición, el segundo pasará a colocarse en la penúltima y así sucesivamente. Este método modifica directamente el array sobre el que se ha utilizado y devuelve ese array actualizado.

```js
var arr = [1, 2, 3];
alert(arr.reverse()); // Muestra 3,2,1
alert(arr); // Muestra también 3,2,1 porque reverse modifica directamente arr
```

#### `shift`

El método shift quita el primer elemento de un array y lo devuelve. Si la longitud del array a la hora de utilizar el método `shift` es `0`, se devolverá `undefined` que es un tipo de valor en JavaScript que se utiliza para determinar que no se ha devuelto nada o que un valor no está definido. En este caso, como la longitud es cero, se devuelve `undefined` porque no se puede devolver ningún valor real del array.

```js
var arr = [1, 2, 3];
alert(arr.shift()); // Muestra 1
alert(arr); // Muestra 2,3
```

El método `shift()` se utiliza mucho para gestionar colas. Un ejemplo sería la lista de pacientes de una consulta médica. En esa lista, cada vez que un paciente entra a la consulta queremos eliminarlo de la cola y, por lógica, ese paciente será el primero en la lista. El método `shift` será el indicado en este caso para hacer este proceso porque además, al devolver el valor que está eliminando podemos utilizarlo para mostrar un mensaje o hacer una operación con él.

```js
var pacientes = [
  'Manuela Eufemia',
  'Benigna Imelda',
  'Isaías Paquito',
  'Ximena Adán',
  'Nicolás Emiliana'
];

// Cada vez que queramos que pase un nuevo paciente
alert('Por favor, ' + pacientes.shift() + ' pase a consulta número 6');
// Esto muestra  "Por favor, Manuela Eufemia pase a consulta número 6" la primera vez
// La segunda mostrará "Por favor, Benigna Imelda pase a consulta número 6" y así sucesivamente
```

#### `slice`

El método `slice` sirve para crear una copia nueva de un array, esta copia podremos modificarla independientemente y esas modificaciones no afectarán al array del que parte. Si no le pasamos ningún argumento por defecto copia el array tal cual, pero también podemos pasarle un número como parámetro para definir el inicio de la copia, o dos números para definir el inicio y el final.

```js
var fruits = ['pera', 'manzana', 'mango', 'piña', 'papaya'];

alert(fruits.slice(3));
// Muestra piña,papaya

alert(fruits.slice(1, 4));
// Muestra manzana,mango,piña

alert(fruits.slice(2, 5));
// Muestra mango,piña,papaya
```

Como se puede ver, podemos utilizar varias veces el método `slice()` sobre el mismo array sin que se modifique su contenido ya que en cada una de esas ocasiones, este método generará una copia que será la que devuelva en cada caso.


#### `splice`

El método `splice()` permite eliminar elementos de un array y/o añadir otros nuevos. Este método no genera una nueva copia, sino que modifica el array sobre el que sea aplicado, cambiando su contenido. Para trabajar con `splice` le pasaremos, en primer lugar, el índice a partir del cual queremos empezar una modificación, en segundo lugar el número de elementos que queremos eliminar a partir de ese índice y a partir de ahí le podemos pasar el número que queramos de valores como argumento para que los añada. Veamos un ejemplo:

```js
// Ejemplo extraido de MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// elimina 0 elementos desde el índice 2, e inserta 'drum'
var removed = myFish.splice(2, 0, 'drum');
// myFish es ahora ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed es [], no se eliminaron elementos

// myFish es ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// elimina 1 elemento desde el índice 3
removed = myFish.splice(3, 1);
// myFish es ahora ['angel', 'clown', 'drum', 'surgeon']
// removed es ['mandarin']

// myFish es ['angel', 'clown', 'drum', 'surgeon']
// elimina 1 elemento desde el índice 2, e inserta 'trumpet'
removed = myFish.splice(2, 1, 'trumpet');
// myFish es ahora ['angel', 'clown', 'trumpet', 'surgeon']
// removed es ['drum']

// myFish es ['angel', 'clown', 'trumpet', 'surgeon']
// elimina 2 elemento desde el índice 0, e inserta 'parrot', 'anemone' y 'blue'
removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish es ahora ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
// removed es ['angel', 'clown']

// myFish es ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
// elimina 2 elemento desde el índice 2
removed = myFish.splice(myFish.length -3, 2);
// myFish es ahora ['parrot', 'anemone', 'surgeon']
// removed es ['blue', 'trumpet']
```

#### `unshift`

El método `unshift()` sirve para agregar uno o más elementos al principio de un array. Este método tras agregar los elementos al array devuelve la nueva longitud de éste.

```js
var arr = [1, 2, 3];
alert(arr.unshift(1, 4, 5)); // Muestra 6
alert(arr); // Muestra 1,4,5,1,2,3
```

**NOTA:** Pocas veces es necesarios guardar el resultado del método `unshift()` (la nueva longitud del array) en una variable ya que podremos acceder a este valor cuando queramos usando la propiedad `length`. Nosotros normalmente no guardaremos ese valor en una variable, pero es bueno que sepamos cómo funciona exactamente el método.

Como podemos ver, para agregar elementos, pasaremos estos como argumentos del método. Podemos pasar todos los argumentos que queramos sin problema:

```js
var arr = [1, 2, 3];
arr.unshift(3, 5, 6, 7, 23, 34, 35, 34, 54, 34, 3434, 34); // Esto es totalmente válido
```

Se puede apreciar claramente que este método es prácticamente igual que `push()` salvo que en este caso, en vez de añadir los elementos al final del array, se añadirán al principio.

### Iterando sobre los elementos de un array

Cuando trabajamos con arrays es muy común que tengamos que realizar alguna operación sobre todos sus elementos para modificarlos o generar un nuevo array a partir de ellos. Por eso es muy normal que veamos usos de arrays combinados con el uso de bucles `for`. Veamos un ejemplo en el que combinaremos ambos. En este ejemplo, vamos a tener una lista de puntuaciones y vamos a sumarlas para saber cuál será la puntuación final obtenida:

```js
var scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

// Creamos una variable fuera del bucle para que no se sobreescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
var result = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (var i = 0; i < arr.length; i++) {
  result += arr[i];
  // Sumamos a result el valor actual del array en cada iteración del bucle
  // result += arr[i] es igual a result = result + arr[i]
}

alert('La puntuación final es ' + result);
```

* * *
EJERCICIO: LA MEDIA

a) Vamos a crear un nuevo array `numbers` contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle que calcule la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (llamada *acumulador*) para ir almacenando la suma de todos los números. Para comprobar si el resultado es correcto, vamos a escribirlo en un `alert`.

b) Ahora vamos añadir un nuevo número al array usando `push`, y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

c) Vamos a generalizar el código anterior creando una función `average`. Esta función toma como parámetro un array `numbers`, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad `length`. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) con arrays de varias longitudes y mostraremos el resultado en un ventanas de alerta.

* * *


### Trabajar con arrays anidados

Algunas estructuras como una lista de coordenadas requieren crear listas dentro de otras listas, o lo que es lo mismo, listas anidadas. Si pensamos en ese caso concreto de listas de coordenadas, vemos que tenemos una lista y cada elemento posee dos coordenadas que también se pueden mostrar en lista. Esto es posible de llevar a cabo en JavaScript y es una práctica común. En este apartado veremos cómo crear listas anidadas, cómo obtener un valor de ellas y cómo modificarlas.

#### Crear una lista anidada

Partiendo del ejemplo citado anteriormente de la lista de coordenadas, vamos a declarar una lista anidada en JavaScript:

```js
var coordinates = [
  [4,3],
  [9,2],
  [2,6]
];
```

Como se puede observar, para crear una lista anidad simplemente añadiremos un array dentro de otro. De esta forma podemos crear listas con varios niveles de anidación pero normalmente se darán pocos casos en los que necesitemos más allá de dos niveles de anidación:

```js
var coordinates = [
  [
    [4,5],
    [2,9]
  ],
  [
    [1,4],
    [4,6]
  ]
];
```

La explicación a esto es que en JavaScript un array puede utilizarse como cualquier otro tipo de dato y por tanto podemos perfectamente meter arrays dentro de otros o incluso combinar arrays anidados con números o strings

```js
var randomData = [
  [4,5],
  'hello',
  123123123
];
```

#### Acceder al valor de un array anidado

Cuando tenemos estructuras de datos anidadas, como en el caso de arrays anidados, lo que se hace para acceder a los valores es algo así como establecer una hoja de ruta, será como decirle al programa _"Del array X quiero el elemento Y y dentro de ese elemento quiero el elemento Z "_. Veamos cómo se traduce esto en código:

```js
var coordinates = [
  [4,3],
  [9,2],
  [2,6]
];

var firstcoordinate = coordinates[1]; // De las coordenadas obtenemos el segundo valor ([9,2])
var x = firstcoordinate[0]; // De la primera coordenada obtenemos el primer valor (9)

/*
Ese mismo proceso podemos hacerlo en un paso:
De las coordenadas obtenemos el primer valor y de ese valor obtenemos el primer valor también
*/

var firstElemX = coordinates[1][0]; // firstElemX es igual a 9
```

En el código del ejemplo, si tuviésemos otro nivel más de anidación simplemente tendríamos que añadir otro corchete con el índice del elemento que queremos obtener `deepNestedArr[1][2][1]` y así sucesivamente.

### Modificar elementos anidados

Para modificar elementos, la sintaxis es muy similar a la de acceder al valor de un array anidado:

```js
var coordinates = [
  [4,3],
  [9,2],
  [2,6]
];

coordinates[1][0] = 8;
/*
coordinates = [
  [4,3],
  [8,2],
  [2,6]
];
*/
```

### Combinando arrays con objetos

Como comentábamos anteriormente, en JavaScript los arrays funcionan como un tipo de dato más (con características específicas) y por tanto un array puede contener otro array dentro como si de un dato normal se tratase. Con los objetos pasa lo mismo, podemos tener arrays dentro de objetos u objetos dentro de arrays porque ambos pueden ser tratados como un valor más:

```js
// Lista de contactos (array con objetos dentro)
var contacts = [
  {
    name: 'Raquel',
    phone: '915552323',
    email: 'raquel@inbox.com'
  },
  {
    name: 'Pedro',
    phone: '915554564',
    email: 'pedro@inbox.com'
  },
  {
    name: 'Laura',
    phone: '915555656',
    email: 'raquel@inbox.com'
  }
];

alert(contacts[0].name); // Muestra el nombre del primer contacto (Raquel)
contacts[2].email = 'laura@inbox.com'; // Cambia el email del tercer contacto
alert(contacts[2].email);  // Muestra el email del tercer contacto ('laura@inbox.com')

// Tarea con participantes (objeto con array dentro)
var task = {
  name: 'Crear un repositorio',
  participants: [
    'Raquel',
    'Pedro',
    'Laura'
  ]
};

alert(task.participants[0]); // Muestra el nombre del primer participante (Raquel)
task.participants.push('Diego'); // Añade un nuevo participante a la lista
task.participants[0] = 'Andrea'; // Cambia el nombre del primer participante
alert(task.participants);  // Muestra Andrea, Pedro, Laura, Diego
```

## Recursos externos adicionales

- [3.05. Arrays I de Ada Lovelace](https://youtu.be/idhclogNzMU)
- [3.06. Arrays II de Ada Lovelace](https://youtu.be/nVNLcw70cso)
- [Sintaxis Básica V Arrays, Matrices, Arreglos. Píldoras informáticas](https://youtu.be/hTeFMke6F6Q)
- [Sintaxis Básica V. Arrays, Matrices, Arreglos II. Píldoras informáticas](https://youtu.be/yn-o0rxXW0o)
