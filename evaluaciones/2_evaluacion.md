## Ejercicio de evaluación - Sprint 2

Antes de empezar, tenéis que crear un nuevo repositorio desde GitHub Classroom. Para ello tenéis que aceptar usar un enlace distinto para [el grupo de mañana](https://classroom.github.com/a/yc9q-SOY) y para [el grupo de tarde](https://classroom.github.com/a/gAkpAoZW). Una vez creado, lo clonamos en nuestro ordenador y en la carpeta creada empezaremos a trabajar en el ejercicio.

El deadline para la entrega es:
- el 12 de diciembre de 2017 a las 14:30 para el grupo de mañana
- el 12 de diciembre de 2017 a las 21:30 para el grupo de tarde

El ejercicio consiste en desarrollar una página web con un juego de "Adivinar el número". Este juego consiste en que el juego genera un número al azar entre 1 y 100, y el jugador tiene que adivinarlo. El juego le da pistas de si el número que prueba es demasiado alto o bajo, y va contabilizando el número de intentos. Hasta que al final el jugador acierta el número.

Vamos de definir los distintos hitos del ejercicio:

### 1. Maquetación

En primer lugar vamos a realizar la maquetación de la pantalla del juego. La maquetación no tiene que ser pixel-perfect con la imagen que os damos, pero sí tener una estructura similar.

![Juego de adivina el número](assets/images/juego-adivina-el-numero.png
"Imagen del juego de adivina el número")

Tenemos 2 partes diferenciadas: la parte principal del juego y el histórico de puntuaciones, a la derecha.

En la parte principal, el jugador introduce un número y da al botón de probar. En la parte azul aparecen las pistas sobre si es muy alto o bajo, o si lo ha conseguido. En rojo en la esquina superior derecha aparece el número de intentos realizados. Cuando consigue acertar, aparece una sección sobre las pistas para introducir el nombre y guardar la puntuación en el histórico.

![Juego de adivina el número](assets/images/juego-adivina-el-numero-2.png
"Imagen del juego de adivina el número cuando conseguimos adivinarlo")

Cuando la pantalla del dispositivo es menor que 900px la sección de histórico se coloba debajo del juego.

### 2. Juego básico

Vamos a realizar primero una versión sencilla del juego. Para ello tenemos que realizar las siguientes funcionalidades desde JavaScript:
1. generar un número aleatorio con la ayuda de [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) y [`Math.ceil`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
2. al pulsar el botón de prueba comparamos el número que el usuario ha escrito en el input con el número aleatorio, y pintamos el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "acertado")
3. actualizamos el contador de intentos cada que el usuario pruebe

### 3. Juego con histórico

Para realizar una versión completa del juego nos faltan las siguientes características:
1. cuando el jugador acierte el número, aparece una sección para introducir su nombre y un botón para guardar en el histórico
2. cuando el jugador escriba su nombre y pulse en guardar, almacenaremos el nombre del jugador y el número de intentos en una estructura de datos; recomendamos usar un objeto para almacenar la información de cada elemento del histórico (nombre e intentos)
3. una vez guardado en el histórico, automáticamente la sección de histórico se repinta para mostrar los nuevos datos
4. después de lo anterior, también automáticamente, se prepara el juego para una nueva partida
  1. se oculta la sección para introducir el nombre
  2. se genera un nuevo número aleatorio
  3. se pone el contador de intentos a 0
  4. se limpia el campo de feedback
  5. se limpian los inputs

En esta nueva versión del juego podremos jugar varias partidas y ver cómo se genera la información de histórico. Pero esta información se perderá al recargar la página.

**¡A jugar!**
