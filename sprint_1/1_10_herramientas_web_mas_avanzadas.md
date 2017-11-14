# Herramientas web más avanzadas

## Resumen

En esta sesión vamos a ver algunos conceptos y herramientas para desarrolladores web front-end que complementarán las que hemos visto hasta ahora.


### Colores

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

### Usando fuentes de Google Fonts

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

### Paquetes de Atom que nos hacen la vida más fácil

Como estáis comprobando, el editor es una de las herramientas que más usamos en nuestro día a día. Conocer algunos paquetes y trucos nos harán la vida más fácil.

#### Live server

Cuando creamos una web, al final será "servida" por un servidor web en Internet para que todo el mundo pueda visitarla. Por tanto, es útil tener un servidor web local en nuestro ordenador de desarrollo. En Atom, contamos con el paquete [`atom-live-server`](https://atom.io/packages/atom-live-server), que nos permite lanzar un servidor web local desde una carpeta de nuestro ordenador y ejecutándose en un puerto concreto.

Por defecto, el servidor web se lanza con origen en la carpeta raíz que tengamos en nuestro proyecto actual. Como cualquier servidor web, busca en la raíz un fichero `index.html` como punto de entrada a la web. Si no lo encuentra, un servidor web real daría un error, pero live-server muestra una página que nos permite navegar por las subcarpetas de nuestro ordenador hasta llegar al html que queramos mostrar.

Cada vez que modifiquemos los ficheros usados en la web que estamos visualizando en el navegador con Live Server, ésta se recargará *automágicamente* en el navegador.

Para lanzar el servidor, podemos usar los shortcuts (`Ctrl + Alt + 3`, `Crtl + Alt + 4`, etc.) o mostrar el lanzador (`Ctrl + Shift + p`), buscar 'server' y dar Enter sobre la opción para lanzar el servidor. Si no le decimos lo contrario, el servidor se está ejecutando todo el rato en nuestro ordenador. Si cambiamos de proyecto o tenemos algún problema, es importante pararlo con `Ctrl + Alt + q` o también desde el lanzador.

#### Git

Desde hace algunas versiones, Atom trae por defecto un paquete para integración con Git y GitHub que nos ayuda con las tareas de control de versiones de nuestro día a día.

En el explorador (menú de la izquierda), aparecen...
- de color amarillo los ficheros modificados desde el último commit local
- de color verde los ficheros nuevos respecto al último commit local

También en el panel principal, el editor del fichero que estamos editando, aparece a la izquierda del número de línea una franja de color
- amarillo para las líneas modificadas desde el último commit
- verde las líneas nuevas desde el último commit

Este paquete también facilita una herramienta gráfica para resolver conflictos, que ayuda a elegir la versión del código que nos interesa mantener.

Podéis leer más sobre las posibilidades de este paquete esta [web de GitHub](https://github.atom.io/).

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
