# Eventos en React

[codepen-simple-jsx-event]: https://codepen.io/adalab/pen/zppdVP?editors=0010
[codepen-remembering-randomcat]: https://codepen.io/adalab/pen/YYYVvz?editors=0010
[codepen-handleevent-methods]: https://codepen.io/adalab/pen/NXXOGx?editors=0010
[codepen-lifting-events]: https://codepen.io/adalab/pen/wpmyjB?editors=0010

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [Eventos sintéticos de React](#eventos-sintéticos-de-react)
- [Uso de métodos `handleEvent` para manejar eventos](#uso-de-funciones-handleevent-para-manejar-eventos)
- [_Lifting_ (alzamiento) para pasar datos de hijos a padres](#lifting-alzamiento-para-pasar-datos-de-hijos-a-padres)

## Introducción

Hasta ahora sólo hemos visto cómo pintar interfaces estáticas o independientes en React. Esta es la sesión divertida: en esta sesión veremos cómo añadir dinamicidad a los componentes con eventos.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

React tiene un sistema de eventos sintéticos que ejecutan una acción cuando ocurre un acontecimiento. Con los eventos declararemos cómo _react-cionarán_ nuestros componentes a la interacción con el usuario. Por ejemplo, cuando haga clic en un botón dentro de un componente que hemos definido.


## Eventos sintéticos de React

Ya hemos visto cómo escribimos código parecido a HTML con JSX que se transforma en código HTML de verdad tras pasar por React. De una manera parecida, en React tenemos un sistema de **eventos sintéticos** que usaremos como si fueran normales. Aunque están diseñados para que pasen por [eventos regulares](https://www.w3.org/TR/DOM-Level-3-Events/), igual que JSX pasa por etiquetas HTML normales, cabe destacar que son una capa que nos proporciona React y que **no son eventos reales del DOM**, y por eso se llaman **sintéticos**.

En la sesión 2.6 vimos los eventos del DOM y cómo escuchar eventos desde JavaScript con `addEventListener()`. También vimos una manera de hacerlo desde atributos de HTML que **recomendamos no utilizar**, pero la enseñamos por si os la encontrábais en el futuro. Las funciones escuchadoras (_listeners_) de React se declaran de forma parecida a aquellos que no recomendábamos. Esto no es una contradicción: recordemos que en React escribimos interfaces declarativas, y esto es solo una sintaxis comprensible para asignar comportamiento. No debéis declarar funciones escuchadoras así fuera de React.

> Cuando escuchamos un evento, declaramos una función escuchadora (_listener_) que se ejecutará cuando se reciba un evento de cierto tipo. Esto es así tanto para eventos del DOM como para eventos sintéticos de React, sólo cambiaremos cómo asignamos la función al tipo de evento.

Vamos a ver un ejemplo. Queremos escuchar un evento de `click` desde un botón que declaramos con JSX. Escribiremos el botón (`<button>texto</button>`) y en un atributo `onClick` (ojo con la mayúscula) añadiremos la función "escuchadora", que será la reacción. Quedará así:

```js
const alertButton = <button onClick={ /* aquí va la función */ }>Pedir más información</button>;
```

Podríamos escribir directamente la función escuchadora como una _arrow function_ ahí, pero no quedaría legible. Preferiremos declararla fuera y la pasaremos (sin llamarla) al atributo de JSX:

```js
const onClickListener = (event) => {
  alert('Para más información, acuda a recepción.');
};
const alertButton = <button onClick={ onClickListener }>Pedir más información</button>;
```

Ya está. Cuando hagamos clic en el botón, React se encargará de escuchar el evento y de ejecutar la función.

[&blacktriangleright; Evento simple en Codepen][codepen-simple-jsx-event]


Naturalmente, hay más atributos para escuchar eventos a parte de `onClick`. Los nombres de los atributos tendrán la forma `onEventoEscuchado`, con cada palabra del nombre del evento que se escucha escrita con mayúsculas iniciales. Es decir, escucharemos el evento `focus` rellenando el atributo `onFocus`, el evento `mouseover` rellenando el atributo `onMouseOver`, y así sucesivamente. Podéis consultar [el listado completo de atributos soportados](https://reactjs.org/docs/events.html#supported-events), pero a continuación vamos a listar los más usados, como ya hicimos en la sesión de eventos:

- Escuchadores de eventos de ratón:
  - `onClick`: botón izquierdo del ratón
  - `onMouseOver`: pasar el ratón sobre un elemento
  - `onMouseOut`: sacar el ratón del elemento
- Escuchadores de eventos de teclado:
  - `onKeyPress`: pulsar una tecla
- Escuchadores de eventos sobre elementos:
  - `onFocus`: poner el foco (seleccionar) en un elemento, por ejemplo un `<input>`
  - `onBlur`: quitar el foco de un elemento
  - `onChange`: al cambiar el contenido de un `<input>` , `<textarea>` o `<select>` (no es necesario quitar el foco del `input` para que se considere un cambio, al contrario que en el DOM)
- Escuchadores de eventos de formularios:
  - `onSubmit`: pulsar el botón submit del formulario
  - `onReset`: pulsar el botón reset del formulario

React no puede controlar los eventos de la ventana, así que los siguiente eventos sintéticos no existen (sí existen sus correspondientes eventos de DOM):

- ~~Escuchadores de eventos de la ventana~~
  - ~~`onResize`: se ha cambiado el tamaño de la ventana~~
  - ~~`onScroll`: se ha hecho scroll en la ventana o un elemento~~


* * *

**EJERCICIO 1: ODIO LA CEBOLLA**

Vamos a crear un componente `OnionHater` que consta de un `textarea`. Escucharemos los evento de cambio del valor del `textarea` de forma que, si el texto escrito contiene la palabra 'cebolla' hagamos un `alert` diciendo 'ODIO LA CEBOLLA'.

> PISTA: para acceder al valor del `textarea` lo podemos hacer desde el objeto evento, el parámetro de la función escuchadora, con `event.target.value`

> PISTA: para comprobar si una cadena contiene un texto podemos usar el método `includes` de las cadenas

* * *

**EJERCICIO 2: ELIGE TU DESTINO**

Vamos a crear un componente `Destiny` que contiene un `select` con un listado de ciudades: Buenos Aires, Sydney, Praga, Boston y Tokio. Al cambiar el valor del `select`, haremos aparecer un `alert` que diga 'Tu destino es viajar a XXX', siendo XXX la ciudad seleccionada.

* * *


## Uso de métodos `handleEvent` para manejar eventos

No solo podemos usar funciones escuchadoras en elementos sueltos de JSX, como hemos hecho en la sección anterior, sino que también podemos declararlas en nuestros componentes de React. Pero antes de hacerlo, vamos a aclarar un término. Las funciones escuchadoras también se llaman _"event handlers"_, que significa "encargadas del evento", porque son **las funciones encargadas** de reaccionar al evento. En esta sección las llamaremos así para entender mejor y recordar los nombres que usaremos para estas funciones.

Es una práctica común declarar **dentro** del componente las _event handlers_ que se usan en el componente. Como los componentes son clases, los _event handlers_ serán **métodos** de la clase, y su nombre suele empezar por `handle` ("encargarse de", en inglés), seguido del nombre del evento. Por ejemplo, un _event handler_ que se ocupe del evento `click` se llamará `handleClick()`.

Vamos a ver un ejemplo. Recordaréis [el componente `RandomCat`][codepen-remembering-randomcat] que creamos en una sesión anterior. Este componente pintaba una foto aleatoria con un gato. Pero algunos días como hoy nos gustan más las pizzas que los gatos, así que haremos un componente `RandomPizza` que pinte una foto aleatoria de una pizza:

```js
const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_PIZZAS = 10;

class RandomPizza extends React.Component {
  render() {
    const randomPizza = getRandomInteger(NUMBER_OF_PIZZAS);

    return (
      <img
        src={ `http://lorempizza.com/400/200/${randomPizza}` }
        alt="Random pizza"
      />
    );
  }
}
```

Lo modificaremos para que, cuando hagamos clic en la imagen, se genere otra imagen. Para ello, declararemos un método `handleClick` en el componente:

```js
// ...
class RandomPizza extends React.Component {
  handleClick() {
    // method body
  }
  // class body
}
```

La función que pinta nuestro componente, `render()`, es también la función que genera una imagen aleatoria al llamar a `getRandomInteger()`. Si pudiéramos hacer desde nuestra función `handleClick()` que React pintase con `render()` nuestro componente de nuevo, la imagen se generaría de nuevo. Afortunadamente, los componentes de React tienen un método `forceUpdate()` que sirve justo para eso:

```js
// ...
class RandomPizza extends React.Component {
  handleClick(event) {
    this.forceUpdate();
  }

  render() {
    const randomPizza = getRandomInteger(NUMBER_OF_PIZZAS);

    return (
      <img
        src={ `http://lorempizza.com/400/200/${randomPizza}` }
        alt="Random pizza"
      />
    );
  }
}
```

> No debemos usar el método `forceUpdate()` indiscriminadamente, sino delegar el `render`izado de componentes en React. De momento, solo sabemos que nuestros componentes se re-`render`izan cuando cambian sus `props`, pero en la próxima lección aprenderemos cómo hacerlo sin usar `forceUpdate()`.

Como nuestro método `handleClick()` contiene un `this` y el método lo ejecutará React desde otro contexto, tendremos que asegurarnos de que el `this` que usará es el `this` que queremos. Para eso, en el `constructor()` enlazaremos (_bind_, en inglés) el método a nuestro componente para que siempre que lo llamemos, se ejecute bien:

```js
// ...
class RandomPizza extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.forceUpdate();
  }

  // ...
}
```

Ahora que tenemos nuestro método `handleClick()` declarado y enlazado, podemos registrarlo en el elemento JSX donde queremos escuchar el evento.

```js
const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_PIZZAS = 10;

class RandomPizza extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.forceUpdate();
  }

  render() {
    const randomPizza = getRandomInteger(NUMBER_OF_PIZZAS);

    return (
      <img
        src={ `http://lorempizza.com/400/200/${randomPizza}` }
        alt="Random pizza"
        onClick={ this.handleClick } // asignamos el método como escuchador del evento click
      />
    );
  }
}
```

[&blacktriangleright; Métodos `handleEvent()` en Codepen][codepen-handleevent-methods]

* * *

**EJERCICIO 3: EXPRESO MI ODIO EN ROJO**

Partiendo del código ejercicio 1, vamos a hacer que nuestro componente ocupe toda la pantalla disponible, y tenga el `textarea` en el centro. Vamos a hacer que al detectar la palabra cebolla en el texto, en vez de mostrar un alert mostrando nuestro odio, pongamos el fondo del componente de color rojo. Al volver a un texto sin cebolla, el fondo vuelve a ser blanco.

>PISTA: usaremos el método `forceUpdate` que hemos usado antes, haciendo por ejemplo que cambie un atributo de nuestra clase para indicar si estamos odiando o no

> PISTA: recuerda que para que el `this` funcione correctamente en nuestra función de _handle_ debemos hacer el `bind` adecuado en el constructor

_BONUS_: ¿Podrías hacer que nuestro odio aparezca tanto si 'cebolla' tiene mayúsculas o minúsculas?

* * *

**EJERCICIO 4: VISUALIZA TU DESTINO**

Vamos a partir del ejercicio 2 sobre elegir tu destino. Vamos a crear un nuevo componente `CityImage` que muestra una imagen de una ciudad que recibe por props. Por ejemplo

```html
<CityImage city="Praga" />
```

Debe mostrar una imagen de Praga. Para facilitar este comportamiento, este componente debe tener como uno de sus atributos un objeto literal con el formato:

```js
{
  'Praga': 'http://path-to-praga-image.jpg',
  'Boston': 'http://path-to-boston-image.jpg',
  ...
}
```

Una vez que tenemos este componente funcionando, vamos a crear uno como hija de nuestro componente `Destiny`, es decir, vamos a hacer que `Destiny` contenga un `CityImage`. Para eso vamos a pintarlo en el JSX de su `render`.

Para terminar, vamos hacer que la magia suceda: en vez de hacer un alert, vamos a conseguir que al cambiar el select a una ciudad aparezca la imagen de esa ciudad y nuestro componente `Destiny` también muestre el texto 'Tu destino es viajar a XXX' en un título. Para conseguirlo, modificaremos un atributo de la clase `this.city` al modificarse el `select`. También tendremos que hacer un `forceUpdate` para se ejecute el método `render` y a) se pasen unas props diferentes al componente `CityImage` y b) se pinte una ciudad diferente en el título.

* * *


## _Lifting_ (alzamiento) para pasar datos de hijos a padres

Hemos visto que los eventos nos permiten declarar qué reacciones tendrán nuestros componentes. Sin embargo, en ocasiones necesitamos que una reacción en un componente hijo/a, como puede ser la que causa un evento, provoque una reacción en el elemento padre/madre, o incluso más arriba en la cadena.

React solo nos permite pasar datos unidireccionalmente, de padres/madres a hijos/hijas. Aunque esto puede parecer una limitación, debemos recordar que las funciones en JavaScript se tratan como datos, podemos guardarlas en variables, y conservan las variables del ámbito donde se declararon. Así que, ¿y si declarásemos una función en el padre/madre que provoque una reacción en el propio componente y se la pasamos como `prop` a un hijo/a? Eso es una **práctica habitual en React** que se llama _lifting_, que significa "alzamiento".

_Lifting_ es una técnica que consiste en pasar funciones a los hijos/as y que sean estos quienes se encarguen de ejecutarlas cuando sea necesario, provocando un cambio _hacia arriba_, en los padres. Generalmente se usa para cambiar el _estado_ de los padres, que luego provocará un re-`render`izado de los hijos/as con nuevas `props`. Aún no sabemos qué es el estado de un componente ni cómo usarlo, así que de momento utilizaremos `forceUpdate()` para provocar el re-`render`izado manualmente.

Vamos a ver un ejemplo, con pizzas de nuevo. Tenemos tres componentes, `PizzaList`, `RandomPizza` y `ReloadButton`, cada uno en su módulo. `PizzaList` renderiza una lista con tres componentes `RandomPizza`, y además un botón `ReloadButton`:

**components/PizzaList.js**
```js
import React from 'react';
import RandomPizza from `./RandomPizza`;
import ReloadButton from './ReloadButton';

class PizzaList extends React.Component {
  constructor(props) {
    super(props);

    // nos aseguramos de que este callback se ejecute siempre sobre el componente enlazándolo a la instancia con "bind"
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.forceUpdate(); // se ejecutará el método `render()` de PizzaList, que hará a su vez que se ejecute de nuevo el método `render()` de los hijos
  }

  render() {
    const { handleClick } = this;

    return (
      <section className="section-pizzas">
        <h1>All <del>Cats</del> Pizzas Are Beautiful</h1>
        <ul className="section-pizzas_list">
          <li><RandomPizza /></li>
          <li><RandomPizza /></li>
          <li><RandomPizza /></li>
        </ul>
        {/* pasamos handleClick al hijo como prop */}
        <ReloadButton actionToPerform={ handleClick } label="More pizzas"/>
      </section>
    );
  }
}

export default PizzaList;
```

**components/ReloadButton.js**
```js
import React from 'react';

class ReloadButton extends React.Component {
  render() {
    const {
      label = "More",
      actionToPerform
    } = this.props;

    return (
      // Registramos el escuchador que recibimos por props. ¡Lifting hecho!
      <button onClick={ actionToPerform }>{ label }</button>
    );
  }
}

export default ReloadButton;
```

**components/RandomPizza.js**
```js
import React from 'react';

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_PIZZAS = 10;

class RandomPizza extends React.Component {
  render() {
    const randomPizza = getRandomInteger(NUMBER_OF_PIZZAS);

    return (
      <img src={ `http://lorempizza.com/400/200/${randomPizza}` } alt="Random pizza" />
    );
  }
}

export default RandomPizza;
```

**index.js**
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import PizzaList from './components/PizzaList';

ReactDOM.render(
  <PizzaList />,
  document.getElementById('react-root')
);
```

[&blacktriangleright; _Lifting_ de eventos en Codepen][codepen-lifting-events]

* * *

**EJERCICIO 5: FILTRANDO ARTÍCULOS**

Vamos a partir del [Ejercicio del listado de items de la lista de la compra de la sesión anterior](https://codepen.io/adalab/pen/XVoVOa?editors=0110). Si recuerdas bien, teníamos un componente `ItemList` que mostraba un listado de `Item`s. Vamos a crear un nuevo componente `CategoryButton` que es un botón con el nombre de una categoría de productos y que recibe por `props` el nombre de la categoría.

```html
<CategoryButton category="Bebida" />
```

En nuestro `ItemList` vamos a pintar, además del `ul` con el listado de items, un botón con una categoría, por ejemplo, 'Bebida'.

> Recuerda que un componente de React sólo debe tener un elemento raíz en su método `render` y si queremos meter más cosas debemos agruparlas, por ejemplo, en un `div`.

Ahora viene lo bueno: vamos a escuchar eventos `click` sobre el botón de la categoría, de forma que se invoca un método del componente madre (`ItemList`) que hemos recibido por `props` (_lifting_). A este método de la madre le pasamos como parámetro el nombre de la categoría, para que sepa qué botón se ha clicado. Ya en `ItemList` definimos ese método para que si se pulsa el botón de la categoría bebidas sólo aparezcan los items de esa categoría en pantalla. Esto podemos hacerlo de varias formas:
- si tenemos todos los items en un array, podemos filtrarlos con `filter` para dejar solo los de la categoría seleccionada
- podemos pasar una prop más a los `Item` para indicar si está visible o no, y ocultarlo con una clase CSS
Al final, elijamos la que elijamos, tendremos que realizar un `forceUpdate` para forzar la ejecución del método `render` de `ItemList` que a su vez fuerza el de sus hijas.

_BONUS_: cuando tenemos todo funcionando para una categoría, podemos añadir botones para cada de las que tengamos productos. Incluso un botón especial 'Todos' para mostar de nuevo los productos de todas las categorías.

* * *


## Recursos externos

### Egghead

Serie de clases en vídeo que introduce y explora los fundamentos básicos de React.

- [Eventos sintéticos de React](https://egghead.io/lessons/react-react-synthetic-event-system)
