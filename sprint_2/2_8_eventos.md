# Eventos

## Contenidos

- [Introducción](#introducción)
- [Escuchando eventos desde JavaScript](#escuchando-eventos-desde-javascript)
- [El parámetro event](#el-parámetro- event)

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
    <button type="button" name="button" class=".alert">Alerta</button>
    <script type="text/javascript" src="js/index.js">
    </script>
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
> Es muy importante entender que la función (anónima o no) sólo se ejecutará cuando suceda el evento. Si el evento nunca sucede, la función nunca se ejecutará.

* * *

EJERCICIO:

Crear una página HTML con un párrafo en el que ponga Hola y un botón. Usando JavaScript, cambiar ese texto por "Hello" cuando se pulse el botón.

* * *

EJERCICIO:

Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al clickar el botón, que aparezca una ventana de alerta que diga 'Hola <nombre>', con el nombre que aparece en el input de texto.

* * *

## El parámetro event



- Hablar del parámetro event, event.target

- De-registrar un escuchador

- Cómo se hacía antes y está deprecado

- Algunos eventos más y referencia a MDN


## Como eliminar una escucha a un evento

- removeEventListener

## Eventos que ver durante la sesión

## on click

- Por qué no usar onclick y on change, deprecado
- Como saber donde has pulsado ?

## on change

- Por qué no usar onclick y on change, deprecado


- on scroll
- on submit ?
- on resize ?
- on keypress ?
- on blur?
- on focus?

- En el futuro se utilizará pointerup y pointerdown



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


[What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
