# DOM avanzado

## Contenidos

* [Introducción](#introducción)
	- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión?)
	- [¿En qué casos se utiliza?](#¿En-qué-casos-se-utiliza?)
* [Qué hemos visto hasta ahora](#qué-hemos-visto-hasta-ahora)
* [Nuevas formas de seleccionar, crear, añadir y borrar elementos](#nuevas-formas-de-seleccionar,-crear,-añadir-y-borrar-elementos)
	- [Seleccionar elementos](#seleccionar-elementos)
	- [Crear elementos](#crear-elementos)
	- [Añadir elementos al DOM](#añadir-elementos-al-dom)
	- [Borrar elementos del DOM](#borrar-elementos-del-dom)
	- [BONUS: Reemplazar](#bonus-reemplazar)



## Introducción

Siempre que queramos interactuar desde JavaScript con nuestras páginas vamos a necesitar saber cómo consultar/modificar los elementos que las componen. Hasta ahora hemos visto muy en la superficie cómo hacerlo pero ya vamos necesitando tener más opciones.

### ¿Para qué sirve lo que vamos a ver en esta sesión?

Lo que vamos a ver en esta sesión cobra especial importancia en tres campos: rendimiento de una página web, prevención de posibles errores y mantenimiento y simplicidad del código.

#### Mejorar el rendimiento

En cuanto a rendimiento, hasta ahora cuando utilizábamos `innerHTML` lo que hacía JavaScript, a grandes rasgos, era lo siguiente:

1. Leer el texto y parsearlo (convertirlo a html, como hacemos con JSON.parse)
2. Crear cada uno de los elementos HTML en el momento
3. Añadir esos elementos como contenido a un elemento del DOM (un `p`, un `div` lo que fuese)

Con lo que vamos a ver en esta sesión el primer paso de parsear el texto no será necesario porque no utilizaremos texto para crear componentes sino JavaScript, lo cual reducirá drásticamente el tiempo que tarda en ejecutarse el código y, por tanto, mejorará el rendimiento de nuestra aplicación. Esto en pequeñas apps no va a ser fundamental pero en aplicaciones más grandes y complejas que requieren de pintar muchos elementos es clave para que no se note un retardo a medida que utilizamos las web.

Además en esta sesión veremos cómo crear elementos por un lado y posteriormente añadirlos, es decir, con `innerHTML` se creaban en el momento (se convertía el texto en componentes HTML) y se añadían en el momento, por lo tanto se tenían que ejecutar esos dos pasos en el momento. Con lo que vamos a ver en esta sesión seremos capaces de crearlos antes y simplemente añadirlos, con lo cual en el momento de añadirlos solo se realizará un paso, porque tendremos creados previamente los componentes. Para ejemplificar esto, imaginemos que tenemos un código JavaScript que al pulsar en un botón añade tres párrafos a la página, si lo hago con `innerHTML`, en el momento que pulso el botón se convierte el texto de `innerHTML` en tres párrafos y se añaden. si por el contrario lo hacemos con la alternativa que planteamos en esta sesión podremos crear los párrafos en el elemento en el momento en el que se empieza a ejecutar JavaScript y cuando el usuario pulse el botón lo único que se hará será añadir esos elementos, pero estos ya estarán creados previamente.

#### Prevención de posibles errores

Cuando cambiamos el contenido de un elemento con `innerHTML`, ya sea añadiendo (`+=`) o reasignando (`=`) lo que estamos haciendo es obligar al navegador a crear de nuevo todos los items contenidos dentro del elemento modificado, es decir, el navegador creará todos los hijos de ese elemento de nuevo.

Esto puede derivar en un mal funcionamiento de nuestra página, porque sucederán cosas como las siguientes:

* Los eventos asignados a alguno de los elementos que había en el contenido se perderán y si, por ejemplo, tenemos un botón al que le hemos añadido un evento click, ese evento dejará de funcionar
* Si teníamos guardada en una variable de JavaScript la referencia a uno de los elementos (usando algo como `var btn = document.querySelector('.btn')`, por ejemplo) esa variable ya no será válida porque el elemento al que hace referencia ya no será el que se está mostrando en la pantalla.

Imagina la repercusión de este problema en aplicaciones complejas que tienen que estar repintando varias partes de su código varias veces, se puede montar un cristo bastante bueno e `innerHTML` nos puede perjudicar bastante en este caso frente a las alternativas que propondremos a continuación.

#### Mantenimiento y simplicidad del código

Utilizar HTML como strings en JavaScript puede ser bastante molesto, se nos puede olvidar un más en alguna concatenación, tenemos que poner todo en una línea o usar `+` o escapar saltos de línea (usando `\` antes del salto) para poder poner el código en varios renglones, no se puede indentar...

Todo esto dificulta hace que cuando empieza a crecer nuestros strings con código HTML sea bastante engorroso y además complica el beneficiarnos de funciones para crear elementos. Si por el contrario utilizamos JavaScript para realizar esa misma tarea podremos beneficiarnos de indentación y separación en líneas, simplicidad a la hora de crear un elemento y reutilización de código mediante funciones, lo cual hará que nuestro código sea más fácil de mantener y más sencillo de entender.

---

Aparte de esto existen otras mejoras en temas de seguridad y otros aspectos avanzados que hacen que `innerHTML` no sea el candidato indicado en proyectos de gran envergadura o mayor exigencia en cuanto a rendimiento y seguridad.

Y ahora estarás pensando «¿y por qué entonces he aprendido `innerHTML`?» Gracias a haber trabajado con `innerHTML` ahora estás preparada para seguir avanzando y profundizar un poquito más en formas avanzadas de trabajar con el DOM, que son las que veremos hoy.

### ¿En qué casos se utiliza?

Lo que vamos a ver hoy te servirá para generar un código más adecuado para proyectos más exigentes, como podría ser una librería de JavaScript, el código de una aplicación compleja o proyectos en los que necesites tener más posibilidades aparte de modificar el contenido de un elemento por completo (añadir algo antes o después, eliminarlo, seleccionar un elemento madre o hija, etc.)

Si que es verdad que parece que hemos pintado como algo malo `innerHTML`, pero no es así, `innerHTML` nos seguirá sirviendo en el futuro para hacer código sencillo que podamos desarrollar de forma rápida y hacer pequeñas pruebas y prototipos ya que facilita bastante la creación de código, además hasta ahora nos ha permitido poder trabajar con el DOM en JavaScript de forma sencilla y hacer menos dura la manipulación del contenido de nuestra página.


## Qué hemos visto hasta ahora

Hasta ahora hemos hecho una pequeña aproximación y sabemos trabajar con clases con la propiedad `classList` y sus métodos:  
* `.add()` para añadir clases a un elemento
* `.contains()` para comprobar si un elemento tiene cierta clase
* `.remove()` para eliminar clases de un elemento
* `.toggle()` para poner/quitar una clase en caso de que no la tenga (o sí)

Además sabemos cómo seleccionar elementos HTML:
* Por su `id`, con `document.getElementById()`
* Como un selector normal:
	- El primer elemento que cumple el selector con `document.querySelector()`
	- Todos los elementos que cumplan el selector `document.querySelectorAll()`

Y cómo modificar el DOM con:
* `innerHTML` para consultar/modificar el contenido HTML de un elemento
* `.remove()` para eliminar elementos del DOM

Por último, también sabemos trabajar con atributos:
* Consultando su valor con `.getAttribute()`
* Modificando su valor con `.setAttribute()`
* Modificando la propiedad del elemento que lleva el mismo nombre (`href`, `src`, `style`...)

## Nuevas formas de seleccionar, crear, añadir y borrar elementos

Partimos de este punto y vamos a ver qué más opciones tenemos para ampliar nuestro repertorio de herramientas.

Vamos a partir de un pequeño HTML para los siguientes ejemplos:

```html
<div id="container" class="container">
  <ul class="items">
    <li class="item item--1">Item 1</li>
    <li class="item item--2">Item 2</li>
    <li class="item item--3">Item 3</li>
  </ul>
</div>
```

### Seleccionar elementos

#### `.getElementsByClassName`

Selecciona elementos con una cierta clase y siempre devuelve un array, aunque solo haya uno:

```js
var classItems = document.getElementsByClassName('item');
console.log('Hay ' + classItems.length + ' items con clase .item');
// Devuelve "Hay 3 items con clase .item"
```
[Ejemplo en Codepen](https://codepen.io/adalab/pen/xpYXmQ)

#### `.getElementsByTagName`

También podemos seleccionarlos por etiquetas, en el mismo ejemplo:

```js
var tagItems = document.getElementsByTagName('li');
console.log('Hay ' + tagItems.length + ' <li>');
// Devuelve "Hay 3 <li>"
```
[Ejemplo en Codepen](https://codepen.io/adalab/pen/opEGVR)

---

Tanto `getElementsByClassName` como `getElementsByTagName` se pueden sustituir por `querySelectorAll`, la ventaja que tienen los dos primeros es que aumentan el rendimiento en más de un 100% frente al tercero, por lo tanto solo será necesario que usemos estos en contextos en los que el rendimiento es fundamental. Dicho esto siempre será más descriptivo usarlos si lo que queremos es obtener un array con todos los elementos con una etiqueta o clase determinada

#### `.children`

Podemos seleccionar todas las hijas que tenga cierto elemento:

```js
var items = document.querySelector('.items');
var childrenItems = items.children;

console.log('.items tiene ' + childrenItems.length + ' hijas: ');
for (var i = 0; i < childrenItems.length; i++) {
  console.log(i + ') ' + childrenItems[i].outerHTML);
}
/* Devuelve:
".items tiene 3 hijas: "
"0) <li class='item item--1'>Item 1</li>"
"1) <li class='item item--2'>Item 2</li>"
"2) <li class='item item--3'>Item 3</li>"
*/
```
[Ejemplo en Codepen](https://codepen.io/adalab/pen/JMMPxg)

### `.parentElement`
A veces nos interesará seleccionar un elemento e ir directamente a por su contenedor madre:

```js
var item1 = document.querySelector('.item--1');
var mother = item1.parentElement;

console.log('La madre de nuestro elemento es un <' + mother.nodeName.toLowerCase() + '> y tiene la clase .' + mother.className);
// Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"
```

[Ejemplo en Codepen](https://codepen.io/adalab/pen/QaQObq)

> Esto no lo hemos visto directamente pero sí en algún ejercicio en el que al cambiar el valor de un select teníamos que localizar el contenedor inmediato para cambiar su color: [ejercicio 3 de la segunda sesión de repaso del bloque 2](https://adalab.gitbooks.io/curso-programacion-front-end-2018/content/sprint_2/2_repaso_2.html#3-vamos-a-darle-color)

### Crear elementos

Hasta ahora insertábamos HTML creando una cadena de texto (a las bravas o a las bravas usando un `for`) e inyectándolo con innerHTML.
Otra opción que tenemos es crear un elemento con `.createElement()` y añadirle contenido con `.createTextNode()`, vamos a verlo:

> Usaremos `.appendChild()` para añadir el contenido al elemento  

```js
// Creamos un elemento nuevo, un <li>
var newItem = document.createElement('li');
console.log(newItem); // Devuelve "<li></li>"
// Ahora creamos algo de contenido
var newContent = document.createTextNode('Item nuevo');
// Y se lo añadimos a nuestro <li>
newItem.appendChild(newContent);
console.log(newItem); // Devuelve "<li>Item nuevo</li>"
```
[Ejemplo en Codepen](https://codepen.io/adalab/pen/MrQOrz)

Con estos métodos conseguimos un elemento HTML pero todavía tenemos que añadirlo a nuestro DOM para poder verlo. En la siguiente sección veremos 3 formas de añadirlos.

### Añadir elementos al DOM
Mientras que con `.innerHTML` podríamos inyectar una cadena de texto como HTML a nuestro DOM ahora veremos como añadir elementos como el que hemos creado hace un momento.
#### `.appendChild()` y `.append()`
Son parecidos y nos permiten añadir elementos a nuestra web, siguiendo el ejemplo de esta sesión vamos a añadir el `<li>` que acabamos de crear:
```js
var newItem = document.createElement('li');
var newContent = document.createTextNode('Item nuevo');
newItem.appendChild(newContent);

var items = document.querySelector('.items');
items.appendChild(newItem);
```
Podríamos también usar `.append()` que es casi igual pero que nos permite añadir más de un elemento:
```js
items.append(newItem1, newItem2,...);
```
[Ejemplo en Codepen](https://codepen.io/adalab/pen/mpXqow)

#### `.insertBefore()`
Con `.insertBefore()` podemos tener un poco más de control ya que admite dos parámetros y nos permite insertar un elemento antes de otro que le especifiquemos.
Siguiendo el ejemplo vamos a añadir un `<li></li>` antes del segundo item de nuestra lista:
```js
var itemList = document.querySelector('.items');
var extraItem = document.createElement('li');
var extraContent = document.createTextNode('Item entre 1 y 2');
extraItem.append(extraContent);

var item2 = document.querySelector('.item--2');

itemList.insertBefore(extraItem, item2);
```

[Ejemplo en Codepen](https://codepen.io/adalab/pen/XVZzvW)

#### `.insertAdjacentHTML()`
Todo esto está muy bien, lo de crear elementos y tal, pero yo quiero algo como el `.innerHTML`, que me deje meter cadenas como HTML, pero bien. Pues `.insertAdjacentHTML()` viene para salvar el día.
`.insertAdjacentHTML` acepta dos parámetros: `position` y `text`.
*Position* dice dónde se va a insertar el elemento:
* 'beforebegin': Antes del elemento
* 'afterbegin': Justo detrás de la etiqueta de apertura
* 'beforeend': Justo antes de la etiqueta de cierre
* 'afterend': Después del elemento

Y *text* es la cadena que queremos inyectar como HTML.

Por ejemplo, en nuestro código HTML de la sesión vamos a incluir un `<li class="item item--1-5">Item 1.5</li>` entre el `.item--1` y el `.item--2`:
```js
var item15 = '<li class="item item--1-5">Item 1.5</li>';
var item1 = document.querySelector('.item--1');

item1.insertAdjacentHTML('afterend', item15);
```
Esto lo colocaría en el sitio que queremos según este esquema ya que lo aplicamos sobre `.item--1`:
```html
<ul class="items">
	<!-- beforebegin -->
	<li class="item item--1">
		<!-- afterbegin -->
		Item 1
		<!-- beforeend -->
	</li>
	<!-- afterend (este es el que queremos) -->
	<li class="item item--2">Item 2</li>
	<li class="item item--3">Item 3</li>
</ul>
```
[Ejemplo en Codepen](https://codepen.io/adalab/pen/BJYJyV)

### Borrar elementos del DOM
Sabemos cómo borrar un elemento, pero ¿y si queremos borrar una de las hijas de nuestro contenedor? Tenemos `.removeChild()` para ello:
```js
var itemList = document.querySelector('.items');
var item2 = itemList.querySelector('.item--2');
itemList.removeChild(item2);
// Elimina el elemento con clase .item--2 que es descendiente de .items
```
[Ejemplo en Codepen](https://codepen.io/adalab/pen/MrQrwM)

### BONUS: Reemplazar
Vale, ¿y si quiero reemplazar un elemento por otro? Podemos borrarlo e insertar otro elemento en su lugar o usar el atajo `.replaceChild()`.
```js
var newItem = document.createElement('li');
newItem.className = 'item item--1bis';
var newItemContent = document.createTextNode('Item 1 bis');
newItem.appendChild(newItemContent);

var oldItem = document.querySelector('.item--1');
var items = oldItem.parentElement;

items.replaceChild(newItem, oldItem);
```
[Ejemplo en Codepen](https://codepen.io/adalab/pen/LeQzLg)


## Recursos externos

### Propiedades de la sesión en la MDN

- [`.getElementsByClassName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- [`.getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)
- [`.children`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)
- [`.parentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)
- [`.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [`.createTextNode()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
- [`.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [`.append()`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)
- [`.insertBefore()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
- [`.insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
- [`.removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [`.replaceChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)



## Resumen de la sesión

El objetivo de la sesión es tener un abanico más amplio de opciones a la hora de manipular el DOM y potenciar la consulta de recursos como la MDN.


## Ejercicios

Como ejercicio, si veis que alguna de estas nuevas opciones mejora algún ejercicio anterior o el ejercicio de evaluación ;) seguro que alguno de ellos os sirve con esas *Razones para comprar* ;)
