# Lifting

[codepen-lifting-events]: https://codepen.io/adalab/pen/wpmyjB?editors=0010

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [_Lifting_ (alzamiento) para pasar datos de hijos a padres](#lifting-alzamiento-para-pasar-datos-de-hijos-a-padres)

## Introducción

Hemos visto que los eventos nos permiten declarar qué reacciones tendrán nuestros componentes. Sin embargo, en ocasiones necesitamos que una reacción en un componente hijo/a, como puede ser la que causa un evento, provoque una reacción en el elemento padre/madre, o incluso más arriba en la cadena.

React solo nos permite pasar datos unidireccionalmente, de padres/madres a hijos/hijas. Aunque esto puede parecer una limitación, debemos recordar que las funciones en JavaScript se tratan como datos, podemos guardarlas en variables, y conservan las variables del ámbito donde se declararon. Así que, ¿y si declarásemos una función en el padre/madre que provoque una reacción en el propio componente y se la pasamos como `prop` a un hijo/a? Eso es una **práctica habitual en React** que se llama _lifting_, que significa "alzamiento".


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Para poder pasar información desde cualquier componente a cualquier otro componente de nuestra aplicación de React.


## _Lifting_ (alzamiento) para pasar datos de hijos a padres

_Lifting_ es una técnica que consiste en pasar funciones a los hijos/as y que sean estos quienes se encarguen de ejecutarlas cuando sea necesario, provocando un cambio _hacia arriba_, en los padres. Generalmente se usa para cambiar el _estado_ de los padres, que luego provocará un re-`render`izado de los hijos/as con nuevas `props`.

Vamos a ver un ejemplo, con Murrays de nuevo. Tenemos tres componentes, `MurrayList`, `RandomMurray` y `ReloadButton`, cada uno en su módulo. `MurrayList` renderiza una lista con varios componentes `RandomMurray`, y además un botón `ReloadButton`:

**components/MurrayList.js**
```js
import React from 'react';
import RandomMurray from `./RandomMurray`;
import ReloadButton from './ReloadButton';

class MurrayList extends React.Component {
  constructor(props) {
    super(props);

    // nos aseguramos de que este callback se ejecute siempre sobre el componente enlazándolo a la instancia con "bind"
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.forceUpdate(); // se ejecutará el método `render()` de MurrayList, que hará a su vez que se ejecute de nuevo el método `render()` de los hijos
  }

  render() {
    const { handleClick } = this;

    return (
      <section className="section-murrays">
        <h1>All <del>Cats</del> Murrays Are Beautiful</h1>
        <ul className="section-murrays_list">
          <li><RandomMurray /></li>
          <li><RandomMurray /></li>
          <li><RandomMurray /></li>
        </ul>
        {/* pasamos handleClick al hijo como prop */}
        <ReloadButton actionToPerform={ handleClick } label="More murrays"/>
      </section>
    );
  }
}

export default MurrayList;
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

**components/RandomMurray.js**
```js
import React from 'react';

const getRandomInteger = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
const MIN_SIZE = 200;
const MAX_SIZE = 400;

class RandomMurray extends React.Component {
  render() {
    const randomMurray = getRandomInteger(MIN_SIZE, MAX_SIZE);

    return (
      <img src={ `http://loremmurray.com/400/200/${randomMurray}` } alt="Random murray" />
    );
  }
}

export default RandomMurray;
```

**index.js**
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import MurrayList from './components/MurrayList';

ReactDOM.render(
  <MurrayList />,
  document.getElementById('react-root')
);
```

[&blacktriangleright; _Lifting_ de eventos en Codepen][codepen-lifting-events]

* * *

**EJERCICIO 1: FILTRANDO ARTÍCULOS**

Vamos a partir del [Ejercicio del listado de items de la lista de la compra de la sesión anterior](https://codepen.io/adalab/pen/XVoVOa?editors=0110). Si recuerdas bien, teníamos un componente `ItemList` que mostraba un listado de `Item`s. Vamos a crear un nuevo componente `CategoryButton` que es un botón con el nombre de una categoría de productos y que recibe por `props` el nombre de la categoría.

```html
<CategoryButton category="Bebida" />
```

En nuestro `ItemList` vamos a pintar, además del `ul` con el listado de items, un botón con una categoría, por ejemplo, 'Bebida'.

> Recuerda que un componente de React sólo debe tener un elemento raíz en su método `render` y si queremos meter más cosas debemos agruparlas, por ejemplo, en un `div`.

Ahora viene lo bueno: vamos a escuchar eventos `click` sobre el botón de la categoría, de forma que se invoca un método del componente madre (`ItemList`) que hemos recibido por `props` (_lifting_). A este método de la madre le pasamos como parámetro el nombre de la categoría, para que sepa qué botón se ha clicado. Ya en `ItemList` definimos ese método para que si se pulsa el botón de la categoría bebidas sólo aparezcan los items de esa categoría en pantalla. Esto podemos hacerlo de varias formas:
- si tenemos todos los items en un array, podemos filtrarlos con `filter` para dejar solo los de la categoría seleccionada
- podemos pasar una prop más a los `Item` para indicar si está visible o no, y ocultarlo con una clase CSS
Al final, elijamos la que elijamos, tendremos que realizar un cambio de estado para forzar la ejecución del método `render` de `ItemList` que a su vez fuerza el de sus hijas.

_BONUS_: cuando tenemos todo funcionando para una categoría, podemos añadir botones para cada de las que tengamos productos. Incluso un botón especial 'Todos' para mostar de nuevo los productos de todas las categorías.

* * *


## Recursos externos

### Documentación oficial de facebook sobre lifting

- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
