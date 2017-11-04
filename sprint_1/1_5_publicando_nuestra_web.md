# Publicando nuestra web

## Contenidos

- Intro a git: concepto control de versiones, git init, add, commit, status, algo básico para revertir commit?
- GitHub, GitHub pages, git push y publicar poniendo README, descripción del repo, etc.

## Introducción

Git es un sistema de control de versiones para controlar los cambios en los archivos de un proyecto y coordinarse con compañeros y colaboradores.

Github es una red social montada sobre git.

## ¿Para qué sirve lo que vamos a ver en esta sesión?
Por ahora solo hemos empezado a arañar el mundo frontend pero el uso de un control de versiones nos ofrece algo que antes no teníamos:
* ¿Qué pasa si me dejé el trabajo en casa?
* ¿Qué pasa si hago un cambio y quiero volver atrás?
* ¿Qué pasa si quiero saber de forma clara en qué punto hice un cambio concreto?
* ¿Cómo trabajo con otros sin que sea un caos y nos estemos pisando todo el rato?

Pues con un control de versiones.

Por su parte Github nos ofrece:
* la parte del servidor de control de versiones
* el servidor web donde colgar nuestro trabajo (Github Pages)
* la parte social con perfil de usuario y posibilidad de interactuar con otros usuarios

## ¿En qué casos se utiliza?
Pues desde en los casos más simples como un pequeño proyecto o un archivo de configuración hasta una locura con varios compañeros y que luego os vaya a hacer ricos. Siempre y cuando queráis (y podáis) tenerlo subido y disponible para todos.

## Contenidos

### Introducción a Git
- [1.- Curso Git - Introducción a Git](https://www.youtube.com/watch?v=zH3I1DZNovk)
- [2.- Curso Git - Primeros pasos](https://www.youtube.com/watch?v=XXdaqtLgOGI)
- [3.- Curso Git - Nuestro primer proyecto](https://www.youtube.com/watch?v=vH9pkFf1D7M)
- [5.- Curso Git - Empezando con Github](https://www.youtube.com/watch?v=Qn186NyDqOk)


### Instalar Git y nuestro primer proyecto con git.

[Empezar con Git](../guias/empezar_con_git.md)

* * *
EJERCICIO:
Comprobar que tenemos git instalado o instalarlo si no lo tenemos aún
* * *

### Github y Github Pages
Github es una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git. Está muy enfocada a proyectos de código abierto por lo que es de uso gratuito siempre que tus proyectos estén en disponibles para todos. Pagando puedes tener proyectos privados pero la verdadera fuerza de Github está en la comunidad tan grande que se ha montado sobre la idea de código abierto u opensource :)

Además, ofrece un pequeño sistema de publicación de página: [Github Pages](https://pages.github.com).

#### Cómo funciona
Github Pages te ofrece un pequeño hosting para tus proyectos de github. Un hosting es un servicio de almacenamiento de datos para poder tener tu web en un servidor.


* * *
EJERCICIO:
Crear una cuenta en Github
* * *
EJERCICIO:
Configurar git en nuestro ordenador según la guía.
* * *
EJERCICIO:
Vamos a hacer nuestra primer proyecto siguiendo nuestra estructura de proyectos:
```txt
nombre-del-proyecto
    styles
    images
    index.html
```
* * *
EJERCICIO:
Inicializar el repositorio git en nuestro proyecto y hacer el primer commit
* * *

#### Mensaje del commit
Es importante acompañar el commit con un mensaje.
Este mensaje debe ser suficientemente corto para que no sea una locura pero que explique qué cambio se ha hecho.

Aquí hay muchas maneras de plantearlo y hay infinidad de guías, como estamos empezando tengamos en cuenta que:
* Tiene que ser un mensaje corto (menos de 72 caracteres)
* Debe explicar brevemente y a nivel general los cambios que se han hecho (añadido el footer, corregidos los enlaces del artículo, etc.)
* No tiene que detallar los cambios, recordemos que ya tenemos un control de versiones que muestra, exactamente, qué se ha hecho. (ej: no pongáis "he añadido dos <p>s")

* * *
EJERCICIO:
Modificar el archivo `index.html`, añadirlo a staging y hacer un segundo commit con los cambios.
* * *

Ahora que hemos hecho un par de incursiones con git y la consola vamos a hacer nuestra primera página en Github Pages:
* * *
EJERCICIO:
Vamos a:
1. Crear un proyecto vacío en Github, se llamará "smile"
2. Recordemos que hay una serie de buenas prácticas como añadir siempre un readme.md al proyecto: este archivo permite poner una pequeña descripción que sirva para que quien vea el proyecto sepa de qué va. Así que hagamos un readme.md con el nombre del proyecto y una descripción como "Una página que te sonríe".
3. Una vez hecho esto, vamos a clonar el repositorio en nuestro ordenador, en la carpeta `Documentos`.
4. Una vez clonado crearemos los archivos de nuestro proyecto siguiendo la estructura de proyectos. Con dos archivos: `index.html` y `styles.css`
5. En `index.html` meteremos un contenedor con un :)
6. Con css haremos que nuestro "careto sonriente" esté en el centro de la página a un tamaño importante para que se vea bien
7. Una vez que estemos conforme con nuestro tipo sonriente, haremos nuestro primer commit y, claro, nuestro primer push.
8. Y ya solo falta darlo de alta en Github Pages desde la página del proyecto en Github. PISTA: hay que ir a las settings del proyecto ;)
* * *

## Resumen de la sesión

En esta sesión se intenta acercar el control de versiones para que lo acabemos incluyendo en nuestro flujo de trabajo.

Además presentamos la plataforma Github y su servicio de hosting: Github Pages.
