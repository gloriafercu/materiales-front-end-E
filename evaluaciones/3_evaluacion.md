## Ejercicio de evaluación - Sprint 3

Como siempre, antes de empezar, tenéis que crear un nuevo repositorio desde GitHub Classroom. Para ello tenéis que aceptar usar un enlace distinto para [el grupo de mañana](https://classroom.github.com/a/yc9q-SOY) y para [el grupo de tarde](https://classroom.github.com/a/gAkpAoZW). Una vez creado, lo clonamos en nuestro ordenador y en la carpeta creada empezaremos a trabajar en el ejercicio. Esta vez el repositorio incluirá algunos archivos:  
* Base con Gulp
* Imágenes para resolver el Ejercicio

El deadline para la entrega es:
- el 12 de diciembre de 2017 a las 14:30 para el grupo de mañana
- el 12 de diciembre de 2017 a las 21:30 para el grupo de tarde

El ejercicio consiste en desarrollar una página web de acuerdo a un diseño dado. Habrá que resolver varios puntos:
- Usar CSS Grid
- Resolver interacciones usando JS y transiciones
- Cargar contenido nuevo desde una API

Vamos de definir los distintos hitos del ejercicio:

### 1. Maquetación

En primer lugar vamos a realizar la maquetación sobre un diseño dado:  
![Diseño sprint 3](assets/images/sprint3-design.png)

1. El primer módulo (hero) debe ocupar, como mínimo el alto de la ventana del navegador, a ver cómo resolvéis todos los casos intermedios que no hay especificados en el diseño ;)
2. Os vamos a pedir que uséis CSS Grid para el listado de elementos del bloque celeste de "3 Reasons To Purchase"
3. No hay estados `hover` definidos para restarle complejidad pero si véis que sobra tiempo, tomadlo como un bonus
4. Las imágenes e iconos están generados ya al clonar el repositorio por primera vez
5. De igual manera, está incluído el starter kit de Adalab con gulp

Url del proyecto: https://zpl.io/awnYgWg

***
**Zeplin** es una aplicación para poder compartir un diseño con desarrolladores sin necesidad de que usen aplicaciones como Sketch, Illustrator o Photoshop, y con mucha más información que unos pantallazos.

Podéis ver un pequeño [tutorial en Youtube](https://www.youtube.com/watch?time_continue=12&v=tbKZAGthUgQ).

Se puede acceder al diseño directamente desde el navegador para lo que necesitaréis una cuenta de zeplin (que se puede conseguir de forma gratuita desde su página) y enviar usuario y email a Carlos por mensaje directo desde Slack para que os invite.
***

### 2. Interacción
En total, tenemos 4 interacciones que resolver:
1. El menú que sale del lateral, como en este [ejemplo](https://marvelapp.com/7b61be1)
2. Cada opción del menú enlaza a su sección correspondiente
3. El botón del módulo hero enlaza a la sección siguiente
4. El botón del footer sube hasta arriba de la página


### 3. Petición AJAX
Para finalizar el ejercicio hemos preparado un pequeño servicio que devuelve tres razones extras para el módulo de razones para comprar: https://three-random-reasons-axqaqqmtck.now.sh/  

Cada vez que pulsemos el botón de "More reasons" se deberán pedir 3 nuevas razones y añadirlas al módulo cuando el servidor nos devuelva la respuesta, que será del tipo:

```json
{
  "reasons": [
      {
        "title": "Maximus orci proin.",
        "description": "Mollis tristique e iaculis natoque ut natoque rhoncus."
      },
      {
        "title": "Elit elit in.",
        "description": "Ultricies posuere imperdiet proin donec. Laoreet ultrices amet."
      },
      {
        "title": "Lacus tincidunt ipsum.",
        "description": "Mattis diam i mauris et ante vel id."
      }
  ]
}
```

Las razones deberán añadirse ajustándose al diseño propuesto.

**¡Al turrón!**
