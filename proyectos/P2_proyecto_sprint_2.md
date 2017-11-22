# Proyecto 2: Currículum Interactivo

## Índice

1. Resumen
1. Objetivos
1. Casos de uso
1. Especificaciones
1. Hitos
1. Entrega
1. Consejos
1. Recursos


## Resumen ([TL;DR](https://spanish.stackexchange.com/questions/15317/hay-alg%C3%BAn-equivalente-en-castellano-al-ingl%C3%A9s-tldr))

En este proyecto vamos a realizar una librería de componentes que posteriormente emplearemos en realizar una web para crear un currículum de forma interactiva a partir de una plantilla. Para ello, pensaremos primero cómo queremos enfocar el proyecto y diseñaremos una estructura básica y a partir de ahí sacaremos los componentes que se utilicen en ella. Lo bueno de este proyecto es que será algo más que una mera vista o escaparate, será una herramienta de la que os podréis beneficiar, algo parecido a una aplicación, en la que interactuamos con el medio para obtener el resultado deseado.


## Objetivos

1. Aprender los conceptos básicos y globales de programación (variables, estructuras de datos, condicionales, funciones, etc.)
1. Comprender qué es el DOM y saber obtener información de él e interactuar con éste
1. Obtener recursos y conocimientos para construir una marca personal
1. Exponer en la sesión final y seguir adquiriendo habilidades de desarrollo personal


## Caso de uso

Con esta web podréis mostrar que, a parte de maquetar, podéis crear algo con lo que interactuar y sacar algo que vaya más allá de una página que sólo muestra información. Esto os permitirá mostrar vuestras habilidades a la hora de trabajar con JavaScript en GitHub, algo que en las empresas se valora bastante a la hora de escoger candidatos para puestos de programador front-end.


## Especificaciones

Se desarrollará una página web con las siguientes características:
- Uso de HTML, CSS y JavaScript
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo
- Uso avanzado de formularios
- Gestión de eventos (al hacer click, pasa x, etc.)
- Desarrollo usando la estrategia mobile first
- Uso de git para el control de versiones del proyecto
- Publicación del resultado en Internet usando GitHub pages

La web deberá tener las siguientes características:
- Permitir al usuario que, mediante la introducción de información en un formulario, este texto se muestre maquetado automáticamente en un cuadro similar a una hoja, que será la muestra del resultado final.
- Permitir que ese usuario, usando la función del navegador de "Imprimir web", pueda imprimir el resultado en una página física.
- El curriculum deberá tener los siguientes campos:
  - Nombre
  - Profesión (desarrolladora front-end ;))
  - Datos personales
    - Teléfono
    - Correo electrónico
  - Extracto
  - Experiencia laboral
    - Trabajo
      - Cargo
      - Extensión

- Los campos se rellenarán a través de un formulario
- Crearemos pestañas o colapsables para mostrar las distintas partes del formulario
- Para seleccionar los años en los distintos campos, utilizaremos un desplegable cuyas opciones se generarán a través de JavaScript con años desde 1950 hasta el año actual
- En el caso de experiencia laboral, deberemos añadir una función que permita cambiar el orden de cada elemento para hacer que se muestre antes o después. Cada uno de los elementos también tendrá un botón para ser eliminado.
- Cada vez que se cambie un campo deberá de actualizarse la vista del resultado final del currículum
- Los campos deberán tener restricciones para su formato indicado. Campo de teléfono para el móvil, mail para el correo, etc.


## Hitos

En esta sección os proponemos una serie de hitos como sugerencia para dividir las fases de este proyecto. Siguiendo los principios de las metodologías ágiles estableceremos pequeños ciclos iterativos de forma que al final de cada uno de estos generemos valor real de cara al usuario (los visitantes de la web):

### Primero. Arranque del proyecto (kickoff)

- 2 sesiones de trabajo.
- Organizar el trabajo a realizar usando Trello, e ir asignando tareas y responsables.
- Crear la infraestructura necesaria: repositorio en github con acceso para todos los miembros del equipo.
- Establecer la estructura del contenido de la web, buscar referencias y esbozar un diseño visual de la web.


### Segundo. Primera versión simple de la web

- 5 sesiones de trabajo.
- Terminar el diseño del sitio
- Desarrollar una primera versión básica de la web, con la maquetación de la estructura básica (para web y móvil) y la funcionalidad de meter contenido en el currículum mediante el uso de los `prompt` de JavaScript. Para considerar terminado este hito, debéis tener publicada la web en GitHub pages.

### Tercero. Implementación de la parte interactiva

- 5 sesiones de trabajo
- Hacer que el contenido sea editable y dinámico e implementar todas las funcionalidades descritas en las especificaciones. Para estar terminado, debe estar la web pública en Internet y ser visible por cualquier persona.

### Cuarto. Presentación final

- 2 sesiones de trabajo.
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

### Centrarse en el producto y que funcione

Nuestro cometido como programadores web es crear un producto que pueda ser usado por la gente que accede a nuestra página. Por ello debemos centrarnos en que este funcione más que en que sea visualmente estético. Además, este sprint está enfocado en la programación JavaScript y por tanto es el núcleo y donde debemos hacer mayor hincapié, sin dejar a un lado la maquetación.


## Recursos

Para este proyecto hemos preparado un listado de recursos que os pueden servir de ayuda.

### Inspiración

En esta sección tenéis un listado de páginas para inspiraros a la hora de crear vuestro proyecto. También un listado de paletas de colores a usar. De dónde puedes sacar imágenes libres de derechos, etc.

- Páginas de inspiración para curriculums
  - [Curriculums en Behance](https://www.behance.net/search?content=projects&sort=appreciations&time=month&search=resume) - diseños de curriculums
  - http://dribbble.com/ - es una galeria de proyectos del ámbito del diseño que es muy conocida entre los diseñadores web. Dentro de ella, si pulsas en algún proyecto te aparece a la derecha la paleta de los colores más utilizados y si pulsas en alguno de esos colores te muestra un resultado con proyectos que emplean un color similar a este.
  - https://color.adobe.com/explore/?filter=most-popular&time=month - para encontrar paletas de colores con tendencias actuales
  - https://color.hailpixel.com/ para crear paletas de forma sencilla
- Páginas de inspiración para elementos de nuestra web:
  - [Inspiration UI](http://inspirationui.com/) - Inspiración para componentes web

### Ejemplo similar
Si en este punto algo no ha quedado del todo claro aquí tenéis un ejemplo similar con un generador de firmas de email para nuestra empresa.
Este es un ejemplo real en el que a través de un formulario actualizamos lo que luego será la firma de email para los empleados de esta empresa.

Está subido a Github y utiliza GitHub Pages para tenerlo online.

- [Generador de firmas de email](https://chucheria.github.io/EmailSignatureGenerator/index.html)
