# Proyecto 3: Web de diseminación de proyectos sociales

## Índice

1. Resumen
1. Objetivos
1. Especificaciones
1. Relación con el cliente
1. Metodología de trabajo
1. Hitos
1. Entrega
1. Consejos


## Resumen ([TL;DR](https://spanish.stackexchange.com/questions/15317/hay-alg%C3%BAn-equivalente-en-castellano-al-ingl%C3%A9s-tldr))

En este proyecto vamos a colaborar con 2 organizaciones sociales, Federación de Mujeres Progresistas y Fundación San Juan del Castillo, y les vamos a ayudar con el desarrollo de una web para la difusión y sensibilización sobre temáticas en las que trabajan. Esta web será un ejercicios para el aprendizaje, y por lo tanto no será necesariamente publicado por las misas, si bien las utilizarán como punto de partida para futuras acciones de sensibilización. Lo importante durante este proyecto es que nos centremos en coger soltura con las metodologías establecidas, así como que aprendamos a tomar decisiones prácticas sobre el contenido de la web y otros elementos que nos permitan terminar el trabajo con éxito. También empezaremos a tener presentes las necesidades del cliente, si bien es un ejercicio libre en el que lo importante es que practiquemos y no que el producto se adapte 100% a sus necesidades.

## Objetivos

1. Aprender a usar Sass
1. Ser capaces de usar una herramienta de automatización de tareas y entender cómo funciona
1. Emplear un sistema de grid para maquetar la página
1. Saber identificar y generar los componentes de una página, separarlos y crear componentes visualmente similares a partir de estos
1. Utilizar JavaScript para realizar componentes interactivos
1. Exponer en la sesión final y seguir adquiriendo habilidades de desarrollo personal
1. Aprender a buscar información en la documentación de otras librerías

## Especificaciones

Se desarrollará una página web con las siguientes características:
- Uso de HTML, CSS mediante Sass, JavaScript, animaciones y transiciones
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo
- Desarrollo usando la estrategia mobile first
- Uso de git para el control de versiones del proyecto, con ramas y pull-requests para revisar los cambios de las compañeras
- Publicación del resultado en Internet usando GitHub Pages

La web deberá tener las siguientes características:
- Deberá tener transiciones y animaciones para mejorar interacciones con la web
- Deberá estar escrita con buen código y usando los estilos y herramientas que nos vienen dados
- Deberá cumplir los requisitos establecidos al inicio del proyecto (briefing)
- Deberá tener los estilos escritos con Sass
- Deberá contener un componente interactivo que usa JavaScript

## Relación con el cliente

El día de arranque de los proyectos, tendremos una reunión presencial con la organización que propone los proyectos. Será de 15' por grupo, con el objetivo de llevarnos algunas directrices generales sobre cómo tratar el tema.

Durante el transcurso del proyecto, tendremos la información de contacto de una persona de la organización. Podremos hacerle alguna consulta puntual siempre y cuando sea de suma importancia para la continuidad del proyecto.

Al final del sprint, un miembro de la organización participará en la presentación de los proyectos en la retro, que será como "la entrega final" del producto.  

## Metodología de trabajo

Durante todo el proyecto, vamos a seguir una metodología de trabajo real. Para ello vamos a utilizar más a fondo 2 herramientas que ya conocemos: Trello y los pull-requests (PR).

### Trello

Seguiremos estas directrices:
- usaremos una columna para la documentación del proyecto: enlace al repo, enlace a los materiales proporcionados, documentación de conversaciones con el cliente, etc.
- usaremos la columna "Por hacer" para definir todas las tareas del proyecto
- definiremos tareas pequeñas y concretas, por ejemplo, "maquetar componente botón", "añadir botón de ayuda a la página"
- usaremos las etiquetas de colores de Trello para estimar la duración de cada tarea de la columna "Por hacer", es decir, lo que nos va a costar hacerla. Por ejemplo, podemos usar <1h, 1h, 2h, 5h, 10h, 100h. Una tarea simple la marcamos con el color correspondiente a <1h; a una tareas super-compleja le pondremos 100h y habrá que dividirla en tareas más pequeñas
- cada tarea, al pasarla a la columna "En proceso", tendrá asignado al menos 1 responsable
- una persona puede estar sólo en una tarea en estado "En proceso" a la vez
- si una tarea se deja a medias se pasa a columna "Bloqueada"

### Pull-requests
Seguiremos estas directrices:
- para cada nueva funcionalidad (que puede equivaler a una tarea) crearemos una nueva rama
- cuando esté terminada crearemos un pull-request (PR) y pediremos revisión de al menos 1 compañera
- cuando se haya aprobado el PR, la última en aprobarlo mergeará la rama a master y borrará la rama
- para aprobar un PR debemos bajarnos el código de la compañera, y probar que funciona bien; si no entendemos algo, nos sentamos con ella y que nos lo explique
- si hay problemas en el PR (errores, falta funcionalidad, no se puede mergear por conflictos) se añadirán commits al PR hasta que se solucionen
- la responsable de  solucionar estos problemas será la creadora del PR, aunque puede pedir ayuda al resto de compañeras

## Hitos

En esta sección os proponemos una serie de hitos como sugerencia para dividir las fases de este proyecto. Siguiendo los principios de las metodologías ágiles estableceremos pequeños ciclos iterativos de forma que al final de cada uno de estos generemos valor real de cara al usuario (los visitantes de la web):

### Primero. Arranque del proyecto (kickoff)

- 2 días de trabajo
- Organizar el trabajo a realizar usando Trello, e ir asignando tareas y responsables
- Crear la infraestructura necesaria: repositorio en GitHub con acceso para todos los miembros del equipo
- Entender los requisitos del proyecto y las técnicas y herramientas empleadas
- Analizar los materiales que nos han pasado y plantear un diseño y el estilo visual

### Segundo. Refactorización y maquetación de la web

- 1 semana de trabajo
- Definir los componentes que necesitamos para crear la web, diferenciando los interactivos
- Maquetar los componentes identificados
- Hacer la web responsive y aprender a usar una librería para el grid

### Tercero. Implementación de la parte interactiva

- 1 semana de trabajo
- Implementar animaciones
- Definir e implementar los componentes interactivos que usan JavaScript
- Revisar el código

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
