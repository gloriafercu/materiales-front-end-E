## Ejercicio de re-evaluación - Sprint 4

Antes de empezar, tenéis que crear un nuevo repositorio desde GitHub Classroom. Para ello tenéis que aceptar usar [este enlace](https://classroom.github.com/a/LQn3HCkk). Una vez creado, lo clonamos en nuestro ordenador y en la carpeta creada empezaremos a trabajar en el ejercicio.

El deadline para la entrega es el **19 de febrero de 2018 a las 21:30** para ambos grupos.

El ejercicio consiste en desarrollar una página web con un listado de repositorios de git en la organización de *Adalab*, que podemos filtrar por el lenguaje predominante en el código. Vamos a usar React para realizarlo.

![Repos at Adalab in GitHub screenshot](assets/images/sprint-4-bis.png)

Vamos de definir los distintas partes del ejercicio:

### 1. Listado de repos

En primer lugar, vamos a realizar una web con el listado de reposotorios de GitHub en la organización de Adalab. Para eso, vamos a utilizar el API de GitHub que nos devuelve un listado de los repositorios públicos de la organización usando el endpoint en la URL https://api.github.com/orgs/Adalab/repos . Sobre cada repo, vamos a pintar:
- nombre con un enlace a la web del repositorio
- descripción si existe
- lenguaje del repositorio, indicado por un círculo de color para cada tecnología (HTML, CSS y JavaScript)

Os proponemos utilizar esta jerarquía de componentes:
- un componente `App` principal de la aplicación
- un componente `Repo` para modelar la tarjeta con la información de un repo
- un componente `Search` para el filtrado

### 2. Filtrado por lenguaje

Ahora que ya tenemos el listado de repos en pantalla, la segunda parte consiste en poder filtar por lenguaje. Para eso, añadimos un `select` a la interfaz, de forma que al elegir por ejemplo `HTML` queden en la interfaz solo los repos cuyo lenguaje principal es `HTML`.

### 3. BONUS: Filtrado por nombre

Añadir al filtrado por lenguaje otro que filtre también por el nombre del repositorio según lo vamos escribiendo. Es decir, se filtrará a la vez por lenguaje y por nombre. El `input` debe incluirse en el componente `Search`.

**¡A por todas!**
