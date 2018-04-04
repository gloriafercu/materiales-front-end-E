# Posicionando elementos en una web

## Introducción

En esta sesión veremos dos recursos fundamentales para contruir nuestra web: modelo de cajas y las herramientas de desarrollo del navegador (DevTools).

Uno de los objetivos de la sesión es saber que hay dos modelos de caja, en qué se diferencian y cómo aplicar uno u otro.

El navegador Google Chrome nos ofrece una serie de herramientas llamadas Chrome Dev Tools que nos permiten obtener información sobre la página actual que tenemos y realizar pruebas y modificaciones sobre ella. Estas herramientas son las siguientes:

- El inspector. Nos permite ver el código de la página y los estilos que tiene aplicados a la vez que nos ofrece la posibilidad de modificarlo y cambiar los elementos de la web de sitio
- La herramienta Network. Muestra cuales son los recursos que carga la web actual, su peso y el tiempo que necesita para cargarlos. Además nos mostrará errores en caso de que algún recurso no pueda ser cargado debido a un error.

## ¿Para qué sirve lo que vamos a ver en esta sesión?

1. Para comprender cómo se comportan los contenedores cuando les cambiamos propiedades de apariencia como margen, borde, padding y ancho/alto.
1. Para


## ¿En qué casos se utiliza?

Cuando tengamos que darle un aspecto determinado al contenido, es decir, siempre :)

Cuando tengamos un problema en nuestra página para detectar dónde está el error.

## Modelo de caja: margen, borde, padding y ancho/alto

En HTML cada elemento se representa visualmente como una caja, el modelo de caja es una especificación que define las características específicas de esa caja y como infieren en el resto de elementos de la página. Básicamente el modelo de caja es el que le dice al navegador cómo debe pintar cada caja (elemento).

Cada elemento tiene una *altura* (height) y *anchura* (width). Además, puede tener otros atributos relacionados que influyen en su tamaño y su posición, que son el padding o relleno, los márgenes y los bordes:
- el *borde* de un elemento es una línea que puede tener distinto grosor y que encuadra el contenido del elemento
- el *padding* es la distancia desde el contenido del elemento hasta el borde
- el *margen* es la distancia desde borde del elemento hasta los elementos que están a su alrededor

Si pensamos en el conjunto global, una página sería como un conjunto de cajas una dentro de otra, por lo tanto si pensamos en cada elemento a partir de ahora como un rectángulo nos será mucho más fácil visualizar cómo se compone la estructura de una web y cómo podemos pensar en ella combinando elementos que contienen otros elementos a su vez.

Puedes leer una [explicación más completa sobre el modelo de caja en la documentación de la MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Introduction_to_CSS/Modelo_cajas).

***
EJEMPLO:

Si tengo una caja de 100x100px, con un borde de 2px y con un padding de 16px, tendría una caja de 2+16+100+16+2: 136x136px.
***

Con la propiedad `box-sizing` podemos cambiar el modelo de caja para un elemento (o para todos). Y podríamos asignarle `border-box`, que es el otro modelo existente.
En `border-box` tanto el borde como padding están incluídos en el ancho/alto del elemento, de manera que en el caso anterior nuestra caja tendría 100x100px pero el espacio para el contenido de nuestra caja no sería de 100x100 sino de 100-(2+2+16+16): 64x64px.

Mira y entiende este [ejemplo de modelo de caja en Codepen](https://codepen.io/oneeyedman/pen/LzwNBQ).

* * *
EJERCICIO 1:

Hacer un `div` de 100x100px usando las propiedades `width` y `height`, incluir dentro una imagen de 100x100px y probar:
- Añadir un padding de 10px
- Añadir un borde de 5px
- Cambiar el modelo de caja a `border-box` y explica qué ha pasado
* * *

## DevTools
Desde que aparecieron las Devtools en todos los navegadores decentes, la vida del frontend es mucho más tranquila. Estas herramientas nos permiten saber qué está pasando en un módulo concreto (medidas, posicionamiento, CSS aplicados) o qué está cargando nuestra web (hojas de estilos, imágenes, vídeos/audios, JavaScript).

### Devtools: Inspector
El inspector es una de las muchas herramientas de desarrollo que incluye el navegador web Google Chrome. Este grupo de herramientas recibe el nombre de Chrome DevTools.

#### ¿Cómo lo abrimos?

Para abrir el inspector tenemos varias opciones:
* Pulsando en el menú de tres botones de la derecha superior de Chrome > más herramientas > herramientas para desarrolladores
* Usar `Ctrl + Mayúscula + I` en Ubuntu o Windows y `Cmd + Opción + I` en Mac
* Pulsar con el botón derecho sobre un elemento de nuestra página y seleccionar la opción *Inspeccionar*

#### Si queremos cerrarlo...

* Pulsamos en la cruz que aparece en la esquina superior derecha del panel
* Usamos `Ctrl + Mayúscula + I` en Ubuntu o Windows y `Cmd + Opción + I` en Mac de nuevo

#### ¿Qué es?

El inspector es una herramienta que viene con nuestro navegador y por tanto es parte de la aplicación del navegador, está incluida en, prácticamente, todos los navegadores más famosos (Chrome, Firefox, Safari, Internet Explorer…) y sirve para leer, añadir, editar o eliminar tanto CSS como HTML (y sus atributos) de nuestra página. Con él haremos de cirujanos de la web, veremos sus tripas y las modificaremos a nuestro antojo.

El inspector nos permite indagar y modificar tanto en páginas que tengamos en nuestro ordenador como otras que estén publicadas en Internet. Cuando modifiquemos estas páginas no estaremos modificando las páginas como tal realmente, estaremos modificandolas temporalmente para ver qué sucedería si aplicamos ciertos cambios pero la web como tal, ya sea la de nuestro ordenador o la de Internet, no va a verse modificada. Esos cambios serán temporales y una vez que recarguemos la página se perderán y ésta volverá a su estado inicial.


#### ¿Para qué nos sirve?

Dado que nos permite controlar qué está pasando con una web, podemos ver los recursos que se están cargando y cuáles fallan. Nos permite ver el código tanto de nuestra página, para ver si está funcionando correctamente, como de otras, para ver cómo aplican ciertas técnicas o coger inspiración.

Por otro lado nos permite investigar qué cambios queremos hacer sin guarrear nuestro CSS o HTML y corregir de forma más rápida y sencilla los errores de nuestro código.

Por ejemplo, podemos ver información del modelo de caja:
![HTML y Moodelo de caja en las DevTools](assets/html-inspector-modelo-de-caja.png)

Podemos colocarlo arriba, abajo, a la derecha o sacarlo a una nueva ventana.

* * *
EJERCICIO 2

Entrar en [Wikipedia.org](Wikipedia.org) y:
* Cambiar el color de los enlaces a naranja
* Sobre los idiomas destacados que aparecen sobre la imagen de la pelota de Wikipedia, añadir uno falso
* Explicar cómo están compuestos estos módulos de idioma
* Explicar cómo están colocados
* Examinar la versión de tablet de Wikipedia
* Examinar la versión de móvil de Wikipedia
* Averiguar las dimensiones de la caja de búsqueda y
    * Cuánto tiene de separación con el botón de buscar
    * ¿Qué hay de raro con esa separación?
* * *

### Devtools: Network
Sirve para ver qué recursos carga nuestra página y ver si se ha producido algún error cargando esos recursos. Network muestra tanto las imágenes como otros recursos que se cargan (CSS, JavaScript, fuentes, etc.)

Network también muestra cuánto tarda en cargarse un elemento y qué tamaño tiene. De esta forma podremos saber también si hemos metido un recurso muy pesado y si está afectando al tiempo que tarda la web en cargarse.

Podemos seleccionar qué tipo de archivos queremos que se muestren y ver la dirección desde la que se están cargando esos archivos. Este último punto es fundamental y nos permitirá saber, en caso de que un archivo esté dando error, por qué está fallando, ya que normalmente será porque hemos introducido una ruta (URL) errónea, es decir, hemos puesto en el código que el recurso está en una carpeta en la que no está realmente.

Otro recurso muy interesante que nos ofrece Network es que nos permite ver cuántos segundos tarda en cargarse nuestra página y tomar capturas de pantalla de cada momento para simular que será lo que verá un usuario durante el momento de la carga.

* * *
EJERCICIO 3

Entrar en [Wikipedia.org](Wikipedia.org) y
* Averiguar el peso total de la página principal de Wikipedia
* Averiguar cuánto ha tardado en cargar la página
* Averiguar cuántas imágenes usa la página principal de Wikipedia
* * *

De momento veremos hasta ahí. Las herramientas para desarrolladores de Google Chrome ofrecen un sinfín de posibilidades más pero iremos viendo cada una en el momento en el que la necesitemos.

## BONUS: Colores

Para empezar, vamos a ver los distintos formatos que podemos usar para indicar colores, que podemos usar por ejemplo como valor de nuestro querida propiedad CSS `color`.

#### Colores con palabras clave

La primera forma de indicar un color es mediante la palabra clave que indica el nombre del color. Hay un montón de palabras clave para colores que podemos usar que podéis ver en [la tabla de este artículo de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords).
***
EJEMPLO:

```css
p {
  color: fuchsia;
}
```
***

#### Colores en hexadecimal

De forma equivalente a las palabras clave, podemos expresar un color con formato hexadecimal. En este formato declaramos un color con una almohadilla `#` y sus 3 componentes RGB - R (rojo), G (verde), B (azul). Cada uno de los componentes se representa con 2 dígitos en hexadecimal, es decir, cada dígito puede tener 16 valores, entre 0 - 9 y A - F. Por ejemplo, el color fucsia se compone de una componente máxima de rojo (ff), nada de verde (00) y máxima de azul (ff).

***
EJEMPLO:

```css
p {
  color: #ff00ff;
}
```
***

Suele ser habitual expresar algunos colores comunes de forma simplificada. Si los dígitos de cada componente son iguales (por ejemplo, `ff`) puede escribirse el color de una forma simplificada escribiendo sólo una vez el dígito repetido. Por ejemplo, el fucsia puede simplificarse porque todos los componentes tienen el dígito repetido.

***
EJEMPLO:

```css
p {
  color: #f0f;
}
```
***

#### rgb y rgba

Como hemos visto en el caso anterior, los colores podemos expresarlos con sus componentes RGB (Red, Green, Blue). En CSS existe la posibilidad de, en lugar de usar 2 dígitos hexadecimales, expresar el color usando el valor decimal (número normal) de cada componente RGB, que tendrá un valor entre 0 y 255 (los mismos valores que podíamos indicar con 2 dígitos hexadecimales).

***
EJEMPLO:

```css
p {
  color: rgb(255, 0, 255);
}
```
***

Existe además la posibilidad de indicar un nivel de opacidad al color con el formato RGBA que añade el canal alpha o transparencia. Este último componente tiene valores decimales entre 0 (totalmente transparente) y 1 (totalmente opaco).

***
EJEMPLO:

```css
p {
  color: rgba(255, 0, 255, 0.7);
}
```
***

#### hsl y hsla

Igual que el RGB nos permite expresar colores a partir de sus componentes de color rojo/verde/azul, existe otro sistema, HSL, que nos permite expresarlos a través de H (hue - matiz), S (saturation - saturación), L (lightness - luminosidad). El matiz se expresa con un valor numérico y tanto saturación como luminosidad con un valor en %. En este caso, también existe la posibilidad de añadir un canal alpha para indicar transparencia.

***
EJEMPLO:

```css
p {
  color: hsl(300, 100%, 50%)
}

p {
  color: hsl(300, 100%, 50%, 0.7)
}
```
***

Para más información, consultad [la guía de colores de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

## BONUS: Usando fuentes de Google Fonts

Para utilizar fuentes tipográficas de un sitio externo como Google Fonts, tenemos que seguir 2 sencillos pasos:
1) Añadir una etiqueta link a nuestro body con un enlace que cargue la fuente

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Name">
```
2) Usar esta fuente desde nuestro CSS
```css
p{
  font-family: 'Font Name', serif;
}
```

#### ¿Cómo construimos la URL para enlazar la tipografía?

En la propia URL añadimos `family=` y escribimos el nombre de la tipografía a usar. Si tiene espacios, los sustituimos por `+`. Si queremos importar varias fuentes, podemos cargar todas en el mismo enlace a Google Fonts poniendo los nombres separados por `|`.

Ejemplo:
`https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans`

Para cada tipo de fuente se importa por defecto la fuente normal, pero puede que queramos usar la fuente con otro peso (como negrita) o estilo (como cursiva). Para esto, añadimos al final del nombre de la fuente `:` y separados por `,` los estilos o pesos extra que necesitemos. El peso puede expresarse también como valor numérico que indica el grosor (400 es normal, 700 es negrita).

Ejemplos:
```
https://fonts.googleapis.com/css?family=Tangerine:bold
https://fonts.googleapis.com/css?family=Tangerine:bold,italic
https://fonts.googleapis.com/css?family=Tangerine:400,700
```

Para más información consultad la [guía de inicio de Google Fonts](https://developers.google.com/fonts/docs/getting_started).

## BONUS: Paquetes de Atom que nos hacen la vida más fácil

Como estáis comprobando, el editor es una de las herramientas que más usamos en nuestro día a día. Conocer algunos paquetes y trucos nos harán la vida más fácil.

#### Live server

Cuando creamos una web, al final será "servida" por un servidor web en Internet para que todo el mundo pueda visitarla. Por tanto, es útil tener un servidor web local en nuestro ordenador de desarrollo. En Atom, contamos con el paquete [`atom-live-server`](https://atom.io/packages/atom-live-server), que nos permite lanzar un servidor web local desde una carpeta de nuestro ordenador y ejecutándose en un puerto concreto.

Por defecto, el servidor web se lanza con origen en la carpeta raíz que tengamos en nuestro proyecto actual. Como cualquier servidor web, busca en la raíz un fichero `index.html` como punto de entrada a la web. Si no lo encuentra, un servidor web real daría un error, pero live-server muestra una página que nos permite navegar por las subcarpetas de nuestro ordenador hasta llegar al html que queramos mostrar.

Cada vez que modifiquemos los ficheros usados en la web que estamos visualizando en el navegador con Live Server, ésta se recargará *automágicamente* en el navegador.

Para lanzar el servidor, podemos usar los shortcuts (`Ctrl + Alt + 3`, `Crtl + Alt + 4`, etc.) o mostrar el lanzador (`Ctrl + Shift + p`), buscar 'server' y dar Enter sobre la opción para lanzar el servidor. Si no le decimos lo contrario, el servidor se está ejecutando todo el rato en nuestro ordenador. Si cambiamos de proyecto o tenemos algún problema, es importante pararlo con `Ctrl + Alt + q` o también desde el lanzador.

#### Auto-indent

Desde el lanzador de comandos (`Ctrl + Shift + p`) podemos buscar una opción de auto-indent que hace que el fichero actual adquiera una indentación correcta. Como sabéis indentar el código es muy importante para su legibilidad y para que nuestros compañeros entiendan mejor nuestro código. Nos puede ayudar a encontrar fallos (por ejemplo, etiqueta no cerrada) que de otra manera nos llevarían mucho tiempo.

Podéis mirar más [info del paquete de auto-indent](https://atom.io/packages/auto-indent).

#### Emmet

Es un lenguaje abreviado para escribir HTML, que quizá hayáis conocido en codepen. También podemos usarlo en Atom, instalando [el paquete correspondiente](https://atom.io/packages/emmet).

El uso básico es escribir una porción de código en Emmet, que al finalizar se convierte (expande) a HTML usando una tecla (por defecto, la tecla `Tab`).


Con este lenguaje abreviado podemos por ejemplo conseguir:
- 4 párrafos con `p*4`
- un párrafo y una imagen escribiendo `p+img`
- un párrafo con una imagen dentro con una imagen con `p>img`
- un párrafo con clase main con `p.main`
- un div con clase container `.container`

Podéis aprender más en la propia [web de Emmet](https://emmet.io/).

## Recursos externos

#### Sobre el modelo de caja
- [Libro Introducción a CSS - 4. Modelo de cajas](https://librosweb.es/libro/css/capitulo_4.html)
- [Libro de Introducción a CSS - 4.1. Anchura y altura](https://librosweb.es/libro/css/capitulo_4/anchura_y_altura.html)

#### Sobre las DevTools

- [Explicación detallada sobre las DevTools](https://developers.google.com/web/tools/chrome-devtools/?hl=es)
- [Videos de las herramientas para desarrolladores de Chrome - inglés](http://discover-devtools.codeschool.com/chapters/1?locale=en)

*Nota:* Estos videos están en inglés y no poseen subtítulos pero son muy buenos. Están realizados por el propio equipo de Google que fué el que en su día desarrolló las herramientas que explican en los videos.

- [Shortcuts del inspector](https://developers.google.com/web/tools/chrome-devtools/shortcuts?hl=es)
- [Usando las herramientas de desarrollador](https://es.khanacademy.org/computing/computer-programming/html-css/web-development-tools/a/using-the-browser-developer-tools)

*Nota:* Los dos videos de esta sección del curso de Khan Academy se pueden abrir en Youtube. Si los abrís en Youtube, activar los subtítulos y cambiáis la configuración a Auto-translate, podréis ver el video sin problemas ya que el traductor funciona muy bien.
