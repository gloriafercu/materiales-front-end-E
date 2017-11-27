# Sesión de repaso 2.1

Vamos a hacer cada uno de estos ejercicios en parejas, así que buscad una compañera para trabajar.

1. Idos turnando en cada apartado del ejercicio, de forma que no sea siempre la misma quien escribe en el ordenador.
1. Antes de empezar, tenéis que crear un nuevo repositorio en GitHub (en la cuenta de cualquiera de las dos), con el nombre `s2` y el nombre del ejercicio.
1. Una vez creado, lo clonaremos en nuestro ordenador y en la carpeta creada al clonarlo empezaremos a trabajar en el ejercicio.
1. Por cada apartado completado del ejercicio, y antes de cambiar quien teclea en la pareja, debéis hacer un commit describiendo los cambios nuevos que habéis introducido, en inglés.
1. Al finalizar un ejercicio completo, subiremos el resultado a GitHub y lo publicaremos en `master` con GitHub Pages.

## Generador de historias de usuario

Vamos a crear un generador de historias de usuario. Una historia de usuario es una descripción simple de una característica nueva que queremos que tenga un programa pero enfocado desde el usuario que necesita esa nueva característica.

Para definirlas seguimos una estructura muy simple:

    Yo como un <usuario>,
    necesito <funcionalidad>
    con la finalidad de <razón>.

Vamos a poner un ejemplo

    Yo como un cliente de Netflix
    necesito más episodios de Stranger Things
    con la finalida de que mi vida no sea un infierno.

Pues vamos a crear un generador de historias de usuario usando JavaScript. Para ello, vamos a pedir los datos que necesitamos para definir la historia usando `prompt`: usuario, funcionalidad y razón. Con esta información, vamos a crear una ventana de alerta con la historia de usuario completa. ¡Vamos a ello!

## Adalabers

Estamos en una clase de Adalab, y queremos saber conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:
- María, 29 años, diseñadora
- Lucía, 31 años, ingeniera química
- Susana, 34 años, periodista
- Rocío, 25 años, actriz
- Inmaculada, 21 años, diseñadora

En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.

Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.
1. Una función `countAdalabers` que devuelve el número de adalabers en el listado
1. Una función `averageAge` que devuelve la media de edad de listado
1. Una función `theYoungest` que devuelve el nombre de la adalaber más joven
1. Una función `countDesigners` que devuelve el número de adalabers que son diseñadoras

Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento. Al final, modificad la estructura de datos para añadir, modificar o quitar adalabers. Y probad que las funciones siguen devolviendo el valor correcto.
