# Objetos

## Contenidos

- Objetos para almacenar datos estructurados por clave/valor
- Asignación de datos en un objeto
- Asignación por referencia
- Acceso a datos en un objeto
- Métodos
- Propiedades
- Primitivos y sus métodos y propiedades


## Introducción

Los objetos son un tipo de dato en JavaScript, como lo serían los números y los strings. Los objetos son en cierta forma diferentes a los números y los strings. En esta sesión, veremos tanto los aspectos que los diferencian como aquellos que los asemejan.

En JavaScript los objetos conforman un grupo de datos compuestos por una clave a la que va asociada un valor. En esta sección veremos una parte básica de los objetos y en sesiones posteriores veremos temas más avanzados sobre éstos. El tipo de objetos que vamos a ver durante esta sesión se denomina *objetos literales* o *diccionarios*, por cómo se asocia la clave a su valor.

La idea de los objetos viene del mundo real. En nuestro mundo un objeto tiene una serie de características (propiedades) y puede realizar una serie de acciones (métodos). Si pensamos en algo tan sencillo como un lápiz podremos ver que algunas de sus propiedades podrían son color de la mina, nivel de afilado, cantidad de mina restante, etc. Por otro lado sus acciones serían muy reducidas y básicamente se resumiría en una, pintar.

Si trasladamos estos objetos a la web, el ejemplo más sencillo es el de un contador. Este contador tiene una serie de propiedades como pueden ser el valor inicial, el valor máximo, el valor mínimo y el valor actual y por otro lado tiene también acciones, como aumentar la cuenta o reducirla. Los valores inicial, máximo, mínimo y actual serán propiedades del objeto y aumentar y reducir la cuenta serán acciones.

Hasta aquí hay algo que no termina de cuadrar: ¿para que quiero que sean objetos? Es decir, a mí,, como programador ¿de qué me sirven? En programación interactuaremos con estos objetos, que no dejan de ser abstracciones de conjuntos de datos y acciones. Lo que haremos será, mediante código, decirle que cuando pulsemos un botón, por ejemplo, se ejecute el método para aumentar la cuenta y cambie así el valor actual del contador. Esto no es que cree un objeto y el trabaje por su cuenta sin que le digamos nada, todo el código (excepto el que nos brinda de serie JavaScript) lo creamos nosotros. La idea de utilizar esto es crear entidades o representaciones con las que es más fácil trabajar. Si vemos lo siguiente:

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

Lo que vamos a ver en esta sesión es fundamental. Los objetos están presentes en todo momento en la web y toda ella se compone de objetos con los que interactuaremos en un futuro. Por ejemplo, la ventana de la web es un objeto, la página es un objeto, cada elemento HTML es un objeto. Estos tienen las mismas características que cualquier otro, tienen propiedades y métodos, y nos servirán para obtener información de éstos y ejecutar acciones sobre ellos.

Otro de los beneficios de entender los objetos es que aprenderemos a crear un código de mayor calidad ya que creamos abstracciones para que en vez de leer cien líneas de código leamos una y entendamos qué hace. Uno de los beneficios de los métodos de los objetos es que nos permiten crear un código muy complejo con el que actuar sea algo sencillo. Por poner un símil, sería como un coche, el motor tiene miles de piezas y una complejidad que poca gente podría entender pero para interactuar con él es bastante sencillo. Giras la llave y arranca el motor, pisas el acelerador y el coche acelera, pisas el freno y frena y no hace falta entender toda la complejidad del motor. En los objetos es igual, la única diferencia es que en vez de interactuar con ellos de forma física, ejecutamos sus métodos y leemos y modificamos sus propiedades. A un contador le diremos que se aumente igual que con el coche le decimos que acelere, la interacción es diferente pero la base del concepto es la misma.

En JavaScript casi todo son objetos, si entendemos cómo funcionan y cómo trabajar con ellos tendremos una muy buena base para progresar rápidamente con este lenguaje.


## ¿En qué casos se utiliza?

Los objetos, de la forma en la que los vamos a ver en esta sesión se utilizan para estructurar cualquier tipo de dato y poder obtener información de él de forma sencilla y modificarlo también con la misma simplicidad:

- El contador que hemos comentado sería un ejemplo
- Un usuario podría ser perfectamente un buen ejemplo de un objeto. Este tendrá nombre, apellidos, edad, etc...
- Los datos para un mensaje también tendría sentido que fuesen un objeto: título, mensaje, imagen, mostrar mensaje, ocultar mensaje, etc.
- Un post de Facebook es un objeto en el que contiene título, imagen, likes, etc...


## Resumen de la sesión

- Los objetos son abstracciones inspiradas en el mundo real que permiten estructurar objetos ficticios en JavaScript de forma simple usando grupos de pares de clave/valor y creando propiedades, que representarán las características y métodos, que representarán las acciones que podrán llevar a cabo esos objetos
- Usamos objetos en JavaScript para crear estructuras que agrupen datos y a las que se pueda acceder de forma sencilla sin necesidad de comprender la complejidad que albergan
- La sintaxis para crear un objeto es la siguiente: `var nombreDelObjeto = {prop1: "valor1", prop2: "valor2"};` donde:
  - `nombreDelObjeto` será el nombre del objeto
  - `prop1` y `prop2` serán los nombres de la propiedades del objeto, podemos ponerles el nombre que queramos
  - `val1` y `val2` serán los valores de las propiedades
- También podemos crear un objeto vacío `var obj = {}`
- Para añadir una nueva propiedad a un objeto ya declarado (ej: `var obj = {}`)podemos utilizar dos sintaxis diferentes:
  - `obj["prop1"] = 4` donde prop1 podrá ser un string, una variable o un número y tendrá como valor 4.
  - `obj.prop1 = 4` donde prop1 será una palabra clave y tendrá como valor 4.
- Para obtener el valor de una propiedad también tendremos dos métodos:
  - `obj["prop1"]` devolverá el valor de la propiedad _prop1_
  - `obj["prop1"]` devolverá el valor de la propiedad _prop1_
- Cuando asignamos un objeto a una variable, realmente no estamos guardando su valor en la caja de la variable, como sucede con los números o los strings. En este caso lo que sucede es que se crea un objeto y la variable sería como una dirección que apunta a ese objeto. Por lo tanto, si guardamos ese mismo objeto en otra variable lo que estaremos haciendo es crear una nueva dirección que apunte al mismo objeto.
- Por convención, los métodos suelen tener como nombre un verbo (`show`, `hide`, `reset`, etc.) y las características (propiedades) suelen tener un sustantivo (`color`, `size`, `type`, `content`, `text`, etc)
- Los strings y los números también tienen propiedades y métodos, como sucede con los objetos, pero tienen sus diferencias. Algunos de los métodos y propiedades son:
  - `string`
    - propiedades: `length` (longitud de la cadena)
    - métodos: `toLowerCase` (pasa la cadena a minúscula), `trim` (elimina espacios al principio y final de la cadena)
  - `number` (para poder usarlos tenemos que definir los número como `Number(4)`)
    - métodos: `toFixed` (devuelve el número como una cadena con un número fijo de decimales)
- Los métodos son funciones asociadas a la propiedad de un objeto. Estas funciones pueden ser anónimas, es decir, no es necesario que lleven un nombre. Ejemplo de función anónima:

```js
    var rabbit = {};
    rabbit.speak = function(line) {
        console.log("The rabbit says '" + line + "'");
    }

    rabbit.speak("I'm alive.");
    // → The rabbit says 'I'm alive'
```


## Recursos externos

### Ada Lovelace en Youtube

En este curso veremos tanto una introducción breve a los objetos como la sintaxis básica para trabajar con ellos. La idea es aprender métodos, propiedades y entender qué es un objeto en sí y por qué son tan útiles.

- [Introducción a los objetos en Javascript](https://www.youtube.com/watch?v=ycfoaxNhYbk&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=27)
- [Definición de objetos](https://www.youtube.com/watch?v=xDqTEsiNgBw&index=28&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)
- [Propiedades](https://www.youtube.com/watch?v=jj9em_PDBH8&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=30)
- [Métodos](https://www.youtube.com/watch?v=BZE85nUjLHA&index=31&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)


## Ejercicios

### Crear un contador

Vamos a crear un contador con los datos del contador que comentamos en la introducción de esta sesión. Este contador deberá tener como propiedades un valor máximo, un valor mínimo, un valor actual y un valor inicial y como métodos deberá tener un aumentar, disminuir y restablecer.

Con la ayuda de `alert` Probaremos a usar varios métodos distintos y comprobar el estado actual para ver si funciona correctamente.

### Crear un objeto para un usuario

### Estructura de datos para un usuario

Vamos a crear un objeto para almacenar la información de un usuario y una variable llamada `job` donde guardaremos el valor `developer`. A continuación seguiremos los siguiente pasos

  Usando la notación con punto o la notación con corchetes (`[]`) (ej: `obj.prop` o `obj["prop"]`):
    1. Añadiremos una propiedad llamada `firstname` y le asignaremos un valor.
    2. Añadiremos una propiedad llamada `lastname` y le asignaremos un valor.
    2. Añadiremos una propiedad llamada `age` y le asignaremos un valor numérico.
    3. Añadiremos una propiedad `job` a la que asignaremos el valor de la variable `job`
    4. Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
    5. Cambiaremos el nombre del usuario por otro distinto
    6. Aumentaremos en 1 la edad del usuario
    4. Comprobaremos de nuevo que todo sigue funcionando correctamente
