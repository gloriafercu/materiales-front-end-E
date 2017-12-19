# Sistemas de diseño

## Contenido

- [Introducción](#introducción)
- [¿Qué es un sistema de diseño?](#¿qué-es-un-sistema-de-diseño)
- [¿En qué casos se utiliza?](#¿en-que-casos-se-utiliza)
- [Convertir un sistema a código](#convertir-un-sistema-a-código)
  - [Colores](#colores)
  - [Tipografías](#tipografías)
  - [Clases de ayuda](#clases-de-ayuda)
- [Ejemplos de sistemas de diseño](#ejemplos-de-sistemas-de-diseño)

## Introducción

En esta sesión aprenderemos qué es un sistema de diseño, cómo convertir ese sistema a código mediante clases CSS y que podamos aplicarlo de forma sencilla sobre nuestra página web y a su vez nos facilite la tarea de maquetar y crear páginas y vistas mucho más rápido manteniendo una consistencia y coherencia en los estilos.


## ¿Qué es un sistema de diseño?

Un sistema de diseño es un conjunto de patrones y reglas que rigen el estilo de un producto de forma consistente y armoniosa.

En el caso de un sistema de diseño web, éste definirá los estilos para los componentes, por ejemplo como deben ser los estilos de los botones o los inputs así como los iconos.

A la hora de dar coherencia, el sistema deberá mantener sus estilos a lo largo de todos sus componentes de tal forma que la linea gráfica se mantenga a través de todos ellos. Por ejemplo, esto se suele ver claramente cuando tenemos una visión global de todos los componentes. En el momento que tenemos esa visión global, si el sistema es bueno, veremos una relación clara entre todos ellos y una coherencia en sus estilos.

Por último un sistema no sólo son estilos para nuestros componentes, sino que también define las reglas sobre cómo debe usarse, como los colores y cuándo usarlos, la tipografía y cuándo usar un tamaño u otro y los márgenes y paddings que se pueden aplicar.

La idea principal del sistema es que cualquiera que lo analice sepa con claridad cuales son sus reglas y cómo aplicarlas. De esta forma cualquier persona puede empezar a trabajar con él en muy poco tiempo, generar vistas que no parezcan sacadas de un estilo completamente distinto y todo esto de forma rápida y sencilla.

Y ahora pensarás «vale sí muy bien, pero sigues hablándome en chino, ¿podrías ponerme un ejemplo?». Sin duda, el ejemplo más claro y que todos hemos vivido y conocemos de primera mano es [Material Design](https://material.io/guidelines/material-design/introduction.html) de Google, que es el sistema que se utiliza para diseñar la mayoría de aplicaciones de Google y que muchas otras empresas han utilizado para diseñar las suyas propias.

Este sistema establece un [conjunto de reglas y principios](https://material.io/guidelines/), [estilos](https://material.io/guidelines/style) y [componentes](https://material.io/guidelines/components/#).

Durante esta sesión veremos cómo nos afecta esto de los sistemas a la hora de desarrollar páginas, aprenderemos técnicas para aplicarlos de forma sencilla y veremos los pros y los contras de usar este recurso.


## ¿En qué casos se utiliza?

Los sistemas de diseño hoy en día se utilizan tanto en sitios web simples con un par de páginas como en aplicaciones con más de 100 vistas diferentes. La diferencia entre un caso y otro es que en el primero definiremos una serie de reglas que serán bastante simples y tendremos pocos componentes y en el segundo habrá más de ambos.

Los sistemas también se utilizan si queremos dar consistencia a nuestra web, partir de una base sencilla y concisa de reglas para hacer crecer una web de forma rápida. O si queremos que a la hora de desarrollar la página estén claros los estilos y las reglas para no fallar en la implementación, es decir, que diseño y web sean similares.

Por último, si estamos diseñando una web muy sencilla en la que queremos darle un toque artístico o romper con la consistencia, se podrá prescindir de definir un sistema complejo pero siempre estarán ahí ciertas reglas que definan el estilo de nuestra web y los componentes que la conforman. Un ejemplo sería la nueva tendencia [brutalista](http://brutalistwebsites.com/) que hay en la web, cuya raíz es romper con la monotonía actual que se vive en las páginas web actuales en las que la mayoría tienen muchas similitudes entre sí.


## Convertir un sistema a código

Bien, ya tenemos una idea básica de qué es un sistema. Ahora vamos a ver cómo implementarlo en nuestro código. Para ello es bueno retomar la estructura que definimos en la sesión de [Sass](3_1_sass.md):

```
scss
  |- core
  |  |- _functions.scss
  |  |- _mixins.scss
  |  `- _variables.scss
  |
  |- components
  |  |- _buttons.scss
  |  |- _forms.scss
  |  |- _hero.scss
  |  |- _newsletter.scss
  |  `- _typography.scss
  |
  |- layout
  |  |- _header.scss
  |  |- _footer.scss
  |  |- _grid.scss
  |
  `- pages
     |- _about-us.scss
     |- _contact.scss
     `- _home.scss
```

Lo normal a la hora de pasar un sistema a código es empezar por los estilos generales. Estos estilos generales son entre otros los colores, la tipografía, la iconografía y el estilo que tendrán las imágenes. A la hora de programar, la iconografía y los estilos de las imágenes será algo que nos venga dado y en pocos casos tendremos que crear un estilos para ellas ya que nos pasarán imágenes para que las metamos directamente. Pero en desarrollo sí que podemos generar estilos para tipografía y colores.

### Colores

En esta caso, empezaremos por los colores de nuestra página. Imaginemos que tenemos la siguiente paleta de colores, extraída del [sistema de diseño de Carbon creado por IBM](http://carbondesignsystem.com/):

![Paleta de colores del sistema Carbon de IBM](assets/images/3-2/paleta-de-colores-carbon.png)

Para definir estos colores, lo que haremos será crear variables en `Sass` para cada uno de ellos, para esto hay dos formas distintas de crear las variables, usando un map (que sería similar a un objeto de JavaScript) o usando multiples variables:

```scss
/*
  Truco: En inglés sería 'primary color' pero ponemos la palabra 'color' delante para que a
  la hora autocompletar con Atom, escribamos $color y nos aparezcan las sugerencias
  para todos los colores existentes
*/

// Podríamos usar también $color-brand-1, $color01, etc. El que más claro nos sea

$color-primary: #3d70b2;
$color-secondary: #5596e6;
$color-tertiary: #41d6c3;

// Para ir del blanco al negro. Hemos excluido algunos colores porque así queda claro :)

$color-light: #ffffff; // Usamos light porque es blanco, pero puede ser un azul claro
$color-light-midtone: #dfe3e6;
$color-midtone: #8c9ba5;
$color-dark-midtone: #5a6872;
$color-dark: #152934;

/*
Para los colores de soporte. Lo normal es que haya cuatro:

  - Error (error): Suele ser rojo
  - Éxito (success): Suele ser verde
  - Precaución (warning): Suele ser amarillo
  - Informativo (info): Varía en color
*/

$color-error: #e71d32;
$color-success: #5aa700;
$color-warning: #efc100;
$color-info: #5aaafa;
```

Esa sería la opción de usar variables para definir los colores. Estas variables las generaremos en el archivo `core/_variables.scss` y luego las utilizaremos en otros archivos, para dar estilos a nuestra página. Por ejemplo, imaginemos que tanto para los enlaces como para los botones de nuestro formulario usamos el mismo color `$color-primary`, uno para el texto (enlace) y el otro para el fondo (botón).

![Botón de Carbon](assets/images/3-2/button.png)
![Link de Carbon](assets/images/3-2/link.png)

Utilizaríamos los siguientes estilos:

```scss
.link {
  color: $color-primary;
}

.button {
  background-color: $color-primary;
}
```

Que generarían este código CSS:

```css
.link {
  color: #3d70b2;
}

.button {
  background-color: #3d70b2;
}
```

Lo bueno de esta técnica es que si en el futuro nos da por cambiar el color que estamos usando por otro, sólo tendremos que cambiarlo en `$color-primary` y automáticamente cambiará en todos los sitios que lo utilicemos y nos sentiremos en la gloria.

Bien, la otra alternativa para usar colores es, como hemos dicho el map. De esta forma se el código quedaría así:

```scss
  $colors: (
    primary: #3d70b2,
    secondary: #5596e6,
    tertiary: #41d6c3,

    light: #ffffff, // Usamos light porque es blanco, pero puede ser un azul claro
    light-midtone: #dfe3e6,
    midtone: #8c9ba5,
    dark-midtone: #5a6872,
    dark: #152934,

    error: #e71d32,
    success: #5aa700,
    warning: #efc100,
    info: #5aaafa
  );
```

Y para utilizarlo en nuestro CSS, utilizariamos la función [`map-get`](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method) que sería como una función de JavaScript y lo que hace es que nos devuelve el valor asignado a una propiedad dentro de un objeto de Sass:

```scss
.button {
  background-color: map-get($colors, 'primary');
}
```

Que generaría este código CSS:

```css
.button {
  background-color: #3d70b2;
}
```

* * *

EJERCICIO 1: COLORES

Vamos a descargarnos el [ejercicio de evaluación del primer sprint de Adalab](https://github.com/Adalab/clarke-s1-evaluacion).

A continuación, vamos a reestructurar el archivo siguiendo la estructura que hemos aprendido para organizar nuestros archivos de Sass. Por ejemplo, crearemos un archivo en la ruta `scss/layout/_header.scss` donde meteremos los estilos de la cabecera.

Además, crearemos un archivo `scss/core/_variables.scss` donde crearemos variables para cada uno de los colores que hemos utilizado y sustituiremos después cada una de las ocurrencias del color que tengamos en CSS por el nombre de la variable de Sass que hemos creado.

Para finalizar, vamos a cambiar los colores que tenemos por los de esta página: http://flatuicolors.com/. Sustituiremos el turquesa que tenemos actualmente en la web por el turquesa de FlatUIColors y el negro por el Wet Asphalt.

>NOTA: Si hemos realizado bien el código, cada uno de estos cambios de color lo podremos llevar a cabo cambiando sólo una línea

* * *


### Tipografía

Con la tipografía pasa lo mismo que con los colores. Al final tenemos un estilo tipográfico que usaremos en nuestra página y definiremos aspectos como el tamaño de fuente para el cuerpo de nuestra página, el estilo de fuente, los pesos y otro tipo de configuraciones en nuestro archivo `_variables.scss`:

```scss
// Después de colores para poder usar las variables de los colores (e.g. $color-dark)

$font-family: 'Geori', sans-serif;
$font-size: 16px;
$line-height: 1.5;
$font-color-base: $color-dark; // o map-get($colors, 'dark')
$font-color-light: $color-light;  // o map-get($colors, 'dark')
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
```

Aquí también podríamos usar un map:

```scss
$font: (
  family: 'Geori', sans-serif,
  size: 16px,
  line-height: 1.5,
  color-base: $color-dark, // o map-get($colors, 'dark')
  color-light: $color-light,  // o map-get($colors, 'dark')
  weight-light: 300,
  weight-normal: 400,
  weight-medium: 500
);
```

En el caso de las tipografías, aparte de añadir variables a `_variables.scss`, lo normal suele ser definir una serie de clases que utilizaremos a lo largo de toda nuestra web y que nos servirán para definir el tamaño de nuestros textos, los pesos, la alineación, etc. Todos estos estilos los incluiremos en el archivo `_typography.scss`.

Un ejemplo de como quedaría el archivo de `_typography.scss` sería el siguiente:

```scss
body {
  font-family: $font-family; // o map-get($font, 'family') y así
  color: $font-color-base;
  font-size: $font-size;
  line-height: $line-height;
  font-weight: $font-weight-normal;

  // Definimos el texto para pantallas grandes
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 1.68;
  }
}

// Distintos tamaños de texto

.txt-sm {
  font-size: 14px;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 1.68;
  }
}

.txt-md {
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1.68;
  }
}

.txt-lg {
	font-size: 20px;
  line-height: 1.6;

  @media (min-width: 1024px) {
    font-size: 26px;
    line-height: 1.4;
  }
}

.txt-xl {
	font-size: 20px;
  line-height: 1.2;

  @media (min-width: 1024px) {
    font-size: 54px;
    font-weight: $font-weight-light;
  }
}

// Clases de ayuda para alinear texto

.txt-center { text-align: center; }
.txt-left { text-align: left; }
.txt-right { text-align: right; }

// Clases de ayuda para cambiar el color de texto

.txt-primary { color: $color-primary; }
.txt-light { color: $color-light; }
.txt-dark { color: $color-dark; }


// Clases de ayuda para cambiar el estilo de texto

.italic  { font-style: italic; }
.light { font-weight: $font-weight-light; }
.normal { font-weight: $font-weight-normal; }
.medium { font-weight: $font-weight-medium; }

// Clases de ayuda para cambiar mayúsculas en el texto

.uppercase { text-transform: uppercase; }
```

Creando estos estilos podremos reutilizarlos simplemente para dar estilo a nuestra página y componer varias clases para añadir varios estilos. Lo que conseguimos con esto es que llegados a un punto en el que hemos creado todos los estilos para nuestra tipografía, nuestra única tarea a la hora de dar estilos a nuestra web será asignar clases en nuestro HTML.

```html
<h1 class="txt-xl">Título</h1>
<p class="txt-primary medium">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<small class="txt-sm txt-center"></small>
```

* * *

EJERCICIO 2: TIPOGRAFÍA

Vamos a crear un nuevo proyecto en el que tendremos solo tres archivos `scss`:

- `scss/main.scss`
- `scss/_varibles.scss`
- `scss/_typography.scss`

A continuación, siguiendo lo aprendido en esta lección, vamos a añadir al archivo de `_typography.scss` clases para cada uno de los tamaños de fuente que aparece en [esta página](https://design.trello.com/style/typography) y cada uno de los colores.

Además, asignaremos a `body` los estilos que consideremos necesarios pero usando la siguiente fuente en vez de Helvetica:

`"Lucida Sans Unicode", "Lucida Grande", sans-serif`

* * *

### Componentes

En este apartado veremos en clase como trabajar con componentes. Dejamos por aquí un código de ejemplo.

```scss
$color-dark: #161616;
$color-ocean: #416dea;
$color-grass: #3dd28d;
$color-snow: #FFFFFF;
$color-salmon: #F32C52;
$color-sun: #feee7d;
$color-alge: #7999a9;
$color-flower: #353866;
$color-smoke: #e4e4e4;
$font-face: sans-serif;

.button {
  display: inline-block;
  margin: 10px;
  padding: 12px 12px;
  cursor: pointer;
  text-align: center;
  text-transform: capitalize;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    -webkit-transition: all 150ms linear;
    transition: all 150ms linear;
    opacity: .85;
  }
  &:active {
    -webkit-transition: all 150ms linear;
    transition: all 150ms linear;
    opacity: .75;
  }
  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
}

.btn-default {
  color: #202129;
  background-color: #f2f2f2;

  &:hover {
    color: #202129;
    background-color: #e1e2e2;
    opacity: 1;
  }
  &:active {
    background-color: #d5d6d6;
    opacity: 1;
  }
}

.btn-success {
  color: $color-snow;
  background: $color-grass;
}

.btn-error {
  color: $color-snow;
  background: $color-salmon;
}

.btn-warning {
  color: black;
  background: $color-sun;
}


```

* * *

EJERCICIO 3: Nuestro componente input

En este ejercicio vamos a crear los estilos para un componente input. Este componente, como se puede ver en la imagen tendrá distintos estados (activo, hover, etc.) y distintos formatos (con icono a la derecha y con icono a la izquierda)

![Inputs](assets/images/3-2/inputs.png)

A continuación generaremos un HTML en el que probaremos que funciona cada uno de los estados y cada una de las variantes. La idea es que usando un HTML como el siguiente los estilos se apliquen correctamente:

```html
<div class="input-w-icon">
  <img src="images/user.png" alt="Usuario">
  <input type="text" name="username">
</div>

<input class="input" type="text" name="lastname" >
<input class="input" type="number" name="creditcard" disabled>
```


>NOTA: No es necesario que los estilos sean idénticos a los que aparecen en la foto, pero si deben de estar definidos los estilos para cada uno de los estados y para cada una de las variaciones

* * *

### Clases de ayuda

A la hora de generar el CSS para crear un sistema es muy común crear clases que sirvan de ayuda para aplicar estilos en determinados casos. Estas clases suelen ir definidas en un archivo llamado `_helpers.scss` o `_utilities.scss` y suele ser el último archivo que se importa desde nuestro `main.scss` para que así las clases que definamos en éste archivo prevalezcan frente al resto por la regla de la cascada de CSS.

Un ejemplo del código que podríamos encontrar en este archivo sería el siguiente:

```scss
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }

// Esta clase es muy útil cuando queremos colocar un elemento en posición absoluta

.relative { position: relative; }

// Esta clase es la solemos usar con JavaScript para ocultar o mostrar un elemento
.hidden { display: none; }
.hide-sm { @media (max-width: 1023px) { display: none; } }
.hide-lg { @media (min-width: 1024px) { display: none; } }

.m-xs { margin: 16px; }
.m-md { margin: 24px; }
.m-lg { margin: 32px; }
.m-xl { margin: 40px; }
.m-xs { margin: 16px; }
.m-md { margin: 24px; }
.m-lg { margin: 32px; }
.m-xl { margin: 40px; }

.m-bottom-xs { margin-bottom: 16px; }
.m-bottom-md { margin-bottom: 24px; }
.m-bottom-lg { margin-bottom: 32px; }
.m-bottom-xl { margin-bottom: 40px; }
.m-top-xs { margin-top: 16px; }
.m-top-md { margin-top: 24px; }
.m-top-lg { margin-top: 32px; }
.m-top-xl { margin-top: 40px; }

.p-xs { padding: 16px; }
.p-md { padding: 24px; }
.p-lg { padding: 32px; }
.p-xl { padding: 40px; }
.p-xs { padding: 16px; }
.p-md { padding: 24px; }
.p-lg { padding: 32px; }
.p-xl { padding: 40px; }

.p-bottom-xs { padding-bottom: 16px; }
.p-bottom-md { padding-bottom: 24px; }
.p-bottom-lg { padding-bottom: 32px; }
.p-bottom-xl { padding-bottom: 40px; }
.p-top-xs { padding-top: 16px; }
.p-top-md { padding-top: 24px; }
.p-top-lg { padding-top: 32px; }
.p-top-xl { padding-top: 40px; }
```

Luego a la hora de usarlo será algo tan simple como esto:

```html
<div class="hide-lg">
  <p>Solo aparezcon en pantallas pequeñas</p>
</div>

<div class="p-lg m-top-lg">
  <p class="">Tengo un margen superior grande</p>
</div>
```


## Ejemplos de sistemas de diseño

Para finalizar y para que sirva de inspiración hemos recogido algunos de los sistemas que consideramos que están mejor resueltos. Estos sistemas de diseño están enfocados a web y por tanto en la documentación muestran los nombres de las clases que utilizan y las distancias en píxeles y sirven para inspirarse y ver cómo trabajan en empresas que destacan en el sector tecnológico.

- [Purple de Heroku](https://purple.herokuapp.com/)
- [Sistema de Mailchimp](http://ux.mailchimp.com/patterns)
- [Nachos: Sistema de diseño de Trello](https://design.trello.com/)

* * *

(BONUS) EJERCICIO 4: UN SISTEMA COMPLETO

A partir de la siguiente imagen. Crea el HTML y los archivos de Sass necesario para replicar los estilos y generar un sistema a partir de lo visto. Utiliza variables para los tamaños de fuente, los colores, los radios de los botones, etc. por si se decide cambiar en el futuro. No importa si no es exacto el color o el radio del borde.

La tipografía es Roboto Slab y puedes obtenerla de Google Fonts.

![Botón de Carbon](assets/images/3-2/ui.png)

* * *
