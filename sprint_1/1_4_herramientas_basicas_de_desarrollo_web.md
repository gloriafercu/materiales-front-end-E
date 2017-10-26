# Herramientas básicas de desarrollo web

## Introducción
1. Devtools: pestaña html, estilos, modelo de caja, modo responsive.
2. Modificar elementos.
3. Atributo style.
4. Intro a terminal: path (., ..), cd, pwd, mkdir, touch, ‘atom .’, etc.

## Contenido

Vamos a ver dos herramientas fundamentales en el desarrollo web: las devtools y la terminal.

Con la primera aprenderemos a examinar/modificar elementos, un vistazo al responsive y qué es eso del atributo `style=""`.

La terminal parece muy agresiva al principio pero poco a poco le iremos pillando cariño. Te permite hacer prácticamente todo lo que puedes hacer con la interfaz gráfica del sistema operativo y bastantes cosas más.


## ¿Para qué sirve lo que vamos a ver en esta sesión?
### Devtools
Desde que aparecieron las Devtools en todos los navegadores decentes la vida del frontend es mucho más tranquila. Estas herramientas nos permite saber qué está pasando en un módulo concreto (medidas, posicionamiento, css aplicados) o qué está cargando nuestra web( hojas de estilos, imágenes, vídeos/audios, javascript).

### Terminal
Ahora mismo solo vamos a movernos por las carpetas y crear algún archivo pero más adelante será una herramienta fundamental al trabajar en grupo.

## Contenido
### Devtools: Inspector
El inspector es una herramienta de las herramientas de desarrollo de Chrome Dev Tools

#### ¿Cómo lo abrimos?

Para abrir el inspector tenemos varias opciones:
* Pulsando en el menú de tres botones de la derecha superior de Chrome > más herramientas > herramientas para desarrolladores
* Usar `Ctrl + Mayúscula + I` en Ubuntu o Windows y `Cmd + Opción + I`
* Pulsar con el botón derecho sobre un elemento de nuestra página y seleccionar la opción inspeccionar

#### Si queremos cerrarlo...

* Pulsamos en la cruz que aparece en la esquina superior derecha del panel.
* Usamos `Ctrl + Mayúscula + I` en Ubuntu o Windows y `Cmd + Opción + I` de nuevo

#### ¿Qué es?

* El inspector es una herramienta que viene con nuestro navegador y por tanto es parte de la aplicación del navegador, está incluida en prácticamente todos los navegadores más famosos (Chrome, Firefox, Safari, Internet Explorer…) y sirve para inspeccionar el código de nuestra página, consultar errores, ver los archivos que se están cargando, en general para investigar que esta haciendo el código de nuestra vez y poder modificar el resultado y su comportamiento. Nos permite hacer de cirujanos de la web, ver las tripas de la web y modificarlas a nuestro antojo
* El inspector nos permite indagar y modificar tanto en páginas que tengamos en nuestro ordenador cómo otras que estén publicadas internet. Cuando modifiquemos estas páginas no estaremos modificando las páginas como tal realmente, estaremos modificandolas temporalmente para ver qué sucedería si aplicamos ciertos cambios pero la web como tal, ya sea la de nuestro ordenador o la de internet, no va a verse modificada. Esos cambios serán temporales y una vez que recargemos la página se perderán y esta volverá a su estado inicial.

	Nos permite leer, añadir, editar o eliminar tanto CSS como HTML (y sus atributos) de nuestra página

#### ¿Para qué nos sirve?

Dado que nos permite controlar que está pasando con una web, podemos ver los recursos que se están cargando y cuales fallan, nos permite ver el código tanto de nuestra página para ver si está funcionando correctamente como de otras para ver cómo aplican ciertas técnicas o coger inspiración.

Por otro lado nos permite investigar que cambios queremos hacer sin guarrear nuestro CSS o HTML y corregir de forma más rápida y sencilla los errores de nuestro código.

	Podemos colocarlo arriba, abajo, a la derecha o sacarlo a una nueva ventana

* * *
EJERCICIO:
Entrar en [Wikipedia.org](Wikipedia.org) y:
* Cambiar el color de los enlaces a naranja
* Sobre los idiomas destacados que aparecen sobre la imagen de la pelota de Wikipedia, añadir uno falso
* Explicar cómo estan compuestos estos módulos de idioma
* Explicar cómo están colocados
* Examinar la versión de tablet de Wikipedia
* Examinar la versión de móvil de Wikipedia
* Averiguar las dimensiones de la caja de búsqueda y
	* Cuánto tiene de separación con el botón de buscar
	* ¿Qué hay de raro con esa separación?
* * *

### Devtools: Network
Sirve para ver que recursos carga nuestra página y ver si se ha producido algún error cargando esos recursos. Network muestra tanto las imágenes como otros recursos que se cargan (CSS, JavaScript, fuentes, etc.)

Network también muestra cuanto tarda en cargarse un elemento y qué tamaño tiene. De esta forma podemos saber también si hemos metido un recurso muy pesado y tarda mucho en cargarse.

Podemos seleccionar qué tipo de archivos queremos que se muestren y ver la dirección desde la que se están cargando esos archivos. Este último punto es fundamental, nos permitirá saber, en caso de que un archivo esté dando error, por qué esta fallando, ya que normalmente será porque hemos introducido una ruta (URL) erronea

Otro recurso muy interesante que nos ofrece Network es que nos permite ver cuantos segundos tarda en cargarse nuestra página y tomar capturas de pantalla de cada momento para simular que será lo que verá un usuario durante el momento de la carga.

* * *
EJERCICIO:
Entrar en [Wikipedia.org](Wikipedia.org) y
* Averiguar el peso total de la página principal de Wikipedia
* Averigual cuánto ha tardado en cargar la página
* Averiguar cuántas imágenes usa la página principla de Wikipedia
* * *

De momento veremos hasta ahí. Las herramientas para desarrolladores de Google Chrome ofrecen un sinfín de posibilidades más pero más adelante comenzaremos a ver recursos muy útiles para cuando trabajemos en otras áreas de nuestra página como JavaScript.


## Recursos externos

### Videos de las herramientas para desarrollores de Chrome

[CodeSchool DevTools Tutorial en inglés](http://discover-devtools.codeschool.com/chapters/1?locale=en)

**Nota:** Estos videos están en inglés y no poseen subtitulos pero son muy buenos, ya que están realizados por el propio equipo de Google que en su día desarrolló las herramientas que explican.

### Shortcuts del inspector

https://developers.google.com/web/tools/chrome-devtools/shortcuts?hl=es

### Usando las herramientas de desarrollador

[Herramientas web](https://es.khanacademy.org/computing/computer-programming/html-css/web-development-tools/a/using-the-browser-developer-tools)

**Nota:** Los dos videos de esta sección del curso de Khan Academy se pueden abrir en Youtube. Si los abrís en Youtube, activais los subtitulos y cambiais la configuración a Auto-translate, podréis ver el video sin problemas ya que el traductor funciona muy bien.

### Introducción a la Terminal y comandos básicos de GNU/Linux

- [Curso de introducción a GNU/Linux - ¿Qué es la Terminal? ](https://www.youtube.com/watch?v=5b7j-Keeokc)
- [Curso de introducción a GNU/Linux - Comandos Básicos](https://www.youtube.com/watch?v=esbup7hKv6E)



## Resumen de la sesión


## Ejercicios
