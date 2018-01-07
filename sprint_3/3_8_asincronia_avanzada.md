# Asincronía avanzada

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [¿En qué casos se utiliza?](#¿en-qué-casos-se-utiliza)
- [Repasando los callbacks](#repasando-los-callbacks)
- [Callbacks anidados](#callbacks-anidados)
- [Callbacks en paralelo](#callbacks-en-paralelo)
- [Promesas](#promesas)
- [Recursos externos](#recursos-externos)


## Introducción

En esta sesión vamos a ahondar más en el concepto de asincronía y los callbacks que vimos en el sprint anterior. Primero revisaremos algunos ejemplos con callbacks anidados (callbacks que dependen del resultado de otro callback anterior). Después veremos una alternativa a los callbacks, las promesas y cómo podemos encadenar el resultado de varias peticiones realizadas con una nueva función `fetch`.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

La asincronía es algo inherente a las aplicaciones del navegador, porque siempre vamos a querer ejecutar acciones (código) cuando el usuario realice una acción o suceda un evento. En esta sesión aprenderemos cómo trabajar en casos de asincronía compleja, como por ejemplo:
- realizar una acción cuando se hayan completado varios procesos asíncronos que dependen uno del otro
- realizar una acción cuando se hayan completado varios procesos asíncronos que se ejecutan en paralelo

Veamos algunos casos de ejemplo donde es necesario ejecutar procesos en paralelo en una web:
- cuando hago una petición a un servidor (AJAX) de la cual necesito algunos datos para realizar una segunda petición; por ejemplo, pido los datos de un pokemon al servidor y obtengo un identificador que necesito para pedir datos sobre sus evoluciones
- hago una petición al servidor y cuando llegan los datos, quiero almacenarlos en el navegador y cuando estén guardados, mostrar un mensaje; por ejemplo, pido los datos de un pokemon, los almaceno en `localStorage` y cuando estén guardados muestro un mensaje en la página de "Datos guardados correctamente"

Veamos algunos ejemplos en la web de procesos que se ejecutan en paralelo:
- cuando buscamos en una app de transporte cuál es la ruta más rápida entre dos puntos y necesitamos obtener información de distintas APIs web (taxis, EMT, Uber, Cabify...) y esperar a recibir la respuesta de todas para reflejar cual será la opción más rápida entre ellas.

Para realizar estos procesamientos complejos, vamos a ver 2 formas de afrontarlos: 1) mediante callbacks (como hemos hecho hasta ahora) y 2) mediante promesas, una característica de JavaScript que nos facilita la vida para hacer estas cosas.

## Repasando los callbacks

Pero, ¿qué eran los *callbacks*? Pues las funciones de callback eran esas que registrábamos con `addEventListener` para ser ejecutadas cuando sucede un evento, por ejemplo al pulsar un botón (`'click'`). Es el navegador quien las ejecuta, no nosotros, y les pasa como argumento un objeto `event` con información sobre el evento que ha sucedido. Vamos a recordar cómo hacíamos una petición AJAX ([ejemplo en este codepen](https://codepen.io/adalab/pen/PEjeOG?editors=1010)):

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

Ahora vamos a partir del ejemplo anterior para pedir al servidor una foto de una raza concreta de perro. Para ello, por tanto, necesitamos conocer primero el listado de razas (como en el ejemplo anterior) y luego, con esta información, pedir al servidor una foto de una raza concreta. Por tanto son dos callbacks encadenados, es decir, que la segunda petición depende de los datos que llegan en la primera. Vamos a ver un [ejemplo de este codepen](https://codepen.io/adalab/pen/BJZxNK#0):

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
- la primera petición (`getBreedsAndRequest`)
  - se crea en la variable `request`
  - se prepara (`open`, `addEventListener`) y envía (`send`) en el ámbito (scope) global
  - la URL es como en el ejemplo anterior `/api/breeds/list`
  - tiene una función de callback `getBreedsAndRequest` en la que recogemos el listado de razas del objeto `request` en una variable `breeds` que es de tipo array
- la segunda petición
  - se crea en la variable `request2`
  - se prepara y envía en el ámbito de la función `getBreedsAndRequest`
  - la URL es `/api/breed/{breed-name}/images/random` donde `breed-name` es el nombre de la raza de la que queremos la imagen, en este caso, hemos cogido la primera del array de razas que es 'affenpinscher'
  - la función de callback es `showPicture`, que recoge la URL de la imagen del objeto `request2` y la pinta en el DOM

Hemos declarado 2 variables con scope global para poder acceder a la petición desde ambas funciones de callback y recoger el resultado de la petición. También podríamos haber declarado el segundo callback `showPicture` dentro del primero (podemos declarar funciones dentro de funciones 😱) y declarar `request2` dentro del ámbito de `getBreedsAndRequest`. ¡Espero que esto no os lie!

***

EJERCICIO 1: LISTADO DE REPOS DE ADALAB

Vamos a seguir explorando el API de GitHub que ya descubrimos en [la sesión anterior sobre AJAX](../sprint_2/2_10_ajax.md) explorando la parte del [API para acceder a la info sobre organizaciones](https://developer.github.com/v3/orgs/). La URL de este API es `https://api.github.com/orgs/orgname`, donde `orgname` es el nombre de la organización en GitHub. Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab `https://api.github.com/orgs/Adalab`. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.

El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de Adalab que hay creados en GitHub. El resultado final debería ser similar a este:

![Resultado del ejercicio](assets/images/3-8/resultado-ejercicio-1-listado-de-repos.png)

Para ello vamos a hacer lo siguiente:

1. acceder a la información de la organización Adalab como primera petición al servidor.
1. recogeremos la información de la URL donde consultar la información de los repositorios de Adalab en la respuesta del servidor (en la propiedad `repos_url`) y haremos una nueva petición a esa URL.
1. en el segundo callback pintaremos en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad `name` de cada objeto repositorio).

***


## Callbacks en paralelo

Ya hemos visto la utilidad de tener callbacks anidados, en los que una petición depende de las anteriores. Ahora vamos por qué usar callbacks en paralelo, es decir, que se ejecutan a la vez pero que queremos hacer alguna acción cuando todos se han completado.

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
- incrementar en uno el contador `requestsCompleted`
- comprobar si hemos llegado al número total de requests y si es así, invocar la función que pinta en el DOM todas las imágenes


***

EJERCICIO 2: PINTANDO VARIAS IMÁGENES A LA VEZ

Partiendo el ejemplo anterior en codepen, vamos a modificarlo para que en lugar de pedir 2 imágenes en paralelo pida 10, y el resultado sólo se pinte en la pantalla cuando las 10 imágenes hayan llegado del servidor. Ahora sí que se nota el efecto de que se pintan todas a la vez, ¿verdad? Vamos a probar también con 25 imágenes, para ver bien este efecto.

***

## Promesas

Hasta ahora hemos trabajado siempre con callbacks para hacer llamadas al servidor. Nos hemos dado cuenta en los ejemplos anteriores que si queremos hacer algo complejo como peticiones encadenadas o en paralelo, el código es bastante complejo y poco intuitivo.

Las promesas nos ofrecen una alternativa a los callbacks para intentar escribir código más claro y limpio. Es decir, podemos hacer las mismas cosas que con callbacks pero de una forma más elegante.

Para ver algunos ejemplos de promesas vamos a utilizar `fetch`, una forma alternativa a `XMLHttpRequest` para hacer peticiones al servidor que es más simple y trabaja con promesas. Más información en este [tutorial de MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

### Usando promesas

Vamos a realizar el ejemplo inicial de la sesión de pedir al API de Dog CEO el listado de razas con las que trabaja pero usando promesas ([aquí el codepen](https://codepen.io/adalab/pen/WdZegK?editors=1010)).

```js
fetch('https://dog.ceo/api/breeds/list')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var breeds = json.message;
    var listHTML = '';
    for (var i = 0; i < breeds.length; i++) {
      listHTML += '<li>' + breeds[i] + '</li>';
    }
    var ul = document.querySelector('ul');
    ul.innerHTML = listHTML;
  });
```

En primer lugar, vemos que a `fetch` sólo le pasamos un parámetro que es la URL de donde queremos hacer la petición, así de sencillo. Al ejecutar `fetch`, este método devuelve una promesa, es decir, algo sobre lo que podemos hacer `.then()`. Una promesa se llama así porque mientras se ejecuta el fetch (se hace la petición al servidor, responde y nos llega la respuesta) podemos trabajar con la respuesta en otra variable `response` donde 'nos prometen' que estará la respuesta del servidor cuando llegue. Es decir, que seguimos trabajando de forma asíncrona (en respuesta a eventos) pero las promesas nos ocultan esa complejidad.

Entonces, sobre una promesa podemos hacer un `.then()` pero ¿para qué? Para poder indicar qué hacer cuando se complete esa promesa. Al método `then()` le tenemos que pasar una función (en este caso es anónima, pero puede ser una normal con nombre) que toma como parámetro el resultado de la promesa cuando esté resuelta. En este caso el parámetro `response` representa a la respuesta del servidor, y sobre él ejecutamos el método `.json()` que devuelve otra promesa. Esto es porque el método `json` trabaja de forma asíncrona y el resultado de convertir la respuesta a JSON se lo pasamos como promesa al siguiente `.then()`. Así que encadenamos otro `then()` al que le pasamos como parámetro una función que toma como parámetro `json` con la respuesta ya convertida a JSON. En este último then, recogemos la información que necesitamos del objeto `json.message` y pintamos en pantalla.

Como veis, en este caso en lugar de tener 2 callbacks tenemos 2 `then()` cuyas funciones van recibiendo como parámetro los datos que pasan de una llamada asíncrona a la siguiente.

> NOTA: es muy importante no olvidar devolver (con return) al final de los then la promesa para encadenar con el siguiente then. En el último no hace falta porque ya no encadenamos más.

### Peticiones encadenadas con promesas

Ahora vamos a realizar el ejemplo anterior que encadenaba 2 peticiones al servidor pero usando promesas ([código en este codepen](https://codepen.io/adalab/pen/baoNZq#0)).

```js
fetch('https://dog.ceo/api/breeds/list')
  .then(function(breedsResponse){
    return breedsResponse.json();
  })
  .then(function(breedsJSON){
    var breeds = breedsJSON.message;
    return fetch('https://dog.ceo/api/breed/' + breeds[0] + '/images/random');
  })
  .then(function(imageResponse){
    return imageResponse.json();
  })
  .then(function(imageJSON){
    var img = document.querySelector('img');
    img.src = imageJSON.message;
  });

```

Ahora hemos encadenado hasta 4 promesas: petición al servidor, convertir a JSON al respuesta, segunda petición y convertir la segunda respuesta a JSON. Como hemos indicado antes, es importante que al final de los `then()` devolvamos una promesa para pasar los datos al siguiente `then()`.

***

EJERCICIO 3: PETICIONES ENCADENADAS CON PROMESAS

Vamos a seguir con el API de organizaciones de GitHub pero ahora vamos a acceder a él usando promesas. Vamos a acceder a la URL de los eventos de una comunidad (en la propiedad `events_url`) del [JSON de la comunidad Adalab](https://api.github.com/orgs/Adalab). Y vamos a realizar una petición nueva a esta URL para pintar en pantalla el tipo (propiedad `type`) del primer evento del array. Si el código es correcto, debería de verse en la pantalla la palabra _"PushEvent"_. ¡A darle caña!

***


### Peticiones en paralelo con promesas

Ahora vamos a realizar el ejemplo de las peticiones en paralelo pero usando promesas. Para ello, usamos el método `Promise.all` que toma como parámetro un array de promesas y devuelve otra promesa que se resuelve cuando todas las del array se han resuelto. Por tanto, sobre el resultado podremos hacer un `then()` que recibe como parámetro un array con todos los resultados de las promesas anteriores, es decir, donde tendremos todos los JSON de la respuesta del servidor. [Veamos el ejemplo de codepen](https://codepen.io/adalab/pen/xpXGaG?editors=1010).

```js
function createPromise(){
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response){
      return response.json();
    });
}

var promises = [createPromise(), createPromise()];

Promise.all(promises)
  .then(function(responses){
    for (var i = 0; i < responses.length; i++) {
      var img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });

```
Hemos creado una función `createPromise` que crea las promesas de las peticiones al servidor con `fetch` y parsea a JSON en el `then()`. Luego creamos el array de promesas ejecutando 2 veces la función anterior. Sobre ese array ejecutamos el `Promise.all` que cuando todas las peticiones al servidor hayan terminado, ejecutará la función del `then()` a la que le llegan todos los resultados mediante el parámetro  `responses`. Luego recorremos eses array para ir pintando las imágenes en los `img` del HTML.

***

EJERCICIO 4: PINTANDO VARIAS IMÁGENES A LA VEZ CON PROMESAS

Vamos a hacer como antes y, partiendo del ejemplo anterior del CodePen con promesas, vamos a modificarlo para que en lugar de pedir 2 imágenes en paralelo pida 10. Y luego 25 :)

***

### BONUS: Gestión de errores con promesas

Otra de las ventajas de las promesas es que facilitan la gestión de errores. Este es un tema que no hemos visto hasta ahora con JavaScript, pero vamos a ver cómo se hace con promesas porque facilitan mucho la vida.

```js
fetch('https://dog.ceo/api/breeds/list')
  .then(function(breedsResponse){
    return breedsResponse.json();
  })
  .then(function(breedsJSON){
    var breeds = breedsJSON.message;
    return fetch('https://dog.ceo/api/breed/' + breeds[0] + '/images/random');
  })
  .then(function(imageResponse){
    return imageResponse.json();
  })
  .then(function(imageJSON){
    var img = document.querySelector('img');
    img.src = imageJSON.message;
  })
  .catch(function(error){
    console.log('Ha sucedido un error: ' + error);
  });

```

Cuando usamos promesas podemos encadenar el final de los `then()` un `catch` que también recibe una función, que tiene como parámetro información del error que puede haber sucedido en cualquiera de los `then()` anteriores. En el ejemplo anterior, este error puede deberse a algún error del servidor o que nos devuelva un JSON con una estructura que no esperábamos y lo parseemos mal.


## Recursos externos

- [Exploring JS: promises](http://exploringjs.com/es6/ch_promises.html)
- [MDN: using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
