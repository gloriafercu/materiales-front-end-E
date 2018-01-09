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

Para tener más opciones a la hora de interactuar con nuestro código HTML ya que `classList` e `innerHTML` se nos van cortos.

### ¿En qué casos se utiliza?

Al final se trata de conocer las diferentes opciones que tenemos de acceso al DOM así que no es tanto cuándo los vamos a usar sino conocer las opciones cuando necesitemos acceder/modificar el DOM. Algunos ejemplos son:
- Necesito añadir un elemento a un bloque HTML sin reescribirlo completamente (como pasaba con `innerHTML`)
- Quiero crear un elemento HTML desde cero y añadirlo al DOM
- Quiero seleccionar el contenedor madre de elemento HTML, o la(s) hija(s)
- En algún punto necesito eliminar elementos HTML (o reemplazarlos)

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
* `remove()` para eliminar elementos del DOM

Por último, también sabemos trabajar con atributos
	- Consultando su valor con `getAttribute`
	- Modificando su valor con `setAttribute`

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
A veces nos interesará seleccionar un elemento e ir directamente a por su contenedor madre/padre:

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
Otra opción que tenemos es crear un elemento con `.createElement()` y añadirle contenido con `.createTextNode`, vamos a verlo:  
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
Sabemos cómo borrar un elemento, pero ¿y si queremos borrar una de las hijas/hijos de nuestro contenedor? Tenemos `.removeChild()` para ello:
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
