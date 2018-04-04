# Automatización de tareas

## Contenidos

- [Introducción](#introducción)
- [¿En qué casos se utiliza?](#¿en-qué-casos-se-utiliza)
- [Gulp](#gulp)
- [Recursos externos](#recursos-externos)


## Introducción

En esta sesión usaremos herramientas para automatización de tareas en nuestro flujo de trabajo en front-end. Estas herramientas son muy útiles porque nos ayudarán a ser más eficientes en nuestro trabajo y nos ahorrarán tareas repetitivas.

> **NOTA:**  
> En esta sesión vamos a dar un repaso por encima a un flujo de trabajo con gulp y node pero no tendremos que configurarnos todavía nuestro entorno de trabajo, os proporcionaremos una base ya configurada sobre la que trabajar lo que queda de sprint :)


## ¿En qué casos se utiliza?

En nuestro flujo de trabajo realizamos algunas tareas repetitivas. Por ejemplo, convertir el Sass en CSS, lo que implica añadir cada nuevo proyecto a Koala, especificar la carpeta de destino para el CSS, etc.

Otra tarea habitual que se suele hacer es optimizar los ficheros CSS y JavaScript antes de subir la web al servidor (a GitHub en nuestro caso). Esta optimización se realiza para que el navegador pueda cargar y ejecutar los archivos más rápido y mostrar la página con más rapidez.

Con una herramienta como gulp, vamos a poder hacer que nuestro código Sass se convierta en CSS al guardar el fichero; y ejecutar una tarea para que nos guarde el CSS/JS con código optimizado que más tarde subiremos a nuestro servidor (de nuevo, GitHub en nuestro caso).

## Gulp

![Gulp](assets/images/3-5/logo-gulp.png)

Gulp es una herramienta de automatización de tareas que está programada con JavaScript. Gulp, a diferencia de Koala, no tiene interfaz gráfica sino que se ejecuta desde la terminal de comandos, al igual que sucede con Git. Primero vamos a ver cómo instalarla y después la configuraremos para ayudarnos con algunas tareas.

Bien, sabemos que decir que gulp lo usaremos a través de la consola, que no tiene interfaz gráfica y que la configuración te la tienes que hacer tu mismo hace difícil el venderlo como algo mejor, pero la clave de gulp reside en esa última característica, la de configurarlo a través de JavaScript. La clave de usar una herramienta de automatización de tareas como gulp es que podemos configurarla a nuestra manera y añadir procesos y tareas a medida que las necesitemos e ir mejorando poco a poco estos para adaptarlos a nuestras necesidades, esto es lo que hace que lo que ofrece Koala se quede corto y es el motivo principal por el que en la mayoría de las empresas tienen automatizadas las tareas con herramientas como Gulp. En esta sesión veremos alguna novedad como poder visualizar nuestra página directamente desde el móvil sin tener que subirla al servidor, pero esto es solo la punta del iceberg, existen cientos de utilidades que podremos utilizar con Gulp y que nos facilitarán mucho la tarea de desarrollar páginas web.

### Node

Para poder usar *gulp* en nuestro ordenador, necesitamos tener instalado *Node.js*. Node es una plataforma que nos permite ejecutar código JavaScript en nuestro ordenador o un servidor, ya sea para programar un back-end o para programar pequeños programas de código que nos sirvan de herramientas llamados scripts y todo ello usando código JavaScript, fantástico ¿no?.

Bien, antes de instalar Node en nuestro ordenador vamos a comprobar antes si por casualidad lo tenemos ya instalado. Para ello como suele ser común, escribiremos en la terminal el nombre del comando, seguido de `-v` como hemos hecho anteriormente con git, por ejemplo:

```shell
node --version
```

Una vez hecho esto nos aparecerá un mensaje en la terminal. Si nos aparece un mensaje del estilo `El comando no existe` o `command not found` es que no tenemos instalado Node en nuestro ordenador. Si por el contrario, se muestra la versión de node que tenemos instalada, por ejemplo `v8.9.3`, sabremos que lo tenemos instalado y por tanto podemos saltarnos el paso de la instalación.

#### Instalar Node en Ubuntu

Para instalar la última versión estable de Node en Ubuntu, tenemos que ejecutar estas dos líneas de código en nuestra terminal:

```shell
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Instalar Node en Mac

Para instalar Node en Mac ejecutaremos el siguiente código para comprobar si tenemos instalado [Homebrew](https://brew.sh/index_es.html), que es una herramienta muy útil que nos permite instalar software en nuestro ordenador de forma muy sencilla.

Para comprobar si tenemos instalado Homebrew, escribimos en la terminal lo siguiente:

```shell
brew --version
```

Igual que nos ha sucedido antes con Node, una vez ejecutado el comando nos aparecerá un mensaje en la terminal. Si nos aparece un mensaje del estilo `El comando no existe` o `command not found` es que no tenemos instalado Node en nuestro ordenador. Si por el contrario, se muestra un mensaje con una versión y un texto, sabremos que lo tenemos instalado.

Si tenemos instalado Homebrew podemos saltarnos este comando, sino tenemos que ejecutarlo para instalarlo:

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Tras realizarlo y que haga todo el proceso, volvemos a comprobar con `brew --version` si hemos instalado correctamente Homebrew. En caso de tener todo correcto, continuamos con el siguiente paso y si no sale lo que esperamos, es el momento de pedir ayuda :).

Por último, ahora que tenemos instalado Homebrew, instalar Node será tan sencillo como hacer lo siguiente:

```shell
brew install node@8
```

#### Instalar Ubuntu en otro sistema operativo distinto de Ubuntu o Mac

Para el resto de sistemas seguimos las [instrucciones de instalación en su web oficial](https://nodejs.org/en/).

---

Una vez instalado Node, cerramos la terminal y volvemos a abrirla y comprobamos si Node se ha instalado correctamente usando el comando `node --version`. Esta vez debería aparecernos la versión que hemos instalado de Node. Si nos aparece otro mensaje es que no se ha instalado correctamente, es el momento de pedir ayuda :).

### npm

Node viene con un gestor de paquetes llamado *npm*. Npm nos permite instalar paquetes, es decir, pequeñas librerías de código que usamos para construir aplicaciones o para usar como herramientas. Una de estas herramientas será el propio gulp. Para comprobar que está bien instalado, ejecutamos en la terminal este comando que debería devolver la versión de npm que tenemos instalada:

`npm --version`

Si tras ejecutarlo nos devuelve un número de versión, es que todo está correcto y podemos continuar con la instalación de gulp. Para ello ejecutamos esto en la terminal (si da error de permisos, tendremos que poner `sudo` delante del comando):

`npm -g install gulp-cli`

El `-g` indica que se instala de forma global y se puede usar la utilidad de gulp (como nuevo comando de la terminal) en todos los proyectos de nuestro ordenador.

### Usando gulp en nuestro proyecto

Ahora que ya tenemos todo instalado, vamos a utilizar gulp en nuestro proyecto. Vamos a crear un nuevo proyecto, para ello creamos una nueva carpeta (podemos hacerlo desde la terminal con `mkdir <nombre_carpeta>`). Y nos movemos dentro de la carpeta con `cd <nombre_carpeta>`.

Para indicar que en este proyecto vamos a usar npm, necesitamos crear un fichero llamado `package.json` que indica la configuración de npm del proyecto. Es un fichero en formato JSON que si recordáis tiene el aspecto de un objeto de JavaScript que tiene solo propiedades pero no métodos (funciones). La forma más sencilla de crear este fichero es ejecutando desde la terminal:

`npm init`

Al hacerlo, nos irá pidiendo información sobre el proyecto: nombre, descripción, etc. Podemos escribir esta información o pulsar la tecla `Enter` para aceptar la información que viene por defecto y que aparece entre paréntesis al lado de donde escribimos. Una vez haya terminado de hacer preguntas, creará el archivo `package.json` en nuestra carpeta, si lo abrimos veremos que la pinta del `package.json` es algo así:

```json
{
  "name": "testing-gulp",
  "version": "1.0.0",
  "description": "A project to play around with gulp",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Adalab",
  "license": "ISC"
}
```
Ahora tenemos que instalar gulp de forma local en nuestro proyecto. Para eso ejecutamos:

`npm install --save-dev gulp`

Con esto, instalamos gulp para nuestro proyecto e indicamos que se use sólo en el entorno de desarrollo `--save-dev` porque en producción ya tendremos el código final y no necesitaremos volver a procesarlo. Cuando termine la instalación, echamos un ojo al `package.json` y se habrá añadido esta configuración:

```json
  "devDependencies": {
    "gulp": "^3.9.1"
  }
```
Además notaremos que se ha creado una carpeta en el proyecto `node_modules` donde se instalarán los paquetes de npm. Normalmente no queremos que esta carpeta forme parte de nuestro control de versiones, así que la incluiremos en nuestro `.gitignore`.

El `package.json` se usa para saber qué paquetes (dependencias) tiene el proyecto. ¿Para qué? Porque si alguien se clona tu proyecto no va a tener todo el código de las dependencias (la carpeta `node_modules`) pero en el `package.json` está toda esa información. Simplemente ejecutando `npm install` se instalarán todas esas dependencias y se añadirán a la carpeta `node_modules`.

Ahora sólo nos falta crear el fichero de configuración de gulp llamado `gulpfile.js`. Vamos a crear un fichero con ese nombre y meter este código de configuración (si miráis con atención ¡es JavaScript!):

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Hola gulp');
});
```

>NOTA: No vamos a entrar por el momento en detalle ni explicaciones, simplemente queremos que lo probéis y os vayáis familiarizando

Para probar el código anterior, en la terminal escribiremos el siguiente comando:

`gulp`

Como resultado aparecerá el mensaje 'Hola gulp' en nuestra terminal. Lo que hace el comando `gulp` es buscar el archivo `gulpfile.js` en la ruta en la que estamos situados desde la terminal y si existe ejecutará la función asociada a la tarea `'default'` de gulp, que en este caso hace un `console.log`

Pero esto no es muy útil. Vamos a usar ahora otro gulpfile más complejo que nos permita convertir Sass a CSS. Pero primera tendremos que instalar otro paquete que nos permite hacer esto:

`npm install --save-dev gulp-sass`

Ahora usaremos este gulpfile:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  gulp.src('scss/index.scss') // Leo el archivo scss
    .pipe(sass()) // Convierto el contenido del archivo index.scss a CSS
    .pipe(gulp.dest('css')); // El CSS generado lo guardamos en la carpeta css
});
```

Lo que hace es coger `scss/index.scss` y generar a partir de él un archivo CSS en la carpeta `css`. Para probarlo, creamos en nuestro proyecto una carpeta `css` vacía y otra `scss` con un fichero llamado `index.scss` en el que escribiremos lo siguiente:

```scss
$primary-color: magenta;

body {
  background: $primary-color;
}
```

Ahora ejecutamos `gulp` en la terminal y el resultado debería ser que se crea un fichero `ìndex.css` con

```css
body {
  background: magenta; }
```

**¡Enhorabuena!¡Has ejecutado tu primera tarea con gulp!**

### Tareas con *watch*

Hasta ahora hemos creado una tarea que convierte nuestro Sass a CSS, pero sólo una vez. Si volvemos a modificar el fichero Sass tendremos que volver a ejecutar el comando `gulp` para convertirlo a CSS. ¿Pero esto es un poco rollo, no?

Escribiendo en la terminal `gulp` en realidad hemos ejecutado la tarea por defecto (`default`) del archivo `gulpfile.js`. Si veis en el `gulpfile`, creamos una tarea con `gulp.task` y el primer parámetro es una cadena con el nombre de la tarea. La tarea por defecto tiene el nombre especial `default`. Pero podemos ejecutar otras tareas con `gulp nombre_tarea`.

Vamos a crear una tarea `watch` que está todo el rato observando nuestros ficheros Sass y al modificarlos genera a partir de su contenido un archivo CSS. Para eso, usamos este `gulpfile`:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  gulp.src('scss/index.scss') // Leo el archivo scss
    .pipe(sass()) // Convierto el contenido del archivo index.scss a CSS
    .pipe(gulp.dest('css')); // El CSS generado lo guardamos en la carpeta css
});

// Tarea que observa cambios en 'scss'
// En su primera ejecución lanzará también las tareas que pasamos como segundo parámetro en la función, default en este caso
gulp.task('watch', ['default'], function () {
  gulp.watch('scss/*.scss', ['default']);  // Lanza la tarea 'default' cuando observa cambios en cualquier scss
});
```

Ahora ejecutamos nuestra nueva tarea `gulp watch`. Una vez ejecutada, lo primero que hará será ejecutar `default` porque le hemos dicho que lo ejecute antes de comenzar `watch`. Tras ejecutar `default`, el proceso se quedará corriendo en la terminal y si realizamos algún cambio en alguno de los archivos Sass de nuestro proyecto veremos cómo en la terminal aparecen unos mensajes que muestran que se ha vuelto a ejecutar la tarea de default. Si en algún momento queremos parar este proceso, podremos pulsar `Ctrl + C` en el teclado y el proceso terminará en ese momento.

Prueba a modificar el fichero Sass y ver que el CSS se modifica automáticamente. Igual que Koala pero con un toque más de programadora pro, ¿verdad?

***

EJERCICIO 1

Ahora vamos a trabajar con un proyecto que ya tiene configurado gulp. Primero tendremos que clonarlo en nuestro ordenador y en la carpeta ejecutar `npm install` para instalar las dependencias.

https://github.com/Adalab/testing-gulp

Luego probamos a ejecutar la tarea por defecto `gulp` y la tarea `gulp watch`. Observamos el resultado en la carpeta CSS. Investigad un poco el código y probad a comentar cosas para averiguar qué hacen las 2 nuevas funcionalidades que hemos añadido.

***

### Bueno, ¿y ahora?
Ahora os hemos preparado un proyecto que os podéis descargar y donde integrar vuestros proyecto y ejercicios en Adalab:  
[Adalab Web Starter Kit](https://github.com/Adalab/Adalab-web-starter-kit)


### BONUS: Más plugins de gulp

Hasta ahora hemos usado plugins de gulp para trabajar con Sass y CSS. Plugins son todas las pequeñas librerías que hemos ido instalando con `npm install` como `gulp-sass`. Pero existen plugins para otras muchas funcionalidades. Vamos a ver algunos.

#### Plugins para JavaScript

También existen tareas de gulp que nos permiten mejorar nuestro flujo de trabajo con JavaScript. Algo habitual es tener varios ficheros JavaScript en un proyecto, pero en producción siempre es mejor que el navegador cargue uno solo. Para eso existe una tarea para concatenar (`concat`) todos los ficheros JS en uno solo. También suele ser habitual minificar el código (eliminar espacios, cambiar nombres de variables a una letra, etc.) para que vaya más rápido. Existe un

Podéis ver un ejemplo de cómo trabajar con esto en este repositorio que preparó un voluntario del curso: https://github.com/luisddm/gulp-adalab

##### Plugins de linting

Un *linter* es un programa que detecta errores de uso y/o estilo en un código. Ahora mismo en el propio Atom tenemos instalados varios linters que nos informan de errores en el código o en su estilo (llaves que no cierran, etc.). También podemos usar esos linters desde una tareas de gulp, de forma que nos digan errores antes de, por ejemplo, subir un código a producción. Algunos ejemplos son [JSLint](http://www.jslint.com/) o [CSSLint](http://csslint.net/).

##### Plugins para trabajar con imágenes

Existen plugins para optimizar imágenes, es decir, que pesen menos para nuestra web, por ejemplo, `gulp-imagemin`.

##### Plugins para trabajar con ficheros

Plugins para copiar ficheros, por ejemplo, copiar las fuentes a nuestra carpeta con el proyecto para producción. O renombrarlos, por ejemplo, los ficheros minificados suelen llevar un `.min.` antes de su extensión. También borrar ficheros intermedios que ya no queremos.

## Recursos externos

- [Documentación oficial de gulp](https://gulpjs.com/)
- [Gulp for beginners](https://css-tricks.com/gulp-for-beginners/)
