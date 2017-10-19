# Proyecto 3: Un caso real con código heredado

## Índice

1. Resumen
1. Objetivos
1. Casos de uso
1. Especificaciones
1. Hitos
1. Entrega
1. Consejos


## Resumen ([TL;DR](https://spanish.stackexchange.com/questions/15317/hay-alg%C3%BAn-equivalente-en-castellano-al-ingl%C3%A9s-tldr))

En este proyecto vamos a trabajar con un caso muy típico que se suele producir en el mundo de la programación, un trabajo que nos viene dado, con código heredado, es decir escrito por otra persona y sobre el que tenemos que escribir. Además, en este caso el diseño estará cerrado y solo implementaremos la lógica (mediante JavaScript), la adaptación de la web a responsive y las animaciones. Esta web

## Objetivos

1. Aprender a usar Sass para facilitar el mantenimiento y la modificación de estos.
1. Ser capaces de usar una herramienta de automatización de tareas y entender cómo funciona
1. Emplear un sistema de grid para maquetar la página
1. Saber identificar y generar los componentes de una página, separarlos y crear componentes visualmente similares a partir de estos.
1. Exponer en la sesión final y seguir adquiriendo habilidades de desarrollo personal
1. Aprender a buscar información en la documentación de otras librerías


## Caso de uso

La idea fundamental de este proyecto es que aprendamos a trabajar en una situación real, con un proyecto heredado. De esta forma practicaremos una situación real y desarrollaremos nuestra capacidad de adaptarnos a proyectos ya existentes. Esto nos preparará para, de cara al futuro, entrar en equipos nuevos de desarrollo con mayor rapidez, mejorar nuestra capacidad de modificación de código creado por otras personas y concienciarnos de la importancia de crear buen código visto desde la otra parte, la persona que lo recibe.


## Especificaciones

Se desarrollará una página web con las siguientes características:
- Uso de HTML, CSS mediante Sass, JavaScript, animaciones y tansiciones
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo
- Desarrollo usando la estrategia mobile first
- Uso de git para el control de versiones del proyecto
- Publicación del resultado en Internet usando GitHub pages

La web deberá tener las siguientes características:
- Deberá tener transiciones y animaciones para mejorar interacciones con la web
- Deberá estar escrita con buen código y usando los estilos y herramientas que nos vienen dados
- Deberá cumplir los requisitos establecidos al inicio del proyecto (briefing)
- Deberá tener los estilos escritos con Sass
- Corregir los estilos que no sigan las lineas visuales del sistema empleados (colores, bordes, etc.)


## Hitos

En esta sección os proponemos una serie de hitos como sugerencia para dividir las fases de este proyecto. Siguiendo los principios de las metodologías ágiles estableceremos pequeños ciclos iterativos de forma que al final de cada uno de estos generemos valor real de cara al usuario (los visitantes de la web):

### Primero. Arranque del proyecto (kickoff)

- 2 días de trabajo.
- Organizar el trabajo a realizar usando Trello, e ir asignando tareas y responsables.
- Crear la infraestructura necesaria: repositorio en github con acceso para todos los miembros del equipo.
- Entender los requisitos del proyecto y las técnicas y herramientas empleadas.
- Analizar el código y entender su estructura para poder adaptarla a nuestras necesidades y conocimientos.
- Analizar los componentes empleados en la web y el estilo visual de esta.


### Segundo. Refactorización y maquetación de la web

- 1 semana de trabajo.
- Modularizar y refactorizar el código
- Maquetar la parte de la web que esté por finalizar
- Entender y generar los componentes empleados en la web
- Hacer la web responsive y aprender a usar una librería para el grid

### Tercero. Implementación de la parte interactiva

- 1 semana de trabajo
- Implementar animaciones y la parte del JavaScript
- Optimizar el código

### Cuarto. Presentación final

- 2 días de trabajo.
- El último día del sprint presentaréis la versión final de este proyecto. Para ello tendréis que dejarlo publicado y acabado con tiempo, y organizaros para preparar la presentación.


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


## Consejos

### Pensar antes de implementar

Es fundamental dedicarle tiempo a pensar cómo será la web y realizar un diseño lo más ajustado a lo que queremos. A menudo los desarrolladores cometemos el error de implementar un código sin pararnos a pensar en cómo debería de funcionar. Esto se traduce en retrasos en la planificación, errores y modificaciones posteriores que se podrían haber tenido en cuenta desde un primer momento si se hubiese pensado un poco acerca del problema antes de empezar a atajarlo. Una de las mejores cualidades de un profesional es saber trabajar de forma optima, es decir, invertir su tiempo de manera que aporte el mayor valor posible a cada momento. Por ello es importante que si queremos ser profesionales planifiquemos y reflexionemos sobre el problema y su solución para que en el momento de ponernos a resolverlo seamos lo más eficientes posible.

Para terminar, pensad que se tarda minutos en cambiar una idea, horas en cambiar un diseño y dias en cambiar el código. Cuanto antes atajemos el problema en esta secuencia (siempre que no nos quedemos atascados en él) más rápido y con menos errores avanzaremos a lo largo del proyecto

### Diseñar pensando en móvil primero para que sea más fácil hacer la web responsive

Dado que queremos realizar una web que se adapte de forma correcta a distintos tamaños de pantalla, es fundamental que el primer diseño que hagamos sea enfocado a pantallas móviles. Para ello trabajaremos en Chrome con la vista adaptada a diseños móviles (veremos cómo hacerlo durante las primeras sesiones).

Otro de los beneficios de pensar en un diseño enfocado a móvil es que, al tener un espacio muy reducido, prescindes de todo aquello que no es estrictamente necesario. Esto nos beneficiará ya que nos enfocaremos en meter en nuestra vista unicamente aquello que es fundamental

### Entender todos los factores involucrados en el proyecto antes de empezar a trabajar en él

Nuestro cometido como programadores web es crear un producto que pueda ser usado por la gente que accede a nuestra página. Por ello debemos centrarnos en que este funcione más que en que sea visualmente estético. Además, este sprint está enfocado en la programación JavaScript y por tanto es el núcleo y donde debemos hacer mayor hincapié, sin dejar a un lado la maquetación.


### Lo primero es lo primero

Muchas veces tenemos tareas que no nos apasionan demasiado y vemos otras que nos interesan más y decidimos realizarlas primero. Normalmente en las empresas que destacan hoy en día una práctica común es priorizar tareas en función de los beneficios que puedan aportar, si son bloqueantes o no, la rapidez a la hora de realizarla y los beneficios que aportará de cara al futuro. Esta priorización junto con la fase de definición de requisitos es fundamental y el orden y los puntos que se establezcan serán claves para que la empresa progrese correctamente, este es el punto clave. Cuando trabajamos en un equipo o con un cliente tenemos que pensar en aportar el mayor valor a uno u otro, esto lo conseguiremos si priorizamos y realizamos los requisitos establecidos, por eso el consejo en este caso es que realiceis siempre primero lo establecido y luego si hay tiempo modifiqueis otras partes. Siempre se puede encontrar desafios en cualquier tarea, la clave está en cómo lo afrontamos ;).
