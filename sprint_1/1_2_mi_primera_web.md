# Mi primera página web
Hasta ahora hemos visto una pequeña introducción a unos elementos básicos de HTML y CSS, pero hay más.

## Más etiquetas HTML
La etiquetas html nos premiten estructurar nuestro contenido según su función o carga semántica. Vamos a ver más etiquetas:

* para **definir nuestra página**
* para agrupar en **seciones**
* para identificar semánticamente el **contenido**
* para crear **tablas de datos**

	NOTA:
	Todavía no lo hemos dicho expresamente pero lo normal es anidarlas, meter etiquetas dentro de etiquetas:

	```html
	<html>
		<body>
			<header>
				<h1>Título</h1>
			</header>
			<main>
				<section>
					<h2>Subtítulo</h2>
					<p>Contenido y más contenido</p>
					<p>Contenido con <a href="">enlaces</a></p>
					<ul>
						<li>lista</li>
						<li>de</li>
						<li>cosas</li>
					</ul>
				</section>
			</main>
		</body>
	</html>
	```

## Secciones
Normalmente no vamos a querer meter nuestro contenido en la página y ya está, querremos darle una estructura y agruparlo en bloques. Para ello tenemos la etiqueta `<section>`.
Usaremos una sección para agrupar contenidos por temática:

	EJEMPLO:
	En la página de un producto agruparemos la descripción del producto por un lado y los comentarios de los compradores/usuarios por otro.

Hay una serie de secciones especiales que tienen asignado un significado semático predeterminado:

* `<header>`: una cacebera o sección de presentación de un bloque
* `<main>`: Indica la principal sección de contenido
* `<footer>`: un pie o sección final de un bloque
* `<nav>`: un bloque de navegación, para un menú.
* `<aside >`: un bloque de contenido de menor importancia o con contenido relacionado
* `<article>`: un artículo

Estos bloques especiales se pueden usar unos dentro de otros según tenga sentido: por ejemplo, un `<article>` puede tener cabecera y pie, mientras que una cabecera no debería tener pie.

	NOTA: Si usamos mal estos elementos el navegador no va a dar error, pero estaremos haciendo un favor muy pobre a aquellos usuarios que necesiten este extra semántico para navegar (por ejemplo, un usario ciego).

## Contenido
Dentro de estas secciones querremos incluir nuestros contenidos. Además de los encabezados, párrafos y listas tenemos un juego importante de etiquetas:


### Enlaces
Uno de los conceptos básicos de HTML es el enlace que nos permite vincular páginas o partes de ellas de manera que la información no quede como algo aislado sino conectado:

Un ejemplo es la wikipedia, donde en cada artículo se añaden enlaces relacionados que hacen que puedas completar la información a medida que la vas consultando.

El enlace se escribe con la etiqueta `<a>` y con un atributo `href=""` que indíca a dónde enlaza.

Podemos enlazar a:
* una página o archivo
* una posicion dentro de la misma u otra página

El primer enlace es muy fácil, simplemente ponemos la dirección de nuestra página o archivo como valor del atributo href:

```html
<a href="https://www.wikipedia.org">Wikipedia.com</a>
```

El segundo tipo de enlace necesita de un atributo especial que es el `id=""`. Cualquier elemento de nuestra página puede llevar este atributo pero al tratarse de un identificador no debe haber dos elementos con la misma id en la misma página.

En mi página voy a identificar la cabecera y el contenido principal:
```html
<!doctype html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<title>Mi página</title>
</head>
<body>
	<header id="top">
		<h1>Título de mi página</h1>
	</header>
	<main id="main">
		<h2>Texto en latín</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</main>
</body>
</html>
```

Ahora podría añadir un enlace abajo del todo para ahorrarme el scroll poniendo en el href el símbolo `#` seguido del id que quiero enlazar:

**index.html**
```html
<!doctype html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<title>Mi página</title>
</head>
<body>
	<header id="top">
		<h1>Título de mi página</h1>
	</header>
	<main id="main">
		<h2>Texto en latín</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</main>
	<footer>
		<p><a href="#top">Volver arriba</a></p>
	</footer>
</body>
</html>
```

Si quisiese enlazar al contenido principal de mi página desde otra página usaría:

```html
<a href="index.html#top">Volver arriba</a>
```

En estos dos casos se dice que las rutas son **relativas** porque apuntan dentro de nuestro proyecto. Si incluímos el dominio donde está alojada la página o archivo, aunque sea en nuestro dominio, diremos que la ruta es **absoluta**.

Si conocemos una página que use id, podemos enlazar directamente a esa parte del contenido . Vamos a enlazar a la wikipedia, justo a la parte donde se habla de la piratería en la edad media:

```html
<a href="https://es.wikipedia.org/wiki/Piratería#La_Edad_Media">La piratería en la edad media</a>
```
Aquí el atributo href lleva la dirección de la página de la Wikipedia sobre la piratería y el id de la sección que se refiere a la edad media.

La etiqueta tiene varios atributos que debemos conocer:
* `title=""`: Donde podemos añadir un texto complementario que el navegador mostrará en un pequeño tooltip cuando pongamos el cursor sobre el enlace. Me interesa usarlo cuando tengo un enlace tipo "descargar" y quiero asociarle el texto "Descargar archivo PDF".  
**Ejemplo:**  
![Ejemplo de title=""](assets/img/title.png)
* `target=""`: Aquí podemos especificar si se abre en ventana nueva. Esto me interesa hacerlo cuando en mi página enlazo a páginas de otros y no quiero que el usuario "pierda" mi página al hacer clic en ellos.


### Negritas, cursivas
Tradicionalmente se usaban las etiquetas `<b>` y `<i>` para poner un texto en negrita (bold) o en cursivas o itálicas (italic). Estas etiquetas se mantienen aunque no tienen carga semántica, no significan nada más allá de que muestran el texto en negrita o cursiva.

Las nuevas etiquetas, `<strong>` y `<em>`, aunque visualmente hacen lo mismo (strong muestra el texto en negrita y em, en cursiva) sí que tienen una carga semántica, para indicar el nivel de énfasis o de importancia.
Con `<em>` resaltas un texto importante, y con `<strong>` resaltas un texto más importante.

```html
<p>Dentro de este párrafo tenemos <em>un texto importante</em> y <strong>uno que es muy importante</strong></p>
```

	NOTA:
	El aspecto visual de estas etiquetas es una convención entre los diferentes navegadores y, como veremos, se puede cambiar.

### Imágenes
Muchas veces querremos acompañar nuestro contenido con imágenes, ya sea para acompañarlo (imágenes de una noticia,… ), como motivo principal (una galería de ilustraciones,…).

Para ello tenemos la etiqueta `<img>`, que tiene varios atributos:
* `src=""`: Aquí indicamos la ruta de nuestro archivo de imagen
* `title=""` Este atributo se puede aplicar a casi todas las etiquetas y siempre es un texto complementario que ayuda a entender mejor el texto enlazado y/o en temas de accesibilidad.
* * `alt=""`: El atributo alt es muy parecido pero es solo para imágenes y es el texto que va a mostrar el navegador en caso de la imagen no se pueda cargar.  
**Ejemplo:**  
![Ejemplo de alt=""](assets/img/alt.png)

### Saltos de línea
Aunque es recomendable usarlo con tiento tenemos unas etiquetas que fuerzan un salto de línea: `<br>`.
Desde que empezamos a separar el contenido y el diseño esta etiqueta ha quedado relegada a un lugar muy secundario pero todavía hay veces en los que vas a querer forzar una línea nueva en mitad de un texto y está bien conocerla.

```html
<h1>Mi título genial <br>en dos líneas</h1>
```

### Contenedores generales
Aparte de las secciones tenemos un par de contenedores sin propósito específico que nos sirven para hacer agrupaciones sin carga semántica. Son el `<div>` y el `<span>`. Mientras que el **div** es para bloques de contenido el **span** está indicado para partes del texto. Los iremos viendo más adelante.




## Tablas
Hubo un tiempo en el que las tablas eran la base sobre la que se maquetaba cualquier página web. Hoy se utilizan para lo que son: presentar datos tabulados.

La tabla básica tiene una estructura bastante simple y tiene tres etiquetas principales:
* una etiqueta que marque que se va a escribir una tabla
* una etiqueta para las filas
* una etiqueta para las celdas

En una imagen, una tabla de 3 filas y 3 columnas sería algo asi:
![Tabla de 3x3](assets/img/table.png)

y en código quedaría así:
```html
<table>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
```

En principio, en las tablas siempre tiene que haber igual número de celdas en cada fila.

* * *
EJERCICIO 1:
Hacer una tabla con la comida de cada día de la semana usando `<th>`.
* * *

* * *
EJERCICIO 2: Buscar información sobre todos estos elementos en  la [MDN](https://developer.mozilla.org/es/docs/Web/HTML/Elemento)

* Definición de página
	* doctype
	* html
	* head
	* title
	* link
	* meta
	* body
* Seciones de página
	* section
	* header, main, footer, nav, aside, article
* Contenido
	* div/span
	* h1-h6
	* p
	* blockquote
	* ol/ul, li
	* img
	* a
	* strong, em
	* small, abbr, sup, sub
	* br, hr
* Tablas
	* table
	* tr
	* td, th
	* caption
	* thead
	* tbody
	* tfoot
	* col, colgroup

* * *

## CSS
Todos los elementos HTML tienen una apariencia que comparte cada navegador, con pequeñas variaciones. Por defecto, el tamaño de texto es de 16px, con un intelineado de 1.15. Los encabezados y párrafos tienen un margen superior e inferior relacionado con el tamaño que tiene: el `<h1>` se muestra a 32px y tiene 22px de margen, el fondo de la página es blanco y el color del texto es negro.

	NOTA:
	La médida básica en web es el pixel o px, cada dispositivo tiene su pantalla que tiene unas dimensiones definidas en pixels, por ejemplo, la pantalla de móvil más pequeña tiene 320x480px (si no se indica lo contrario siempre es "alto por ancho").

Los navegadores ofrecen este aspecto por defecto pero nosotros lo podemos cambiar con CSS, creando estilos para definir la apariencia de nuestras página.

Para cambiar el aspecto de un elemento usando un selector, hay varios tipos de selectores:
* la propia etiqueta del elemento: h1, a, p,…
* una clase que hayamos incluido con el atributo `class=""`
* a través de un identificador en el atributo `id=""`
* a través de una pseudo clase, que son unas palabras claves que añadidas al selector especifican un estado especial del elemento.
* a través de un atributo y/o su valor
* a través de una mezcla de los anteriores

Vamos a ver cada uno de los casos.

### El propio elemento como selector
Esto no es lo ideal y se aplica los estilos a cada elemento de este tipo que aparezca en la página, así que hay que usarlo con tiento.

Podemos, por ejemplo, hacer que todos los enlaces sean rojos.
```css
 a {
	 color: red;
 }
```

### Clases como selectores
Las clases son palabras claves que atribuimos a elementos HTML para poder agruparlos por función o apariencia y diferenciarlos del resto de elementos de su mismo tipo.

Por ejemplo: La clase "text-link" nos permite aplicar estilos particulares a los enlaces que lleven dicha clase sin afectar al resto de enlaces.
```html
<a class="text-link">Enlace de texto</a>
```
En css creamos clases para aplicar a grupos de elementos como puede ser todos los enlaces de texto, o solo al listado de ingredientes o a los párrafos del pié de página.
La manera de indicar en css que se trata de una clase es escribiendo un `.` primero:
```css
.text-link {
	color: red;
}
```

### Id como selector



 estilos ()

 Selectores CSS:
 elemento,
 clase,
 id,
 anidados,

cascada CSS y especificidad de selectores,
!important




https://stuffandnonsense.co.uk/archives/css_specificity_wars.html


http://cssspecificity.com/#
