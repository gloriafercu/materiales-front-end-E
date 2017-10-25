# Posicionando elementos en una web

## Contenido

- Tipos de elementos (block, inline, inline-block)
- Posicionamiento (absolute, relative, fixed, static)
- Modelo de caja: border, margin (margin: auto), padding, height, width
- Estilos por defecto del navegador (user agent)
- Hojas de reset css y cuando usarlas

## Introducción

La propiedad `position` de CSS será la que nos permita modificar la forma en la que se distribuyen los objetos a través de una página web. Aparte de modificar esa distribución, podremos hacer que cambien su comportamiento a la hora de hacer scroll en la página y que modifiquen la posición de otros objetos al modificar la suya propia.

El atributo `position` es fundamental en las web actuales porque sin él todo el contenido sería lineal, es decir, no podríamos tener ciertas superposiciones y no podríamos sacar a un elemento de la posición que está dentro del flujo de la página.

En esta sesión veremos la diferencia entre elementos en línea y en bloque, es decir, por qué algunos elementos como las imágenes ocupan solo una parte del ancho de nuestra pantalla y otros como los párrafos lo ocupan por completo. Aparte de ver las diferencias veremos cómo cambiar el comportamiento por defecto de un elemento en línea para que se muestre en bloque y viceversa.

Otro de los aspectos que tocaremos en esta sesión es el modelo de cajas. Las páginas web se componen de rectángulos formados por elementos que contienen otros elementos. Este método de combinación es al que nos referimos cuando hablamos de modelo de cajas y nos servirá para hacernos una idea de cómo se compone la estructura de una web y cómo podemos pensar en ella combinando elementos que contienen otros elementos a su vez.

Por último, aprenderemos cómo modificar el tamaño de los distintos componentes de una web con las propiedades `width`, `height` y `overflow` que nos permitirán mejorar la estructura visual de un proyecto.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

{{purpose_info}}


## ¿En qué casos se utiliza?

{{usecase_info}}


## Recursos externos

- Video explicatorio de [posicionamiento web](https://www.youtube.com/watch?v=13CbCpAnvYI)
- Video para entender [position: static](https://www.youtube.com/watch?v=whqnlupzpNk)
- Video para entender [position: relative](https://www.youtube.com/watch?v=X6lG1biGJa8)
- Video para entender [position: absolute](https://www.youtube.com/watch?v=wpuP2kCN6QE)
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

{{summary_info}}


## Ejercicios

### Ejercicios de posicionamiento

Si alguien quiere y tiene tiempo, puede realizar los ejercicios de este [documento](https://docs.google.com/document/d/1gHr6tzosUXrBsVVubabaxprAxkT9HyjjpBfEAu9o6IQ/edit) después de ver los videos. Si no sabeis realizar alguno no pasa nada pero intentadlo, buscad info en internet y probad, probad y probad, es la mejor forma de aprender. Si no encontrais info en internet podeis preguntarnos cualquier duda.

### Ejercicios para practicar con display

Para practicar lo aprendido durante esta sesión lo mejor sería realizar los ejercicios del siguiente documento. [documento](https://docs.google.com/document/d/1Kzac6nQ-IGgrrHO24HQDcecsO0tkQ7RvSqfbjXeBqqw/edit?usp=sharing). Si no sabeis realizar alguno no pasa nada pero intentadlo, buscad info en internet y probad, probad y probad, es la mejor forma de aprender. Si no encontrais info en internet podeis preguntarnos cualquier duda.
