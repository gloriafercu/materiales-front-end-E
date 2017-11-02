# Herramientas básicas de desarrollo web

## Contenido

1. Devtools: pestaña html, estilos, modelo de caja, modo responsive.
2. Modificar elementos.
3. Atributo style.
4. Introducción a la terminal: path (., ..), cd, pwd, mkdir, touch, ‘atom .’, etc.


## Introducción

Vamos a ver dos herramientas fundamentales en el desarrollo web: las devtools y la terminal.

Con la primera aprenderemos a examinar/modificar elementos, un vistazo al responsive y qué es eso del atributo `style=""`.

La terminal parece muy agresiva al principio pero poco a poco le iremos pillando cariño. Te permite hacer prácticamente todo lo que puedes hacer con la interfaz gráfica del sistema operativo y bastantes cosas más.


## ¿Para qué sirve lo que vamos a ver en esta sesión?
### Devtools
Desde que aparecieron las Devtools en todos los navegadores decentes, la vida del frontend es mucho más tranquila. Estas herramientas nos permiten saber qué está pasando en un módulo concreto (medidas, posicionamiento, css aplicados) o qué está cargando nuestra web (hojas de estilos, imágenes, vídeos/audios, javascript).

### Terminal
Ahora mismo solo vamos a movernos por las carpetas y crear algún archivo pero más adelante será una herramienta fundamental al trabajar en grupo y con control de versiones.

## Contenido
### Devtools: Inspector
El inspector es una de las muchas herramientas de desarrollo que incluye el navegador web Google Chrome. Este grupo de herramientas recibe el nombre de Chrome DevTools.

#### ¿Cómo lo abrimos?

Para abrir el inspector tenemos varias opciones:
* Pulsando en el menú de tres botones de la derecha superior de Chrome > más herramientas > herramientas para desarrolladores
* Usar `Ctrl + Mayúscula + I` en Ubuntu o Windows y `Cmd + Opción + I` en Mac
* Pulsar con el botón derecho sobre un elemento de nuestra página y seleccionar la opción inspeccionar

#### Si queremos cerrarlo...

* Pulsamos en la cruz que aparece en la esquina superior derecha del panel.
* Usamos `Ctrl + Mayúscula + I` en Ubuntu o Windows y `Cmd + Opción + I` en Mac de nuevo

#### ¿Qué es?

* El inspector es una herramienta que viene con nuestro navegador y por tanto es parte de la aplicación del navegador, está incluida en, prácticamente, todos los navegadores más famosos (Chrome, Firefox, Safari, Internet Explorer…) y sirve para leer, añadir, editar o eliminar tanto CSS como HTML (y sus atributos) de nuestra página. Con él haremos de cirujanos de la web, veremos sus tripas y las modificaremos a nuestro antojo.
* El inspector nos permite indagar y modificar tanto en páginas que tengamos en nuestro ordenador como otras que estén publicadas en Internet. Cuando modifiquemos estas páginas no estaremos modificando las páginas como tal realmente, estaremos modificandolas temporalmente para ver qué sucedería si aplicamos ciertos cambios pero la web como tal, ya sea la de nuestro ordenador o la de internet, no va a verse modificada. Esos cambios serán temporales y una vez que recarguemos la página se perderán y ésta volverá a su estado inicial.


#### ¿Para qué nos sirve?

Dado que nos permite controlar qué está pasando con una web, podemos ver los recursos que se están cargando y cuáles fallan. Nos permite ver el código tanto de nuestra página, para ver si está funcionando correctamente, como de otras, para ver cómo aplican ciertas técnicas o coger inspiración.

Por otro lado nos permite investigar qué cambios queremos hacer sin guarrear nuestro CSS o HTML y corregir de forma más rápida y sencilla los errores de nuestro código.

Por ejemplo, podemos ver información del modelo de caja:
![HTML y Moodelo de caja en las DevTools](assets/html-inspector-modelo-de-caja.png)

Podemos colocarlo arriba, abajo, a la derecha o sacarlo a una nueva ventana.

* * *
EJERCICIO:
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
EJERCICIO:
Entrar en [Wikipedia.org](Wikipedia.org) y
* Averiguar el peso total de la página principal de Wikipedia
* Averiguar cuánto ha tardado en cargar la página
* Averiguar cuántas imágenes usa la página principal de Wikipedia
* * *

De momento veremos hasta ahí. Las herramientas para desarrolladores de Google Chrome ofrecen un sinfín de posibilidades más pero iremos viendo cada una en el momento en el que la necesitemos.


### Terminal

#### Introducción a la Terminal y comandos básicos de GNU/Linux

- [Curso de introducción a GNU/Linux - ¿Qué es la Terminal? ](https://www.youtube.com/watch?v=5b7j-Keeokc)
- [Curso de introducción a GNU/Linux - Comandos Básicos](https://www.youtube.com/watch?v=esbup7hKv6E)

* * *
EJERCICIO:
Ir a nuestra carpeta de documentos y crear la siguiente estructura de carpetas y archivos (vacíos):
```txt
nombre
    datos
        mis-datos.txt
    proyecto
        ruta-del-proyecto.txt
```
- En el archivo **mis-datos.txt** vamos a escribir el Nombre y la comida favorita.
- En el archivo **ruta_del-proyecto.txt** pondremos la ruta del nuestro proyecto desde nuestra carpeta de `Documentos`
- Mover los dos archivos a la carpeta principal, que sería **nombre**
* * *

## Recursos externos

### Más información sobre las DevTools

[Explicación detallada sobre las DevTools](https://developers.google.com/web/tools/chrome-devtools/?hl=es)

### Videos de las herramientas para desarrolladores de Chrome

[CodeSchool DevTools Tutorial en inglés](http://discover-devtools.codeschool.com/chapters/1?locale=en)

**Nota:** Estos videos están en inglés y no poseen subtítulos pero son muy buenos. Están realizados por el propio equipo de Google que fué el que en su día desarrolló las herramientas que explican en los videos.

### Shortcuts del inspector

https://developers.google.com/web/tools/chrome-devtools/shortcuts?hl=es

### Usando las herramientas de desarrollador

[Herramientas web](https://es.khanacademy.org/computing/computer-programming/html-css/web-development-tools/a/using-the-browser-developer-tools)

**Nota:** Los dos videos de esta sección del curso de Khan Academy se pueden abrir en Youtube. Si los abrís en Youtube, activar los subtítulos y cambiáis la configuración a Auto-translate, podréis ver el video sin problemas ya que el traductor funciona muy bien.


## Resumen de la sesión

El navegador Google Chrome nos ofrece una serie de herramientas llamadas Chrome Dev Tools que nos permiten obtener información sobre la página actual que tenemos y realizar pruebas y modificaciones sobre ella. Estas herramientas son las siguientes:

- El inspector. Nos permite ver el código de la página y los estilos que tiene aplicados a la vez que nos ofrece la posibilidad de modificarlo y cambiar los elementos de la web de sitio
- La herramienta Network. Muestra cuales son los recursos que carga la web actual, su peso y el tiempo que necesita para cargarlos. Además nos mostrará errores en caso de que algún recurso no pueda ser cargado debido a un error.

La terminal es una herramienta fundamental para el desarrollo front-end. Su finalidad es ejecutar comandos mediante instrucciones. Estos comandos serían similares a las interacciones que haríamos en una aplicación normal (clics, escribir en campos, cambiar de sección, etc.) pero en este caso se hacen escribiendo órdenes en la ventana. Muchas de las herramientas para programación están hechas sin interfaz por ser más sencillas, aprender a usar la terminal nos ayudará en el futuro a poder usar esas herramientas y mejorar nuestro flujo de trabajo gracias a ellas.


* * *
EJERCICIO:
Desde la terminal, vamos a crear un nuevo proyecto en nuestra carpeta de proyectos que se llame **Rutas relativas**, con las carpetas `images` y `styles`. Y los archivos index.html (en la raíz del proyecto), style.css (en la carpeta styles) y imagen-de-prueba.png (os la proporcionaremos por classroom e irá dentro de la carpeta images).

Ahora, en index.html se tiene que ver la imagen de dos formas:
1. Con un `<img>`
2. Como fondo de un div del mismo tamaño que la imagen

¿Cómo es la ruta de ambas imágenes? ¿Absoluta? ¿Relativa?
¿Es diferente en los dos casos? ¿por qué?
* * *
