# AJAX

## Contenidos

- [Introducción](#introducción)
- [¿En qué casos se utiliza?](#¿en-qué-casos-se-utiliza)
- [Peticiones al servidor con XMLHttpRequest](#peticiones-al-servidor-con-xmlhttpRequest)
- [Un poquito de HTTP][#un-poquito-de-http]
- [El formato JSON][#el-formato-json]

## Introducción

- AJAX es el puente entre cliente y servidor, entre front y back
- nos permite acceder a datos y realizar acciones de negocio, que se hacen en back pero que el usuario inicia en el front
- Viene de Asynchronous JavaScript And XML, pero actualmente no requiere de XML
- Contiene la palabra asíncrono porque trabajamos con eventos (como vimos en ela sesión anterior), que dado un evento se ejecuta una función; esta forma de trabajo es asíncrona porque nosotros no ejecutamos el código de forma secuencial (una cosa después de otra) sino asíncrona cuando sucede un evento
- XML era la forma de transmitir los datos entre front y back hace tiempo, ahora hay otras formas como JSON (que es básicamente un objeto literal de JavaScript, luego lo vemos)


## ¿En qué casos se utiliza?

Algunos ejemplos de uso de AJAX en nuestra webapp:
- Cuando realizamos una búsqueda de pisos en Airbnb, hacemos una petición AJAX al servidor, y cuando nos devuelve los datos lo pintamos en el HTML
- Cuando en nuestra app de tareas marcamos una tearea como terminada, se envía una petición al servidor para que almacene en base de datos que esa tarea ha sido completada; así, al abrir la app en nuestro móvil aparecerá como completada
- En GMail, el listado de nuestros correos se obtiene de una petición al servidor; cuando marcamos un correo como leído se envía la info al servidor; o cuando enviamos un correo, éste se envía a un servidor para que lo lleve a su destinatario

## Peticiones al servidor con XMLHttpRequest

Para hacer peticiones al servidor usamos `XMLHttpRequest`, que es un objeto JavaScript que nos permite hacer peticiones.

Vamos a construir un ejemplo de petición paso por paso

1) Crear el objeto XMLHttpRequest

```javascript
var request = new XMLHttpRequest();
```

2) Registrar un callback para el evento `readyStateChange`; hay que comporbar si la petición ha ido bien y está terminada, y en caso afirmativo podré coger los datos que me ha devuelto el servidor y trabajar con ellos

```javascript
request.addEventListener('readyStateChange', loadData);

function loadData(data){

}
```

3) Enviar la petición con `request.send`

## Un poquito de HTTP

¿Qué es HTTP?

Métodos GET y POST (os acordáis de formularios?)

Tipos de respuesta
100
200
300
400
500

## El formato JSON

Son objetos literales de JavasScript, sin más.

Usamos JSON.parse y stringify porque los datos se envían como cadena


## Recursos externos

- [Getting started with AJAX - MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
