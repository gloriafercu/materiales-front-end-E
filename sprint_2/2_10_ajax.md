# AJAX

## Contenidos

- [Introducción](#introducción)
- [¿En qué casos se utiliza?](#¿en-qué-casos-se-utiliza)
- [Peticiones al servidor con XMLHttpRequest](#peticiones-al-servidor-con-xmlhttpRequest)
- [El formato JSON](#el-formato-json)
- [Un poquito de HTTP](#un-poquito-de-http)


## Introducción

En esta sesión vamos a aprender a utilizar AJAX que es el puente entre el cliente (navegador) y el servidor, entre el front-end y el back-end de nuestra aplicación. Las peticiones AJAX nos permiten acceder a datos y realizar acciones de negocio, que se ejecutan en el servidor pero se inician en el front-end.

AJAX viene de Asynchronous JavaScript And XML porque cuando se creó servía para hacer peticiones al servidor desde JS y normalmente el formato de datos que nos devolvía era XML (una forma de escribir los datos para poder enviarlos). Pero actualemente no es así y AJAX ahora utiliza otros tipos de datos, desde texto hasta JSON que veremos más adelante. Pero el hecho de que sea *asíncrono* sí es importante. Aunque sea una palabra que asusta, asíncrono simplemente significa trabajar con eventos (como hemos visto en las sesiones anteriores), es decir, que cuando sucede un evento se ejecuta una función. Se llama asíncrono porque nosotros no ejecutamos el código de forma síncrona (una instrucción detrás de otra) sino que el código se ejecuta cuando sucede un evento.

El uso de AJAX, por tanto, nos permite acceder a información en un servidor que normalmente se accede mediante un API. API viene de Application Programming Interface, es decir, es una interfaz que está pensada para ser accedida desde una aplicación de código. Dicho de otra forma, el servidor define una forma de pedirle datos que está pensado para que desde una aplicación le pidan datos y él sepa enviárselos. Hay otra interfaces, como una página web, que están pensadas para ser usadas por personas. Pero las APIs están pensadas para ser usadas desde la programación, en nuestro caso desde JavaScript. Durante esta sesión vamos a ver varios ejemplos de APIs.


## ¿En qué casos se utiliza?

Algunos ejemplos de uso de AJAX en nuestra webapp (aplicación web):

- Cuando realizamos una búsqueda de pisos en Airbnb, hacemos una petición AJAX al servidor, y cuando nos devuelve los datos de los pisos lo pintamos en el HTML
- Cuando en nuestra app de tareas marcamos una tearea como terminada, se envía una petición al servidor para que almacene en base de datos que esa tarea ha sido completada; así, al abrir la app en nuestro móvil aparecerá como completada
- En GMail, el listado de nuestros correos se obtiene de una petición al servidor; cuando marcamos un correo como leído se envía la info al servidor; o cuando enviamos un correo, éste se envía a un servidor para que lo lleve a su destinatario

## Peticiones al servidor con XMLHttpRequest

Para conectar con un servidor usamos `XMLHttpRequest`, que es un objeto JavaScript que nos permite hacer peticiones y recoger los datos que nos manda el servidor.

Vamos a construir un ejemplo de petición paso por paso.

1) Crear el objeto `XMLHttpRequest` y configurarlo.

```javascript
var request = new XMLHttpRequest();
request.open('GET', 'https://thecatapi.com/api/images/get?format=html');
```
Para empezar, vamos a crear un nuevo objeto `XMLHttpRequest`. Para eso usamos la palabra `new` que crea un nuevo objeto que podremos usar para una petición (si queremos hacer otra petición tendremos que crear un nuevo objeto). A continuación, llamamos al método `open` del objeto creado (a partir de ahora le llamaremos simplemente *petición*) al que pasamos 2 parámetros: el método de la petición (del que daremos más detalles más adelante) - en este caso *GET* - , y la URL donde vamos a realizar la petición. En este ejemplo usamos la URL de un servicio (API) para obtener fotos de gatos aleatorias, [http://thecatapi.com/](http://thecatapi.com/). En la documentación del API vemos que al pasarle `?format=html` al final de la URL, el servidor nos va a devolver HTML directamente, un enlace `<a>` con una imagen de un gato en un `<img>`.

2) Registrar un callback para el evento `load` que sucede cuando los datos del servidor están ya preparados para usarse.

```javascript
request.addEventListener('load', showPicture);

function showPicture() {
  var response = request.responseText;
  document.body.innerHTML = response;
}
```

En este caso, registramos la función `showPicture` usando `addEventListener` como ya sabemos hacer para que se ejecute con el evento `load`. La función `showPicture` toma la respuesta del propio objeto de la petición con la propiedad `responseText`. Por tanto la variable `response` contendrá el HTML que nos ha enviado el servidor. Así que simplemente nos falta por meter ese HTML recibido del servidor como contenido del body de la página.

3) Enviar la petición con `request.send`.

```javascript
request.send();
```
De esta forma tendremos el [ejemplo completo que podéis cacharrear en Codepen](https://codepen.io/adalab/pen/yPwxgP?editors=0010).

***
EJERCICIO 1

Vamos a jugar un poco con el código en codepen del ejemplo anterior. Mirando la [documentación de thecatAPI](http://thecatapi.com/docs.html) podemos jugar añadiendo otros parámetros a la URL del tipo `clave=valor` separamos por `&`:
- `results_per_page`: para mostrar más imágenes
- `type`: probamos a mostrar sólo tipo gif
- `size`: para indicar distintos tamaños de las imágenes

***

## El formato JSON

En el ejemplo anterior hemos hecho una petición a un API (thecatapi) cuyo formato de respuesta era directamente HTML que metemos en nuestra página. Pero esto no es lo habitual, porque estos servicios suelen ser usados por distintos tipos de clientes, no sólo navegadores web.

Un formato muy habitual para el intercambio de información en la web es el formato JSON (pronunciado en inglés como *Jason*). Son las siglas de JavaScript Object Notation, es decir, que es como se definen los objetos en JavaScript... ¡¡¡algo que ya sabemos!!! Serán lo que llamamos *objetos literales*, es decir, que sólo contendrán datos (propiedades) pero nunca métodos (funciones). Esto es un ejemplo de JSON sencillo que devuelve el [Dog API](https://dog.ceo/dog-api/):

```javascript
{
"status": "success",
"message": "https://dog.ceo/api/img/terrier-australian/n02096294_4492.jpg"
}
```
Como vemos, es simplemente un objeto JavaScript que tiene los datos que devuelve el servidor. En este caso, nos da una imagen aleatoria de un perro en la propiedad `message`. Vamos a ver el ejemplo completo de cómo hacer la petición AJAX:

```javascript
var request = new XMLHttpRequest();
request.open('GET', 'https://dog.ceo/api/breeds/image/random');

request.addEventListener('load', showPicture);

function showPicture() {
  var response = request.responseText;
  var responseJSON = JSON.parse(response);

  var img = document.querySelector('img');
  img.src = responseJSON.message;
}

request.send();
```
Vamos a ver los cambios respecto al ejemplo anterior de los gatos. En primer lugar, la URL en el `open` cambia para usar la URL de Dog API que nos da una imagen de perro aleatoria. El otro cambio está en la función de callback, porque en el ejemplo de los gatos tomábamos la respuesta del servidor y directamente la metíamos en el DOM. Pero en este caso es una respuesta JSON y tendremos que *parsearla* con `JSON.parse()`, es decir, la respuesta del servidor nos llega en formato de texto y parsearla significa convertirla a un objeto JavaScript. Una vez convertida a un objeto normal de JS, ya podemos acceder a sus propiedades y en este caso accedemos a su propiedad `message` que es donde el servidor nos ha dejado la URL de la imagen que asignamos al atributo `src` de una `img` del HTML.

Podéis jugar con [este ejemplo en Codepen](https://codepen.io/adalab/pen/POgBdL?editors=1010).

Para que esta sección quede completa, tenemos que explicar que igual que existe el método `JSON.parse` para convertir de una cadena (un texto) a un objeto JavaScript, existe otro método `JSON.stringify` que hace justo lo contrario, es decir, convierte un objeto literal de JavaScript en una cadena. ¿Pero para qué querremos hacer esto? Siempre que queramos almacenar o enviar una información a otro sitio vamos a tener que convertirla en una cadena de texto. Pero esto es algo que veremos más adelante en el curso.

***
EJERCICIO 2

Sigamos jugando un poco con el [Dog API](https://dog.ceo/dog-api/):

a) Vamos a modificar el ejemplo anterior para que las fotos de nuestra página salgan sólo perros de la raza *Chihuahua*.
b) Vamos a encapsular toda la lógica para crear una petición en una función. Añadimos un botón a la página con el título 'Enséñame otro Chihuahua' de forma que al pulsarlo se haga otra petición al servidor de una imagen aleatoria y aparezca una nueva imagen de Chihuaua.

***
EJERCICIO 3

Ahora vamos a explorar un nuevo API: [el API de usuarios de GitHub](https://developer.github.com/v3/users/). La URL de este API es `https://api.github.com/users/username`, donde `username` es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra `https://api.github.com/users/gootyfer`. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.

Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Haremos una petición al API para obtener información de ese usuario y mostrarla en nuestra página:
- nombre
- número de repositorios
- avatar (imagen)

![Screenshot buscador en GitHub](assets/images/2-10-buscador-github.png)

***

## Un poquito de HTTP

Para terminar la sesión, vamos a revisar algunos fundamentos teóricos de las peticiones AJAX. Y es que el objeto para realizarlas no se llama por casualidad XMLHttpRequest sino que tiene que ver con que el protocolo de comunicación de la web es llamado HTTP. Esto quiere decir que las máquinas que están conectadas a Internet para entenderse entre ellas utilizan un protocolo, es decir, una forma estándar de enviarse información para entenderse. HTTP viene de Hyper Text Transfer Protocol, es decir, protocolo para transferencia de hiper-texto, es decir, para que las máquinas intercambien información entre ellas más alla del simple texto.

En lo que se refiere a este curso, no vamos a meternos en los detalles de cómo funciona HTTP pero sí vamos a ver algunos conceptos de su funcionamiento con los que vamos a tener que lidiar por el hecho de trabajar en la web.

La forma de funcionar de HTTP es mediante **petición y respuesta**. Un ordenador hace una petición (el que llamamos cliente, en nuestro caso el navegador) y otro ordenador (el que llamamos servidor) recibe esa petición, la procesa y envía de vuelta una respuesta.

La **petición**, como hemos visto en los ejemplos anteriores, siempre lleva asociada una URL que indica dónde está el servidor y el tipo de datos que le pedimos. Por ejemplo en el catAPI, la URL `https://thecatapi.com/api/images/get?format=html` en la petición indica que
- nuestro servidor está en `https://thecatapi.com/api/`
- el servicio que llamamos `images/get` nos da una imagen de gato aleatoria
- el parámetro `?format=html` indica que el formato de la respuesta que queremos el de tipo HTML

La petición también tiene asociado un método que indica la intención con la que hacemos la petición. Los métodos más usados son *GET* y *POST*. *GET* lo usamos para decir al servidor que esa petición es para consultar datos que él ya tiene, como por ejemplo las fotos de gatos. *POST* lo usamos para enviar nosotros datos al servidor. Si recordáis estos mismo métodos los podíamos definir para el método de envío de un formulario HTML que sirve para enviar datos al servidor.

La respuesta que viene del servidor tiene más información además de los datos que le hemos pedido. Uno de ellos es el estado de la respuesta (HTTP status code). Existe un estándar definido para saber qué indica este código, y los principales son:
- 200: las respuestas con código 2xx (doscientos y lo que sea) indican que la petición ha ido bien (OK)
- 400: las respuestas con código 4xx (cuatrocientos y pico) indican que ha sucedido un error en la petición; por ejemplo, que el usuario no ha enviado todos los datos que el servidor necesita, o que no está autorizado a acceder a a ese servicio
- 500: las respuestas con código 5xx (quinientos y pico) indican que el servidor ha tenido un error

Si queréis profundizar en los código de respuesta HTTP, [qué mejor que hacerlo con gatitos](https://http.cat/).

## Recursos externos

- [Getting started with AJAX - MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
- [Using XMLHttpRequest - MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
