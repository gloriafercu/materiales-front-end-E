# Posicionando elementos en una web

## Resumen

- Tipos de elementos (block, inline, inline-block)
- Modelo de caja: border, margin (margin: auto), padding, height, width
- Posicionamiento (absolute, relative, fixed, static)


## Tipos de elementos
Los elementos HTML, normalmente, tienen una presentación "en línea" o en "en bloque". Un elemento en línea ocupa sólo el espacio del elemento, mientras que uno de bloque ocupa el ancho entero disponible.

Hay más tipos de presentación, pero vamos a empezar por estos:
* inline
* inline-block
* block

### Elementos Inline
Como hemos dicho, ocupan lo que ocupa el elemento y se van mostrando uno detrás de otro como las palabras en un párrafo, cuando un elemento no cabe completamente en una línea, la parte que no cabe se baja a la siguiente.
Los elementos inline no deberían contener elementos de bloque y no pueden tener ancho y alto. Ocupan lo que ocupe el contenido.

### Elementos block
Son elementos que empiezan en una línea nueva y ocupan el ancho completo, cualquier elemento que vaya después se pintará en la línea siguiente.
Los elementos de bloque pueden contenter elementos inline u otros elementos de bloque. Los elementos de bloque pueden tener ancho y alto.

### Elementos inline-block
Por defecto hay muy pocos elementos con comportamiento inline-block por defecto (imágenes y formularios). Es un estado mixto donde el elmento inline-block se comporta como uno inline pero, además, puede tener ancho y alto.


[Elementos inline, inline-block y block en Codepen](https://codepen.io/oneeyedman/pen/veoGxj)

* * *
	EJERCICIO:
	Usar la etiqueta `<mark>` dentro de varios párrafos y explicar para qué sirve y cómo funciona.
* * *
	EJERCICIO:
	Dentro de un párrafo de texto incluir una imagen de 100x100 y explicar como se distribuye el contenido.
* * *
	EJERCICIO:
	Entre dos párrafos añadir una imagen de 200x200 y explicar como se distribuye el contenido.
* * *

## Modelo de caja: margin, borde, padding y ancho/alto

Las páginas web se componen de rectángulos formados por elementos que contienen otros elementos. Este método de combinación es al que nos referimos cuando hablamos de modelo de cajas y nos servirá para hacernos una idea de cómo se compone la estructura de una web y cómo podemos pensar en ella combinando elementos que contienen otros elementos a su vez.

[Modelo de cajas en la MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Modelo_cajas)

Por defecto, el modelo de caja del navegador es el content-box, donde a las dimensiones de la caja se le suman el borde y el padding:

	Si tengo una caja de 100x100px, con un borde de 2px y con un padding de 16px, tendría una caja de 2+16+100+16+2: 136x136px.

Con la propiedad `box-sizing` podemos cambiar el modelo de caja para un elemento (o para todos). Y podríamos asignarle `border-box`, que es el otro modelo existente.
En `border-box` tanto el borde como padding están incluídos en el ancho/alto del elemento, de manera que en el caso anterior nuestra caja tendría 100x100px pero el espacio para el contenido de nuestra caja no sería de 100x100 sino de 100-(2+2+16+16): 64x64px.

[Ejemplo de modelo de caja en Codepen](https://codepen.io/oneeyedman/pen/LzwNBQ)

* * *
	EJERCICIO:
	Hacer un `div` de 100x100px usando las propiedades `width` y `height`, incluir dentro una imagen de 100x100px y probar:
	- Añadir un padding de 10px
	- Añadir un borde de 5px
	- Cambiar el modelo de caja a `border-box`
	Explicar qué ha pasado?
* * *


## Posicionamiento
Aparte de modificar esa distribución, podremos hacer que cambien su comportamiento a la hora de hacer scroll en la página y que modifiquen la posición de otros objetos al modificar la suya propia.

La propiedad `position` de CSS será la que nos permita modificar la forma en la que se distribuyen los objetos a través de una página web.

El atributo `position` es fundamental en las webs actuales porque sin él todo el contenido sería lineal, es decir, no podríamos tener ciertas superposiciones y no podríamos sacar a un elemento de la posición que está dentro del flujo de la página.

La propiedad `position` tiene cuatro valores posibles:
* `static`: es el valor por defecto de cada elemento HTML
* `relative`: con lo conseguimos modificar su posición siempre dependiendo de dónde esté en la página y actuar como contenedor de origen a los elementos con `position:absolute` que haya dentro
* `absolute`: saca al elemento del flujo de la página teniendo como origen el `<body>` o un contenedor padre con `position:relative`
* `fixed`: Saca al elemento a un segundo nivel que solo depende de la ventana del navegador.

- Video explicatorio de [posicionamiento web](https://www.youtube.com/watch?v=13CbCpAnvYI)
- Video para entender [position: static](https://www.youtube.com/watch?v=whqnlupzpNk)
- Video para entender [position: relative](https://www.youtube.com/watch?v=X6lG1biGJa8)
- Video para entender [position: absolute](https://www.youtube.com/watch?v=wpuP2kCN6QE)

* * *
	EJERCICIO:
	Hacer un botón con un icono alineado a la izquierda y centrado verticalmente.
* * *
	EJERCICIO:
	Hacer un enlace de descarga con una etiqueta del tipo de archivo que siempre esté a la derecha
* * *
	EJERCICIO:
	Hacer un sticky header
* * *
## ¿Para qué sirve lo que vamos a ver en esta sesión?

1. Para comprender como se comportan los contenedores cuando les cambiamos propiedades de apariencia como margen, borde, padding y ancho/alto.
2. Para saber las diferentes opciones que tenemos de colocarlos según el diseño que nos manden.


## ¿En qué casos se utiliza?
Cuando tengamos que darle un aspecto determinado al contenido, es decir, siempre :)
Algunos casos concretos son:
1. Un listado de elementos distribuidos por columnas
2. El típico módulo que lleva el corazón de "like" en una esquina
3. Una galería donde las flechas de anterior/siguiente estén, una cada lado, y centradas verticalmente
4. El típico módulo de precios "desde 5€ al mes" donde el diseñador ha desplegado toda su creatividad compositiva con un diseño con elementos a diferentes tamaños.
5. El menú que se mantiene en la parte superior del navegador al hacer scroll
6. El menú que aparece por uno de los laterales

## Recursos externos

- Video para entender [float](https://www.youtube.com/watch?v=AoAy4jCFDDw)

- Recursos extra
  - Libro de Introducción a CSS
    - [Libro Introducción a CSS - 5.1. Tipos de elementos](https://librosweb.es/libro/css/capitulo_5/tipos_de_elementos.html)
    - [Libro Introducción a CSS - 4. Modelo de cajas](https://librosweb.es/libro/css/capitulo_4.html)
    - [Libro de Introducción a CSS - 4.1. Anchura y altura](https://librosweb.es/libro/css/capitulo_4/anchura_y_altura.html)


    - [Libro Introducción a CSS - 5.2. Posicionamiento](http://librosweb.es/libro/css/capitulo_5/posicionamiento.html)
    - [Libro Introducción a CSS - 5.3. Posicionamiento normal (static)](http://librosweb.es/libro/css/capitulo_5/posicionamiento_normal.html)
    - [Libro de Introducción a CSS - 5.4 Posicionamiento relativo](http://librosweb.es/libro/css/capitulo_5/posicionamiento_relativo.html)
    - [Libro de Introducción a CSS - 5.5 Posicionamiento absoluto](http://librosweb.es/libro/css/capitulo_5/posicionamiento_absoluto.html)
    - [Libro de Introducción a CSS - 5.6 Posicionamiento fijo](http://librosweb.es/libro/css/capitulo_5/posicionamiento_fijo.html)
    - [Libro de Introducción a CSS - 5.7 Posicionamiento flotante](http://librosweb.es/libro/css/capitulo_5/posicionamiento_flotante.html)


## Resumen de la sesión
Los objetivos de la sesión son:

1. Aprender los principales modos de presentación de los elementos HTML: inline, inline-block y block
2. Saber que hay dos modelos de caja, en qué se diferencian y como aplicar uno u otro.
3. Conocer los modos de posicionamiento: static, relative y static.


## Ejercicios

### Ejercicios de posicionamiento

Si alguien quiere y tiene tiempo, puede realizar los ejercicios de este [documento](https://docs.google.com/document/d/1gHr6tzosUXrBsVVubabaxprAxkT9HyjjpBfEAu9o6IQ/edit) después de ver los videos. Si no sabeis realizar alguno no pasa nada pero intentadlo, buscad info en internet y probad, probad y probad, es la mejor forma de aprender. Si no encontrais info en internet podeis preguntarnos cualquier duda.

### Ejercicios para practicar con display

Para practicar lo aprendido durante esta sesión lo mejor sería realizar los ejercicios del siguiente documento. [documento](https://docs.google.com/document/d/1Kzac6nQ-IGgrrHO24HQDcecsO0tkQ7RvSqfbjXeBqqw/edit?usp=sharing). Si no sabeis realizar alguno no pasa nada pero intentadlo, buscad info en internet y probad, probad y probad, es la mejor forma de aprender. Si no encontrais info en internet podeis preguntarnos cualquier duda.
