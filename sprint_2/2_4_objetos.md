# Objetos

<!-- TOC START min:4 max:4 link:true update:true -->
- [EJERCICIO 1](#ejercicio-1)
- [EJERCICIO 2](#ejercicio-2)
- [EJERCICIO 3](#ejercicio-3)
- [EJERCICIO 4](#ejercicio-4)
- [EJERCICIO 5](#ejercicio-5)

<!-- TOC END -->


## Introducción

Los objetos son un tipo de dato en JavaScript, como lo serían los números y los strings. Los objetos son en cierta forma diferentes a los números y los strings porque permiten agrupar varios datos de forma estructurada. En esta sesión, veremos tanto los aspectos que los diferencian como aquellos que los asemejan.

En JavaScript los objetos conforman un grupo de datos compuestos por una *clave* a la que va asociada un *valor*. El tipo de objetos que vamos a ver durante esta sesión se denomina *objetos literales* o *diccionarios*, por cómo se asocia la clave a su valor, pero normalmente los llamaremos simplemente *objetos*.

La idea de los objetos viene del mundo real. En nuestro mundo un objeto tiene una serie de características (*propiedades*) y puede realizar una serie de acciones (*métodos*). Si pensamos en algo tan sencillo como un lápiz podremos ver que algunas de sus propiedades podrían son color de la mina, nivel de afilado, cantidad de mina restante, etc. Por otro lado sus acciones serían muy reducidas y básicamente se resumiría en una, pintar.

Si trasladamos estos objetos a la web, el ejemplo más sencillo es el de un contador. Este contador tiene una serie de propiedades como pueden ser el valor inicial, el valor máximo, el valor mínimo y el valor actual. Por otro lado tiene también acciones, como aumentar la cuenta o reducirla. Los valores inicial, máximo, mínimo y actual serán *propiedades* del objeto, y aumentar y reducir la cuenta serán acciones o *métodos* (funciones).

Hasta aquí hay algo que no termina de cuadrar: ¿para que quiero que sean objetos? Es decir, a mí, como programadora ¿de qué me sirven? En programación interactuaremos con estos objetos, que no dejan de ser abstracciones de conjuntos de datos y acciones. Lo que haremos será, mediante código, decirle que cuando pulsemos un botón, por ejemplo, se ejecute el método para aumentar la cuenta y cambie así el valor actual del contador. Esto no es que cree un objeto y el trabaje por su cuenta sin que le digamos nada, todo el código (excepto el que nos brinda de serie JavaScript) lo creamos nosotros. La idea de utilizar esto es crear entidades o representaciones con las que es más fácil trabajar. Si vemos lo siguiente:

```
si se pulsa el botón, el contador aumenta
```

Es más claro que:

```
Si se pulsa el botón
Se comprueba si la cantidad actual más uno es menor que el valor máximo y si se puede aumentar
Si puede ser aumentado, se aumenta en 1 la variable cuenta actual
```

Además, otro de los beneficios de los objetos es que agrupa los datos por estructuras dejando claro que pertenecen a un mismo grupo. Igual, es más fácil trabajar con algo como:

```
- Contador
  - valor inicial
  - valor máximo
  - valor actual
  - valor mínimo
  - aumentar valor
  - disminuir valor
```

Que trabajar con:

```
Valor inicial del contador
Valor máximo del contador
Valor actual del contador
Valor mínimo del contador
Aumentar valor del contador
Disminuir valor del contador
```

De la primera forma agrupamos todo dentro del contador y es más fácil ver la relación que tienen entre ellos los elementos y sabemos que van a tener sentido sólo dentro de éste.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Lo que vamos a ver en esta sesión es fundamental. Los objetos están presentes en todo momento en la web y toda ella se compone de objetos con los que interactuaremos en un futuro. Por ejemplo, la ventana (*window*) de la web es un objeto, la página (*page*) es un objeto, cada elemento HTML es un objeto. Estos tienen las mismas características que cualquier otro, tienen propiedades y métodos, y nos servirán para obtener información de éstos y ejecutar acciones sobre ellos.

Otro de los beneficios de entender los objetos es que aprenderemos a crear un código de mayor calidad ya que creamos abstracciones para que en vez de leer cien líneas de código leamos una y entendamos qué hace. Uno de los beneficios de los *métodos* de los objetos es que nos permiten crear un código muy complejo con el que actuar sea algo sencillo. Por poner un símil, sería como un coche, el motor tiene miles de piezas y una complejidad que poca gente podría entender pero para interactuar con él es bastante sencillo. Giras la llave y arranca el motor, pisas el acelerador y el coche acelera, pisas el freno y frena y no hace falta entender toda la complejidad del motor. En los objetos es igual, la única diferencia es que en vez de interactuar con ellos de forma física, ejecutamos sus métodos y leemos y modificamos sus propiedades. A un contador le diremos que se aumente igual que con el coche le decimos que acelere, la interacción es diferente pero la base del concepto es la misma.

En JavaScript casi todo son objetos, si entendemos cómo funcionan y cómo trabajar con ellos tendremos una muy buena base para progresar rápidamente con este lenguaje.


## ¿En qué casos se utiliza?

Los objetos, de la forma en la que los vamos a ver en esta sesión se utilizan para estructurar cualquier tipo de dato y poder obtener información de él de forma sencilla y modificarlo también con la misma simplicidad:

- El contador que hemos comentado sería un ejemplo
- Un usuario podría ser perfectamente un buen ejemplo de un objeto. Este tendrá nombre, apellidos, edad, etc...
- Los datos para un mensaje también tendría sentido que fuesen un objeto: título, mensaje, imagen, mostrar mensaje, ocultar mensaje, etc.
- Un post de Facebook es un objeto en el que contiene título, imagen, likes, etc...


## Objetos literales

Los objetos son abstracciones inspiradas en el mundo real que permiten estructurar objetos ficticios en JavaScript de forma simple usando grupos de pares de clave/valor. Podemos crear *propiedades*, que representan las características, y *métodos*, que representan las acciones que podrán llevar a cabo esos objetos.

Usamos objetos en JavaScript para crear estructuras que agrupen datos y a las que se pueda acceder de forma sencilla sin necesidad de comprender la complejidad que albergan.

La sintaxis para crear un objeto es la siguiente:
- indicamos el nombre de la variable donde guardamos el objeto, por ejemplo, `adalaber`
- el contenido del objeto irá entre llaves `{ }`
- dentro de las llaves ponemos parejas `clave: valor`, donde la clave será el nombre de la propiedad y el valor puede ser de cualquier tipo de datos (cadena, número, booleano), por ejemplo, `name: 'María'`
- separamos cada pareja `clave: valor` con una coma `,`

```js
var adalaber = {
  name: 'María',
  age: 31,
  isMarried: false
};
```

Como los objetos también son tipos de datos, una propiedad de un objeto podría ser también un objeto. Por ejemplo:

```js
var adalaber = {
  name: 'María',
  age: 31,
  isMarried: false,
  address: {
    street: 'Colegiata',
    number: 9
  }
};
```
Para acceder (leer) al valor de una propiedad de un objeto, podemos hacerlo de 2 formas:
- al nombre de la variable (el nombre del objeto) le ponemos detrás un punto `.` y luego el nombre de la propiedad
- al nombre de la variable (el nombre del objeto) le ponemos detrás unos corchetes `[ ]` y dentro el nombre de la propiedad como una cadena (entre comillas)

```js
//Muestra en una alerta 'María'
alert(adalaber.name);

//Muestra en una alerta 'María'
alert(adalaber['name']);
```
Ambas formas son equivalentes. La primera es más corta de escribir y es la que usaremos normalmente. Pero a veces necesitaremos usar la segunda, por ejemplo, si el nombre de la propiedad lo tenemos guardado en una variable.

```js
var prop = 'name';

//Muestra en una alerta 'María'
alert(adalaber[prop]);
```

Para actualizar el valor de una propiedad de un objeto, accedemos de una de las 2 formas anteriores y asignamos el valor como a una variable con `= nuevoValor`.

```js
adalaber.name = 'Lucía';

//Muestra en una alerta 'Lucía'
alert(adalaber.name);
```

### Creando objetos a partir de objetos vacíos

Otra forma de crear objetos equivalente a la anterior es crear primero un objeto vacío y luego ir añadiendo las propiedades en las siguientes instrucciones. Vamos a ver un ejemplo:

```js
var adalaber = {};
adalaber.name = 'María';
adalaber.age = 31;
adalaber.isMarried = false;

//Muestra en una alerta 31
alert(adalaber.age);
```
* * *
#### EJERCICIO 1

Crea un nuevo objeto en JavaScript `adalaber1` que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
- Susana, 34 años, periodista

Luego muestra una ventana de alerta para mostrar una frase como esta, accediendo a los datos del objeto:

'Mi nombre es Susana, tengo 34 años y soy periodista'

Ahora hacemos lo mismo (crear el objeto `adalaber2` y mostrar la alerta) con una nueva Adalaber con estos datos:
- Rocío, 25 años, actriz

* * *

### Métodos

Los métodos son funciones asociadas a la propiedad de un objeto. Estas funciones suelen definirse como funciones anónimas como las que vimos en la sesión anterior. Para ejecutar un método, accedemos a él como a una propieda y le pasamos los argumentos entre paréntesis `( )`.  Ejemplo:

```js
var adalaber = {};
adalaber.name = 'María';
adalaber.speak = function (phrase){
  return 'Yo digo: ' + phrase;
}

//Muestra en una alerta 'Yo digo: Hola'
alert(adalaber.speak('Hola'));
```

> NOTA: Por convención, los métodos suelen tener como nombre un verbo (`show`, `hide`, `reset`, etc.) y las características (propiedades) suelen tener un sustantivo (`color`, `size`, `type`, `content`, `text`, etc)

* * *
#### EJERCICIO 2

Partiendo del objeto `adalaber1` del ejercicio anterior, añade un método (una función) `run` que muestra una ventana de alerta con la frase 'Estoy corriendo'.

Ahora, vamos a añadir un nuevo método `runAMarathon` que toma un parámetro `distance` que es un número. Al ejecutarlo, debe mostrarse una ventana de alerta con el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento `distance` que le hemos pasado.
* * *

### Breve introducción al `this`

Desde un método de un objeto podemos acceder al resto de propiedades de ese objeto usando la palabra `this` antes del nombre de la propiedad. Vamos a ver un ejemplo:

```js
var adalaber = {};
adalaber.name = 'María';
adalaber.sayHello = function (){
  return 'Hola, me llamo ' + this.name;
}

//Muestra en una alerta 'Hola, me llamo María'
alert(adalaber.sayHello());
```

> NOTA: El concepto de `this` en JavaScript es mucho más complejo de lo que hemos aprendido aquí. Por el momento con lo que hemos visto nos sirve para empezar a trabajar con él, pero sabiendo que alberga muchas más posibilidades.

* * *
#### EJERCICIO 3

Partiendo del objeto `adalaber1` del ejercicio anterior, añade un método (una función) `showBio` que muestra una ventana de alerta con la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.

Hacemos lo mismo para `adalaber2`. ¿Hemos tenido que modificar mucho el método `showBio`? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?
* * *

### BONUS: Los objetos son un tipo de datos especial

Cuando asignamos un objeto a una variable, realmente no estamos guardando su valor en la caja de la variable, como sucede con los números o los strings. En este caso lo que sucede es que se crea un objeto y la variable sería como un _enlace a ese objeto_. Por lo tanto, si guardamos ese mismo objeto en otra variable lo que estaremos haciendo es crear un nuevo enlace que apunta al mismo objeto. Vamos a entenderlo mucho mejor con un ejemplo:

```js
var adalaber = {
  name: 'Rosa'
};
adalaber.name; //Rosa

//Creamos una nueva variable que apunta al mismo objeto
var adalaber2 = adalaber;
adalaber2.name; //Rosa

//Cambiamos la propiedad `name`
adalaber.name = 'Rocío';

//Al acceder al objeto el nombre es el nuevo
adalaber.name; //Rocío
//Pero también a través de la otra variable 😱
adalaber2.name; //Rocío

```

### BONUS: Usando otros tipos de datos como objetos

Los strings y los números también tienen propiedades y métodos, como los objetos, pero tienen sus diferencias.

En el caso de las cadenas podemos acceder a algunas propiedades y métodos:
- `length` es una propiedad que representa la longitud de la cadena
- `toLowerCase` es un método que pasa la cadena a minúscula
- `trim` es un método que elimina espacios al principio y final de la cadena

Puedes consultar el [listado completo de propiedades y métodos de las cadenas en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String).

En el caso de los números necesitamos crearlos de una forma especial `Number(4)` para poder acceder a sus métodos:
- `toFixed` es un método quedevuelve el número como una cadena con un número fijo de decimales

Puedes consultar el [listado completo de propiedades y métodos de los números en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number).

* * *
#### EJERCICIO 4

**Crear un contador**

Vamos a crear un contador con los datos del contador que comentamos en la introducción de esta sesión. Este contador deberá tener como propiedades un valor máximo, un valor mínimo, un valor actual y un valor inicial y como métodos deberá tener un aumentar, disminuir y restablecer.

Con la ayuda de `alert` Probaremos a usar varios métodos distintos y comprobar el estado actual para ver si funciona correctamente.

* * *
#### EJERCICIO 5

**Estructura de datos para un usuario**

Vamos a crear un objeto para almacenar la información de un usuario y una variable llamada `job` donde guardaremos el valor `developer`. A continuación seguiremos los siguiente pasos

  Usando la notación con punto o la notación con corchetes (`[]`) (ej: `obj.prop` o `obj["prop"]`):
    1. Añadiremos una propiedad llamada `firstname` y le asignaremos un valor.
    2. Añadiremos una propiedad llamada `lastname` y le asignaremos un valor.
    3. Añadiremos una propiedad llamada `age` y le asignaremos un valor numérico.
    4. Añadiremos una propiedad `job` a la que asignaremos el valor de la variable `job`
    5. Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
    6. Cambiaremos el nombre del usuario por otro distinto
    7. Aumentaremos en 1 la edad del usuario
    8. Comprobaremos de nuevo que todo sigue funcionando correctamente

* * *

## Recursos externos

### Ada Lovelace en Youtube

En este curso veremos tanto una introducción breve a los objetos como la sintaxis básica para trabajar con ellos. La idea es aprender métodos, propiedades y entender qué es un objeto en sí y por qué son tan útiles.

- [Introducción a los objetos en Javascript](https://www.youtube.com/watch?v=ycfoaxNhYbk&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=27)
- [Definición de objetos](https://www.youtube.com/watch?v=xDqTEsiNgBw&index=28&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)
- [Propiedades](https://www.youtube.com/watch?v=jj9em_PDBH8&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=30)
- [Métodos](https://www.youtube.com/watch?v=BZE85nUjLHA&index=31&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)
