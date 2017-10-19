# Intro a la web

## Cómo funciona la web

Internet es algo que utilizamos de forma cotidiana ya sea para consultar información, hacer una reserva, comprar entradas o mandar a tu grupo de toda la vida el vídeo del pingüino que le da una colleja al otro pingüino. ¿Y cómo funciona por dentro? Pues al final de todo son dos ordenadores que se comunican, uno hace de cliente y el otro de servidor.

La respuesta corta a **cómo funciona Internet** es que funciona conectando dos ordenadores, un servidor y un cliente.

**El servidor** es un ordenador permanentemente encendido y que contiene una cantidad de información.

**El cliente** es nuestro ordenador o dispositivo (tablet/móvil/etc…) y desde él nos conectamos al servidor para acceder a la información que estamos buscando.

La respuesta más en detalle es que Internet es una red de ordenadores conectados con un cable, un cable muy tocho, pero un cable al fin y al cabo. Estos ordenadores se llaman servidores y, entre todos, tienen almacenado toda la información y archivos disponibles (documentos, música, películas… ).
A estos ordenadores se les llama **servidores** y dentro de esta red, cada equipo está localizado por un conjunto de números que se llama dirección IP, formado por cuatro números separados por puntos, por ejemplo:

```
216.58.211.206
```

Identificar los servidores de esta forma está bien cuando 2 ordenadores trabajan entre sí, pero las personas necesitamos un sistema que podamos entender y usar fácilmente. Así, tenemos otro tipo de ordenadores que se ocupan de asociar esta dirección IP con una dirección que una persona de bien pueda usar sin perder la juventud en llevar la cuenta, lo que llamamos un dominio. Estos ordenadores son los **servidores DNS** ([DNS](https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio)).

Ahora vamos a nuestros equipos (ordenadores, móviles, tablets, etc.). Estos dispositivos son los **clientes** y están también conectados a esa red de servidores pero a través de unas empresas proveedoras de servicios: Movistar, Vodafone, etc.

### Cómo se conecta todo esto?

Desde nuestro cliente (ordenador, móvil, tablet) consultamos una web, por ejemplo, *www.google.es*. Esto nos conecta a través de nuestro proveedor a un servidor DNS para buscar a qué equipo corresponde la dirección "*www.google.es*" y conectarnos con ese equipo (*216.58.211.206*) y nosotros vemos en nuestro navegador la página de Google.

	Práctica:
	Escribir en un navegador la dirección IP 216.58.211.206

### Partes de una dirección web o URL
En el día a día escribimos versiones cortas de las URL, como por ejemplo `google.es`, y es el navegador quien las interpreta en su forma completa:

```
https://www.google.es
o
https://google.es
```

El esquema que sigue una url es:

```
protocolo://nombre-de-dominio/directorio/nombre-de-archivo
```

* **Protocolo**: Indica cómo se van a intercambiar los datos entre  el ordenador cliente y el servidor. Hay varios tipos de protocolo, el normal para navegar es http (o https, que es http pero en modo seguro). http significa Hypertext Transfer Protocol, que español viene a ser "Protocolo de transferencia de hipertexto". Existen más protocolos como `mailto` o `ftp`.
* **Nombre de dominio**: Dominio es la dirección amigable de un ordenador en Internet (recordad como vimos que `google.es` es el dominio que dirige al servidor que está en la dirección 216.58.211.206). Los dominios tienen un nombre y una extensión.
	* Las **extensiones** las crea una entidad [ICANN](icann.org) y algunos dominios populares son `.com`, `.net` o `.org`. Intentan añadir información al dominio, por ejemplo:
		* `.es` indica que es una página española
		* `.com` indica que es una página comercial
		* `.cat` indica que es una página catalana, no de gatitos
	* El **nombre** es la denominación principal de dominio.
	* De manera opcional pueden contender *subdominios*, que es un nombre especial que se usa para identificar diferentes partes del dominio, por ejemplo, un blog: `https://blog.twitter.com`. Muchas direcciones usan las tres w como subdominio, y podríamos decir que `www` es un subdominio que viene por defecto.
* **directorio y nombre de archivo**: si no especificamos nada más que protocolo y dominio, `https://google.es` en el navegador se nos mostrará la página por defecto que estuviese indicada, pero podemos pedir un archivo en concreto y que puede estar dentro de una serie de carpetas (recordemos que el servidor, al final, es un ordenador:

```
https://www.adidas.es/zapatilla-adizero-ubersonic-3.0-jade/BY1617.html
```

Queremos acceder al archivo `BY1617.html` que se encuentra en la ruta de directorios `zapatilla-adizero-ubersonic-3.0-jade` en el servidor de `www.adidas.es`.

Hasta ahora hablamos de consultar páginas web que ya están hechas y colocadas en un servidor al que accedemos desde el navegador de nuestro ordenador.

### Pero ¿cómo vemos una página web que hayamos creado nosotros?
Como introducción, una página web es un archivo con un nombre y una extensión `html` que estará en nuestro ordenador:
```
index.html
```

Haciendo doble clic sobre el archivo se abrirá en la aplicación asignada, en este caso, el navegador web, y podremos ver el resultado. **Aquí estamos consultando un archivo de nuestro ordenador**.

También podemos, con una aplicación destinada para ello, enviar nuestro archivo html a uno de estos servidores y que todo el mundo pueda consultar nuestro archivo.

	NOTA:
	Los archivos se nombran con el formato "nombre.extensión", donde la extensión indica qué tipo de archivo es. Por ejemplo:
	`video-de-gatitos.mp4`


## Herramientas (Ubuntu, Chrome, Atom y live server, Trello, Slack)
Para hacer este curso necesitaremos un ordenador y una serie de aplicaciones necesarias para completarlo.

### Ubuntu
Empezamos con el [**sistema operativo**](https://www.youtube.com/watch?v=7ZI5KbY8n-w), que es el encargado de hacer de intermediario entre el ordenador y el usuario, gestionado el hardware (pantalla, teclado, micrófono...) y las aplicaciones que se instalan en el equipo (navegador, reproductor de video, mensajería instantánea… ). Hemos elegido **Ubuntu** que es un sistema operativo de [código abierto](https://es.wikipedia.org/wiki/Código_abierto) basado en Linux.

	NOTA:
	Otros sistemas operativos conocidos son, por ejemplo, Windows (de Microsoft) o MacOS (de Apple).

Además del sistema operativo necesitaremos una serie de aplicaciones:

### Chrome
Ahora mismo, [Chrome](https://www.google.com/chrome/), es el navegador web más popular con mucha diferencia y es el elegido para usar en el curso debido a sus herramientas de desarrollo. Lo necesitaremos para visualizar todo lo que hagamos ya que, principalmente, lo que hagamos irá destinado a usarse en un navegador.

### Gmail y Google Drive
Para gestionar la comunicación y el resto de programas necesitaremos una cuenta de correo electrónico. Desde hace tiempo ya no puedes vivir sin una. Hemos elegido [Gmail](https://www.google.com/gmail/) por la integración que ofrece con su aplicación hermana [Google Drive](https://www.google.com/drive/), que es un servicio de almacenamiento de archivos con una suite de ofimática (como Microsoft Office) que incluye procesador de textos, hoja de cálculo y un programa para crear presentaciones.
Solo con la cuenta de correo, Gmail te ofrece automáticamente espacio en Google Drive y acceso a los programa de ofimática.

### Atom
Para crear nuestras páginas web usaremos un tipo especial de programa de edición de texto que son **los editores de código**. Nosotros hemos elegido [Atom](https://atom.io), que también es de código abierto.

Un editor de código es un editor de texto diseñado específicamente para editar el código de páginas o aplicaciones digitales.

Este tipo de editores tiene características diseñadas exclusivamente para simplificar y acelerar la escritura de código, como: resaltado de lenguaje (html, javascript, php… ), autocompletar o verificación del código.

Además, suelen tener una comunidad de usuarios que desarrolla pequeños complementos que potencian las capacidades básicas del editor, como ordenar un bloque de código o lanzar un servidor.

#### Live server
Al principio hablábamos de que hay dos tipos de ordenadores, los nuestros, **clientes**, y los servidores que son los que nos muestran (o sirven) el contenido. Pues para visualizar nuestro trabajo muchas veces necesitaremos simular que lo está mostrando uno de estos servidores, para ello usaremos, al principio, un pequeño complemento de Atom que hace el trabajo de simular un servidor por nosotros.

### Trello
Con el tiempo han ido surgiendo nuevas formas de organizar el trabajo y, claro, aplicaciones que nos ayudan a gestionar esta organización. [Trello](https://trello.com) es una de estas aplicaciones que sin ser la más vistosa sí que es de las más fáciles de usar. En Trello tendremos como tableros de trabajo donde iremos añadiendo "tarjetas" con las tareas a completar e incluso podremos asignarlas a alguien del equipo.

### Slack
Igual que con la gestión de tareas, también han ido apareciendo aplicaciones para gestionar la comunicación en el entorno empresarial, como [Slack](https://slack.com/). Es como un programa de mensajería pero con un buscador súper potente y que da la posibilidad de crear canales, enviar mensajes directos y conectar otro tipo de aplicaciones, como Trello ;).

## HTML Y CSS
La base de una página web es el HTML y el CSS. Con HTML escribes el contenido de la página y con CSS modificas el aspecto que va a tener.

### HTML
HTML es un lenguaje de marcado, es una forma de codificar un documento que, junto con el texto, incorpora etiquetas o marcas que contienen información adicional acerca de la estructura del texto: si es un título, un enlace o un párrafo, por ejemplo.

Un elemento HTML suele estar formado por dos etiquetas, una de apertura y una de cierre, dentro de las cuales está nuestro contenido. Las etiquetas de apertura pueden incluir unos modificadores que se llaman atributos y que modifican el comportamiento por defecto del elemento o aportan información extra:

Con el atributo "lang" indicamos que este párrafo está en español:

```html
<p lang="es">Párrafo</p>
```

	Nota:
	Hay una serie de elementos HTML que no necesitan etiqueta de cierre y los veremos más adelante.

A los elementos HTML los vamos a llamar "etiquetas", para abreviar.

Podríamos decir que hay dos tipos de etiquetas: las que definen el documento y las que definen el contenido.

### Etiquetas de página
Una página web empieza con una etiqueta que indica que es una página HTML, `<html>`. Dentro va una cabecera o `<head>` (donde se definen aspectos relativos al contenido, como el título, descripción o palabras claves) y un cuerpo o `<body>` (donde incluiremos el contenido de nuestra página).

Una página html con cabecera y cuerpo:

```html
<!DOCTYPE html>
<html>
	<head>
	</head>

	<body>
	</body>
</html>
```

Justo antes de la etiqueta `<html>` se debe añadir una etiqueta especial que indica qué tipo de documento HTML es: el [doctype](https://es.wikipedia.org/wiki/Declaración_de_tipo_de_documento).

En el siguiente ejemplo vemos la misma página, un poco más definida, con su doctype, un atributo en el `<html>` que indica que está en español y dos etiquetas en la cabecera: una que indica la codificación del texto y otra que indica el título del documento.

	NOTA:
	Es importante acostumbrarnos a usar el atributo "lang" en nuestras etiquetas `<html>` para indicar el idioma en el que está escrito nuestro contenido.

```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<title>Mi página</title>
</head>
<body>

</body>
</html>
```

	NOTA:
	<meta> es una de esas etiquetas que no necesita cerrarse.

### Codificación de una página HTML
Vamos a detenernos un momento en este punto: podemos usar varios juegos de caracteres al crear nuestra página, cada juego tiene más o menos caracteres así que podría pasar que nuestras tildes o caracteres especiales no estén disponibles.
A día de hoy usaremos `utf-8`, que es el más completo.

La codificación de un documento se indica en dos pasos:
1. El archivo se guarda usando una codificación.
2. En el `<head>` de la página se incluye una etiqueta `<meta charset="">` indicando al navegador qué juego de caracteres hemos usado al guardar el archivo.

#### BONUS
En este artículo de la wikipedia puedes ampliar información sobre la [codificación de caracteres](https://es.wikipedia.org/wiki/Codificación_de_caracteres)

### Etiquetas de contenido
El navegador lee las etiquetas en orden de escritura, de arriba a abajo, y va a intentar mostrarlas en ese orden.

El buen uso de estas etiquetas hace que se añada al contenido una valoración semántica, lo que mejora la accesibilidad de nuestra página. Esto ayuda cuando se consulta la página usando algún sistema de soporte como lectores de pantalla.

	EJEMPLO:
	Si marcamos un texto como encabezado le estamos asignando una importancia diferente a si lo marcamos como párrafo o elemento de una lista.

Vamos a ver nuestros primeros elementos en html:

#### Títulos o encabezados
Se indican con las etiquetas `<h1>` a `<h6>`, de más relevancia a menos.

```html
<h1>Encabezado 1</h1>
```

#### Párrafo
Con la etiqueta `<p>` indicaremos que el texto que contiene es un párrafo.

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```


#### Lista de elementos
En algún momento vamos a necesitar añadir una serie de elementos e indicar que están relacionados: tenemos las listas ordenadas `<ol>` y las desordenadas `<ul>`.

```html
<ol>
	<li>Elemento de la lista</>
	<li>Elemento de la lista</>
	<li>Elemento de la lista</>
</ol>

<ul>
	<li>Elemento de la lista</>
	<li>Elemento de la lista</>
	<li>Elemento de la lista</>
</ul>
```
La lista ordenada produce una lista numerando cada item por orden de escritura y la desordenada añade un símbolo (por defecto pinta un círculo) delante de cada elemento de la lista, también por orden de escritura.

	Práctica:
	Con estos elementos vamos a crear nuestra primera página.
***
	Pendiente:
	Tendremos que preparar un contenido de ejemplo
***

#### BONUS
Con estos enlaces puedes conocer otros elementos HTML, aunque ya los iremos viendo más adelante:

* [Lista de elementos html | MDN](https://developer.mozilla.org/es/docs/HTML/HTML5/HTML5_lista_elementos)
* [(Inglés) Lista de elementos html | html5doctor ](http://html5doctor.com/#glossary)

### CSS
La maquetación web tiene mucha relación con la maquetación en papel de toda la vida, donde se utilizan los estilos para definir la apariencia que tendrá un cierto contenido.

En web tenemos CSS (del inglés "Cascading Style Sheets" o, en español, "Hojas de estilo en cascada") que es un lenguaje de estilos para definir la presentación de un documento escrito en un lenguaje de marcado, como HTML.

CSS tiene una sintaxis simple, y usa un conjunto de palabras clave en inglés para especificar los nombres de varias propiedades de estilo.

**¿Y lo de "en cascada"?** Eso hace referencia al proceso de combinación y aplicación de estilos en CSS y cómo se resuelven los conflictos entre ellos, pero eso lo veremos más adelante.

Entonces, en una hoja de estilos CSS tendremos un conjunto de reglas que dirán cómo se tienen que mostrar nuestros elementos. Vamos a suponer que partimos de nuestro ejercicio anterior, donde tenemos maquetado un documento simple, y queremos cambiar el color y el tamaño de letra o el color de fondo de nuestra página.

Para esto tenemos las propiedades:

* `color: green` -> pone el color del texto a verde
* `font-size: 18px` -> pone el tamaño de letra a 18px
* `background-color: yellow` -> pone el color de fondo de color amarillo

Vamos a decirle a nuestro encabezado `<h1>` que se muestre de color azul y a 20px de tamaño.

```css
h1 {
	color: blue;
	font-size: 20px;
}
```

Cada atributo CSS está formado por el nombre de la propiedad y un valor, separados por `:`. A su vez, cada atributo va separado del siguiente por un `;`.

Cada conjunto de atributos que se aplican a un elemento van agrupadas entre llaves `{ }` y con un nombre de **selector** que hace referencia al elemento HTML.

Para el selector se puede usar:

* la etiqueta del elemento html (`h1`, `p`, `ul`, etc.)
* un atributo del elemento html, hay dos especiales que se usan para esto: el id y la clase (los veremos más adelante).

Dentro de nuestra página esto quedaría así:

```html
<!doctype html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<title>Mi página</title>
	<style>
		h1 {
		color: blue;
		font-size: 20px;
		}
	</style>
</head>
<body>
	<h1>Título de mi página</h1>
	<p>Contenido de prueba de mi página web.</p>
</body>
</html>
```

Una forma de añadir estilos a una página es a través de la etiqueta `<style>` que, como aplica ajustes visuales sobre la página iría dentro de la cabecera de mi documento.

Bueno, es una de las opciones pero como desde hace unos años intentamos separar el contenido de la presentación vamos a pasar nuestros estilos siempre a un archivo externo que estará enlazado desde nuestra página HTML.
Lo haremos con la etiqueta `<link>`, que es una de esas etiquetas que no necesita cerrarse. Esta etiqueta lleva dos atributos, uno que dice el tipo de archivo que va enlazado `rel="stylesheet"` y otro diciendo dónde está el archivo `href="estilos.css"`.

**index.html**

```html
<!doctype html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<title>Mi página</title>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<h1>Título de mi página</h1>
	<p>Contenido de prueba de mi página web.</p>
</body>
</html>
```

**styles.css**

```css
h1 {
	color: blue;
	font-size: 20px;
}
```

Cuando vemos nuestra página HTML en un navegador le decimos que busque y aplique la hoja de estilos `estilos.css`.

	Práctica:
	Añadir hoja de estilos al ejercicio anterior donde:
	- El color de fondo de la página tiene que ser #f3f4f5
	- El título tiene que estar en tipo de letra Arial a 24px y color black.
	- El texto de los párrafos tiene que usar la fuente Georgia 1 18px y color #757575.
