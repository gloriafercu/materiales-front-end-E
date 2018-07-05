# Introducción a React

## Contenidos
- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [Qué es React](#qué-es-react)
- [Estructura de un proyecto en React](#estructura-de-un-proyecto-en-react)
- ["Hola, mundo" con `create-react-app`](#"hola-mundo"-con-create-react-app)
- [JSX y el método `render`: la magia de no tener que manipular el DOM](#jsx-y-el-método-render)
- [Interfaz declarativa VS imperativa](#interfaz-declarativa-vs-imperativa)
- [Usando Sass en nuestro proyecto de React](#usando-sass-en-nuestro-proyecto-de-react)

## Introducción

[react]: https://reactjs.org/

En esta sesión nos iniciaremos en la librería [React.js][react]. React es una librería para crear interfaces de usuario que se creó en 2013 en el seno de Facebook y goza de buena salud en el ecosistema de JavaScript.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Es muy común en todos los ecosistemas de programación usar librerías o _frameworks_ que permiten terminar productos mucho más rápido y ahorran escribir código. JavaScript no es una excepción, y en su historia podemos contar varias librerías y _frameworks_ populares como jQuery &mdash;que suplió las carencias iniciales del lenguaje mientras maduraba&mdash;, Backbone.js, Angular o Vue.js.

En particular, el manejo del DOM en proyectos grandes de JavaScript es una fuente de problemas. Desde las _single page applications_ (SPAs) se empezaron a desarrollar _frameworks_ que ayudaban a controlar esto, entre otras cosas. Hoy en día, React es una de las librerías más extendidas y maduras, con gran soporte de la comunidad y muchos recursos disponibles. React es una librería especializada en crear interfaces de usuario componentizadas, no un _framework_, pero se suele meter en el "saco de los frameworks de front-end".

En nuestra actividad profesional nos encontraremos con diferentes _frameworks_ y librerías. Aprender a usar una librería externa nos ayudará a enfrentarnos a estas situaciones en la vida real.

## ¿En qué casos y por qué se utilizan los _frameworks_?

Un framework o librería JavaScript nos soluciona uno de los principales problemas de la programación front-end: mantener la **interfaz de usuario** (UI, del inglés *User Interface*) en sincronización con el **estado** nuestra aplicación.

Pero, *¿qué es el estado de una aplicación web?* Una aplicación web, a diferencia de una simple página web, se encarga de **gestionar datos**. Por ejemplo, en una aplicación como GMail gestionamos datos de correos (nuevos, leídos, archivados, etc.) desde una interfaz. En una simple aplicación de una lista de tareas, manejamos datos de tareas, si están completados o las fechas de realización.

Volviendo a los frameworks, estos nos facilitan sincronizar el estado (los datos) con la interfaz (lo que se ve en la pantalla). Vamos a verlo con un ejemplo que ya conocemos: el juego de adivinar el número del sprint anterior. Necesitamos bastante código para tener sincronizado el estado del juego (el feedback sobre un intento y el número de intentos) con la interfaz.

```js
function showFeedback(text) {
  var feedbackContainer = document.querySelector('.feedback');
  feedbackContainer.innerHTML = text;
}

function incrementTrials() {
  trials++;
  var trialsOnPage = document.querySelector('.trials');
  trialsOnPage.innerHTML = trials;
}
```

Este código de sincronización puede complicarse mucho (como habéis podido comprobar en el proyecto grupal del sprint anterior). Y es también muy acoplado a la interfaz (cambiar el HTML implica cambios en el código) y es muy propenso a errores. Por esto, las librerías como React nos ayudan mucho porque hacen esta sincronización por nosotros y nos evitan muchos problemas. A cambio, vamos a tener que trabajar de una forma determinada para aprovechar las ventajas que el frameworks nos da.

A parte de esta ventaja fundamental, otras ventajas de usar frameworks son
- facilitan el trabajo con componentes web
- tienen extensiones del navegador que facilitan el debugging
- facilitan el desarrollo de SPAs (del inglés *Single Page Applications*)

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

Vamos a crear nuestro primer "¡Hola, mundo!" con React. Usaremos `create-react-app`, una herramienta generador que nos automatiza instalar React y Babel, que transformará código ES6 en ES5, y nos preconfigura un proyecto. ¡Manos a la obra!

Necesitaremos Node.js instalado, pero esto ya lo tenemos. Primero instalamos de forma global la utilidad de `create-react-app`, y luego creamos nuestro proyecto de React 'my-react-project' ejecutando esto en un terminal:

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

!["Hola, mundo" en React](assets/images/3_4_react-hello-world.png)

## Estructura de un proyecto React creado con `create-react-app`

Cuando creamos un proyecto nuevo de React se nos crea una estructura la estructura de ficheros y carpetas que hemos visto antes. Vamos a ver cuáles son los ficheros principales que necesitamos conocer.

### `public/index.html`

Es el único fichero HTML que usaremos en nuestra aplicación. Podemos modificar algunas cosas pequeñas para personalizar la aplicación: añadir etiquetas `meta`, cargar fuentes, definir el título, etc. En el `body` se carga un `div` con identificador `root` que será donde se carga la aplicación de React.

### `src/index.js`

Este será el fichero JS de entrada a nuestra aplicación React. Será el único en el que carguemos `ReactDOM` y se encarga de acceder a un nodo del DOM (el `div` que antes identificamos como `root`) y pintar el componente principal de la aplicación, en este caso, llamado `App`.

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

Para pintar el componente `App` usamos una sintaxis un poco rara: _¡es como si `App` fuese una etiqueta del HTML!_ Vamos a verlo en más profundidad en el siguiente fichero.

### `src/App.js`

Este fichero corresponde a nuestro primer _componente_ de React, pero ya veremos qué es un componente más adelante. De momento, vamos a pensar que quizá al modificar el archivo `App.js` os haya sorprendido algo. _"¿Eso no es HTML? ¡Pero si esto es un archivo JavaScript!"_:

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

Esas etiquetas `div`, `header`, `img`, `h1` y `p` son una extensión de la sintaxis de JavaScript que se llama **JSX**. JSX nos facilita escribir código que React transformará luego en elementos reales del DOM. De esta forma podemos definir fácilmente el contenido de un elemento porque usa la sitaxis de HTML que ya conocemos.

Como JSX no deja de ser **código JavaScript**, lo podemos tratar como tal. Por ejemplo, podemos guardar elementos en una variable. También podemos usar expresiones JavaScript dentro de esa sintaxis con `{` y `}`, como si fuera la interpolación de cadenas de ES6 (pero sin `$`):

```js
const titleElement = <h1>¡Hola, mundo!</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        {titleElement}
      </header>
      </div>
    );
  }
}

```


Como es HTML, podemos añadir atributos a los elementos que definamos con JSX:

```js
const titleElement = <h1 className="App-title">¡Hola, mundo!</h1>;
```

> **NOTA**: `class` es una palabra reservada en JavaScript, así que tendremos que usar `className` como nombre de atributo cuando queramos asignar una clase CSS

Por último, hay que destacar otra cosa de este fichero: estamos importando imágenes y CSS. _¿Y esooo?_ Pues porque en React tenemos la posibilidad y es una buena práctica trabajar de esta forma: desde un componente (fichero JS) importamos las imágenes y CSS que necesitemos para montar la interfaz del componente. Y confiamos en que la configuración del automatizador que tenemos por debajo (en este caso webpack), se encarga de importar los CSS desde el HTML (para que el navegador los entienda) y modificar las imágenes por su ruta para que puedan ser visualizadas. De momento nos quedamos con que _en React se hace así_.


### JSX y el método `render`

Para terminar, recordemos que el JSX que escribimos al final se convierte en código JavaScript. Pero entonces, ¿por qué usamos JSX y no directamente escribimos JavaScript? Porque la sintaxis de JSX es muy cercana a HTML, mucho más legible y simplifica el desarrollo de nuestros componentes. _¿Y si no usáramos JSX?_ Vamos a ver un ejemplo:

```js
const titleClassNames = 'App-title';
const titleElement = <h1 className={ titleClassNames }>¡Hola, mundo!</h1>;
```

Este ejemplo de JSX se transformará en este JavaScript:

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

Vamos a crear un nuevo proyecto de React llamado MediaCard. Vamos a modificar el método `render` del componente `App` para que tenga un diseño similar al de la imagen. Podéis usar una imagen a vuestra elección para la que aparece en el diseño, y Font-Awesome para el icono del corazón. De esta forma, aprenderemos a cómo trabajar con cosas que ya conocemos (HTML y CSS) en una aplicación de React.

![Media Card](assets/images/3_4_media-card.png)

* * *

**EJERCICIO 2**:

Partiendo del ejercicio anterior, en este ejercicio aprenderemos mejor cómo funciona JSX. Para ello vamos a asignar nombres a las variables, un tema que será importante cuando creemos nuestros componentes más adelante.

Partiendo del proyecto anterior, solo modificaremos el método `render()` dentro del archivo `App.js`. El objetivo será que el `return` de `render()` devuelva una sola variable. Para lo que extraeremos a variables cada una de las "etiquetas" del contenido del `return` original. Por ejemplo, una variable para la cabecera, y otra para el párrafo. Haremos que los nombres de nuestras variables sean descriptivos y, solo cuando sea posible, cortos.

```js
render() {
  /* aquí irán el resto de variables que extraeremos */
  const appRoot = (
    <div className="card">
    ...
    </div>
  );

  return appRoot;
}
```

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

## Usando Sass en nuestro proyecto de React

Durante el curso hemos usado `gulp` o `Koala` para compilar Sass en nuestro proyectos. En el caso de los proyectos de React, que creamos con `create-react-app`, ya tienen su propio sistema de automatización de tareas que convierte los ficheros en ES6 a ES6 con Babel, y lanza un servidor local. Es mejor que, por tanto, en vez de incluir más herramientas como `gulp` usamos el sistema de automatización que ya tenemos (basado en [webpack](https://webpack.js.org/), por cierto) para observar los ficheros SCSS y compilarlos a CSS.

Ahora vamos a detallar los pasos a seguir para conseguirlo.

### 1. Instalar paquetes

Para poder compilar desde la terminal, tendremos que instalar en nuestro proyecto `node-sass`:

`npm install --save node-sass-chokidar`

También instalamos `npm-run-all` para poder lanzar varias tareas a la vez, es decir, las de React y las nuevas de Sass:

`npm install --save npm-run-all`

### 2. Modificar los scripts de npm

Después vamos a modificar los scripts de npm en nuestro `package.json` para que se lancen las nuevas tareas al lanzar el servidor con `npm start`:

```json
"scripts": {
     "build-css": "node-sass-chokidar src/ -o src/",
     "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
     "start-js": "react-scripts start",
     "start": "npm-run-all -p watch-css start-js",
     "build-js": "react-scripts build",
     "build": "npm-run-all build-css build-js",
     "test": "react-scripts test --env=jsdom",
     "eject": "react-scripts eject"
   }
```

Con esto, hemos añadido varias tareas:
- `build-css`: para compilar los ficheros scss en la carpeta `src` a css en la misma carpeta
- `watch-css`: para observar los ficheros scss y si se modifican compilarlos a css
- `start-js` y `build-js`: los scripts originales por defecto de `create-react-app`
- `start` y `build`: usamos el `npm-run-all` para ejecutar los scripts originales y los nuevos para compilar Sass

Para tener más información, podéis mirar la [documentción oficial de cómo usar SASS con create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc).

* * *

**EJERCICIO 3**:

Vamos a modificar el ejercicio anterior de la tarjeta para hacerlo con Sass dentro de nuestro proyecto de React.

* * *

## Recursos externos

### React Docs

Documentación oficial de React.

- [Getting started](https://reactjs.org/docs/)

### Create React App

Guía oficial de instalación y uso de `create-react-app`.

- [Getting started with `create-react-app`](https://github.com/facebookincubator/create-react-app#getting-started)
