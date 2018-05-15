# Intro a la web

<!-- TOC START min:2 max:2 link:true update:true -->
- [Cómo funciona la web](#cmo-funciona-la-web)
- [HTML Y CSS](#html-y-css)
- [Índice](#ndice)
- [El gazpacho andaluz](#el-gazpacho-andaluz)
- [Composición del gazpacho actual](#composicin-del-gazpacho-actual)
- [Notas finales sobre cómo organizar nuestro proyecto](#notas-finales-sobre-cmo-organizar-nuestro-proyecto)

<!-- TOC END -->

## Cómo funciona la web

Internet es algo que utilizamos de forma cotidiana ya sea para consultar información, hacer una reserva, comprar entradas o mandar a tu grupo de toda la vida el vídeo del pingüino que le da una colleja al otro pingüino. ¿Y cómo funciona por dentro? Pues al final de todo son dos ordenadores que se comunican, uno hace de cliente y el otro de servidor.

La respuesta corta a **cómo funciona Internet** es que funciona conectando dos ordenadores, un servidor y un cliente.

**El servidor** es un ordenador permanentemente encendido y que contiene una cantidad de información.

**El cliente** es nuestro ordenador o dispositivo (tablet/móvil/etc…) y desde él nos conectamos al servidor para acceder a la información que estamos buscando.

La respuesta más en detalle es que Internet es una red de ordenadores conectados con un cable, un cable muy tocho, pero un cable al fin y al cabo. Estos ordenadores se llaman servidores y, entre todos, tienen almacenada toda la información y archivos disponibles (documentos, música, películas… ).
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
    * De manera opcional pueden contener *subdominios*, que es un nombre especial que se usa para identificar diferentes partes del dominio, por ejemplo, un blog: `https://blog.twitter.com`. Muchas direcciones usan las tres w como subdominio, y podríamos decir que `www` es un subdominio que viene por defecto.
* **directorio y nombre de archivo**: si no especificamos nada más que protocolo y dominio, `https://google.es` en el navegador se nos mostrará la página que esté indicada por defecto, pero podemos pedir un archivo en concreto y que puede estar dentro de una serie de carpetas (recordemos que el servidor, al final, es un ordenador:

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


## HTML Y CSS
La base de una página web es el HTML y el CSS. Con HTML escribes el contenido de la página y con CSS modificas el aspecto que va a tener.

### HTML
HTML es un lenguaje de marcado, es una forma de codificar un documento que, junto con el texto, incorpora etiquetas o marcas que contienen información adicional acerca de su estructura: si es un título, un enlace o un párrafo, por ejemplo.

Un elemento HTML suele estar formado por dos etiquetas, una de apertura y una de cierre, entre esas etiquetas colocaremos el contenido, que podrá ser texto y/o otra/s etiquetas HTML. Las etiquetas de apertura pueden incluir unos modificadores que se llaman atributos y que modifican el comportamiento por defecto del elemento o aportan información extra:

Con el atributo "lang" indicamos que este párrafo está en español:

```html
<p lang="es">Párrafo</p>
```

    Nota:
    Hay una serie de elementos HTML que no necesitan etiqueta de cierre, los veremos más adelante.

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

    NOTA: Atom (y la mayoría de editores de código) ya guardan los documentos en `utf-8` por defecto. Esto es más algo a comprobar ;).

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
<h1>Encabezado de nivel 1</h1>
<h2>Encabezado de nivel 2</h2>
<h3>Encabezado de nivel 3</h3>
<h4>Encabezado de nivel 4</h4>
<h5>Encabezado de nivel 5</h5>
<h6>Encabezado de nivel 6</h6>
```

#### Párrafo
Con la etiqueta `<p>` definiremos una etiqueta del tipo párrafo e indicaremos que su contenido va a ser un párrafo de texto.

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```


#### Lista de elementos
En algún momento vamos a necesitar añadir una serie de elementos e indicar que están relacionados: tenemos las listas ordenadas `<ol>` y las desordenadas `<ul>`.

```html
<ol>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
</ol>

<ul>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
    <li>Elemento de la lista</li>
</ul>
```
La lista ordenada produce una lista numerando cada ítem por orden de escritura y la desordenada añade un símbolo (por defecto pinta un círculo) delante de cada elemento de la lista, también por orden de escritura.

* * *
EJERCICIO 1

Con estos elementos vamos a crear nuestra primera página:

# GAZPACHO

El **gazpacho** es una sopa fría con ingredientes como el aceite de oliva, vinagre y hortalizas crudas: generalmente tomates, pepinos, pimientos, cebollas y ajo.

Suele servirse fresco en los meses calurosos de verano. Su color varía desde el anaranjado pálido al rojo, según se empleen tomates más o menos maduros (que aportan un colorante natural denominado licopeno).​ El origen del actual gazpacho es incierto, aunque tradicionalmente se le ha considerado un plato del interior de Andalucía, donde el aceite de oliva y los productos de la huerta son abundantes, y los veranos muy secos y calurosos.​ Por esta razón se le conoce comúnmente como **gazpacho andaluz**. A pesar de ello el origen del gazpacho como plato "desmigado" es anterior al uso de hortalizas en su elaboración y data de la época del al-Ándalus.​
## Índice
1. El gazpacho andaluz
2. Composición del gazpacho actual
	1. Ingredientes

## El gazpacho andaluz
El gazpacho denominado andaluz por su popularidad, suele ser definido por algunos autores culinarios como una mezcla entre sopa y ensalada. En la actualidad se lo emplea como un refresco en la mayoría de las ocasiones, el cual es servido por regla general en verano. Suele servirse fresco como una bebida/comida de aromas agradables y reconfortantes. Si bien no está demostrado, hay autores que sospechan su origen en Sevilla. Se denomina andaluz por haber trascendido así al resto de regiones de España y del mundo, pero en Andalucía se toman gazpachos blancos (un ejemplo es el gazpacho blanco cordobés) que no contienen tomate, y gazpachos rojos que sí los tienen. Los gazpachos rojos se elaboran en Andalucía Occidental, los blancos en Málaga, Córdoba y Granada y los verdes en Sierra Morena y Sierra de Huelva.

## Composición del gazpacho actual
El gazpacho dispone de unas características organolépticas peculiares de sabor, aroma y color debido a la variedad de verduras que lo componen. El gazpacho andaluz emplea como ingredientes un conjunto de cinco hortalizas, que pueden variar en proporción según los gustos de la localidad, del cocinero o de la familia.

### Ingredientes

* **Tomates**, deben ser bien maduros para que aporten dulzura, antes eran sólo posibles en otoño, pero en la actualidad con el desarrollo de invernaderos y del transporte desde otras latitudes, es posible tener tomates curados casi durante todo el año. Esta hortaliza es la que brinda el color rojo al gazpacho debido a su contenido en licopeno (colorante natural en la piel y carne del tomate). Su exclusión o inclusión como ingrediente hace que se hable de "gazpachos blancos" o de "gazpachos rojos", respectivamente. En algunos períodos de escasez se ha empleado pimentón en lugar del tomate para lograr el color rojo.
* **Pimientos** (rojos o verdes). El pimiento es una verdura que proporciona frescura y sabores con ligeros toques agrios, en España esta variedad de pimientos no es picante.
* **Ajo**, el ajo en pequeñas cantidades proporciona un aroma característico, dependiendo de los gustos se añade más o menos. Una de las funciones en el gazpacho es la emulgente entre el aceite de oliva y las hortalizas.
* **Pan** se emplea para aumentar volumen o espesar, pero si se emplea se reduce el carácter de bebida refrescante. En su elaboración tradicional suele emplearse restos de pan duro que habitualmente se remojan en agua.

Hay dos ingredientes que aparecen en casi todas las recetas actuales, incluidas las de notables "chefs". Estos son el pepino y la cebolla. Que si bien no se incluyen en la sopa básica, se pueden aportar como acompañamiento en forma de picada.

* **Pepino**, el pepino se lleva bien con el vinagre Su sabor es fuerte y su proporción es una medida a tener en cuenta por el gazpachero. Cuando su elaboración no incluye pepino se suele tildar de "gazpacho suave". Tanto las propiedades del pepino, como las del vinagre y las del agua fría, aliviaban la sed de los segadores que trabajaban en largas jornadas, bajo condiciones de temperatura extremas y con el único alimento durante el día de su gazpacho.
* **Cebollas**, en las recetas suele ponerse una cierta cantidad. Proporciona saborizantes naturales.
Aunque existe la posibilidad de emplear zanahorias, es una costumbre poco habitual.

El aceite de oliva, vinagre, agua y sal son el resto de ingredientes. Suelen emplearse los de mejor calidad, bien conocido es el refrán popular «Con mal vinagre y peor aceite, buen gazpacho no puede hacerse».
* * *

#### BONUS
Con estos enlaces puedes conocer otros elementos HTML, aunque los iremos viendo más adelante:

* [Lista de elementos html | MDN](https://developer.mozilla.org/es/docs/HTML/HTML5/HTML5_lista_elementos)
* [(Inglés) Lista de elementos html | html5doctor ](http://html5doctor.com/#glossary)

### CSS
La maquetación web tiene mucha relación con la maquetación en papel de toda la vida, donde se utilizan los estilos para definir la apariencia que tendrá un cierto contenido.

En la web tenemos CSS (del inglés "Cascading Style Sheets" o, en español, "Hojas de estilo en cascada") que es un lenguaje de estilos para definir la presentación de un documento escrito en un lenguaje de marcado, como HTML.

CSS tiene una sintaxis simple, y usa un conjunto de palabras clave en inglés para especificar los nombres de varias propiedades de estilo.

**¿Y lo de "en cascada"?** Eso hace referencia al proceso de combinación y aplicación de estilos en CSS y cómo se resuelven los conflictos entre ellos, pero eso lo veremos más adelante.

Entonces, en una hoja de estilos CSS tendremos un conjunto de reglas que dirán cómo se tienen que mostrar nuestros elementos. Supongamos que partimos de nuestro ejercicio anterior, donde tenemos maquetado un documento simple, y queremos cambiar el color y el tamaño de letra o el color de fondo de nuestra página.

Para esto tenemos las propiedades:

* `color: green` -> pone el color del texto a verde
* `font-size: 18px` -> pone el tamaño de letra a 18px
* `background-color: yellow` -> pone el color de fondo de color amarillo

Vamos a decirle a nuestro encabezado `<h1>` que se muestre de color azul y a 20px de tamaño.

```CSS
h1 {
    color: blue;
    font-size: 20px;
}
```

Para aplicar estilos a uno o varios elementos de nuestra web, la estructura que debemos utilizar es la siguiente:

- Escribiremos el nombre de un selector, que es un texto que hace referencia a un elemento HTML, como por ejemplo, `h1` que hace referencia a la etiqueta `h1`.
- A continuación añadiremos unas llaves
- Dentro de esas llaves escribiremos los atributos CSS, estos son un conjunto de reglas formadas por una clave y un valor, separados por `:` y acabados en `;`. Estas reglas son las que definirán los estilos que aplicaremos al selector que hemos definido previamente.

**Nota:** Como norma general escribiremos un espacio después de los dos puntos `:` en cada atributo CSS para facilitar la lectura del código. Esta es una práctica muy típica y se lleva a cabo en muchas de las empresas de programación.

Para el selector se puede usar:

* La etiqueta del elemento html (`h1`, `p`, `ul`, etc.)
* Un atributo del elemento html, hay dos especiales que se usan para esto: el id y la clase (los veremos más adelante).
* Otros selectores más avanzados que iremos viendo poco a poco

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
        font-family: Arial, sans-serif;
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

Bueno, es una de las opciones, pero desde hace unos años, intentamos separar el contenido de la presentación vamos a pasar nuestros estilos siempre a un archivo externo que estará enlazado desde nuestra página HTML.
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

**style.css**

```CSS
h1 {
    color: blue;
    font-family: Arial, sans-serif;
    font-size: 20px;
}
```

Al abrir nuestra web en un navegador, la etiqueta link indica al navegador que debe buscar y aplicar los estilos de la hoja de estilos enlazada, en este caso `style.css`.

* * *
EJERCICIO 2

Añadir hoja de estilos al ejercicio anterior donde:
- El color de fondo de la página tiene que ser #f3f4f5
- El título tiene que tener asignado un tipo de letra Arial a 24px de tamaño y color de texto black.
- Para el texto de los párrafos, tendremos que usar la fuente Georgia a 18px de tamaño y color de texto #757575.
* * *

## Notas finales sobre cómo organizar nuestro proyecto
A la hora de organizar los archivos y carpetas de un proyecto es normal fijar unas pequeñas normas que pueda seguir todo el equipo de manera que no sea un caos de archivos y cualquier persona del equipo pueda orientarse rápidamente en el proyecto y/o seguirlo.

No hay una manera "buena" y cada empresa tiene las suyas. Como norma: es más importante tener unas normas que tener unas normas en concreto.
Para este curso vamos a plantear unas que dan bastante buen resultado para empezar. Aquí van:

* Los nombres de archivo irán siempre en minúsculas, sin tildes y sin caracteres especiales
* Usaremos guiones para separar palabras: `baby-kangaroo.png`
* Usaremos [rutas relativas](https://es.wikipedia.org/wiki/Ruta_(informatica)#Ruta_relativa) siempre
* Los nombres de archivo siempre en inglés: `rainy-and-windy-day.png`
* Los archivos de estilos se llamarán `style.css` o `main.css`
* El archivo HTML principal se llamará `index.html`

Para la estructura del proyecto usaremos estas carpetas:
```
project-name
|- images
|- scripts
`- styles
```
