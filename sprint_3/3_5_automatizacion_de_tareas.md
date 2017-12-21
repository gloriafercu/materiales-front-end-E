# Automatización de tareas

## Contenidos

- [Introducción](#introducción)
- [¿En qué casos se utiliza?](#¿en-que-casos-se-utiliza)
- [Gulp](#gulp)
- [Recursos externos](#recursos-externos)


## Introducción

En esta sesión usaremos herramientas para automatización de tareas en nuestro flujo de trabajo en front-end. Estas herramientas son muy útiles porque nos ayudarán a ser más eficientes en nuestro trabajo y nos ahorrarán tareas repetitivas.

> **NOTA:**  
> En esta sesión vamos a dar un repaso por encima a un flujo de trabajo con gulp y node pero no tendremos que configurarnos todavía nuestro entorno de trabajo, os proporcionaremos una base ya configurada sobre la que trabajar lo que queda de sprint :)


## ¿En qué casos se utiliza?

En nuestro flujo de trabajo realizamos algunas tareas repetitivas. Por ejemplo, convertir el Sass en CSS. Otra tarea habitual es optimizar nuestros ficheros CSS/JS antes de subirlos a producción, para que la web vaya más rápida para los usuarios. Con una herramienta como gulp, vamos a poder hacer que nuestro código Sass se convierta en CSS al guardar el fichero; y ejecutar una tarea para que nos guarde el CSS/JS con código optimizado y poder subirlo a producción.

## Gulp

![Gulp](assets/images/3-5/logo-gulp.png)  
Gulp es una herramienta de automatización de tareas que está hecha con JavaScript. Gulp se ejecuta desde la terminal de comandos de nuestro sistema ya que no tiene interfaz gráfica. Primero vamos a ver cómo instalarla y después la configuraremos para ayudarnos con algunas tareas.

### Node y npm

Para poder usar *gulp* en nuestro ordenador, necesitamos tener instalado *node.js*. Node es una plataforma que nos permite programar un servidor (back-end) con JavaScript. Para instalar node en ubuntu usamos:

`apt-get install nodejs`

Para el resto de sistemas (Windows, MacOS) seguimos las [instrucciones de instalación en su web oficial](https://nodejs.org/en/).

Para compoobar que lo tenemos instalado correctamente, ejecutamos desde la terminal este comando y si todo está bien, debería mostrarse la versión de node que tenemos instalada:

`node --version`

Node viene con un gestor de paquetes llamando *npm* (node package manager). Npm nos permite instalar paquetes, es decir, pequeñas librerías de código que usamos para construir aplicaciones. Una de estas librerías será el propio gulp. Para comprobar que está bien instalado, ejecutamos en la terminal este comando que debería devolver la versión de npm que tenemos instalada:

`npm --version`

Ahora ya estamos en disposición de instalar gulp con npm. Para ello ejecutamos esto en la terminal (si da error de permisos, tendremos que poner `sudo` delante del comando):

`npm -g install gulp-cli`

El `-g` indica que se instala de forma global y se puede usar la utilidad de gulp (como nuevo comando de la terminal) en todos los proyectos de nuestro ordenador.

### Usando gulp en nuestro proyecto

Ahora que ya tenemos todo instalado, vamos a utilizar gulp en nuestro proyecto. Vamos a crear un nuevo proyecto, para ello creamos una nueva carpeta (podemos hacerlos desde la terminal con `mkdir <nombre_carpeta>`). Y nos movemos dentro de la carpeta con `cd <nombre_carpeta>`.

Para indicar que en este proyecto vamos a usar npm, necesitamos crear un fichero llamado `package.json` que indica la configuración de npm del proyecto. Es un fichero en formato JSON que si recordáis tiene el aspecto de un objeto de JavaScript que tiene solo propiedades pero no métodos (funciones). La forma más sencilla de crear este fichero es ejecutando desde la terminal:

`npm init`

Al hacerlo, nos irá pidiendo información sobre el proyecto: nombre, descripción, etc. Podemos escribir esta información o dar a *enter* para aceptar la información que viene por defecto. Si abrimos esta carpeta desde Atom, veremos que la pinta del `package.json` es algo así:

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
Además notaremos que se ha creado una carpeta en el proyecto `node_modules` donde se instalan los paquetes de npm. Normalmente no queremos que esta carpeta forme parte de nuestro control de versiones, así que la incluiremos en nuestro `.gitignore`.

El `package.json` se usa saber qué paquetes (dependencias) tiene el proyecto. ¿Para qué? Porque si alguien se clona tu proyecto no va a tener todo el código de las dependencias (la carpeta `node_modules`) pero en el `package.json` está toda esa información. Simplemente ejecutando `npm install` se instalarán todas esas dependencias y en `node_modules`.

Ahora sólo nos falta el fichero de configuración de gulp llamado `gulpfile.js`. Vamos a crear un fichero con ese nombre y meter este código de configuración (si miráis con atención ¡es JavaScript!):

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Hola gulp');
});
```

Para ejecutar simplemente ejecutaremos el comando

`gulp`

Como resultado aparecerá el mensaje 'Hola gulp' en nuestra terminal.

Pero esto no es muy útil. Vamos a usar ahora otro gulpfile más complejo que nos permita convertir Sass a CSS. Pero primera tendremos que instalar otro paquete que nos permite hacer esto:

`npm install --save-dev gulp-sass`

Ahora usaremos este gulpfile:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  gulp.src('scss/index.scss')// Leo el archivo scss
    .pipe(sass())// Compilo el resultado a CSS
    .pipe(gulp.dest('css'));// Lo escribo en el directorio destino
});
```

Lo que hace es coger `scss/index.scss` y pasarlo a la carpeta `css`. Para probarlo, creamos en nuestro proyecto una carpeta `css` vacía y otra `scss` con este fichero llamado `index.scss`:

```scss
$primary-color: magenta;

body {
  background: magenta;
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

Escribiendo en la terminal `gulp` en realidad hemos ejecutado la tarea por defecto (`default`) del `gulpfile`. Si veis en el `gulpfile`, creamos una tarea con `gulp.task` y el primer parámetro es una cadena con el nombre de la tarea. La tarea por defecto tiene el nombre especial `default`. Pero podemos ejecutar otras tareas con `gulp nombre_tarea`.

Vamos a crear una tarea `watch` que está todo el rato observando nuestros ficheros Sass y al modificarlos que se conviertan automáticamente a CSS. Para eso, usamos este `gulpfile`:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  gulp.src('scss/index.scss')// Leo el archivo scss
    .pipe(sass())// Compilo el resultado a CSS
    .pipe(gulp.dest('css'));// Lo escribo en el directorio destino
});

// Tarea que observa cambios en 'scss'
// En su primera ejecución lanzará también la tarea previa
gulp.task('watch', ['default'], function () {
  gulp.watch('scss/*.scss', ['default']);  // Lanza la tarea 'default' cuando observa cambios en cualquier scss
});
```

Ahora ejecutamos nuestra nueva tarea `gulp watch`. La terminal se quedará esperando hasta que queramos pararla haciendo `Ctrl + C` en el teclado. Probad a modificar el fichero Sass y ver que el CSS se modifica automáticamente.

***
EJERCICIO 1

Ahora vamos a trabajar con un proyecto que ya tiene configurado gulp. Primero tendremos que clonarlo en nuestro ordenador y en la carpeta ejecutar `npm install` para instalar las dependencias.

https://github.com/Adalab/testing-gulp

Luego probamos a ejecutar la tarea por defecto `gulp` y la tarea `gulp watch`. Observamos el resultado en la carpeta CSS. Investigad un poco el código y probad a comentar cosas para averiguar qué hacen las 2 nuevas funcionalidades que hemos añadido.

***

### Bueno, ¿y ahora?
Ahora os hemos preparado un proyecto que os podéis descargar y donde integrar vuestros proyecto y ejercicios en Adalab: [Adalab Web Starter Kit](https://github.com/Adalab/Adalab-web-starter-kit)


### BONUS: Más plugins de gulp

Hasta ahora hemos usado plugins de gulp para trabajar con Sass y CSS. Plugins son todas las pequeñas librerías que hemos ido instalando con `npm install` como `gulp-sass`. Pero existen plugins para otras muchas funcionalidades. Vamos a ver algunos.

#### Plugins para JavaScript

También existen tareas de gulp que nos permiten mejorar nuestro flujo de trabajo con JavaScript. Algo habitual es tener varios ficheros JavaScript en un proyecto, pero en producción siempre es mejor que el navegador cargue uno solo. Para eso existe una tarea para concetenar (`concat`) todos los ficheros JS en uno solo. También suele ser habitual minificar el código (eliminar espacios, cambiar nombres de variables a una letra, etc.) para que vaya más rápido. Exite un

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
