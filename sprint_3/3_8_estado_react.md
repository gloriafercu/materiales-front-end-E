# Estado en React

[codepen-setstate-object-literal]: https://codepen.io/adalab/pen/EoLXOr?editors=0010
[codepen-setstate-incremental-function]: https://codepen.io/adalab/pen/baMRQW?editors=0010
[codepen-lifting-state-up]: https://codepen.io/adalab/pen/xpzBYz?editors=0010

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [Manejo del estado en un componente de React](#manejo-del-estado-en-un-componente-de-react)
- [¿Qué pasa cuando hay un cambio de estado?](#¿qué-pasa-cuando-hay-un-cambio-de-estado)
- [Arquitectura de componentes con estado](#arquitectura-de-componentes-con-estado)

## Introducción

Hasta ahora hemos usado los componentes prácticamente como plantillas HTML que podemos personalizar con `props`. Declarábamos los componentes y se pintaban. Aunque también hemos visto cómo pueden reaccionar a eventos, en esta sesión iremos un paso más allá y veremos cómo cada componente puede tener una pequeña memoria que le permitirá tener actividad por sí mismo.

También aprenderemos cómo declarar componentes _dummies_ (títeres) con una sintaxis simplificada y asentaremos algunas prácticas para organizar nuestros componentes y aplicaciones.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

React es especialmente bueno manejando los pequeños cambios que se necesitan en cada uno de los componentes de una web. Cada instancia de un componente tiene un **estado** que refleja cada uno de esos pequeños cambios. React encapsula toda la complejidad y la distribuye en este sistema predecible. Saber utilizar los estados nos permitirá definir cómo se comportarán los componentes en cada momento y declarar _react-ciones_ más elaboradas a según qué interación con el usuario.


## Manejo del estado en un componente de React

El estado de un componente es la memoria **en cada momento** que tiene la instancia de un componente que se está mostrando en pantalla. Se trata de un atributo de la instancia parecido a las `props`, al que podremos acceder con `this.state`. Al contrario que las `props`, el **estado varía** durante el tiempo en que el componente aparece pintado en la pantalla. Es decir, las `props` no podemos cambiarlas, pero los estados, sí, aunque de cierta manera. En la siguiente sección (_¿Qué pasa cuando hay un cambio de estado?_) veremos cómo afecta esto a nuestro componente.

Por defecto, el estado de un componente está vacío. Hay dos momentos y maneras distintas de darle valor: en el `constructor()` del componente, y en cualquier otro momento con `setState()`.

### Asignar el estado inicial en el `constructor()`

En el `constructor()` podemos definir el estado que tendrá el componente en el primer momento en que se muestre en pantalla. En otras palabras, el estado inicial del componente. Lo haremos asignando a `this.state` un objeto con los valores iniciales de **todos los estados** que vaya a tener el componente:

```js
const generateRandomInteger = (maxValue) => Math.floor(Math.random() * maxValue);

class RandomInteger extends React.Component {
  constructor(props) {
    super(props);
    const { maxValue } = props;

    this.state = {
      number: generateRandomInteger(maxValue)
    }
  }

  render() {
    return (
      <span>{ this.state.number }</span>
    );
  }
}
```

> Nota: El `constructor` es el **único lugar** donde podremos asignar directamente un valor a `this.state`. En el resto, debemos usar `setState()`

Como en este ejemplo el estado nunca cambia más, puede parecer que esto no sirve de mucho comparado con las `props`, pero en realidad ya hemos delegado la responsabilidad de generar el número aleatorio al propio componente. El componente ahora es independiente y ningún componente padre o madre debe mandarle qué número mostrar. Hemos declarado un componente con identidad propia (y quizá adolescente, :P ).

### Actualizar el estado: el método `setState()`

Ahora bien, hemos dicho que podemos cambiar el estado. Sin embargo, tenemos que hacerlo de cierta manera. Sabemos que los componentes en React son declarativos: no decimos _cómo_ se hace un componente, sino el _qué_, y React es quien se encarga del _cómo_. A la hora de cambiar los valores del estado, **no podremos asignar directamente los valores a `this.state`** o cualquiera de sus propiedades, sino que utilizaremos el método `setState()` del componente: React se encargará del resto.

Podemos llamar a `setState()` de varias maneras. La más común y sencilla de ellas es pasarle un **objeto literal** con las claves (nombres) de los estados que queremos cambiar y sus valores. Es decir, si tenemos tres estados `a`, `b` y `c`, pero solo queremos cambiar el valor de `c`, pasaremos un objeto `{ c: 'nuevo valor' }`, sin incluir `a` ni `b`. React lo mezclará con el estado actual y solo cambiará las propiedades que deba cambiar.

```js
class BipolarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'info'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Nuestra función escuchadora del evento click
    this.setState({
      styling: 'danger'
    });
  }

  render() {
    return (
      <button className={ `btn btn-${this.state.styling}` } onClick={ this.handleClick }>{ this.props.label }</button>
    );
  }
}
```

[&blacktriangleright; `setState()` de objeto literal en Codepen][codepen-setstate-object-literal]

Utilizaremos la forma del objeto literal cuando el nuevo valor no dependa del anterior o de ningún otro estado del componente actual. Como React no asegura que los cambios de estado se ejecuten en el momento (los agrupa en lotes), si usamos el valor de un estado actual para calcular otro podemos estar usando un estado que no tiene el valor que pretendemos. Eso es una fuente de errores. Para esos casos existe otra manera de llamar a `setState()`, esta vez le pasamos una función, un `callback`. El `callback` recibe como parámetros el estado que modificaremos (`prevState`), y las `props` del componente, y devolverá un objeto literal con las claves (nombres) de los estados que queremos cambiar. Es más fácil verlo que contarlo:

```js
class BipolarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'info'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.styling === 'info') {
        nextStyling = 'danger';
      } else {
        nextStyling = 'info';
      }

      return {
        styling: nextStyling
      };
    });
  }

  render() {
    const { label } = this.props;
    const { styling } = this.state;

    return (
      <button className={ `btn btn-${styling}` } onClick={ this.handleClick }>{ label }</button>
    );
  }
}
```

También se puede usar una _arrow function_ más corta y, en este caso, un operador ternario o "`if` corto":

```js
this.setState((prevState, props) => ({
  styling: (prevState.styling === 'info') ? 'danger' : 'info'
})); // este doble paréntesis se suele olvidar de primeras
```

[&blacktriangleright; `setState()` con función en Codepen][codepen-setstate-incremental-function]


* * *

**EJERCICIO 1: QUÉ HORA SERÁ**:

Hace unas semanas, la empresa Time2Sleep nos encargó una página que mostrase sus ejercicios de relajación orientados a agilizar el sueño. Después de publicarla, recibieron _feedback_ de sus usuarios: se quedaban tan profundamente dormidos que, al despertar, no recordaban ni su nombre. Como quedaron muy contentos con el trabajo (literalmente: _"¡cómo nos flipan estas adalabers!"_), ahora nos han pedido una evolutiva, que es como se llama a las funcionalidades que se añaden a un proyecto ya hecho, para que añadamos un reloj a la web. Así sus usuarios sabrán al menos qué hora es.

Vamos a crear un componente reloj (`Clock`) que nos muestre la hora en cada momento. Tendrá un método `updateClock()` en el componente para actualizar el estado con `setState(/* objeto */)`, que actualizará la hora con `new Date()`. En el constructor del componente declararemos un `setInterval()` que ejecute `updateClock` cada segundo.  

* * *

**EJERCICIO 2: CONTADOR DE OVEJAS**

Definitivamente, Time2Sleep es fan de AdaLab. Esta vez, basándose en unos novedosos estudios científicos de alguna famosísima universidad que dice que al contar ovejas nos aburrimos tanto que caemos dormidos, nos han encargado que hagamos un contador de ovejas digital.

Crearemos un componente cuentaovejas (`SheepCounter`) que mostrará un número en grande y un botón. El botón tendrá asignado un escuchador al evento `click` que aumentará el contador. Actualizaremos el valor del contador con `setState(/* función */)`.

* * *


## ¿Qué pasa cuando hay un cambio de estado?

Como hemos visto varias veces arriba, React no asegura que los cambios de estado se ejecuten al momento. Vamos a ver cómo hace React los cambios de estado, de manera simplificada.

Un cambio de estado no solo cambia los valores de `this.state`. Lo más importante que hace es **volver a llamar al método `render()`** del componente después. Recordemos que podemos usar valores del estado en nuestro JSX como texto, para calcular otros valores que utilizaremos o como `props` para otros componentes hijo, por ejemplo. Cuando el estado cambia, el componente se tiene que re-`render`izar de nuevo, y si las `props` de los hijos cambian, esos componentes hijos también tienen que re-`render`izarse, y sus hijos a su vez. Así que cambiar el estado es costoso, porque hace que vuelvan a `render`izarse varios componentes **en cadena**.

Ahora podemos entender por qué React no asegura que los cambios de estado ocurran al momento, aunque sean bastante rápidos. Cuando llamamos a `setState()` en cualquiera de sus formas, React registra esa **petición** de cambio de estado y la añade a una cola de tareas por hacer. Para no tener que re-`render`izar componentes demasiadas veces, es posible que agrupe en lotes (_batches_) algunos cambios de estado a la vez y los procese juntos para mejorar con eso el rendimiento. Esto significa que tendremos que pensar **las llamadas a `setState()` como llamadas asíncronas**.


### El `callback` de `setState()`

Si usásemos un valor de `this.state` después de llamar a `setState()`, podría no tener el valor actualizado. Por eso, `setState()` acepta un `callback` como último parámetro, como cualquier función asíncrona.

```js
this.setState(
  {
    mensaje: 'nuevo mensaje'
  },
  () => {
    console.log(this.state.mensaje); // 'nuevo mensaje'
  }
);
```

El `callback` se ejecutará justo después de que el cambio de estado haya tenido lugar, así que se pueden usar los nuevos valores de `this.state` sin problema.


## Arquitectura de componentes con estado

A pesar de que todos los componentes pueden tener estado, a la hora de hacer aplicaciones web con React, preferiremos **agrupar todos los estados en el componente raíz**. El resto de componentes serán _dummies_ (títeres), que significa que no tendrán estado. Podemos referirnos al estado del componente raíz como **estado de la aplicación** o **estado global**.

¿Por qué hacemos esto? En los estados guardaremos diferentes datos, algunos de los cuales habremos recibido de servidores: una lista de artículos en venta, sus precios y un booleano de si mostramos el IVA o no, por ejemplo. El mejor sitio para guardar esos datos es siempre el componente raíz, porque es el sitio desde el que cualquier componente hijo podrá acceder a ellos.

¿Y cómo lo haremos? Como vimos en la última sesión, la 4.5, podemos pasar datos de hijos a padres/madres **mediante _lifting_**. Recordemos que la técnica de _lifting_ consistía en pasar una función definida en el padre/madre a un componente hijo mediante las `props`. Esa función puede modificar al padre. Ahora que hemos visto los estados, podemos ver un nuevo uso del _lifting_: **actualizar estados de los padres/madres desde los hijos**.

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

[&blacktriangleright; _Lifting_ de estados en Codepen][codepen-lifting-state-up]


### BONUS: crear componentes _dummies_ más rápido

Llamamos componente _dummy_ (títere) a los componentes en React que **no tienen ni estado ni comportamiento**. Es decir, lo único de lo que dependerán son las `props` que se les pase, y solo en función de eso se pintarán. Sus cambios serán gestionados por otros componentes superiores que les pasarán esas `props`.

Hasta ahora los hemos escrito como componentes completos para que os familiarizaseis con la sintaxis de clases de React:

```js
import React from 'react';

class Greetings extends React.Component {
  render() {
    return (
      <h1>Hello, { this.props.name }!</h1>
    );
  }
}

export default Greetings;
```

Pero React también tiene una manera de escribir estos componentes de manera más sencilla. La idea, sencillamente, es pensar los componentes _dummies_ como funciones que reciben unas `props` como parámetros y devuelven elementos y componentes de JSX:

```js
import React from 'react';

const Greetings = (props) => {
  return (
    <h1>Hello, { props.name }!</h1>
  );
};

export default Greetings;
```

> Estos componentes _dummies_ también se llaman componentes funcionales (_functional components_) o, más específicamente, componentes funcionales sin estado (_stateless functional components_), porque tienen forma de función y carecen de estado.

Aunque parezca difícil, esta sintaxis se puede simplificar aún más. Recordamos que en ES2015 tenemos la habilidad de _destructuring_ de objetos. `props` es un objeto que podemos dividir en variables con los nombres de las `props`, directamente:

```js
// ...
const Greetings = (props) => {
  const { name } = props; // "destructuring" de objeto
  return (
    <h1>Hello, { name }!</h1>
  );
}
// ...
```

Podemos hacer _destructuring_ directamente en los parámetros de una función:

```js
// ...
const Greetings = ({ name }) => { // "destructuring" en los parámetros
  return (
    <h1>Hello, { name }!</h1>
  );
}
// ...
```

Y si lo combinamos con el _return_ implícito de las _arrow functions_, queda así:

```js
// ...
const Greetings = ({ name }) => ( // "arrow function" sin llaves, con "return" implícito
  <h1>Hello, { name }!</h1>
);
// ...
```

Hemos reducido la declaración de un componente de siete líneas a tres. Es una práctica común hacerlo al revés: declarar un componente nuevo primero como función, _dummy_, y si más tarde necesita estado o comportamiento, [ampliar su declaración](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class) a la de un componente de clase completo.


## Recursos externos

### Documentación de React

Documentación oficial de React (en inglés).

- [Estado en los componentes](https://facebook.github.io/react/docs/state-and-lifecycle.html)


### Egghead

Serie de clases en vídeo que introduce y explora los fundamentos básicos de React (en inglés).

- [Gestión de los estados en los componentes](https://egghead.io/lessons/react-state-basics)
- [Componentes de orden superior (con lógica) o contenedores](https://egghead.io/lessons/react-react-fundamentals-higher-order-components-replaces-mixins)
