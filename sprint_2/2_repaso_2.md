# Repaso 2.2

Vamos a hacer cada uno de estos ejercicios en parejas, así que buscad una compañera para trabajar.

1. Idos turnando en cada apartado del ejercicio, de forma que no sea siempre la misma quien escribe en el ordenador.
1. Antes de empezar, tenéis que crear un nuevo repositorio en GitHub (en la cuenta de cualquiera de las dos), con el nombre `s2` y el nombre del ejercicio.
1. Una vez creado, lo clonaremos en nuestro ordenador y en la carpeta creada al clonarlo empezaremos a trabajar en el ejercicio.
1. Por cada apartado del ejercicio debéis crear una rama en la que trabajar y hacer todos los commits necesarios.
1. Antes de cambiar quien teclea en la pareja, debéis mergear vuestra rama a `master`.
1. Al finalizar un ejercicio completo, subiremos el resultado a GitHub y lo publicaremos en `master` con GitHub Pages.

## Un castigo

La hemos fastidiado. Otra vez. Y el profe nos ha castigado, ¡y encima sin tener la razón! Nos ha pedido que escribamos 100 veces en la pizarra una frase. ¿Podremos hacer un poco de trampa para que nos ayude JavaScript?

### 1. Repítelo 100 veces

¡Es hora de actuar! En la pizarra (nuestra página web) tenemos que escribir 100 veces la frase "He aprendido bien cómo funcionan los bucles". Cada frase en una línea diferente. ¿Podremos conseguirlo? Primero dale a la web aspecto de pizarra: el fondo de negro, las letras en blanco, tipografía que simula el pintado con tiza tipo [*chalkboard*](http://www.fontspace.com/category/chalkboard), etc. Y luego, ¡a escribir!

### 2. Un combo por frase

¡Seguimos con nuestra pizarra! Ahora vamos a añadir un combo (elemento `select` de HTML) al final de cada línea de texto. En el combo podremos seleccionar un color de los siguientes: blanco, azul, rojo, verde, amarillo, rosa. Por defecto, el combo tendrá seleccionado el color blanco que es el color del texto de los párrafos.

### 3. Vamos a darle color

Ahora viene lo bueno: vamos a añadir el comportamiento a la web para que al modificar un combo se cambie el color del texto de esa línea al color indicado en el combo. Por ejemplo, si modificamos el color del combo de la línea 3 a rosa, el texto de la línea 3 se convierte en rosa.

Algunas pistas para esta tercera parte:

- primero haced funcionar un combo para una única línea
- investigad cómo funciona el evento `change` de los elementos tipo `select` ([documetación de MDN](https://developer.mozilla.org/en-US/docs/Web/Events/change))
- desde el objeto `event` de la función de callback, podemos acceder al `select` que ha provocado el evento mediante `event.target`; incluso al índice (como en un array) de la opción seleccionada con `event.target.selectedIndex`

#### ¡A por ello!

## Mi lista de tareas

Seguimos con el repaso de JavaScript. ¡A darle caña!

### 0. Preparando

Para empezar vamos a aprender cómo usar realizar los ejercicios en vuestro equipo local. Para ello debes clonar (hacer una copia) de este repositorio en tu equipo desde el terminal de comandos.

`git clone https://github.com/Adalab/lista-de-tareas.git`

¡Ya tienes todo el código en tu equipo! Ahora ábrelo en tu editor favorito, en tu navegador y estamos listos para empezar a trabajar.

Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos pedido los datos de tareas a un servidor y nos ha devuelto la información un objeto JSON (u objeto literal) con el listado de tareas y su estado. Nuestra misión es pintar todas las tareas en pantalla, de forma que las tareas ya realizadas aparezcan tachadas.


### 1. Vamos a por una tarea

El código para pintar la primera tarea en pantalla ya está creado. Entendedlo y jugad con él. Ahora vamos a modificarlo para que, dado que es una tarea completada, el texto debe aparecer tachado. Notad que se ha creado una conveniente clase CSS `.strike` que aplica este efecto.


### 2. Listado de tareas

¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que hemos recibido del servidor, cada una de las tareas completadas  debe aparecer tachada.


### 3. Vamos a darle dinamismo
Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un `input` de tipo `checkbox` al final de cada tarea que nos falte por completar. Cuando el usuario marque la tarea como completada con el checkbox, deben suceder varias cosas:
- la tarea debe mostrarse como completada (tachada)
- debemos modificar su estado (propiedad `completed`) en el array `tasks`

#### ¡A por ello!
