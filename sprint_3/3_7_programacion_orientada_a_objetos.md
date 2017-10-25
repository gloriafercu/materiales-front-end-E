# Programación orientada a objetos

## Contenidos

- Cadena de prototipos
- Instancias con new
- `this`, cómo llamarlo, bind / call?

## Introducción

{{intro_info}}


## ¿Para qué sirve lo que vamos a ver en esta sesión?

{{purpose_info}}


## ¿En qué casos se utiliza?

{{usecase_info}}


## Contenido

## Prototipos

- Al crear un objeto `var empty = {}` sin ningún método ni propiedad y ejecutar `console.log(empty.toString);` la consola devuelve una función. Esto se debe a que el objeto hereda las propiedades de su prototipo

- En javascript, los objetos además además de poseer propiedades, la mayoria tambien posee un prototipo.

- Un prototipo es un objeto que se usa como fallback source of properties.

- Cuando un objeto recibe una petición para una propiedad que no posee, se busca dicha propiedad entre las propiedades del prototipo al que pertenece el objeto, si este tampoco posee la propiedad buscada se buscara esta en el prototipo de este prototipo y asi sucesivamente.

- Un prototipo es otro objeto que se usa como fallback source of properties.

- La estructura de relación entre los diferentes prototipos tiene forma de árbol y al principio de esta estructura se encuentra el prototipo Objeto `Object.prototype`

- Muchos objetos no tienen como prototipo directo a `Object.prototype`, sino que en cambio tienen otro objeto como prototipo que provee al objeto sus propiedades por defecto. A menudo, estos prototipos a su vez poseen otro prototipo por lo que el objeto que creamos recibe indirectamente los metodos de su propio prototipo y de la cadena de prototipos que influya sobre este.

- Cuando se crea un objeto derivado de un prototipo este comparte las propiedades de dicho prototipo. En caso de que el objeto tenga una propiedad con el mismo nombre que el prototipo esta será sobreescrita con el valor que se la haya otorgado.

- Metodos importantes:

    - `Object.getPrototypeOf(<objeto>);` devuelve el prototipo de `<objeto>`
    - `Object.create(<prototype>)` permite crear un objeto con un prototipo `<prototype>` especifico


## Constructores

- Una forma mas conveniente de crear varios objetos que deriven de un prototipo común es usando un *constructor*. En JavaScript, cuando se llama a una función tras el comando `new` esta es considerada como un constructor. Este constructor tiene asociado su keyword `this` a un nuevo objeto y mientras no devuelva explicitamente otro objeto como valor, dicho nuevo objeto sera devuelto por la función.

- Un objeto creado con `new` se suele decir que es la *instancia* de su constructor.

- Como norma general y por convención los nombres de los constructores deben empezar por mayúscula para asi poder distinguirlos facilmente de otras funciones

- Los constructores, asi como el resto de funciones, automáticamente obtienen una propiedad llamada `prototype`, que por defecto contiene como valor un objeto plano y vacio que deriva de `Object.prototype`. Toda instancia de un constructor se creará con este objeto como su propio prototipo.

- Es importante diferenciar la forma en que un prototipo es asociado a un constructor (mediante su propiedad `prototype`) de la forma en que los objetos tienen un prototipo (que puede obtenerse mediante `Object.getPrototypeOf`).

- El prototipo actual de un constructor es `Function.prototype` dado que los constructores son funciones. Su propiedad `prototype` será el prototipo de las instancias creadas a traves de ese constructor pero nunca sera su propio prototipo.

## Sobreescribir propiedades derivadas

- Cuando añades una propiedad a un objeto, este esta propiedad presente en el objeto o no, la propiedad se añade al objeto en si mismo, que de ahora en adelante pasará a ser suya propia. Si existe una propiedad con el mismo nombre en el prototipo, esta propiedad dejará de afectar al objeto. En este proceso la propiedad del prototipo en si no se verá afectada.

- Sobreescribir propiedades que existen en un prototipo es, normalmente, muy util. Por ejemplo, podemos modificar una propiedad de una instancia y que el resto de instancias del mismo tipo no se vean afectadas.

- Esta furmula se utiliza por ejemplo en el metodo `toString`. `Function.prototype` y `Array.prototype` obtienen el metodo `toString` de `Object.prototype`, pero lo sobreescriben con sus propios métodos para obtener el comportamiento deseado.

## Interferencia de prototipos

- Un prototipo se puede usar en cualquier momento para añadir propiedades y metodos a todos los objetos que se basen en el. Esto puede ser util, pero existen algunas situaciones en las que esto puede causar problemas. Por ejemplo si tenemos alguna propiedad en un prototipo y creamos varios objetos basados en él, dichas propiedades serán relacionadas con el objeto pudiendo crear comportamientos indeseados, como por ejemplo en un `for..in`.

- Cuando ejecutamos el bucle `for...in` podemos observar que ciertas propiedades y metodos (como `toString`) de objetos como `Object.prototype` no se utilizan pero si comprobamos si existen con el operador `in` nos dice que si. Esto se debe a que JavaScript distingue entre propiedades *numerables* y propiedades *no-numerables*.

- Todas las propiedades que creamos simplemente asignandolas un valor son numerables. Sin embargo las propiedades estandar de `Object.prototype` son todas no-numerables y por lo tanto esto es lo que hace que no aparezcan, por ejemplo, en los bucles `for...in`.

- Es posible definir nuestras propias propiedades no-numerables usando la funcion `Object.defineProperty`, que nos permite controlar el tipo de propiedad que estamos creando.

- Para crear una propiedad no numerable debemos hacer lo siguiente:

---
    Object.defineProperty(<Objeto>, <NombreProp>, { enumerable: true, value: "valor"} )
---

- Otro problema que tenemos es que las propiedades no-numerables siguen apareciendo si ejecutamos el siguiente código:`console.log("toString" in map)`. Este problema es facil de solucionar. En vez de usar `in`, se debe usar el método `hasOwnProperty`, este metodo nos dice si el objeto en si posee una propiedad, sin mirar sus prototipos:

---
    var obj = {};
    console.log(obj.hasOwnProperty('toString'));
    // → false
---

- Sabiendo esto y para evitar que las posibles modificaciones a alguno de los prototipos en los que esten basados nuestros objetos afecten al comportamiento de nuestro programa, es bueno escrir de esta forma nuestros `for...in` loops:

---
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            // ...this is a own property
        }
    }
---

## Objetos sin prototipo

- Podemos declarar objetos que no posean prototipo. Utilizando el método Object.create para crear objetos con un prototipo especifico podemos pasar como argumento para el prototipo el valor `null` y de esta forma crear un objeto nuevo sin prototipos.

- `var obj = Object.create(null)`

- Esto nos sirve, para estar seguro de que codigos externos no afectan al nuestro, y para ahorrarnos el usar `hasOwnProperty`, ya que podemos estar seguros de que todas las propiedades del objeto serán propias

## Polimorfismo

- El polimorfismo es una propiedad de la programación orientada a objetos que permite enviar mensajes sintácticamente iguales a objetos de tipos distintos.

- El unico requisito que deben cumplir los que se utilizan de manera polimórfica es saber responder al mensaje que se les envia.

- Un ejemplo en Javascript muy famoso es el metodo `toString`, varios de los prototipos estandar como `Array.prototype` definen su propia version del método `toString` para poder asi crear un string que contenga información más util que `[object Object]`.

- TODO: Once you are talking in terms of interfaces, who says that only one kind of object may implement this interface? Having different objects expose the same interface and then writing code that works on any object with the interface is called polymorphism.

## Getters y setters

- Existe un principio extendido entre bastantes programadores de nunca incluir propiedades que no sean metodos en las interfaces, es decir, que no se puedan acceder directamente a las propiedades (que no sean metodos) desde fuera de un objeto.

- Muchas veces para llevar a cabo esta acción se implementan metodos como setSomething o getSomething por los cuales mediante las funciones que asignemos nos permitiran acceder a un propiedad interna del objeto

- Javascript otorga una via para especificar propiedades que externas al objeto parecen propiedades normales pero nos permiten asignarles metodos internamente.

- Para asignar las funciones a ejecutar para una propiedad segun si esta es leida o escrita se utiliza la notación `get` o `set` en los objetos literales y la funcion `Object.defineProperty` en objetos previamente creados

---
    // Objeto literal
    var obj = {
        elements: [1,2,3],
        get total() {
            return this.elements.length;
        },
        set total(value) {
            return console.log('Error: By default this property can't be changed');
        }
    };

    console.log(obj.total);
    // → 3
    obj.total = 5;
    // → Error: By default this property can't be changed

    // Objeto previamente definido
    function Constructor(elems) {
        this.elements = elems;
    }

    Object.defineProperty(Constructor.prototype, "total", {
      get: function() { return this.elements.length; }
    });

    var obj = new Constructor([1,2,3]);
    console.log(obj.elements);
    // → 3
    obj.elements = 100; // Esto no ejecuta ninguna acción
    console.log(obj.elements);
    // → 3
---

- Tambien se puede definir una propiedad `set` en el objeto usado como argumento en `defineProperty`, para especificar un metodo que ejecutar cuando se intente modificar el valor de la propiedad. Cuando `get` esta definido pero `set` no, escribir sobre el valor de la propiedad es ignorado.

## Herencia

- En JavaScript existe un patrón denominado *herencia* que nos permite crear tipos de datos ligeramente diferentes de datos preexistentes con relativamente poco esfuerzo

- Normalmente, un nuevo constructor llama a otro constructor anterior usando el metodo `call` de manera que le transmite el nuevo objeto como valor de `this`. Una vez que se ha hecho la llamada al constructor podemos asumir que todos los campos que el viejo tipo de objeto se supone que contienen han sido añadidos.  

    function RTextCell(text) {
      TextCell.call(this, text);
    }

- Despues de eso declaramos el prototipo del nuevo constructor como objeto del prototipo del anterior para que de esta manera las instancias del tipo nuevo de constructor puedan acceder a las propiedades del prototipo anterior.

- Finalmente añadimos o sobreescribimos las propiedades que deseemos modificar añadiendolas a nuestro nuevo prototipo

- La herencia en programación suele tener bastante controversia ya que a menudo es confundida con el polimorfismo y vendida como algo más potente de lo que realmente es. Mientras que la encapsulación y el polimorfismo tienden a separar el código en partes simples y poco enrevesadas, la herencia, por otro lado entrelaza tipos de datos creando mayor interdependencia y enredos dentro del código.

- La herencia por lo tanto ha de ser utilizada con precaución y en partes pequeñas del código y no como un principio de ordenación de nuesto código

- Es preferible extender los tipos mediante composición, almacenando objetos como propiedades de otros objetos envolviendolos dentro de si mismos y accediendo a sus metodos mediante los metodos propios del objeto.

## El operador `instanceof`

- A veces es util saber el constructor del que deriva un objeto. Para ello javascript ofrece el operador binario `instanceof`:

    function Constructor(foo) {
        this.foo = foo;
    }

    function ChildConstructor(foo) {
        Constructor.call(this, foo);
    }

    console.log(new Constructor(foo) instanceof Constructor);
    // → true
    console.log(new ChildConstructor(foo) instanceof Constructor);
    // → true
    console.log(new Constructor(foo) instanceof Object);
    // → false

- El operador `instanceof` puede ver a traves de los tipos heredados. `ChildConstructor` es una instancia de `Constructor` porque `ChildConstructor.prototype` deriva de `Constructor.prototype`.

- El operador puede aplicarse a constructores estandar como `Array`

- Casi todos los objetos son instancias de `Object`

## `This` y su alcance

- Cada llamada a una función tiene su propio valor de `this`, por lo tanto en una función anidada dentro de otra, el valor de `this` no es el mismo que el valor this de la función que contiene a esta. En las funciones que no son definidas como métodos dentro de un objeto, la palabra clave `this` hace referencia al objeto global. Esto significa que no podemos utilizar `this` en una función dentro de un objeto para referirnos al this del objeto en si ya que ambas hacen referencia a distintos objetos.

- Afortunadamente EcmaScript 6 añade una solución para este problema. Pero mientras llega lo normal es crear una variable que haga referencia a `this` de esta forma: `var self = this` y a partir de ahi referirse a self, que es una variable normal y por tanto visible para las funciones internas.

- Otra solución es usar el método `bind`:

    var test = {
        prop: 10,
        addPropTo: function(array) {
            return array.map(function(elt) {
                return this.prop + elt;
            }.bind(this));
        }
    };

    console.log(test.addPropTo([5]));
    // → [15]

- Por último, algunos métodos de las funciones de orden superior permiten recibir un argumento opcional secundario que puede ser usado para proveer un
`this` para las llamadas de la función de iteración. Por lo que podemos obtener el mismo resultado que en el código anterior de una manera más simple:

    var test = {
        prop: 10,
        addPropTo: function(array) {
        return array.map(function(elt) {
          return this.prop + elt;
          }, this); // ← no bind
        }
    };
    console.log(test.addPropTo([5]));
    // → [15]

Este código solo funciona en métodos de funciones de orden mayor que soportan tal parametro *context*. Cuando no se da esta regla, se debe utilizar una de las anteriores soluciones.

Otra solución es usar el método `call` para llamar a la función dada como argumento dentro de otra de esta manera:

    Grid.prototype.forEach = function(f, context) {
      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          var value = this.space[x + y * this.width];
          if (value != null)
            f.call(context, value, new Vector(x, y));
        }
      }
    };


    ## Recursos externos

    ### {{resource.name}}

    {{resource.description}}

    - [{{resource.link_name}}]({{resource.url}})


    ## Resumen de la sesión

    {{summary_info}}


    ## Ejercicios

    ### {{exercise.name}}

    {{exercise.info}}

    - [{{exercise.link_name}}]({{exercise.url}})
