# Control de versiones

SP. Repaso de git, concepto de remoto, push/pull, git remote, .gitignore, carpeta .git, git clone
Flujo de trabajo en equipo con servidor remoto: hago pull antes de añadir cosas, gestión de conflictos

Hasta ahora hemos hecho una primera aproximación a Git, nada menor.

Primero vimos cómo crear un repositorio local con `git init` y mantener nuestros cambios con `git add -A` y `git commit -m "Mensaje del commit"`.
Pero no solo eso, también hemos aprendido a conectar nuestro proyecto local con un repositorio remoto alojado en GitHub con `git remote add`, o , directamente a crearlo en Github y clonarlo en nuestro equipo con `git clone`.

Y más, porque actualmente estamos trabajando en grupo sobre el mismo proyecto y sobre los mismos archivos, y publicando nuestro trabajo a través del sistema de hosting propio de GitHub: GitHub Pages.

## Repaso del proceso de creación de un proyecto Git

### Inicio de proyecto
#### Desde GitHUb
Lo más sencillo es crear el proyecto de cero desde nuestro servicio de Git, en este caso, GitHub:
1. Vamos a nuestro perfil
2. Creamos un nuevo repositorio
3. Rellenamos el nombre y la descripción
4. Ahora podemos elegir tres acciones (se pueden elegir las tres, alguna o ninguna):
	1. Añadir un archivo Readme.md
	2. Añadir un archivo .gitignore
	3. Añadir una licencia
5. Una vez creado solo faltaría clonarlo a nuestro ordenador para trabajar con él, hay dos formas:
	1. Desde la terminal voy a la carpeta donde quiero clonar el proyecto y, con la url que me da github para clonar, se escribe: `git clone url-que-me-da-github`.
	2. Si quiero clonarlo y usar un nombre específico para la carpeta de mi repositorio sigo el paso uno pero se escribe: `git clone url-que-me-da-github nuevo-nombre-de-carpeta`

##### Readme.md
Este archivo `readme.md` es un documento escrito en [markdown](https://es.wikipedia.org/wiki/Markdown) que se presenta en la página principal del repositorio y tiene como objeto aportar una primera documentación o presentación del proyecto.  
Esto es una convención, pero hay que tenerla en cuenta.

	Markdown es un lenguaje de marcado como HTML pero más simple.

Ejemplos de readme.md:
* [Sistema de plantillas PUG](https://github.com/pugjs/pug)
* [Editor de código VSCode](https://github.com/Microsoft/vscode)
* [Gulp (Automatizador de tareas)](https://github.com/gulpjs/gulp)

##### .gitignore
Git tiene un sistema para poder ignorar archivos de un proyecto.  
**¿Y por qué querríamos hacer esto?** Porque habrá archivos que necesitemos en nuestra carpeta de trabajo local pero que no queramos subir al repositorio ni controlar sus cambios.

En proyectos pequeños como los que tenemos ahora vamos a querer siempre todos nuestros archivos pero podría pasar que tuviésemos una carpeta con los archivos de diseño de ciertas partes del proyecto o archivos comprimidos que usamos para enviar a nuestro cliente los avances.

	Es muy común que el propio sistema operativo cree en cada carpeta una serie de archivos o carpetas ocultas que le ayudan a realizar tareas como la búsqueda de archivos.

Estos archivos que no tiene sentido tener "controlados" pero que en nuestra carpeta local queremos mantener se listan en este archivo especial, `.gitignore` para decirle al algoritmo de Git que no los tenga en cuenta.

En [gitignore.io](https://www.gitignore.io) podemos encontrar una serie de configuraciones ya hechas que nos ayudan a ignorar tipos de archivos comunes según el Sistema operativo o el lenguaje en el que trabajemos.

##### Licencia
Uno de los puntos claves un entorno social donde poner al alcance de todos tus proyectos es indicar cómo y en qué términos se deben usar. Para esto están las licencias, que son archivos legales que especifican qué se puede y qué no se puede hacer con los archivos asociados.

Github nos ofrece un enlace donde nos intenta orientar sobre qué licencia elegir en cada caso: [choosealicense.com](https://choosealicense.com).


#### Desde un proyecto existente
¿Cómo? ¿Que ya teníamos un proyecto local y queremos subirlo a GitHub? Bueno, tampoco es tan malo:

1. Inicializamos el repositorio local Git con `git init` (se hace desde la terminal y tenemos que asegurarnos de estar en la carpeta correcta).
2. Vamos a Github.com y creamos un repositorio nuevo (esta vez no añadiremos ni licencia, ni readme, ni .gitignore) y GitHub nos redirigirá a una página con las instrucciones a seguir
3. Como ya hemos inicializado nuestro proyecto Git simplemente añadiremos el repositorio remoto (el readme.md lo podemos crear cómodamente desde nuestro editor de código). Usaremos `git remote add origin url-que-me-da-github`
4. Añadimos los archivos con `git add -A`
5. Hacemos un primer commit `git commit -m "First commit"`
6. Y subimos, esta primera vez, con `git push -u origin master`

![Instrucciones para añadir el repositorio remoto](assets/1-9-new-repo-instructions.png)

### Compartir con mi equipo
Otras de las bondades de Git es que hace que trabajar en grupo sea seguro y más fácil ya que nos evita todo el envío de archivos por email, o que alguien a sobreescrito el archivo de alguien, y así.

Desde la página de nuestro repositorio accedemos a `settigns` y desde allí a `Collaborators & teams` donde podremos añadir a nuestro colaboradores favoritos, o a los que nos toquen ;)

### Modificar archivos y registrar el cambio
Ya lo hemos ido viendo estos días:
1. Se modifican archivos
2. Se añaden para su control con `git add -A`(añade todos los archivos modificados) o con `git add nombre-de-archivo`(añade solo el archivo especificado)
3. Creamos el commit con `git commit -m "Descripción breve del commit"`

Hasta aquí todo normal. Ahora llega el momento de subir los archivos al repositorio remoto con `git push origin master`, pero pueden pasar varias cosas:
1. Que se suba bien, sin problemas ni conflictos. Yay!
2. Que no estemos trabajando con la última versión y nos diga que no podemos subir nuestros cambios sin bajarnos la última versión con `git pull`.
3. Que nos hayamos bajado antes la última versión pero que mientras que trabajábamos duramente, una compañera haya subido cambios, y tengamos que hacer de nuevo un `git pull`.

#### ¿Qué pasa cuando hacemos un `git pull`?
Pasan varias cosas:
1. Comprueba si hay una versión más nueva en el repositorio remoto
2. Se la baja y la intenta mezclar con la nuestra

Y aquí tenemos dos escenarios diferentes:
1. Se mezcla sin problemas, añade la nueva mezcla y crea un commit automático que nos muestra usando el editor por defecto que tenemos configurado en nuestra terminal.
2. Nos da un aviso de que hay conflictos y tenemos que resolverlos. Nos mostrará la lista de archivos donde encuentra conflictos.

En el primer caso podremos cambiar el mensaje del commit automático o poner uno nuevo. Guardamos aceptando el nombre que nos propone, salimos, y hacemos un push.

##### ¿Qué pinta tiene un conflicto?
Un conflicto ocurre cuando el sistema se encuentra con dos versiones del mismo bloque de código. Entonces, te marca en el documento que hay un conflicto y te muestra las dos opciones para que nosotros elijamos qué hacer:
```
<<<<<<< HEAD
1ª versión del bloque en conflicto
=======
2ª versión del bloque en conflicto
>>>>>>> 4e2b407f501b68f8588aa645acafffa0224b9b78
```

**<<<<<<<**: Indica el inicio de la zona de conflicto, en la línea siguiente muestra el primer bloque en conflicto.  
**=======**: Separa las dos versiones, seguidamente muestra el bloque alternativo que está dando conflicto.  
**>>>>>>>**: Indica el final e la zona de conflicto

Aquí puede pasar que queramos la primera opción, la segunda, las dos, o una mezcla de las dos.

La manera de afrontar este conflicto es elegir lo que queremos que ponga en ese bloque, quitar los separadores que añade Git, guardar el archivo y luego add y commit con normalidad.

Los conflictos más pequeños los resolveremos sobre la marcha, en los más complicados tendremos que hablar quién los haya hecho para decidir qué hacer.

### Entonces, ¿Cómo se supone que tengo que trabajar con Git?
Lo normal es que antes de empezar a trabajar comprobemos si tenemos la última versión. También puede no hacerse y seguir trabajando en lo que se estuviese trabajando.
En cualquier caso, podemos comprobar si hay una versión nueva del proyecto con `git fetch` o comprobar y descargar una versión nueva con `git pull`.

Luego seguimos trabajando con normalidad, añadimos y hacemos commit cuando lo necesitemos o creamos convenientes. Siempre es buena idea hacer commit tras pequeñas tareas o cambios.

Y subimos con `git push` cuando terminemos la tarea que nos toca.

## Issues
Github, como otros servicios de control de versiones tienen un sistema de tickets, los issues. Te permiten crear pequeñas tareas donde solicitas información, avisas de un problema o de alguna mejora.

## ¿Qué vamos a hacer hoy?
Hoy vamos a resolver dudas sobre git y hacer pruebas si lo necesitamos :)
