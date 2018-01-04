# Asincronía avanzada

## Contenidos

- [Introducción](#introducción)
- [¿En qué casos se utiliza?](#¿en-qué-casos-se-utiliza)
- [Repasando los callbacks](#repasando-los-callbacks)
- [Callbacks anidados](#callbacks-anidados)
- [Callbacks en paralelo](#callbacks-en-paralelo)
- [Promesas](#promesas)
- [Recursos externos](#recursos-externos)


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

En este ejemplo registramos un callback `showBreeds` que se ejecuta cuando la petición al servidor se ha completado con éxito. En el callback recogemos la respuesta del servidor del objeto `request` y pintamos el listado de razas de perros en pantalla.

## Callbacks anidados

Ahora vamos a partir del ejemplo anterior para pedir al servidor una foto de una raza concreta de perro. Para ello, por tanto, necesitamos conocer primero el listado de razas (como en el ejemplo anterior) y luego, con esta información, pedir al servidor una foto de una raza concreta. Por tanto son dos callbacks encadenados, es decir, que la segunda petición depende de los datos que llegan en la primera. Vamos a ver un [ejemplo de esta codepen](https://codepen.io/adalab/pen/BJZxNK#0):

```js
var request, request2;

request = new XMLHttpRequest();
request.open('GET', 'https://dog.ceo/api/breeds/list');
request.addEventListener('load', getBreedsAndRequest);

function getBreedsAndRequest() {
  var response = request.responseText;
  var breeds = JSON.parse(response).message;

  request2 = new XMLHttpRequest();
  request2.open('GET', 'https://dog.ceo/api/breed/' + breeds[0] + '/images/random');
  request2.addEventListener('load', showPicture);
  request2.send();
}

function showPicture() {
  var response = request2.responseText;
  var responseJSON = JSON.parse(response);

  var img = document.querySelector('img');
  img.src = responseJSON.message;
}

request.send();
```

En este caso trabajamos con 2 peticiones al servidor, y por tanto hemos declarado 2 variables donde creamos esas nuevas peticiones (`new XMLHttpRequest`). Vamos a ver la estructura de cada petición:
- la primera petición
  - se crea en la variable `request`
  - se prepara y envía (`open`, `addEventListener`, `send`) en el ámbito (scope) global
  - la URL es como en el ejemplo anterior `/api/breeds/list`
  - tiene una función de callback `getBreedsAndRequest` en la que recogemos el listado de razas del objeto `request` en una variable `breeds` que es de tipo array
- la segunda petición
  - se crea en la variable `request2`
  - se prepara y envía en el ámbito de la función `getBreedsAndRequest`
  - la URL es `/api/breed/{breed-name}/images/random` donde `breed-name` es el nombre de la raza de la que queremos la imagen, en este caso, hemos cogido la primera del array de razas que es 'affenpinscher'
  - la función de callback es `showPicture`, que recoge la URL de la imagen del objeto `request2` y la pinta en el DOM

Hemos declarado 2 variables con scope global para poder acceder a la petición desde ambas funciones de callback y recoger el resultado de la petición. También podríamos haber declarado el segundo callback `showPicture` dentro del primero (podemos declarar funciones dentro de funciones 😱) y declarar `request2` dentro del ámbito de `getBreedsAndRequest`. ¡Espero que esto no os líe!

***

EJERCICIO 1

Vamos a serguir explorando el API de GitHub que ya descubrimos en [la sesión anterior sobre AJAX](../sprint_2/2_10_ajax.md) explorando la parte del [API para acceder a la info sobre organizaciones](https://developer.github.com/v3/orgs/). La URL de este API es `https://api.github.com/orgs/orgname`, donde `orgname` es el nombre de la organización en GitHub. Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab `https://api.github.com/orgs/Adalab`. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.

En este ejercicio vamos a acceder a la información de la organización Adalab como primera petición al servidor. Recogeremos la información de la URL donde consultar la información de los repositorios de Adalab en la respuesta del servidor (en la propiedad `repos_url`) y haremos una nueva petición a esa URL. En el segundo callback pintaremos en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad `name` de cada objeto repositorio).

***

## Callbacks en paralelo

Ya hemos visto la utilidad de tener callbacks anidados, en los que una petición depende de las anteriores. Ahora vamos por qué usar callbacks en paralelo, es decir, que se ejecutan a la vez pero que queremos hacer alguan acción cuando todos se han completado.

Partimos de este [ejemplo en codepen](https://codepen.io/adalab/pen/ypodPN?editors=1010) con dos peticiones AJAX al API de fotos de perros que se hacen en paralelo:

```js
function requestAndShowDogPicture(imgSelector){
  var request = new XMLHttpRequest();
  request.open('GET', 'https://dog.ceo/api/breeds/image/random');

  request.addEventListener('load', showPicture);

  function showPicture() {
    var response = request.responseText;
    var responseJSON = JSON.parse(response);

    var img = document.querySelector(imgSelector);

    img.src = responseJSON.message;
  }

  request.send();
}

requestAndShowDogPicture('.dog1');
requestAndShowDogPicture('.dog2');
```
Hemos declarado una función `requestAndShowDogPicture` que realiza una petición de una imagen al API de Dog CEO y la pinta en el elemento del DOM que le indicamos como parámetro. Después llamamos a esta función 2 veces, lo que hace que se hagan dos peticiones al servidor en paralelo, una para cada foto que luego se muestra en los `img` de la página.

Ahora vamos a querer que las imágenes se pinten en el DOM sólo cuando ambas peticiones se han completado, es decir, sólo cuando haya llegado la respuesta del servidor de ambas peticiones. Para hacer esto necesitaremos
- un contador `requestsCompleted` (variable numérica) para saber si ya ha llegado de respuesta de todas las peticiones
- una estructura de datos `imageData` para almacenar las respuestas, en este caso nos basta con un array
- una nueva función `showPictures` que pinte las imágenes en el DOM cuando hayamos detectado que ha llegado la última petición

Vamos a ver el [código de este otro ejemplo](https://codepen.io/adalab/pen/JMygJa?editors=1010):

```js
var TOTAL_REQUESTS = 2;
var requestsCompleted = 0;
var imageData = [];

function requestAndShowDogPicture(imgSelector){
  var request = new XMLHttpRequest();
  request.open('GET', 'https://dog.ceo/api/breeds/image/random');

  request.addEventListener('load', saveData);

  function saveData() {
    var response = request.responseText;
    var responseJSON = JSON.parse(response);
    imageData.push({
      selector: imgSelector,
      src: responseJSON.message
    });
    requestsCompleted++;
    if(requestsCompleted === TOTAL_REQUESTS){
      showPictures();
    }
  }

  request.send();
}

function showPictures(){
  for (var i = 0; i < imageData.length; i++) {
    var img = document.querySelector(imageData[i].selector);
    img.src = imageData[i].src;
  }
}

requestAndShowDogPicture('.dog1');
requestAndShowDogPicture('.dog2');
```

Ahora en la función de callback que hemos llamado `saveData` lo que hacemos es
- almacenar en el selector de la imagen y su `src` en `imageData`
- incrementar el contador `requestsCompleted`
- comprobar si hemos llegado al número total de requests y si es así, invocar la función que pinta en el DOM todas las imágenes


***

EJERCICIO 2

Partiendo el ejemplo anterior en codepen, vamos a modificarlo para que en lugar de pedir 2 imágenes en parelelo pida 10, y el resultado sólo se pinte en la pantalla cuando las 10 imágenes hayan llegado del servidor. Ahora sí que se nota el efecto de que se pintan todas a la vez, ¿verdad? Vamos a probar también con 25 imágenes, para ver bien este efecto.

***

## Promesas

Las promesas al rescate

### ¿Qué son?

### Uso simple

### Uso encadenado

### Uso en paralelo

### Gestión de errores

## Recursos externos

- [{{resource.link_name}}]({{resource.url}})
