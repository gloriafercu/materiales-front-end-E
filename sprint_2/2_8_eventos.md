# Eventos

## Contenidos

- [Introducción](#introducción)
- [Escuchando eventos desde JavaScript](#escuchando-eventos-desde-javascript)
- [El parámetro event](#el-parámetro- event)
- [Dejando de escuchar eventos](#dejando-de-escuchar-eventos)

## Introducción

Ya hemos apendido a modificar cosas en nuestra página web mediante JavaScript: cambiar contenidos, estilos, etc. Pero siempre nuestro script (código JavaScript) se ejecutaba al cargar la página. En esta sesión vamos a aprender a hacer nuestra web interactiva, es decir, que haya modificaciones también de contenidos o estilos pero en respuesta a la interacción del usuario. La forma de modelar esa interacción del usuario en la web es mediante *eventos*. Un evento representa una interacción, que normalmente es del usuario, tras la cual podemos realizar una acción. Vamos a ver algunos ejemplos de acciones que implican eventos:
- mostrar una alerta cuando el usuario clickea un botón
- cambiar el tamaño de una cabecera fija cuando el usuario llega a un punto de scroll
- abir una sección oculta de un formulario cuando hago click sobre un botón
- cerrar una ventana modal cuando termina un temporizador de 15 segundos (aquí no hay acción del usuario)
- cuando selecciono una opción de un select, se deshabilitan los campos de un formulario
- cuando doy al botón de buscar en Amazon, se envía una petición al servidor para pedir los datos de los artículos que coinciden con mi búsqueda; cuando los datos del servidor llegan al navegador, los pintamos en la página

Es importante entender que nosotros no creamos eventos desde JavaScript sino que un evento se genera pero desde JavaScript podemos saber que ha sucedido. Ejemplos de eventos:
- click en un botón
- scroll en la página
- cambio el contenido de un input o un select
- expira un temporizador
- llegan los datos del servidor

Lo que podemos hacer desde JavaScript es responder a estos eventos. ¿Cómo? Creando una función que se va a ejecutar cuando el evento sucede. Vamos a entender cómo actuamos en JavaScript con los ejemplos anteriores:
- cuando el usuario hacer click en el botón *Alerta*, ejecutamos una función que muestra un mensaje de alerta
- cuando el usuario hace scroll en la página, ejecutamos una función que comprueba si la posición de la pantalla es mayor que x píxeles y en caso afirmativo aplica una clase CSS a la cabecera

## Escuchando eventos desde JavaScript

Vamos a ver cómo traducimos lo anterior a JavaScript. En primer lugar, lo llamamos escuchar eventos porque en JavaScript decimos que "si sucede un evento sobre este elemento, ejecuta esta función". Técnicamente, registramos una función *escuchadora* que se ejecuta cuando sucede un evento. También se la suele llamar función de *callback* o sólo *callback*.

Vamos a ver el ejemplo de mostrar una alerta pulsando un botón.

Dado este HTML:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Ejemplo de alerta</title>
  </head>
  <body>
    <button type="button" name="button" class="alert">Alerta</button>
    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>
```
Para empezar, tendremos que localizar en el DOM el elemento sobre el que queremos escuchar eventos. Para ello, usaremos nuestro ya habitual `querySelector`.

```javascript
var button = document.querySelector('.alert');
```

A continuación, vamos a usar el método `addEventListener` de los elementos del DOM para escuchar eventos. Le pasaremos 2 parámetros: el tipo de evento a escuchar y la función que tiene que ejecutar cuando sucede el evento. Primero vamos a definir la función, y luego registramos la función escuchadora.

```javascript
function showAlert(){
  alert('Alerta');
}

var button = document.querySelector('.alert');
button.addEventListener('click', showAlert);
```

De esta forma, cuando hagamos click sobre el botón se ejecutará la función `showAlert`. Es importante que os fijéis es algunos detalles importantes:
- el método `addEventListener` lo invocamos sobre `button`que es un elemento del DOM (en este caso un botón); no lo ejecutéis sobre arrays, por ejemplo, en el caso de haber hecho un `querySelectorAll` porque no funcionará
- el primer parámetro del método es una cadena con el nombre del evento, en este caso 'click'
- el segundo parámetro es una función, es decir, ponemos el nombre de la función pero no la ejecutamos (no ponemos paréntesis al final)

Vamos a detenernos un momento aquí: **el parámetro es una función**. Y es que en JavaScript podemos pasar una función como parámetro de otra, asignar una función a una variables como si fuera un dato, incluso que una función devuelva (return) otra función. Esto os puede parecer un poco raro y complejo al principio, pero iremos descubriendo en el curso que es muy útil.

Debido a esto, también vamos a poder declarar la propia función cuando se la estemos pasando como parámetro al `addEventListener`, en forma de función anónima. Vamos a ver un ejemplo anterior pero usando una función anónima (sin nombre).

```javascript
var button = document.querySelector('.alert');
button.addEventListener('click', function(){
  alert('Alerta');
});
```
Esta versión tiene sólo 2 líneas y es un poco más enrevesada, pero funciona igual que la anterior. Simplemente hemos definido la función de *callback* como una función anónima.

> NOTA:
> Es muy importante entender que la función (anónima o no) sólo se ejecutará cuando suceda el evento. Si el evento nunca sucede, la función nunca se ejecutará. Nosotros nunca ejecutamos la función: es el navegador quien la ejecuta cuando sucede el evento.

Existen otras formas de escuchar eventos que veréis por Internet, y que aunque siguen funcionando **no es recomendable** usar. Se basan es el uso del atributo `onclick` (en realidad, on + evento), que pueden usarse desde el HTML:

```html
<button type="button" name="button" class="alert" onclick="showAlert()">Alerta</button>
```
O desde JavaScript:

```javascript
var button = document.querySelector('.alert');
button.onclick = function(){
  alert('Alerta');
}
```
A partir de ahora usad **siempre, siempre, siempre** la forma correcta, es decir, el `addEventListener`.

* * *

EJERCICIO:

Crear una página HTML con un párrafo en el que ponga Hola y un botón. Usando JavaScript, cambiar ese texto por "Hello" cuando se pulse el botón.

* * *

EJERCICIO:

Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al clickar el botón, que aparezca una ventana de alerta que diga 'Hola <nombre>', con el nombre que aparece en el input de texto.

* * *

A parte del evento click, podéis ver [el listado completo de eventos que podemos escuchar del DOM en MDN](https://mdn.mozilla.org/en-US/docs/Web/Events). Aquí vamos a listar los más usados:
- Eventos de ratón
  - `click`: botón izquierdo del ratón
  - `mouseover`: pasar el ratón sobre un elemento
  - `mouseout`: sacar el ratón de un elemento
- Eventos de teclado
  - `keypress`: pulsar una tecla
- Sobre elementos
  - `focus`: poner el foco (seleccionar) sobre un elemento, por ejemplo un input
  - `blur`: quitar el foco de un elemento
  - `change`: al cambiar el contenido de un input (hay que quitar el foco para que se considere un cambio) o de un select
- Formularios
  - `submit`: pulsar el botón submit del formulario
  - `reset`: pulsar el botón reset del formulario
- De la ventana
  - `resize`: se ha cambiado el tamaño de la ventana
  - `scroll`: se ha hecho scroll en la ventana o un elemento

  * * *

  EJERCICIO:

  Crear una página HTML con un párrafo con `lorem ipsum`. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con `lorem ipsum`.

  * * *

  EJERCICIO:

  Crear una página HTML con formulario con un select que tiens un listado de colores. Al cambiar el contenido del select, aparece una ventana de alerta donde aparece el texto 'Me gustan los colores'.

  * * *

## El parámetro event

Cuando registramos un callback para escuchar un evento, a nuestro callback (la función escuchadora) es el navegador quien la ejecuta, como hemos visto antes. Al ejecutarla, le pasa unos argumentos que podremos recoger si definimos parámetros en nuesta función de callback. El primero de ellos es un objeto que se suele denominar [`event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) y que contiene información acerca del evento. Ese objeto tendrá una propiedad `currentTarget` que nos permite acceder al elemento sobre el que ha sucedido el evento. Esto, a primera vista, puede parecer poco útil pero si registramos la misma función de callback para varios elementos nos puede ser muy útil.

Vamos a ver un ejemplo: tenemos un listado de elementos y queremos que al clickar en un elemento salga su información en un alert.

Partimos de este HTML:
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Click en varios elementos</title>
    <script type="text/javascript" src="js/index.js"></script>
  </head>
  <body>
    <ul class="fruits">
      <li>Fresa</li>
      <li>Plátano</li>
      <li>Kiwi</li>
    </ul>
  </body>
</html>
```
Vamos a por el JavaScript.

```javascript
var fruits = document.querySelectorAll('.fruits li');
for (var i = 0; i < fruits.length; i++) {
  fruits[i].addEventListener('click', showAlertWithFruit);
}

```

Empezamos accediendo a los elementos mediante `querySelectorAll` que los almacena en un array. Luego usamos un bucle para recorrer el array e ir aplicando a cada elemento el `addEventListener` para que al hacer click se ejecute la función `showAlertWithFruit`. Ahora vamos a ver la función.

```javascript
function showAlertWithFruit(event){
  alert(event.currentTarget.innerHTML);
}

```
En la función declaramos el parámetro `event` que sabemos que el navegador nos enviará cuando ejecute la función. Desde el evento accedemos al elemento sobre el que ha sucedido el evento mediante `event.currentTarget` y, en este caso, accedemos a contenido de ese elemento con `innerHTML` (recordad que esta propiedad nos servía para meter contenido en un elemento pero también para consultarlo).


* * *

EJERCICIO:

Crear una página HTML con formulario con un select que tiens un listado de colores. Al cambiar el contenido del select, aparece una ventana de alerta donde aparece el texto 'Me gusta el <color>' con el color seleccionado. Podemos acceder al índice de la opción seleccionada de un select mediante la propiedad `selectedIndex` y al listado de opciones (array) podemos acceder mediante la propiedad `options`.

* * *

EJERCICIO:

Crear una página vacía que al pulsar la tecla 'r' se ponga el fondo rojo y al pulsar la 'a' ponga el fondo de la web azul. Vamos a ecuchar evento de teclado (directamente sobre el elemento `document`). En el objeto evento podemos [consultar la propiedad `key`](https://mdn.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) para saber qué tecla se ha pulsado.

* * *

EJERCICIO:

Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:
```javascript
var movies = [
  'Inception',
  'The butterfly effect',
  'Eternal sunshine of the spotless mind',
  'Blue velvet',
  'Split'];
```
Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una peli aparezca una alerta con el nombre de esa película.

* * *

Cuando accedemos a un elemento mediante `currentTarget` muchas veces nos interesa que ese elemento tenga cierta información para realcionarlo con la estructura de datos de nuestra página. Esta información la podemos almacenar en un elemento mediante los atributos `data-`. Por ejemplo, podemos añadir a un elemento el atributo `data-id="0"` para relacionarlo con el elemento 0 de un array. Al elemento relacionado con el segundo elemento, le podemos poner un atributo `data-id="a"` y así sucesivamente.

Vamos a ver un ejemplo. Partimos del ejemplo anterior de la fruta usando atributos `data-`:
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Click en varios elementos</title>
    <script type="text/javascript" src="js/index.js"></script>
  </head>
  <body>
    <ul class="fruits">
      <li data-id="0">Fresa</li>
      <li data-id="1">Plátano</li>
      <li data-id="2">Kiwi</li>
    </ul>
  </body>
</html>
```
En nuestro JavaScript tenemos un array con el listado de precios de las frutas, de forma que el primero corresponde a la fresa, el segundo al plátano y el tercero al kiwi.
```javascript
var prices = [10, 2, 5];

function showAlertWithFruit(event){
  var id = event.currentTarget.getAttribute('data-id');
  alert(event.currentTarget.innerHTML + ' a ' + prices[id]);
}

```
Desde la función de callback accedemos al elemento mediante `currentTarget` y consultamos el valor de su atributo `data-id`. Luego usamos ese id para indexar el array de precios para mostrar en la alerta el precio de la fruta.

* * *

EJERCICIO:

Partimos del ejercicio anterior de las películas. Ahora tenemos un array de películas con más información de cada una en un objeto. Vamos a modificar el código para mostrar título, director y año de la película.
```javascript
var movies = [
  {title: 'Inception', director: 'Christopher Nolan', year: 2010},
  {title: 'The butterfly effect', director: 'Eric Bress, J. Mackye Gruber', year: 2004},
  {title: 'Eternal sunshine of the spotless mind', director: 'Michel Gondry', year: 2004},
  title:'Blue velvet', director: 'David Lynch', year: 1986,
  title:'Split', director: 'M. Night Shyamalan', year: 2016];
```

* * *

## Dejando de escuchar eventos

Puede llegar un punto en que queramos dejar de escuchar eventos sobre un elemento. Para eso usaremos la función `removeEventListener` pasándole los mismo parámetros que al registrarlo. Para poder hacer esto no podremos haber usado una función anónima porque será imposible de volver a referenciar.

```javascript
var button = document.querySelector('.alert');
button.removeEventListener('click', showAlert);
```

## Recursos externos

- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
