# Objetos

## Contenidos

- Objetos para almacenar datos estructurados por clave/valor
- Acceso a datos en un objeto con objeto.clave y objeto[clave]


## Introducción

{{intro_info}}


## ¿Para qué sirve lo que vamos a ver en esta sesión?

{{purpose_info}}


## ¿En qué casos se utiliza?

{{usecase_info}}


## Contenido

## Definición

- Un objeto es un termino abstracto que se utiliza en la programación para referirse a los pequeños compartimentos de un código que estan aislados entre si pero pueden interactuar los unos con los otros

- Un objeto es una capsula que envuelve un código de cierta complejidad y ofrece ciertos conectores (como los métodos) que presentan una interfaz a través de la cual podemos usar dicho objeto. La idea es que el interface sea relativamente simple y todas lo complejo contenido dentro del objeto pueda ser ignorado cuando trabajemos con el

## Metodos

- Los métodos son simples propiedades de un objeto a los que se les asocia una función. Ejemplo:

    var rabbit = {};
    rabit.speak = function(line) {
        console.log("The rabbit says '" + line "'");
    }

    rabit.speak("I'm alive.");
    // → The rabbit says 'I'm alive'

- Los objetos a veces necesitan realizar tareas con el objeto por el cual han sido llamadas. La variable `this` apunta al objeto donde se llamo al metodo


## Resumen de la sesión

{{summary_info}}


## Ejercicios

### {{exercise.name}}

{{exercise.info}}

- [{{exercise.link_name}}]({{exercise.url}})
