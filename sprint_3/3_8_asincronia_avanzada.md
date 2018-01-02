# Asincronía avanzada

## Contenidos

- callbacks
- callbacks anidados (que depende del anterior)
- intro a promesas
- `fetch` para llamadas a APIs


## Introducción

En esta sesión vamos a ahondar más en el concepto de asoncronía y los callbacks que vimos en el sprint anterior. Primero revisaremos algunos ejemplos con callbacks anidados (callbacks que dependen de otro callback anterior). Depués veremos una alternativa a los callbacks, las promesas y cómo podemos encadenar el resultado de varias peticiones realizadas con una nueva función `fetch`.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

La asincronía es algo inherente a las aplicaciones del navegador, porque siempre vamos a querer ejecutar acciones (código) cuando el usuario realice una acción o suceda un evento. En esta sesión aprenderemos trabajar en casos de asincronía compleja, como por ejemplo:
- quiero realizar una acción cuando se hayan completado varios procesos asíncronos que dependen uno del otro
- quiero realizar una acción cuando se hayan completado varios procesos asíncronos que se ejecutan en paralelo

Veamos algunos ejemplos en la web de procesos dependientes:
- cuando hago una petición a un servidor (AJAX) de la cual necesito algunos datos para realizar una segunda petición; por ejemplo, pido los datos de un pokemon al servidor y obtengo un identificador que necesito para pedir datos sobre sus evoluciones
- hago una petición al servidor y cuando llegan los datos, quiero almecenarlos en el navegador y cuando estén guardados, mostrar un mensaje; por ejemplo, pido los datos de un pokemon, los almaceno en `localStorage` y cuando estén guardados muestro un mensaje en la página de "Datos guardados correctamente"

Veamos algunos ejemplos en la web de procesos que se ejecutan en paralelo:
- cuando pido varios datos a un API en varias peticiones, pero los necesito todos para pintar la página; por ejemplo, hago 5 peticiones de datos de 5 pokemon y cuando tenga los datos de todas, los muestro en la página

Para realizar estos procesamientos complejos, vamos a ver 2 formas de afrontarlos: 1) mediante callbacks (como hemos hecho hasta ahora) y 2) mediante promesas, una característica de JavaScript que nos facilita la vida para hacer estas cosas.

## Repasando los callbacks

Pero, ¿qué eran los *callbacks*? Pues las funciones de callback eran esas que registrábamos con `addEventListener` para ser ejecutadas cuando sucede un evento. Es el navegador quien las ejecuta, no nosotros, y les pasa como argumento un objeto `event` con información sobre el evento que ha sucedido. Vamos a recordar cómo hacíamos una petición AJAX ([ejemplo en este codepen](https://codepen.io/adalab/pen/PEjeOG?editors=1010)):

```js
var request = new XMLHttpRequest();
request.open('GET', 'https://dog.ceo/api/breeds/list');

request.addEventListener('load', showBreeds);

function showBreeds() {
  var response = request.responseText;
  var breeds = JSON.parse(response).message;

  var listHTML = '';
  for (var i = 0; i < breeds.length; i++) {
    listHTML += '<li>' + breeds[i] + '</li>';
  }
  var ul = document.querySelector('ul');
  ul.innerHTML = listHTML;
}

request.send();
```

## Callbacks anidados



## Callbacks en paralelo



## Las promesas al rescate



## Recursos externos

- [{{resource.link_name}}]({{resource.url}})
