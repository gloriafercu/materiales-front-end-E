# Métodos del ciclo de vida de componentes en React

[session-4-6-stateful-components-architecture]: 4_6_estado_react.html#arquitectura-de-componentes-con-estado

[codepen-lifecycle-mounting]: https://codepen.io/adalab/pen/ZvaNMM?editors=0010
[codepen-remembering-lifting-state-up]: https://codepen.io/adalab/pen/xpzBYz?editors=0010
[codepen-fetching-remote-data-in-lifecycle]: https://codepen.io/adalab/pen/BJGoRP?editors=0010

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [¿Qué son los métodos del ciclo de vida?](#¿qué-son-los-métodos-del-ciclo-de-vida)
- [Ciclo de vida: montaje de un componente](#ciclo-de-vida-montaje-de-un-componente)
- [Ciclo de vida: desmontaje de un componente](#ciclo-de-vida-desmontaje-de-un-componente)
- [Ciclo de vida: actualización de un componente](#ciclo-de-vida-actualización-de-un-componente)
  - [Actualización: llegan nuevas `props`](#actualización-llegan-nuevas-props)
  - [Actualización: el componente se va a actualizar](#actualización-el-componente-se-va-a-actualizar)
  - [Actualización: evitar re-renderizar un componente](#actualización-evitar-rerenderizar-un-componente)
- [Ejemplos de cómo usarlos](#ejemplos-de-cómo-usarlos)


## Introducción

En esta sesión veremos los distintos métodos del ciclo de vida de los componentes de React. Veremos ejemplos prácticos de cómo hacer operaciones comunes con los métodos del ciclo de vida.


## ¿Para qué sirven los que vamos a ver en esta sesión?

Según vamos creando aplicaciones web más completas con React, necesitaremos un control más detallado de nuestros componentes. En aplicaciones con muchos componentes, resulta importante liberar recursos que usan los componentes una vez ya no se usan, por rendimiento pero también para evitar futuros errores. Por ejemplo, podemos usar componentes que se recarguen automáticamente, como puede ser una tabla que comprueba si hay puntuaciones nuevas de un partido de baloncesto.

Utilizaremos los métodos del ciclo de vida de los componentes de React para que nuestros componentes sean limpios y no creen errores evitables.


## ¿Qué son los métodos del ciclo de vida?

Se llama **ciclo de vida** al tiempo que pasa desde que un objeto se crea desde el código hasta que se elimina. En un nivel un poco más técnico, podríamos decir que desde que se carga en memoria hasta que se elimina de la memoria. Durante la _vida_ de un componente de React, se ejecutan varios métodos, en función del momento. A estos métodos se les llama métodos del ciclo de vida. Algunos métodos del ciclo de vida que ya conocemos son el `constructor()`, que se ejecuta cuando se crea el componente, y `render()`, que sabemos que se ejecuta en algún momento después de crearse y cada vez que cambia el estado.

Podemos clasificar los métodos del ciclo de vida en tres tipos:

- De **montaje**: los que se ejecutan en la fase de creación del componente.
- De **actualización**: los que se ejecutan mientras el componente vive.
- De **desmontaje**: los que se ejecutan antes de que el componente se destruya.


## Ciclo de vida: montaje de un componente

El montaje es la **primera fase del ciclo de vida** de un componente. Es la parte en la que se crea el componente. Sabemos que un componente de React representa un elemento del DOM y lo que contiene. En el momento en que ese elemento se pinta en el DOM, aparece visualmente en la página web, decimos que ese componente está **montado**. Como ya sabemos que el método `render()` es el encargado de pintar el componente, podemos decirlo de otra manera: un componente **se monta** en el momento en que se ejecuta su `render()` por primera vez.

Sin perder de vista la primera ejecución de `render()`, que nos servirá de referencia, vamos a ver el resto de métodos de la fase de montaje en orden de ejecución:

- `constructor()`: este ya lo conocemos. Se ejecuta según se crea el componente por código y se le pasan las `props` iniciales. Aquí:
  - inicializamos el estado
  - enlazamos los _event handlers_ a la instancia con `.bind(this)`
- `componentWillMount()`: literalmente, "el componente se va a montar". Este método se ejecuta justo antes de llamar a `render()`. Desde aquí:
  - podemos hacer cálculos síncronos que no encajarían en el `constructor`
  - podemos llamar a `setState()` sin provocar un re-`render`
- `render()`: otro viejo amigo. En este:
  - devolvemos lo que se pinta en función de `props` y `state`
- `componentDidMount()`: literalmente, "el componente se ha montado". Este método se ejecuta justo después de que el componente se haya montado (pintado en pantalla). Aquí:
  - podemos pedir datos remotos, con `fetch()`, por ejemplo
  - podemos "suscribir" el componente, por ejemplo, a un `setInterval()` u otro código que nos dé datos de manera periódica o de tanto en tanto

[&blacktriangleright; Ciclo de vida: montaje en Codepen][codepen-lifecycle-mounting]


## Ciclo de vida: desmontaje de un componente

Si el montaje es la primera fase del ciclo de vida de un componente, el desmontaje es la **última fase del ciclo de vida del componente**. Es la parte en la que se va a destruir el componente y va a dejar de mostrarse en pantalla y de existir en memoria.

Esta fase solo tiene un método: el método `componentWillUnmount()` (lit. "el componente se va a desmontar"). En este método **limpiaremos** todo lo residual que pueda dejar nuestro componente una vez no exista. Podemos pensarlo como la contraparte de `componentDidMount()`, porque será aquí donde debamos dar de baja las suscripciones que hayamos iniciado allí.

Si no limpiásemos lo residual del componente, nos aparecerán errores de partes del código que intentan acceder a un componente que ya no existe.

```js
class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.setState = {
      items: []
    }

    this.updateItems = this.updateItems.bind(this);
  }

  componentDidMount() {
    // guardamos el identificador del interval para limpiarlo más tarde
    this.intervalId = setInterval(this.updateItems);
    // NOTA: usamos atributos de la clase y no del estado para guardar datos que no interfieren en cómo se renderiza un componente
  }

  componentWillUnmount() {
    // limpiamos el interval
    clearInterval(this.intervalId);
  }
}
```


## Ciclo de vida: actualización de un componente

Como ya sabemos, mientras un componente está montado, si cambian las `props` o el estado, el componente se vuelve a `render`izar. Esto ocurre siempre por defecto. Sin embargo, con los métodos del ciclo de vida podemos adaptar esto a nuestras necesidades: podremos hacer operaciones en distintos puntos de la actualización o hasta impedir que el componente se re-`render`ice si se dan unas condiciones.

Estos métodos son paralelos a los métodos del montaje del componente. Como tienen algunas peculiaridades, los desglosaremos en las siguientes subsecciones, pero se ejecutan en este orden:

  - `componentWillReceiveProps()`: similar a `constructor()`; aquí se reciben las nuevas `props` que se asignarán
  - `shouldComponentUpdate()`: decide si el componente se actualiza visualmente; es decir si los tres métodos siguientes se ejecutan o no:
    - `componentWillUpdate()`: similar a `componentWillMount()`
    - `render()`: siempre puro y fiel, [_hay un amigo en él_](https://www.youtube.com/watch?v=-KmBrQEcNUI)
    - `componentDidUpdate()`: similar a `componentDidMount()`


### Actualización: llegan nuevas `props`

En la fase de actualización del ciclo de vida de un componente, tenemos el método `componentWillReceiveProps(nextProps)` (lit. "el componente va a recibir `props`"). Este método se ejecuta antes de que un componente **ya montado** vaya a recibir nuevas `props` y a re-`render`izarse.

Se puede pensar este método como una derivación de `constructor()`, pero con el componente ya montado que recibe nuevas `props`. En este método se puede llamar a `setState()` sin volver a renderizar. Puede servir, por ejemplo, para recalcular los estados que dependan de las `props`.

> **Nota:** aunque es similar al `constructor()`, en **ningún** caso podremos asignar estados directamente a `this.state`. Asignaremos estados con `this.setState()` como hacemos normalmente.

```js
class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.initialColor
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialColor !== nextProps.initialColor) {
      this.setState({
        color: nextProps.initialColor
      });
    }
  }

  // ...
}
```


### Actualización: el componente se va a actualizar

En la fase de actualización del ciclo de vida, tenemos los métodos `componentWillUpdate(nextProps, nextState)` (lit. "el componente se va a actualizar") y `componentDidUpdate(prevProps, prevState)` (lit. "el componente se ha actualizado").

`componentWillUpdate(nextProps, nextState)` se llama justo antes de re-`render`izar un componente cuando las `props` o el estado han cambiado. Aquí no se puede llamar a `setState()` ni hacer nada que vuelva a renderizar el componente antes de que la ejecución de este método termine; para esos casos está `componentWillReceiveProps()`

> **Nota:** como veremos más abajo, este método no se ejecutará si `shouldComponentUpdate()` devuelve `false`

`componentDidUpdate(prevProps, prevState)` se llama justo después de re-`render`izar un componente por actualización de sus `props` o estado. Si el componente hace peticiones que dependen de una `prop`, este es buen lugar para rehacerlas, después de comprobar que efectivamente esa `prop` en concreto ha cambiado.

> **Nota:** como veremos más abajo, este método tampoco se ejecutará si `shouldComponentUpdate()` devuelve `false`


### Actualización: evitar re-`render`izar un componente

En la fase de actualización del ciclo de vida, tenemos el método `shouldComponentUpdate(nextProps, nextState)` (lit. "¿debe el componente actualizarse?"). Este método debe devolver un booleano. Si se devuelve un booleano `false`, entonces no se ejecutarán ni `componentWillUpdate()`, ni `render()`, ni `componentDidUpdate()`.

En este método podremos comparar los cambios entre las `props` y el estado actuales (`this.props` y `this.state`) con las `props` y el estado que se van a recibir (`nextProps` y `nextState`) para decidir si queremos que se repinte el componente o no.

Este método no se llama cuando se llama a `forceUpdate()`.


## Ejemplos de cómo usarlos

### Peticiones a un servidor

Tomemos el ejemplo de [_lifting_ de estados de la sesión anterior][session-4-6-stateful-components-architecture] en el que creábamos una lista de razones ([ver en Codepen][codepen-remembering-lifting-state-up]). Teníamos un método `fetchNewReasons()` que actualizaba el estado, y pasábamos el método por `props` al componente botón. Sin embargo, teníamos que esperar a que el usuario pulsase el botón para mostrar resultados por primera vez. ¿Cómo haríamos para que el propio elemento los cargase?

```js
const ENDPOINT = 'https://...';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reasonsStore: []
    }

    this.fetchNewReasons = this.fetchNewReasons.bind(this);
  }

  fetchNewReasons() {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          reasonsStore: data.reasons
        });
      });
  }

  render() {
    const { reasonsStore } = this.state;

    return (
      <section>
        <ReasonsList reasons={ reasonsStore } />
        <UpdateButton updateList={ this.fetchNewReasons } />
      </section>
    );
  }
}

class UpdateButton extends React.Component {
  render() {
    const { updateList } = this.props;

    return (
      <button onClick={ updateList }>Update reasons</button>
    );
  }
}
```

Primero **identificamos la fase del ciclo de vida** que nos interesa. Queremos que se haga lo más pronto posible, así que será en la fase de **montaje**. En la fase de montaje hay varios métodos del ciclo de vida:

 - `constructor()`
 - `componentWillMount()`
 - `render()`
 - `componentDidMount()`

¿Qué metodo usaremos? Bien, tenemos que ver cómo obtenemos los datos, si **síncrona o asíncronamente**. Como vamos a recibir los datos de una llamada AJAX a un servidor, será asíncrono:

 - En el `constructor()` y en `componentWillMount()` solo debemos guardar datos en el estado de forma síncrona; es decir, datos que ya tenemos disponibles
 - En `render()` solo debemos hacer operaciones con los datos que ya tenemos de las `props` y el estado
 - En `componentDidMount()` podemos hacer llamadas asíncronas y pasar un _callback_ que guarde esos datos en el estado

El método `componentDidMount()` se ejecuta después de `render()`; es decir, una vez el componente ya está iniciado y pintado, listo para recibir actualizaciones al estado.

```js
const ENDPOINT = 'https://...';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);

    // Inicializamos el estado en blanco: todavía no tenemos los datos
    this.state = {
      reasonsStore: []
    }

    this.fetchNewReasons = this.fetchNewReasons.bind(this);
  }

  fetchNewReasons() {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          reasonsStore: data.reasons
        });
      });
  }

  // render() solo maneja los datos del estado y las props
  render() {
    const { reasonsStore } = this.state;

    return (
      <section>
        <ReasonsList reasons={ reasonsStore } />
        <UpdateButton updateList={ this.fetchNewReasons } />
      </section>
    );
  }

  // según termina de pintarse el componente, llamamos al método que actualiza el estado con los datos del servidor
  componentDidMount() {
    this.fetchNewReasons();
  }
}
```

[&blacktriangleright; Peticiones a un servidor en el ciclo de vida en Codepen][codepen-fetching-remote-data-in-lifecycle]

* * *

**EJERCICIO 1: La hora con ciclo de vida**

Vamos a partir del componente `Clock` del ejercicio 1 de la sesión anterior. Y vamos a usar métodos del ciclo de vida para estructurar mejor el código.

> PISTA: en el constructor no deberíamos llamar a `setInterval` sino en el método de ciclo de vida adecuado

* * *

**EJERCICIO 2: El menú dinámico**

Vamos a crear un menú de opciones dinámico, es decir, que las opciones vienen de hacer una petición a un servidor. Vamos a ver paso por paso cómo hacerlo:
1. Creamos un componente `App` que será el contenedor de la aplicación

2. Creamos un componente `Menu` al que le pasamos por `props` un array con las opciones en este formato:
```js
[
  {
  "label": "inicio",
  "link": "#inicio"
  }
  ...
]
```

3. Hacemos que el componente `App` tenga dentro un `Menu` pasándole un array que creamos "a mano", es decir, creando una variable con el array

4. Creamos un estado en el componente `App` para almacenar las opciones de menú, que seguimos creando "a mano" en el `constructor`

5. Realizamos una petición al servidor en https://three-random-reasons-mdqknjcwpl.now.sh/ que nos devuelve un listado de opciones. La petición la hacemos con `fetch` en el método del ciclo de vida que corresponda.

6. BONUS: Creamos un botón en un nuevo componente `Button` que al hacer clic vuelve a realizar una petición al servidor y actualiza el estado, por lo que el menú vuelve a pintarse. Para esto necesitamos hacer lifting para pasar la información del evento desde `Button` hasta `App`, que es quien mantiene el estado.

* * *

### BONUS: Juego procedimental

Un juego generado procedimentalmente (_procedural_, en inglés) es un juego en el que lo que se ve o pasa en él se ha generado de forma aleatoria en el momento, siguiendo unos patrones (procesos). Muchos de estos juegos te permiten guardar la "semilla" que generó la versión que tú has jugado, para que puedas compartirla y competir por un mejor tiempo con tus amigos, por ejemplo. La "semilla" (_seed_ en inglés) puede ser un número aleatorio, una palabra o una frase.

El siguiente ejemplo muestra cómo cargamos un juego procedimental en un componente de React, usando los métodos de montaje del ciclo de vida de un componente:

```js
const generateRandomSeed = () => Math.random();

class GameManager extends React.Component {
  constructor(props) {
    super(props);

    // iniciamos el estado
    this.state = {
      viewportWidth: 0,
      viewportHeight: 0,
      gameSeed: 0
    };

    // enlazamos los escuchadores a esta instancia
    this.handleClick = this.handleClick.bind(this);
  }

  // hacemos unos cálculos antes de pintar el componente
  componentWillMount() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight;
    const randomSeed = generateRandomSeed();

    this.setState({
      viewportWidth: width,
      viewportHeight: height,
      gameSeed: randomSeed
    });
  }

  // pintamos el componente solo desde "props" y estado
  render() {
    const {
      viewportWidth: width,
      viewportHeight: height,
      gameSeed: seed
    } = this.state;

    return (
      <section>
        <Html5ProceduralGame
          seed={ seed }
          width={ width } height={ height }
        />
        <ResetGameButton click={ this.handleResetClick } />
      </section>
    );
  }

  // el componente ya se ha pintado y los hijos han recibido sus "props"
  componentDidMount() {
    alert(`Enjoy the game! If you ever want to play again this same stage, save this game seed: ${ this.state.gameSeed }`);
  }

  handleResetClick() {
    this.setState({
      gameSeed: generateRandomSeed()
    });
  }
}
```


## Recursos externos

### Documentación de React

Documentación oficial de React (en inglés).

- [Añadir métodos del ciclo de vida a un componente](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)
- [El ciclo de vida del componente](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
