# Proyecto 3: Un caso de código heredado

<!-- TOC START min:2 max:2 link:true update:true -->
- [Resumen (TL;DR)](#resumen-tldr)
- [Objetivos](#objetivos)
- [Caso de uso](#caso-de-uso)
- [Metodología de trabajo](#metodologa-de-trabajo)
- [Especificaciones](#especificaciones)
- [Hitos](#hitos)
- [Entrega](#entrega)

<!-- TOC END -->


## Resumen ([TL;DR](https://spanish.stackexchange.com/questions/15317/hay-alg%C3%BAn-equivalente-en-castellano-al-ingl%C3%A9s-tldr))

En este proyecto vamos a trabajar con un caso muy típico que se suele producir en el mundo de la programación, un trabajo que nos viene dado, con código heredado, es decir escrito por otra persona y sobre el que tenemos que trabajar. En este caso es un poco especial porque vais a trabajar con código heredado pero vuestro: el código del proyecto del segundo sprint (el generador de tarjetas interactivas). __¡Sorpresa!__

## Objetivos

1. Lidiar con código heredado y ser capaces de refactorizarlo
1. Saber identificar y generar los componentes de una página, separarlos y crear componentes visualmente similares a partir de estos
1. Aprender a usar React para crear una aplicación web sencilla
1. Exponer en la sesión final y seguir adquiriendo habilidades de desarrollo personal
1. Aprender a buscar información en la documentación de librerías externas


## Caso de uso

La idea fundamental de este proyecto es que aprendamos a trabajar con un proyecto heredado. De esta forma desarrollaremos nuestra capacidad de adaptarnos a proyectos ya existentes. Esto nos preparará para, de cara al futuro, entrar en equipos nuevos de desarrollo con mayor rapidez, mejorar nuestra capacidad de modificación de código creado por otras personas y concienciarnos de la importancia de crear buen código visto desde la otra parte, la persona que lo recibe.

## Metodología de trabajo

Durante todo el proyecto, vamos a seguir una metodología de trabajo real. Para ello vamos a utilizar más a fondo 2 herramientas que ya conocemos: Trello y los pull-requests (PR).

### Trello

Seguiremos estas directrices:
- usaremos una columna para la documentación del proyecto: enlace al repo, enlace a los materiales proporcionados, documentación de conversaciones con el cliente, etc.
- usaremos la columna "Por hacer" para definir todas las tareas del proyecto
- definiremos tareas pequeñas y concretas, por ejemplo, "maquetar componente botón", "añadir botón de ayuda a la página"
- usaremos las etiquetas de colores de Trello para estimar la duración de cada tarea de la columna "Por hacer", es decir, lo que nos va a costar hacerla. Por ejemplo, podemos usar <1h, 1h, 2h, 5h, 10h, 100h. Una tarea simple la marcamos con el color correspondiente a <1h; a una tareas super-compleja le pondremos 100h y habrá que dividirla en tareas más pequeñas
- cada tarea, al pasarla a la columna "En proceso", tendrá asignado al menos 1 responsable
- una persona puede estar solo en una tarea en estado "En proceso" a la vez
- si una tarea se deja a medias se pasa a columna "Bloqueada" o vuelve a "Por hacer"

### Pull-requests
Seguiremos estas directrices:
- para cada nueva funcionalidad (que puede equivaler a una tarea) crearemos una nueva rama
- cuando esté terminada crearemos un pull-request (PR) y pediremos revisión de al menos 1 compañera
- cuando se haya aprobado el PR, la creadora del PR mergeará a master y borrará la rama
- para aprobar un PR debemos bajarnos el código de la compañera, y probar que funciona bien; si no entendemos algo, nos sentamos con ella y que nos lo explique
- si hay problemas en el PR (errores, falta funcionalidad, no se puede mergear por conflictos) se añadirán commits al PR hasta que se solucionen
- la responsable de solucionar estos problemas será la creadora del PR, aunque puede pedir ayuda al resto de compañeras

## Especificaciones

Se partirá de un proyecto funcional y se realizará una refactorización del código incluyendo el uso de React. _Refactorizar_ código consiste en modificar un código para mejorar su estructura pero sin añadir nuevas funcionalidades.

De cara a la refactorización, el proyecto debe utilizar estas tecnologías:
- Uso de Sass para los estilos
- Uso de ES6 y React para la estructuración del JS de la aplicación
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo
- Desarrollo usando la estrategia mobile first
- Uso de git para el control de versiones del proyecto, con ramas y pull-requests para revisar los cambios de las compañeras
- Publicación del resultado en Internet usando GitHub Pages

La webapp deberá tener las siguientes nuevas características:
- La web debe estar en una única página, por lo que usaremos React router para navegar de la página de bienvenida a la aplicación y ambas tendrán su propia ruta


## Hitos

En esta sección os proponemos una serie de hitos como sugerencia para dividir las fases de este proyecto. Siguiendo los principios de las metodologías ágiles estableceremos pequeños ciclos iterativos de forma que al final de cada uno de estos generemos valor real de cara al usuario.

### Primero. Arranque del proyecto (kickoff)

- 2 sesiones de trabajo
- Organizar el trabajo a realizar usando Trello, e ir asignando tareas y responsables
- Crear la infraestructura necesaria de repositorios. En este proyecto usaremos 2 repos: 1) haremos un _fork_ del proyecto que nos hayan asignado y trabajaremos en una rama para pasarlo a ES6; 2) un nuevo repo con el proyecto de React
- Entender los requisitos del proyecto y las técnicas y herramientas empleadas
- Analizar el código y entender su estructura para poder adaptarla a nuestras necesidades y conocimientos
- Analizar los componentes empleados en la web y el estilo visual de esta


### Segundo. Refactorización y primera versión con React

- 4 sesiones de trabajo
- Modularizar y refactorizar el código JS con ES6
- Definir la estructura de componentes React de la aplicación
- Generar las componentes del proyecto y comunicar información por props

> **NOTA**: No debéis copiar código de vuestro proyecto anterior, sino esforzaros por entender el que han creado otras compañeras. Para partes incompletas o que no funcionen podéis arreglarlas pero no re-hacerlas desde cero.

### Tercero. Añadir las mejoras

- 5 sesiones de trabajo
- Incluir estado y eventos de React
- Incluir las peticiones al servidor

### Cuarta. Añadir las mejoras

- 4 sesiones de trabajo
- Implementar las mejoras:
  - paginación y rutas con React router
- Revisión de código
- Podrán implementarse otras mejoras visuales si todo ya está terminado y acordado con el profesor

### Quinta. Presentación final

- 2 sesiones de trabajo
- El último día del sprint presentaréis la versión final de este proyecto. Para ello tendréis que dejarlo publicado y acabado con tiempo, y organizaros para preparar la presentación


## Entrega

El formato de entrega de este proyecto será mediante la subida de este a la plataforma de GitHub. Para subirlo, se creará un repositorio en la organización de Adalab. El nombre del repositorio deberá estar compuesto de las siguientes partes, todo ello separado por guiones:
- Nombre de la promoción en minúsculas
- "s" minúscula seguida del número del sprint
- Nombre del equipo en minúsculas

Por ejemplo, el nombre de la primera promoción de Adalab fue "Ada". Si un grupo realizase un proyecto para el primer sprint y el nombre de ese grupo fuese "Lovelace", el nombre del repositorio debería ser "ada-s1-lovelace".

De manera adicional, se deberá activar "GitHub Pages" en el proyecto para que este pueda ser visualizado como una web, es decir, que en el caso anterior, si alguien introdujese la dirección "adalab.github.io/web-hopper/" en un navegador web, este mostraría la web que se genera con el código del repositorio.

Por último, para acompañar a la entrega del proyecto, el equipo realizará una presentación de 10 minutos mostrando la web y explicando los siguientes puntos:

- Cómo está estructurada la web y el contenido y el por qué de cada cosa
- Cómo se ha diseñado
- La estructura del código y las partes más importantes de este (por encima, sin entrar mucho en detalle)
- Cómo ha sido la organización del equipo, el reparto de tareas y la coordinación a la hora de trabajar todas en el mismo código
- Cuál de las tareas o los puntos ha sido el que más esfuerzo ha requerido
- Cuál de las tareas o partes de la web es la que hace que el equipo esté más orgulloso

Al final de esta presentación habrá un turno breve de preguntas, de manera informal, tanto por parte de otras compañeras como por parte de los profesores.
