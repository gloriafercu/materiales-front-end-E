# Posicionamiento con flexbox

## Contenidos

- Display flex Y ejercicios de flexbox

## Flexbox

Durante esta sesión veremos cómo distribuir los elementos en una página usando Flexbox.

Según la MDN, la propiedad Flexible Box, o flexbox, de CSS3 es un modo de diseño que permite colocar los elementos de una página para que se comporten de forma predecible cuando el diseño de la página debe acomodarse a diferentes tamaños de pantalla y diferentes dispositivos.

Hasta que apareció Flexbox la única manera de distribuir elementos en horizontal (por ejemplo: un menú horizontal, o un bloque principal y uno secundario) era calculando el espacio que debe ocupar cada bloque y controlando mucho que ningún elemento se saliese de lo planificado.

Con flexbox podemos disponer de un bloque flexible que de manera natural se ajuste dentro de unos parámetros que le indiquemos.

Vamos a seguir esta guía y a ir planteando unos ejercicios para cada propiedad que veamos: [Guía visual para aprender Flexbox](http://soyfrontend.com/guia-visual-aprender-flexbox-css3/)

* * *
EJERCICIO: FLEX y FLEX DIRECTION
1. Crear un contenedor flex de  500px por 500px y con 6 o más elementos.
2. Hacer que se distribuyan en horizontal o vertical
3. Indicar cuál es el eje principal
* * *
EJERCICIO: FLEX WRAP
Teniendo una lista de 10 a 15 imágenes de 200x100 px, hacer un bloque flexbox donde las imágenes se distribuyan por el eje horizontal y se vayan apilando uno detrás de otro.
* * *
EJERCICIO: JUSTIFY CONTENT y ALIGN ITEMS
1. Hacer un menú horizontal con un contenedor flex de 200px de alto
2. Las opciones de menú serán:
	* Home
	* Proyectos
	* Equipo
	* Blog
	* Contacto
3. Hacer que se distribuyan horizontalmente ocupando todo el espacio disponible, que la primera opción esté a 20px del borde izquierdo, y la última esté a 20px del borde derecho
4. Todos los textos deben aparecer centrados verticalmente en el contenedor de 200px
5. El espacio restante debe usarse para separar las opciones de menú, unas de otras
* * *
EJERCICIO: ORDER y FLEX/GROW/SHRINK/BASIS
1. Hacer un listado de noticias con imagen, título y párrafo de contenido
2. Meterlas en un contenedor flex y hacer que se distribuyan a dos columnas
3. Elegir una noticia y ponerla como destacada, en primer lugar y ocupando las dos columnas
* * *
EJERCICIO:
Hacer una página con `<header>`, `<main>` y `<footer>` y hacer que aunque haya poco contenido el footer siempre está abajo de la página y el main ocupe todo el espacio disponible.
Si hubiese mucho contenido el footer debe colocarse tras el main, de forma natural.

	NOTA:
	Habrá que ver cómo hacer que uno o varios elementos ocupen el 100% del alto de la ventana del navegador y averiguar cómo encaja en el ejercicio la propiedad ´min-height´
* * *

## ¿Para qué sirve lo que vamos a ver en esta sesión?

Flexbox es una herramienta imprescindible en la maquetacion actual y nos permite tener elementos html que se ajusten a las diferentes pantallas de los diferentes dispositivos.


## ¿En qué casos se utiliza?

Pues hay casos muy evidentes, como hacer un pié fijo cuando hay poco contenido, o un panel lateral con una parte fija y otra flexible. Pero también hay otros más simples como un menú horizontal, un listado de iconos de redes sociales o una noticia donde queremos que a veces la imagen vaya arriba o tras el texto.
Básicamente lo podemos/querremos usar en cualquier estructura que se distribuya en vertical u horizontal y sobre la que querramos controlar el espaciado, orden o alineamiento.


## Recursos externos

### Teoría para aprender flexbox

[Introducción a flexbox](https://www.youtube.com/watch?v=F-KCncXMPk0)

### Juegos para aprender flexbox

[Flexbox froggy - juego](http://flexboxfroggy.com/#es)

[Flexbox defense - juego (inglés)](http://www.flexboxdefense.com/)

### Página interactiva para aprender flexbox

[Página interactiva para aprender flexbox](http://codepen.io/enxaneta/full/adLPwv/)

### Guía completa de Flexbox (inglés)

[Guía completa de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


## Resumen de la sesión

El objetivo es aprender a montar un contenedor con flexbox y a dominar las diferentes opciones que tenemos de distribuir sus elementos.


### Ejercicios


### Ejercicios de flexbox

[Ejercicios para reforzar de flexbox](https://docs.google.com/document/d/10U8ngNMrzlZQAA5cZDCjK11UU6KRyx5TyU24uJbBPew/edit)

### Más ejercicios de flexbox

[Ejercicios de repaso para Flexbox](https://drive.google.com/open?id=1BUInayTTiCzbGZVmBDFz69NDKCnFQm1L0pWAtNy6s4w)
