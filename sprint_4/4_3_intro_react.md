# Introducción a React

## Contenidos
- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [Qué es React](#qué-es-react)
- [Estructura de un proyecto en React](#estructura-de-un-proyecto-en-react)
- ["Hola, mundo" con `create-react-app`](#hola-mundo-con-create-react-app)
- [JSX y el método `render`: la magia de no tener que manipular el DOM](#jsx-y-el-método-render)
- [Interfaz declarativa VS imperativa](#interfaz-declarativa-vs-imperativa)
- [Creando nuestro primer componente](#creando-nuestro-primer-componente)
- [Creando varios componentes](#creando-varios-componentes)
- [Las `props` para pasar datos entre componentes](#las-props-para-pasar-datos-entre-componentes)

## Introducción

[react]: https://reactjs.org/

En esta sesión nos iniciaremos en la librería [React.js][react]. React es una librería para crear interfaces de usuario que se creó en 2013 en el seno de Facebook y goza de buena salud en el ecosistema de JavaScript.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Es muy común en todos los ecosistemas de programación usar librerías o _frameworks_ que permiten terminar productos mucho más rápido y ahorran escribir código. JavaScript no es una excepción, y en su historia podemos contar varias librerías y _frameworks_ populares como jQuery &mdash;que suplió las carencias iniciales del lenguaje mientras maduraba&mdash;, Backbone.js, AngularJS o Ember.js.

En particular, el manejo del DOM en proyectos grandes de JavaScript es una fuente de problemas. Desde las _single page applications_ (SPAs) se empezaron a desarrollar _frameworks_ que ayudaban a controlar esto, entre otras cosas. Hoy en día, React es una de las librerías más extendidas y maduras, con gran soporte de la comunidad y muchos recursos disponibles. React es una librería especializada en crear interfaces de usuario componentizadas, no un _framework_.

En nuestra actividad profesional nos encontraremos con diferentes _frameworks_ y librerías. Aprender a usar una librería externa nos ayudará a enfrentarnos a estas situaciones en la vida real.


## Qué es React

Hasta ahora hemos visto cómo crear webs escribiendo la vista en archivos HTML y el comportamiento, la lógica, en archivos JavaScript. La tendencia actual es escribir vista y comportamiento juntos, en lo que llamamos componentes, que serán reutilizables.

React es una librería que nos permite hacer componentes gráficos con los que estructurar nuestra web. Los componentes gráficos se pintarán "solos" en el DOM, sin que tengamos que manejarlo "a mano". Además, React lo hace de una manera pensada para que los componentes cambien, así que crearemos webs muy reactivas y rápidas.

Es intuitivo hacer webs con React porque todo son componentes que llaman a otros. El flujo es unidireccional (de arriba abajo), así que es fácil entender y solucionar los errores que pueda haber: si el error no está en mi componente, está en quien ha llamado a mi componente y cómo.


## Estructura de un proyecto en React

Un proyecto en React, en principio, tendrá un solo archivo HTML, y al menos un archivo JavaScript desde el que importaremos la librería de React. Así que un proyecto mínimo tendrá la siguiente estructura:

```
my-react-project
├── index.html
├── index.js
└── <dependencies>/
    ├── react.js
    └── react-dom.js
```

Sin embargo, trabajaremos con una estructura bien organizada para crear proyectos de mediano tamaño con `node` y `npm` más parecida a esta:

```
my-react-project
├── .gitignore
├── package.json
├── node_modules
│   ├── react
│   └── react-dom
├── public
│   └── index.html
└── src
    ├── images
    │   └── logo.png
    ├── stylesheets
    │   ├── index.scss
    │   └── index.css
    ├── components
    │   └── a-component.js
    └── index.js
```

`npm` instalará las dependencias en la carpeta `node_modules`, de donde podremos importar módulos de JS como `react` y `react-dom` a nuestro código.
Nuestro código se agrupará dentro de la carpeta `src`, excepto el único archivo HTML que usaremos, que estará en `public/index.html`.

Nuestros componentes de React irán en la carpeta `src/compontents`, cada uno en su fichero. En cuanto a los archivos de estilo, seguiremos compilando Sass con gulp/Koala y metiendo los archivos CSS en la carpeta `src/stylesheets`.

Basta de cháchara: ¡empecemos!


## "Hola, mundo" con `create-react-app`

Vamos a crear nuestro primer "¡Hola, mundo!" con React. Usaremos `create-react-app`, una herramienta generador que nos automatiza instalar React y Babel, que transformará código ES6 en ES5, y nos preconfigura un proyecto. Manos a la obra.

Necesitaremos Node.js instalado. Primero instalamos de forma global la utilidad de `create-react-app`, y luego creamos nuestro proyecto de React 'my-react-project' ejecutando esto en un terminal:

```sh
npm install -g create-react-app
create-react-app my-react-project
```

Esto nos creará una carpeta `my-react-project` y dentro tendremos todo listo. Para verlo, entramos dentro de la carpeta y ejecutaremos el proyecto con `npm`:

```sh
cd my-react-project
npm start
```

`create-react-app` nos ha instalado un _live-server_, así que sin cerrar el navegador ni el terminal, vamos a abrir el archivo `my-react-project/src/App.js` y probar a cambiar la frase "Welcome to React" por "¡Hola, mundo!". Guardamos y cambiamos al navegador.

!["Hola, mundo" en React](assets/4-3/react-hello-world.png)


## JSX y el método `render`

Quizá al modificar el archivo `App.js` os haya sorprendido algo. _"¿Eso no es HTML? ¡Pero si esto es un archivo JavaScript!"_:

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">¡Hola, mundo!</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
    );
  }
}

export default App;
```

Esas etiquetas `div`, `header`, `img`, `h1` y `p` son una extensión de la sintaxis de JavaScript que se llama **JSX**. JSX nos facilita escribir código que React transformará luego en elementos reales del DOM. Como JSX no deja de ser **código JavaScript**, lo podemos tratar como tal. Por ejemplo, podemos guardar elementos en una variable:

```js
const titleElement = <h1>¡Hola, mundo!</h1>;
```

Podemos usar expresiones JavaScript dentro de esa sintaxis con `{` y `}`, como si fuera la interpolación de cadenas de ES6 (pero sin `$`):

```js
const titleText = '¡Hola, mundo!';
const titleElement = <h1>{ titleText }</h1>;
```

También podemos añadir atributos a los elementos que creemos:

```js
const titleElement = <h1 className="App-title">¡Hola, mundo!</h1>;
```

> `class` es una palabra reservada en JavaScript, así que tendremos que usar `className` como nombre de atributo cuando queramos asignar una clase CSS

```js
const titleClassNames = 'App-title';
const titleElement = <h1 className={ titleClassNames }>¡Hola, mundo!</h1>;
```


Este último ejemplo de JSX se transformará en este JavaScript:

```js
const titleClassNames = 'App-title';
const titleElement = React.createElement(
  'h1',
  { className: titleClassNames },
  '¡Hola, mundo!'
);
```

React pintará en el DOM el HTML correspondiente al JSX que se devuelve desde el método `render()`. En este caso, el HTML quedará así:

```html
<h1 class="App-title">¡Hola, mundo!</h1>
```

Muy parecido al JSX que hemos escrito, ¿verdad?

* * *

**EJERCICIO 1**:

Vamos a crear un proyecto nuevo con `create-react-app` y a familiarizarnos con JSX. Este ejercicio también nos ayudará a asignar nombres a las variables, un tema que será importante cuando creemos nuestros componentes más adelante.

Una vez generado el proyecto, solo modificaremos el método `render()` dentro del archivo `App.js`. El objetivo será que el `return` de `render()` devuelva una sola variable. Para lo que extraeremos a variables cada una de las "etiquetas" del contenido del `return` original. Por ejemplo, una variable para la cabecera, y otra para el párrafo. Haremos que los nombres de nuestras variables sean descriptivos y, solo cuando sea posible, cortos.

```js
render() {
  /* aquí irán el resto de variables que extraeremos */
  const appRoot = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">¡Hola, mundo!</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );

  return appRoot;
}
```
>NOTA: a partir de ahora te recomendamos reusar este proyecto React que ya tienes creado para ir probando el resto de los ejemplos.

* * *


## Interfaz declarativa VS imperativa

Con React haremos interfaces declarativas, en vez de imperativas. La programación declarativa nos permite focalizarnos en **el resultado final** de lo que programamos, en vez de en los detalles específicos de cómo se lleva a cabo el resultado.

No tendremos que seleccionar qué elemento del DOM tiene que cambiar cuando se cumpla una condición y qué otro cambiará cuando se cumpla otra. En vez de eso, **declararemos** lo que debe resultar, el QUÉ, y ya se encargará React del CÓMO pintar en el DOM.

```js
const person = {
  fullName: {
    name: 'Ada',
    lastName: 'Lovelace'
  },
  title: 'Countess of Lovelace',
  areas: [
    'Mathematics',
    'Computing'
  ]
}
const personCardElement = document.getElementById('person-card');

// CÓMO, imperativa
const cardTitle = document.createElement('h2');
cardTitle.textContent = `${person.fullName.name}, ${person.title}`;
cardTitle.classList.add('card-title');
personCardElement.appendChild(cardTitle);

const cardList = document.createElement('ul');
cardList.classList.add('card-area-list');
for (const area of person.areas) {
  const cardListItem = document.createElement('li');
  cardListItem.classList.add('card-area-list');
  cardListItem.textContent = area;
  cardList.appendChild(cardListItem);
}
personCardElement.appendChild(cardList);

// QUÉ, declarativa (React)
const personCardComponent = (
  <article>
    <h2 className="card-title">
      { person.fullName.name }, { person.title }
    </h2>
    <ul className="card-area-list">
    { person.areas.map((area) =>
      <li className="card-area">{ area }</li>
    ) }
    </ul>
  </article>
);

ReactDOM.render(personCardComponent, personCardElement);
```

Este flujo es más útil cuando creamos una aplicación web compleja que cambie mucho con la interacción del usuario o si recibimos **datos dinámicos** de un servidor. No importa lo que recibamos, una vez hayamos declarado lo que pintar en función a un formato dado, se pintará _solo_.


## Creando nuestro primer componente

Manos a la obra. Vamos a crear un componente que nos muestre una imagen aleatoria de un gato, y además será un enlace a una página. Creamos un proyecto con `create-react-app` y trabajaremos en el archivo `src/index.js`.

Crearemos el componente después de todos los `import`s. Un componente será una subclase de la clase `Component` de React, así que escribiremos lo siguiente:

```js
class RandomCat extends React.Component {
  // class body
}
```

> Crearemos nuestros componentes siempre con **mayúscula inicial**. Así los diferenciaremos de los componentes en JSX que representan etiquetas de HTML

Los componentes de React tienen un método `render()` que devuelve un elemento de JSX para que React lo pinte, así que sobrescribiremos ese método (es decir, que declararemos un método con ese nombre):

```js
class RandomCat extends React.Component {
  render() {
    return (
      <a href="http://lorempixel.com">
        <img src="http://lorempixel.com/400/200/cats/" alt="Random cat" />
      </a>
    );
  }
}
```

¡Ya está! Ahora para ver el resultado tendremos que decirle a React que lo pinte. Es tan fácil como cambiar la línea que empieza por `ReactDOM.render` y reemplazar `<App />` por `<RandomCat />`:

```js
ReactDOM.render(<RandomCat />, document.getElementById('root'));
```

Para terminar, pasaremos nuestro código a un módulo. Crearemos un archivo `RandomCat.js` en la misma carpeta `src` y pasaremos la declaración de la clase. Para que funcione, tendremos que `import`ar React de su módulo, así que añadiremos al principio:

**RandomCat.js**:
```js
import React from 'react';
// ...
```

Para que nuestro componente se pueda usar desde fuera del módulo, lo `export`aremos. Para eso, añadiremos al final:

**RandomCat.js**:
```js
// ...
export default RandomCat;
```

Ahora, para usar nuestro componente en el archivo `index.js`, tendremos que `import`ar nuestro componente del módulo, naturalmente. Escribiremos arriba:

**index.js**:
```js
import React from 'react';
// ...
import RandomCat from './RandomCat';
```

> Para `import`ar de un archivo local, utilizaremos el prefijo `./` antes de la ruta. Sin embargo, no pondremos el prefijo cuando sea una dependencia en `npm`, como nos preconfigura `create-react-app` para `react` y `react-dom`.

**Y voilá!** Nos debería quedar así:

**RandomCat.js**:
```js
import React from 'react';

class RandomCat extends React.Component {
  render() {
    return (
      <a href="http://lorempixel.com">
        <img src="http://lorempixel.com/400/200/cats/" alt="Random cat" />
      </a>
    );
  }
}

export default RandomCat;
```

**index.js**:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RandomCat from './RandomCat';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RandomCat />, document.getElementById('root'));
//registerServiceWorker();
```

> Las líneas comentadas son una añadidura de `create-react-app` para facilitar hacer _progressive web apps_, pero son completamente opcionales y por ahora no las utilizaremos.


## Creando varios componentes

Vamos a hacer un componente más que sea la sección donde se mostrarán distintos gatos. Tendrá un título y una lista con los gatos. Así veremos cómo usar componentes anidados.

Nos vamos a acostumbrar a crear nuestros componentes de React en un directorio `components` para tenerlos todos juntos. Creamos el directorio, movemos `RandomCat.js` dentro y creamos un nuevo archivo `CatList.js`:

**components/CatList.js**:
```js
import React from 'react';

class CatList extends React.Component {
  // class body
}

export default CatList;
```

El método `render()` devolverá un elemento `section` con un `h1` y una lista `ul` con tres elementos `li`:

**components/CatList.js**:
```js
// ...
class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li>A cat</li>
          <li>Another cat</li>
          <li><i>Moar</i> cats</li>
        </ul>
      </section>
    );
  }
}
// ...
```

Como queremos usar `RandomCat` dentro de `CatList`, tendremos que importarlo en la parte superior del archivo:

**components/CatList.js**:
```js
import React from 'react';
import RandomCat from './RandomCat';
// ...
```

Lo siguiente tenemos que agradecérselo a JSX: para usar nuestro componente solo tendremos que usarlo como si fuera una etiqueta de HTML normal. Así que cambiaremos cada uno de los textos de dentro de los elementos `li` por `<RandomCat />`:

**components/CatList.js**:
```js
// ...
<ul className="section-cats_list">
  <li><RandomCat /></li>
  <li><RandomCat /></li>
  <li><RandomCat /></li>
</ul>
// ...
```

Finalmente, en el archivo `index.js` importaremos el componente `CatList` y le diremos a `ReactDOM` que `render`ice `<CatList />`:

**index.js**:
```js
// ...
import CatList from './components/CatList';

ReactDOM.render(<CatList />, document.getElementById('root'));
```

Ahora se verán tres gatos iguales por la caché de los navegadores web (la dirección de la imagen es la misma y reutilizan la llamada al servidor). Podemos modificar el componente `RandomCat` para que siempre sea diferente generando un número aleatorio. Declaramos una pequeña función y el número de gatos disponibles:

**RandomCat.js**:
```js
import React from 'react';

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;
// ...
```

Y ahora solo tendremos que modificar el método `render()` para incluir la llamada a la función, que se ejecutará cada vez que React pinte un componente `RandomCat`:

**RandomCat.js**:
```js
// ...
render() {
  const randomCat = getRandomInteger(NUMBER_OF_CATS);

  return (
    <a href="http://lorempixel.com">
      <img src={ `http://lorempixel.com/400/200/cats/${randomCat}` } alt="Random cat" />
    </a>
  );
}
```

**¡Genial!** Nos quedará así:

**index.js**:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CatList from './components/CatList';

ReactDOM.render(<CatList />, document.getElementById('root'));
```

**components/CatList.js**:
```js
import React from 'react';
import RandomCat from './RandomCat';

class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li><RandomCat /></li>
          <li><RandomCat /></li>
          <li><RandomCat /></li>
        </ul>
      </section>
    );
  }
}

export default CatList;
```

**components/RandomCat.js**:
```js
import React from 'react';

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);

    return (
      <a href="http://lorempixel.com">
        <img src={ `http://lorempixel.com/400/200/cats/${randomCat}` } alt="Random cat" />
      </a>
    );
  }
}

export default RandomCat;
```


## Las `props` para pasar datos entre componentes

Hasta aquí todo bien, pero ¿y si queremos que `RandomCat` no sea siempre igual? De la misma manera que pasamos atributos a los elementos del DOM, podemos pasar datos a los componentes de React.

```js
class Greeting extends React.Component {
  render() {
    return (
      <span>Hello, { this.props.name }!</span> // <span>Hello, María Moliner!</span>
    );
  }
}

const componentToRender = <Greeting name="María Moliner" />;

ReactDOM.render(componentToRender, document.getElementById('root'));
```

Estos datos se llaman `props` y se guardan en un atributo de las instancias del mismo nombre. Podemos acceder a él a través de `this.props`, que es un objeto que contiene las claves y los valores de estos "atributos".

```js
render() {
  console.log(this.props); // { name: 'María Moliner' }
  // ...
}
```

Una de las pocas reglas estrictas de React: **no debemos modificar nunca las `props`**, puesto que son como los parámetros que se le pasan a una función, o al constructor de una clase. Si queremos calcular con esos datos, podremos hacerlo dentro del `render()` del componente, antes de devolver el JSX:

```js
render() {
  const upperCaseName = this.props.name.toUppercase();

  return (
    <span>Hello, { upperCaseName }!</span> // <span>Hello, MARÍA MOLINER!</span>
  );
}
```

* * *

**EJERCICIO 2**:

Usaremos las `props` para pasar el tamaño de la imagen a `RandomCat`. Pasaremos una anchura (`width`) y una altura (`height`), que serán enteros (píxeles). En el caso de que no se pasen `props`, `width` será de `400` y `height` será `200`.

Desde `CatList` declararemos que se pinten tres componentes `RandomCat`:

  - Uno de 200x200 px
  - Otro de 200x400 px
  - Otro, al que no pasaremos `props`, que será de 400x200 px

* * *


## Recursos externos

### React Docs

Documentación oficial de React.

- [Getting started](https://reactjs.org/docs/)

### Egghead

Serie de clases en vídeo que introduce y explora los fundamentos básicos de React.

- [Start using React to build web applications](https://egghead.io/courses/start-learning-react)


### Create React App

Guía oficial de instalación y uso de `create-react-app`.

- [Getting started with `create-react-app`](https://github.com/facebookincubator/create-react-app#getting-started)
