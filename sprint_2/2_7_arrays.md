# Arrays

<!-- TOC START min:4 max:4 link:true update:true -->
- [EJERCICIO 1](#ejercicio-1)
- [EJERCICIO 2](#ejercicio-2)
- [EJERCICIO 3](#ejercicio-3)
- [EJERCICIO 4](#ejercicio-4)

<!-- TOC END -->

## Introducción

Los arrays, también llamados arreglos o listas, nos permiten guardar una lista de ordenada de datos en JavaScript. Algunos ejemplos: una lista de espera de un hospital, los objetos de una cesta de la compra, los usuarios que han dado like a nuestra foto, etc.

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

Un array puede contener cualquier tipo de dato (`string`, `number`, `boolean`, `object` incluso otros `arrays`). De hecho, un mismo array puede contener datos de distinto tipo mezclados, aunque es algo poco recomendable.

Cada elemento dentro de un array irá asociado a un índice, ese índice nos permitirá obtener el dato de una determinada posición del array o modificarlo. Un dato importante a tener en cuenta es que el índice de los arrays empieza por el número 0, por lo que el primer elemento tendrá índice 0, el segundo tendrá 1, el tercero 2 y así sucesivamente.

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

// Array con distintos tipos de datos (poco recomendable)
var randomData = [
  'Hola',
  123,
  true,
  2323.24
];
```

>**NOTA:** Por lo general es poco recomendable mezclar varios datos diferentes en un array, en esos casos es mejor usar un objeto.

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

Los arrays se utilizan principalmente para almacenar una lista de datos relacionados entre sí. En esa lista de datos el orden suele ser importante: clasificación, posiciones, productos ordenados de más barato a más caro, etc.

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

>**NOTA:** Cuando un array contiene varios elementos suele ponerse en cada uno de ellos en una nueva línea como se ve en `arr3`.


### Obtener información de un array

Bien, ahora que sabemos cómo crear un array, es el momento de descubrir cómo podemos obtener información a partir de él. Como hemos comentado anteriormente, los arrays contienen una lista de datos y cada uno de esos datos va asociado a un número, un índice.

Sabiendo esto, si queremos obtener el valor que hay en una posición concreta de un índice, lo único que deberemos hacer será indicar la variable que contiene el array seguida del índice del valor que buscamos, que irá entre corchetes:

```js
var fruits = [
  'pera', 
  'manzana', 
  'naranja', 
  'plátano'
];
console.log(fruits); // Muestra el array completo: 'pera', 'manzana', 'naranja', 'plátano'
console.log(fruits[1]); // Muestra 'manzana' (recordemos que el primer índice es 0)
console.log(fruits[3]); // Muestra 'plátano'
```

Un dato importante es que para obtener el valor que queremos del array podemos utilizar una variable en vez de un número. Imaginemos que queremos hacer una aplicación que simule el típico sorteo en el que cada uno de los participantes saca un papelito de una urna y tiene un premio asociado. Si quisiéramos hacerlo con JavaScript, podríamos hacer algo parecido a lo siguiente:

```js
var options = [
  'coche', 
  'viaje', 
  'crucero', 
  'llavero'
];
var selection = prompt('Introduce un número del 1 al 4');
var selectedNumber = parseInt(selection);
var index = selectedNumber - 1; // El índice empieza en 0

var result = options[index]; // Utilizamos una variable que contiene un número como valor
console.log('Premio:', result);
```


## Modificar un array

Dentro de un array podemos añadir nuevos elementos o cambiar elementos ya existentes. Más adelante cuando veamos métodos y propiedades de los arrays veremos cómo eliminar un elemento de un array y otras formas de modificar la información que contienen.

### Añadir un elemento

Para añadir un elemento simplemente asignaremos un valor a un índice de un array:

```js
var arr = []; // Creamos un array vacío
arr[0] = 'Hola'; // Añadimos un elemento en el índice 0, la primera posición del array
arr[1] = '¿qué tal?'; // Añadimos un elemento en el índice 1, la segunda posición del array

// Tras los pasos anteriores arr será igual a  ['Hola', '¿qué tal?']
```

**NOTA:** Es importante saber que si asignamos un valor a un índice más alto que la longitud del array, se crearán espacios vacíos:

```js
var arr = [1, 2, 3];
arr[8] = 24; // Saltamos del índice 2 al 7 (5 espacios) para añadir un valor en el 8

console.log(arr); // Muestra 1,2,3,,,,,,24 (un array con 5 espacios vacíos)
```

### Modificar un valor

Para modificar unos de los valores del array utilizaremos la misma sintaxis que para añadir un nuevo elemento. A la hora de escribirlo no habrá diferencia, pero el funcionamiento será distinto ya que en este caso estaremos sobreescribiendo el valor anterior.

```js
var arr = [
  'plátano', 
  'manzana', 
  'pera'
]; // Creamos un array con tres elementos
arr[1] = 'limón'; // Sobreescribimos el valor que hay en la segunda posición del array

// Tras los pasos anteriores arr será igual a  ['plátano', 'limón', 'pera']
```

### Los arrays son un tipo de datos especial

Una cosa importante a tener en cuenta es que cuando asignamos un array a una variable realmente no asignamos a la variable ese valor sino que sería más bien creamos un array y esa variable apuntará a ese array que hemos creado. Es exactamente lo mismo que nos sucedía con los objetos, ¿lo recuerdas? En el caso de los arrays creamos un dato y la variable en vez de almacenar ese dato almacenará la dirección (enlace) que apunta al dato. Por hacer un símil, cuando creamos un array es como si construyeramos un edificio y la variable guardará la dirección del edificio.

Y te estarás preguntando, ¿y en qué me afecta esto a mí? Imaginemos que creamos un array llamado `arr`:

```js
var arr = [1, 2, 3, 4];
```

En ese caso estaremos creando un array `[1, 2, 3, 4]` y la variable `arr` apuntará a ese array.

Si más tarde guardamos `arr` en otra variable llamada `arr2` de esta forma:

```js
var arr2 = arr;
```

Lo que estamos diciendo es que `arr2` va a guardar la información que tiene `arr` y por tanto, al igual que `arr` apuntará al array que hemos creado posteriormente.

Bien, el problema viene ahora, ambas variables apuntan al mismo array por lo que si modificamos una estaremos modificando también la otra, ya que lo que va a hacer JavaScript es modificar el array al que apunta.

```js
var arr = [1, 2, 3, 4];
var arr2 = arr;

arr[4] = 5;

console.log(arr[4]);// Imprime 5 en la consola
console.log(arr2[4]);// Imprime también 5 en la consola
```

Este tipo de comportamiento de guardar la dirección a un dato en vez del dato como tal se llama asignación por referencia y así es como almacena JavaScript los arrays. Tener esto en cuenta es muy importante ya que si lo aprendemos evitaremos bastantes problemas en el futuro a la hora de guardar arrays en variables y copiar arrays.

* * *
#### EJERCICIO 1

**Películas**  

Vamos a hacer este ejercicio en parejas. ¿Listas? La primera de la pareja con el teclado va a crear un array `movies` con un listado de 3 películas que le gusten. Será un array de cadenas (`strings`).

Ahora toma el teclado la otra compañera y añade al array anterior otra película más que le guste. No vale modificar la declaración del array, sino que añadiremos la nueva peli metiéndola en la posición 3 del array (recordad que se empiezan a numerar desde el 0). Para comprobar que funciona, tienes que mostrar en la consola el nombre de la última película del array.

El teclado vuelve a la primera de la pareja. Tienes que modificar la peli que menos te guste de las que hay en el array (¿podría ser la que ha puesto tu compañera? :P) por el nombre de otra que te guste más. Para comprobar que funciona, tienes que mostrar el array completo en la consola.

El teclado vuelve a la segunda de la pareja. Ahora es tu turno de modificar la peli que menos te guste del array por otra. De nuevo, muestra el array completo en la consola para comprobar que funcionó.

Para terminar este ejericicio, vamos a encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos `workWithMovies`. Ejercutamos la función para comprobar que se muestran los mensajes en la consola correspondientes.

* * *

### La propiedad length

Los arrays (como veíamos con `String` y `Number`) son un tipo especial de objetos y, al igual que estos, pueden tener propiedades y métodos. Como hemos visto anteriormente, gracias a las propiedades podremos obtener información del array y gracias a los métodos podremos generar acciones sobre ellas para modificar sus datos u obtener un nuevo resultado.

La propiedad `length` sirve para obtener la longitud del array o en otras palabras cuántos elementos contiene. Como cualquier otra propiedad, para utilizarla simplemente escribiremos el nombre del array seguido por un punto y a continuación `length`:

```js
var arr = [1, 2, 3];

console.log(arr.length) // Mostrará un mensaje con la longitud del array (3)
```

>**NOTA:** Un error que suele producirse a menudo es que escribimos _lenght_ en vez de _length_. La segunda sería la forma correcta. Es importante tener cuidado con esto porque es un error que es difícil de percibir y bastante molesto.

### Iterando sobre los elementos de un array

Cuando trabajamos con arrays es muy común que tengamos que realizar alguna operación sobre todos sus elementos para modificarlos o generar un nuevo array a partir de ellos. Por eso es muy normal que veamos usos de arrays combinados con el uso de bucles `for`. Veamos un ejemplo en el que combinaremos ambos. En este ejemplo, vamos a tener una lista de puntuaciones y vamos a sumarlas para saber cuál será la puntuación final obtenida:

```js
var scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

// Creamos una variable fuera del bucle para que no se sobreescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
var result = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (var i = 0; i < scores.length; i++) {
  result += scores[i];
  // Sumamos a result el valor actual del array en cada iteración del bucle
  // result += arr[i] es igual a result = result + arr[i]
}

console.log('La puntuación final es ' + result);
```

* * *
#### EJERCICIO 2

**La media**

a) Vamos a crear un nuevo array `numbers` contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle que calcule la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (llamada *acumulador*) para ir almacenando la suma de todos los números. Para comprobar si el resultado es correcto, vamos a `loguearlo` en la consola.

b) Ahora vamos añadir un nuevo número al array usando `push`, y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

c) Vamos a generalizar el código anterior creando una función `average`. Esta función toma como parámetro un array `numbers`, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad `length`. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) con arrays de varias longitudes y mostraremos el resultado en la consola del navegador.

* * *

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

console.log(contacts[0].name); // Muestra el nombre del primer contacto (Raquel)
contacts[2].email = 'laura@inbox.com'; // Cambia el email del tercer contacto
console.log(contacts[2].email);  // Muestra el email del tercer contacto ('laura@inbox.com')

// Tarea con participantes (objeto con array dentro)
var task = {
  name: 'Crear un repositorio',
  participants: [
    'Raquel',
    'Pedro',
    'Laura'
  ]
};

console.log(task.participants[0]); // Muestra el nombre del primer participante (Raquel)
task.participants.push('Diego'); // Añade un nuevo participante a la lista
task.participants[0] = 'Andrea'; // Cambia el nombre del primer participante
console.log(task.participants);  // Muestra Andrea, Pedro, Laura, Diego
```
* * *
#### EJERCICIO 3

**Adalabers**

Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:
- María, 29 años, diseñadora
- Lucía, 31 años, ingeniera química
- Susana, 34 años, periodista
- Rocío, 25 años, diseñadora
- Inmaculada, 37 años, chef

En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.

Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.
1. Una función `countAdalabers` que devuelve el número de adalabers en el listado
2. Una función `averageAge` que devuelve la media de edad de listado
3. Una función `theYoungest` que devuelve el nombre de la adalaber más joven
4. Una función `countDesigners` que devuelve el número de adalabers que son diseñadoras

Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento y logueando en la consola el resultado que devuelven. Al final, modificad la estructura de datos para añadir, modificar o quitar adalabers. Y probad que las funciones siguen devolviendo el valor correcto.

* * *

#### EJERCICIO 4

**Mi lista de tareas**

Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos pedido los datos de tareas a un servidor y nos ha devuelto la información en un objeto JSON (u objeto literal) con el listado de tareas y su estado. Nuestra misión es pintar todas las tareas en pantalla, de forma que las tareas ya realizadas aparezcan tachadas. Vamos a partir de este array de datos en nuestro fichero JavaScript:

```js
var tasks = [
  {name: 'Recoger setas en el campo', completed: true},
  {name: 'Comprar pilas', completed: true},
  {name: 'Poner una lavadora de blancos', completed: true},
  {name: 'Aprender cómo funcionan los objetos de JavaScript', completed: false}
];
```

a) **Vamos a por una tarea.** Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a modificarla para que, dado que es una tarea completada, el texto aparezca tachado.

b) **Listado de tareas.** ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.

c) **Vamos a darle dinamismo.** Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un `input` de tipo `checkbox` al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado. Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
- la tarea debe mostrarse como completada (tachada)
- debemos modificar su estado (propiedad `completed`) en el array `tasks`

* * *

### Trabajar con varios elementos del DOM

Como hemos visto en sesiones anteriores, para seleccionar un elemento del DOM utilizaremos `querySelector`, pero ¿y si queremos modificar más de uno?. Bien en ese caso utilizaremos `querySelectorAll`, que nos permitirá guardar en una variable una lista de elementos. Esta lista funciona de manera similar a un array y podemos hacer lo siguiente con ella:

```js
// Guardamos una lista de todos los parrafos
var paragraphs = document.querySelectorAll('p');

// Modificamos el primer párrafo
paragraphs[0].innerHTMl = 'Soy el primero';

// Muestra el número de parráfos que hay en nuestra web
console.log(paragraphs.length)

// Iteramos sobre todos los párrafos para asignarles a todos un color
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'red';
}

```

## Métodos de array

A continuación veremos algunos de los métodos básicos que más se utilizan para trabajar con arrays.

### `push`

El método `push()` es uno de los más importantes y sirve para agregar uno o más elementos al final de un array. Es una forma común en JavaScript de añadir elementos a un array. Este método tras agregar los elementos al array devuelve la nueva longitud de éste.

```js
var arr = [1, 2, 3];
var newLength = arr.push(3, 5, 6, 7);

console.log(newLength); // Muestra 7, la nueva longitud de arr
console.log(arr); // Muestra 1,2,3,3,5,6,7
```

**NOTA:** Pocas veces es necesario guardar el resultado del método `push()` en una variable ya que podremos acceder a este valor cuando queramos usando la propiedad `length`. Nosotros normalmente no guardaremos ese valor en una variable, pero es bueno que sepamos cómo funciona exactamente el método.

Como podemos ver, para agregar elementos, pasaremos estos como argumentos del método. Podemos pasar todos los argumentos que queramos sin problema:

```js
var arr = [1, 2, 3];
arr.push(3, 5, 6, 7, 23, 34, 35, 34, 54, 34, 3434, 34); // Esto es totalmente válido
```

### `reverse`

El método reverse() invierte el orden de un array. El primer elemento pasará a ser colocarse en la última posición, el segundo pasará a colocarse en la penúltima y así sucesivamente. Este método modifica directamente el array sobre el que se ha utilizado y devuelve ese array actualizado.

```js
var arr = [1, 2, 3];
console.log(arr.reverse()); // Muestra 3,2,1
console.log(arr); // Muestra también 3,2,1 porque reverse modifica directamente arr
```

### `concat`

Este método se utiliza para obtener, a partir de dos o más arrays, uno que combine a todos ellos. Este método no modifica ninguno de los arrays que utiliza para combinarlos en uno nuevo, sino que devuelve un array, como sucede con las operaciones que hacemos con números, por ejemplo. Para concatenar varios arrays con el método `concat()` lo haremos de la siguiente manera:

```js
var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
var booleans = [true, false];

var result = letters.concat(numbers, booleans);

// result tendrá ['a', 'b', 'c', 1, 2, 3, true, false]
```

El array resultante tendrá los elementos ordenados según el orden en que hemos concatenado los arrays, como se puede observar en el ejemplo.


Puedes consultar el [listado completo de propiedades y métodos de array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array).

## BONUS: Trabajar con arrays anidados

Algunas estructuras como una array de coordenadas requieren crear arrays dentro de otros arrays, o lo que es lo mismo, arrays anidados. Si pensamos en ese caso concreto de arrays de coordenadas, vemos que tenemos un array y cada elemento posee dos coordenadas que también se pueden mostrar en array. Esto es posible de llevar a cabo en JavaScript y es una práctica común. En este apartado veremos cómo crear arrays anidados, cómo obtener un valor de ellos y cómo modificarlos.

### Crear una array anidada

Partiendo del ejemplo citado anteriormente del array de coordenadas, vamos a declarar un array anidado en JavaScript:

```js
var coordinates = [
  [4,3],
  [9,2],
  [2,6]
];
```

Como se puede observar, para crear un array anidado simplemente añadiremos un array dentro de otro. De esta forma podemos crear arrays con varios niveles de anidación pero normalmente se darán pocos casos en los que necesitemos más allá de dos niveles de anidación:

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

### Acceder al valor de un array anidado

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

## Modificar elementos anidados

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

## Recursos externos adicionales

- [3.05. Arrays I de Ada Lovelace](https://youtu.be/idhclogNzMU)
- [3.06. Arrays II de Ada Lovelace](https://youtu.be/nVNLcw70cso)
- [Sintaxis Básica V Arrays, Matrices, Arreglos. Píldoras informáticas](https://youtu.be/hTeFMke6F6Q)
- [Sintaxis Básica V. Arrays, Matrices, Arreglos II. Píldoras informáticas](https://youtu.be/yn-o0rxXW0o)
