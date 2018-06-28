## Ejercicio de evaluación intermedia - Sprint 2

El ejercicio consiste en desarrollar una página web con un juego de "Adivinar el número".

Antes de empezar, tenéis que crear un nuevo repositorio en GitHub desde GitHub Classroom usando [este enlace](https://classroom.github.com/a/PCC1ufKO). Una vez creado, lo clonaremos en nuestro ordenador y en la carpeta creada empezaremos a trabajar en el ejercicio.

El juego consiste en que el juego genera un número al azar entre 1 y 100, y el jugador tiene que adivinarlo. El juego le da pistas de si el número que prueba es demasiado alto o bajo, y va contabilizando el número de intentos. Hasta que al final el jugador acierta el número.

![Juego de adivina el número](assets/images/2-intermedia/eval2-game.png
"Imagen del juego de adivina el número")

En la parte principal, el jugador introduce un número y da al botón de probar. En la parte azul aparecen las pistas sobre si es muy alto o bajo, o si lo ha conseguido. En rojo en la esquina superior derecha aparece el número de intentos realizados. Cuando consigue acertar, el juego termina.

### Pasos para realizar el juego

Para realizar una versión sencilla del juego tenemos que realizar las siguientes funcionalidades desde JavaScript:
1. crear una maquetación mínima con el input, el botón, el espacio para feedback y el espacio para el contador de intentos
2. generar un número aleatorio con la ayuda de [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) y [`Math.ceil`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil), y mostrarlo por la consola
3. al pulsar el botón de prueba, acceder al contenido del input y mostrarlo en la consola
4. comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")
4. actualizar el contador de intentos cada vez que el usuario pruebe

**¡A jugar!**
