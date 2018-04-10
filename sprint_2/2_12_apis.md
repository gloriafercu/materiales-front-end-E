# APIs y herramientas

<!-- TOC START min:2 max:2 link:true update:true -->
- [Introducción](#introduccin)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#para-qu-sirve-lo-que-vamos-a-ver-en-esta-sesin)
- [¿En qué casos se utiliza?](#en-qu-casos-se-utiliza)
- [El mundo de las APIs](#el-mundo-de-las-apis)
- [Un poquito de HTTP](#un-poquito-de-http)
- [LocalStorage](#localstorage)
- [Linter](#linter)
- [Recursos externos](#recursos-externos)

<!-- TOC END -->

## Introducción

API viene de Application Programming Interface, es decir, es una interfaz que está pensada para ser accedida desde una aplicación de código. Dicho de otra forma, el servidor define una forma de pedirle datos que está pensado para que desde una aplicación le pidan datos y él sepa enviárselos. Hay otra interfaces, como una página web, que están pensadas para ser usadas por personas. Pero las APIs están pensadas para ser usadas desde la programación, en nuestro caso desde JavaScript. Durante esta sesión vamos a ver varios ejemplos de APIs.


## ¿Para qué sirve lo que vamos a ver en esta sesión?


## ¿En qué casos se utiliza?


## El mundo de las APIs


Herramientas: [Postman](https://www.getpostman.com/)

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

## LocalStorage

### JSON.parse y JSON.stringify

Para que esta sección quede completa, tenemos que explicar que igual que existe el método `JSON.parse` para convertir de una cadena (un texto) a un objeto JavaScript, existe otro método `JSON.stringify` que hace justo lo contrario, es decir, convierte un objeto literal de JavaScript en una cadena. ¿Pero para qué querremos hacer esto? Siempre que queramos almacenar o enviar una información a otro sitio vamos a tener que convertirla en una cadena de texto. Pero esto es algo que veremos más adelante en el curso.

## Linter

¿Qué es un linter?

Cómo usarlo: instalar, tipos de mensajes que aparecen en el editor

Cómo deshabilitar el linter en una línea
https://eslint.org/docs/user-guide/configuring

## Recursos externos

- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
