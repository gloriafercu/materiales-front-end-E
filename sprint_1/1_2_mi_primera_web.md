# Mi primera página web
Hasta ahora hemos visto una pequeña introducción a unos elementos básicos de HTML y CSS, pero hay más.

## Más etiquetas HTML
La etiquetas html nos premiten estructurar nuestro contenido según su función o carga semántica. Vamos a ver más etiquetas:

* para **definir nuestra página**
* para agrupar en **seciones**
* para identificar semánticamente el **contenido**
* para crear **tablas de datos**

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

En estos dos casos se dice que los enlaces son relativos porque apuntan dentro de nuestro proyecto. Si conocemos una página que use id, podemos enlazar directamente a esa parte del contenido. Vamos a enlazar a la wikipedia, justo a la parte donde se habla de la piratería en la edad media:

```html
<a href="https://es.wikipedia.org/wiki/Piratería#La_Edad_Media">La piratería en la edad media</a>
```
Aquí el atributo href lleva la dirección de la página de la Wikipedia sobre la piratería y el id de la sección que se refiere a la edad media.



Negritas, cursivas

`<strong>`, `<em>`
Imágenes
`<img>`
Saltos de línea
`<br>``
Separadores horizontales

Contenedores generales
	*
	* strong, em
	* small, abbr, sup, sub
	* br, hr
	* div/span
	* img









* De definición de página
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

http://html5doctor.com/#glosary




	Un ejemplo más cercano:
	En mi blog personal escribo una reseña sobre la última de Blade Runner y con un par de enlaces ofrezco mi opinión personal, información de la película a través de su ficha de la IMDB.com y la 	valoración de otros en la página de valoraciones Metacritic.com






## CSS
SP. Más etiquetas HTML (a, img, div, span, button, input), HTML5 (header, footer, main, section, aside, article), estilos (), cascada CSS. Selectores CSS: elemento, clase, id, anidados, especificidad de selectores, !important



Cuando abrimos un archivo HTML en un navegador este último lo interpreta y muestra un tipo de texto enriquecido llamado hipertexto. El hipertexto es uno de los conceptos clave detrás de HTML y nos permite utilizar referencias en nuestro texto (hipervínculos) para enlazar otras partes de un mismo documento o de otros documento distintos. Esta cualidad es la que permite tener enlaces en nuestras páginas web, la que permite que podamos navegar a través de internet e ir saltando de una página a otra.+

En esta sección vamos a ver cuales son las etiquetas utilizadas para crear este tipo de enlaces y cómo escribir el código para utilizarlas.
Por otro lado también veremos otro tipo de elementos cómo tablas para mostrar contenido de forma estructurada y comentarios HTML para escribir texto que se puedan ver cuando leemos el código de un archivo pero que no se muestran en la página y por tanto nos permite, cómo su nombre indica, comentar el texto para poder explicar partes concretas de él.
Más etiquetas HTML
