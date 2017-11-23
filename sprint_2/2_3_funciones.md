# Funciones

## Contenidos

- Funciones
- Declaración y uso de funciones
- Parámetros y valores de retorno
- En valor `undefined`
- Ámbito de las variables


## Introducción

Una función es un bloque de código que definimos una vez y lo reutilizamos las veces que queramos, un conjunto de instrucciones a la que podemos pasarle diferentes datos para que actúe de forma distinta.

Durante esta sesión veremos cuáles son las principales características de este recurso de programación y cómo utilizarlo en nuestro código para sacarle el máximo partido.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Las funciones son muy útiles a la hora de crear un código único para usarlo en distintas partes de nuestro código. El beneficio de esto es que si en el futuro queremos modificar algo de ese código lo haremos en un único sitio aunque se utilice en decenas de sitios diferentes. A diferencia de los bucles, estas no se ejecutan varias veces en el mismo momento sino que se ejecutan en distintos momentos y con distintas características gracias a los parámetros.

Otra de las ventajas de las funciones es que devuelven un valor, es decir realizan una operación y pueden devolver un dato. Ese dato podemos asignárselo a una variable o usarlo dentro de otra operación. O incluso podemos prescindir de él si no nos interesa para nada.

Por último las funciones son una forma de abstraer la complejidad de un código y simplificarlo en una línea. Por ejemplo, si tenemos un código que muestra una ventana en nuestra web, desactiva el scroll, muestra un fondo oscuro y cambia el texto de un título por otro tendremos como 6 ó 7 líneas de código que lo que están haciendo realmente es mostrar un mensaje en una ventana (llamado normalmente _modal_). En este caso las funciones son útiles para sustituir esas 6 ó 7 líneas por una que ponga `showModal` dejando claro qué hace el código de esa línea. Además, usar funciones simplifica el código para que cuando alguien lo lea no necesite leerlo entero para entender qué hace, y si quiere comprobar a bajo nivel cómo funciona pueda navegar hasta el código donde se define de la función para explorarlo.


## ¿En qué casos se utiliza?

- Para abstraer la lógica de nuestro código, dejando algo más sencillo de leer:
	- Si tenemos un código que obtiene unos datos de un servidor, los ordena alfabeticamente, les da una estructura y los muestra, podemos crear todo el código en una función. Crearíamos el código dentro de una función y la ejecutaríaamos en la parte del código necesaria. Si utilizamos un nombre como `showDataAlphabetically` quedaría bastante claro y permitiría entenderlo sin necesidad de consultar el código interno de la función.

- Para reutilizar código:
	- Si tenemos un código que convierte la primera letra de un texto a mayúsculas y vamos a usar ese código en varias partes de nuestro programa, creamos una función y ejecutamos la función en cada uno de los sitios necesarios
	- Si queremos añadir varias clases a diferentes elementos HTML en función de la medida de la página web podemos crear una función y utilizarla en cada uno de ellos
	- Si queremos enviar datos a un servidor, la mayoría de las veces es muy parecido y sólo cambian unos datos. Podríamos hacer una función y reutilizarla y usar distintos datos en cada una mediante los parámetros de la función (que veremos durante esta sesión)


## Funciones
Se utilizan para abstraer la lógica, dejando un código más fácil de entender, y para reutilizar el código en distintas partes de nuestro programa.

### Declaración y uso de funciones
Para utilizar una función debemos declararla en algún sitio de nuestro código

La estructura para declarar una función es

```javascript
function nombre(parámetros) {
	/* código */
}
```

Para utilizar una función simplemente usamos el nombre de la función seguida de paréntesis donde pasaremos los parámetros o argumentos `nombreFuncion(argumentos)`.

Se pueden crear funciones sin nombre, estas funciones se llaman _funciones anónimas_ y su estructura es

```javascript
function (parámetros) {
	/* código */
}
```

Estas funciones se suelen emplear cuando las pasamos como argumento o cuando se las asignamos a una variable:

```javascript
var miFuncion = function (parámetros) {
	/* código */
}
```

### Parámetros y valores de retorno

Los parámetros son datos que definimos en una función y que, a la hora de ejecutarla, serán sustituidas por los argumentos que le pasemos.

Las funciones pueden tener 0, 1 o más parámetros separados por comas.

Una función puede devolver un valor utilizando la palabra clave `return` seguida del valor que queremos devolver. Si queremos devolver una variable `result`, utilizaremos `return result;` en el código.

```javascript
function nombre(parámetros) {
	var variable = '0';

	return variable;
}

var operacion = nombre();
```

Por defecto, si en una función no asignamos un valor de retorno usando `return`, la función devolverá el valor `undefined`

### En valor `undefined`
El valor _undefined_ en JavaScript indica que una variable ha sido declarada pero no posee ningún valor, en este caso determina que la función no tiene asignado ningún valor de retorno y por eso devuelve `undefined`.

Cuando ejecutamos un `return` dentro de una función, termina la ejecución de la función. Todo el código que se fuese a ejecutar después de ese return será ignorado, será como si no existiese. Por tanto, debemos evitar escribir líneas de código después de un `return`.

### Ámbito de las variables
Se pueden ejecutar funciones dentro de otras funciones.

Se pueden pasar funciones como argumentos para otras funciones, devolver funciones como valores de otras funciones y guardar funciones en variables.

Una variable creada dentro del cuerpo de una función sólo será accesible desde dentro de esa función.

A esto se le llama ámbito (en inglés, _scope_) y permite que no se generen conflictos entre funciones con variables que tienen un nombre idéntico.

Desde dentro de una función podemos utilizar las variables que se hayan definido fuera de cualquier función.

## Recursos externos

### Curso de Ada Lovelace en Youtube

Este curso explica bastante bien y de forma breve qué son las funciones y como trabajar con ellas.

- [Funciones. Introducción](https://www.youtube.com/watch?v=PEfw6xuj8Y0&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=16)
- [Funciones anónimas](https://www.youtube.com/watch?v=GstPXAffmmI&index=17&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)
- [Funciones. Parámetros y argumentos](https://www.youtube.com/watch?v=5VVBrfWQ2Wk&index=18&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o)
- [Ámbito de variables](https://www.youtube.com/watch?v=HlY2jF74s_c&list=PLI7nHlOIIPOJtTDs1HVJABswW-xJcA7_o&index=19)

### Libros Web

Si prefieres un recurso escrito para aprender, aquí tienes la explicación de las funciones y el ámbito de las variables en JavaScript de la mano del libro de Introducción a JavaScript por Libros Web.

- [Funciones](http://librosweb.es/libro/javascript/capitulo_4/funciones.html)
- [Ámbito de las variables](http://librosweb.es/libro/javascript/capitulo_4/ambito_de_las_variables.html)


## Ejercicios

### Función suma

Crea una función que reciba como argumento dos valores y devuelva como valor de retorno la suma de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado usando `alert`.

### Función media

Crea una función que reciba 4 parámetros, cada uno con un número, y devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado usando `alert`.

### Ticket con IVA

Crea una función que reciba como parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si introducimos un 10, la función devolverá `"Precio sin IVA: 10, IVA: 2,1 y Total: 12,1"`

### Calculador de modelo de caja

Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: `border-box` y `content-box`. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, en caso de ser _border-box_ o el ancho total de la caja, en caso de ser _content-box_.

La función tendrá 4 parametros: el primero será un booleano para especificar si es border-box o no, el segundo será el ancho del contenido o de la caja entera, el tercero el padding y el cuarto el borde.

### Convertir el código del árbol de navidad en un función

Vamos a convertir el código del ejercicio del árbol de navidad de la sesión 2.2 en una función. Esta función tendrá tres parametros: número de líneas, si lleva estrella y si lleva tronco. La función debe devolver un string que represente el árbol de navidad.

Si vemos que alguna de las partes del código se puede sacar a otra función, podemos hacerlo. La idea es que el código quede lo más sencillo posible para que otra persona que no haya visto el enunciado ni el código pueda entenderlo sin problemas.

Probaremos a realizar tres árboles distintos para que veamos si funciona correctamente.
