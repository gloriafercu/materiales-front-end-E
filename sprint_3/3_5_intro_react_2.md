# Introducción a React - II

## Contenidos
- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [Creando nuestro primer componente](#creando-nuestro-primer-componente)
- [Las `props` para personalizar un componente](#las-props-para-personalizar-un-componente)
- [Crear componentes _dummies_ más rápido](#crear-componentes-dummies-más-rápido)
- [Creando varios componentes](#creando-varios-componentes)
- [Publicar nuestra app React en GitHub Pages](#publicar-nuestra-app-react-en-github-pages)

## Introducción

[react]: https://reactjs.org/

En esta sesión vamos a seguir aprendiendo cómo funciona la librería [React.js][react]. En concreto, vamos a ver que está basada en componentes y cómo crear un componentes personalizable.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Un __componente web__ es una parte de la interfaz de una página o aplicación web que podemos reutilizar. Por ejemplo, una línea de producto de un carrito de la compra, o un elemento colapsable.

Los frameworks o librerías como React se basan en el concepto de componente. De esta forma, todo lo que vamos a crear son componentes que iremos usando para crear la interfaz deseada.

Los componentes de React, además, pueden personalizarse a través de un mecanismo llamado `props`, que no es otra cosa que pasarle valores a través de los atributos del componente HTML.


## Creando nuestro primer componente

_¡Manos a la obra!_ Vamos a crear nuestro primer componente de React. Va a ser un componente que nos muestre una imagen aleatoria de un gato usando la web de lorempixel, y que además será un enlace a una página. Primero, creamos un proyecto nuevo con `create-react-app`. 

Para comenzar, vamos a crear un nuevo módulo JavaScript para definir el componente. Crearemos un archivo `RandomCat.js` en la misma carpeta `src` donde definiremos el componente. Tendremos que importar React de su módulo, así que añadiremos al principio:

**RandomCat.js**:
```js
import React from 'react';
// ...
```

Para que nuestro componente se pueda usar desde fuera del módulo, lo exportaremos. Para eso, añadiremos al final:

**RandomCat.js**:
```js
// ...
export default RandomCat;
```

Crearemos el componente después del `import`. Un componente será una subclase de la clase `Component` de React, así que escribiremos lo siguiente:

```js
class RandomCat extends React.Component {
  // class body
}
```

> Crearemos nuestros componentes siempre con **mayúscula inicial**. Así los diferenciaremos de los componentes en JSX que representan etiquetas de HTML

Los componentes de React tienen un método `render()` que devuelve un elemento de JSX para que React lo pinte. Así que sobrescribiremos ese método (es decir, que declararemos un método con ese nombre):

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

_¡Ya está!_ Ahora para ver el resultado tendremos que decirle a React que lo pinte. Para usar nuestro componente en el archivo `index.js`, tendremos que importar nuestro componente del módulo, naturalmente. Escribiremos arriba:

**index.js**:
```js
import React from 'react';
// ...
import RandomCat from './RandomCat';
```

> Para importar de un archivo local, utilizaremos el prefijo `./` antes de la ruta. Sin embargo, no pondremos el prefijo cuando sea una dependencia en `npm`, como nos preconfigura `create-react-app` para `react` y `react-dom`.

Solo falta el paso final: es tan fácil como cambiar la línea que empieza por `ReactDOM.render` y reemplazar `<App />` por `<RandomCat />`:

```js
ReactDOM.render(<RandomCat />, document.getElementById('root'));
```

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

* * *
**EJERCICIO 1**:

Vamos a partir del ejercicio 1 (o del 2) de la sesión anterior. En lugar de usar el componente genérico App, vamos a crear un nuevo componente `MediaCard` encargado de pintar una tarjeta social para un usuario. Vamos a cargar ese nuevo componente desde el `index.js` para pintarlo con ReactDOM.

* * *

## Las `props` para personalizar un componente

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

Vamos a partir del ejercicio 1 (el anterior). Vamos a usar las `props` para personalizar el contenido de una tarjeta social `MediaCard`. En concreto, vamos a personalizar
- el nombre del usuario
- la fecha
- la imagen
- el texto descriptivo
- el número de likes
- si el corazón está o no relleno

* * *

### Crear componentes _dummies_ más rápido

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

Pero React también tiene una manera de escribir estos componentes de manera más sencilla. La idea, sencillamente, es pensar en los componentes _dummies_ como funciones que reciben unas `props` como parámetros y devuelven elementos y componentes de JSX:

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

* * *
**EJERCICIO 3**:

Convierte el componente `MediaCard` del ejercicio anterior en un componente funcional.

* * *

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

Finalmente, en el archivo `index.js` importaremos el componente `CatList` y le diremos a `ReactDOM` que renderice `<CatList />`:

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

* * *

**EJERCICIO 4**:

Vamos a partir de la web del ejemplo con un listado de gatos con fotos aleatorias. Usaremos las `props` para pasar el tamaño de la imagen a `RandomCat`. Pasaremos una anchura (`width`) y una altura (`height`), que serán enteros (píxeles). En el caso de que no se pasen `props`, `width` será de `400` y `height` será `200`.

Desde `CatList` declararemos que se pinten tres componentes `RandomCat`:

  - Uno de 200x200 px
  - Otro de 200x400 px
  - Otro, al que no pasaremos `props`, que será de 400x200 px

* * *

**EJERCICIO 5**:

En nuestra web de tarjetas sociales, vamos a crear un nuevo componente `MediaList` para manejar una lista de componentes `MediaCard`. Para ello, mostrará una nueva sección con un título y un listado de 3 componentes `MediaCard`. Cada tarjeta tendrá datos personalizados que definiremos mediantes `props` desde el componente madre, es decir, el que maneja la lista.

* * *

## Publicar nuestra app React en GitHub Pages

`create-react-app` nos crea un entorno de desarrollo donde empezar a trabajar con React en nuestra máquina. Si queremos enseñar el resultado con GitHub Pages hay que hacer algunas cosillas antes de generar una versión para producción 
- rutas a los archivos principales serán relativas al dominio
- necesitaremos una carpeta determinada 
- y, quizás, haya que cambiar algo de `http` a `https`.

> GitHub Pages se sirve como https y "pide" que el resto de recursos externos que pidamos usen el mismo protocolo. Esto se aplica, por ejemplo, a las peticiones a una API.

Entraremos por terminal a nuestra carpeta de proyecto y esto es lo que hay que hacer:
1. Modificar `package.json` para que las rutas sean relativas a nuestros archivos: hay que añadir `”homepage”: “./“,`.
2. Ya que lo vamos a servir desde GitHub, y usa https, tendremos que cambiar cualquier recurso `http` a `https`: por ejemplo, en un fetch
3. Ejecutar `npm run build` para que nos cree la versión para producción en la carpeta **build/**.

GitHub Pages funciona en la carpeta raíz o en la **docs/** de la rama master, así que querremos cambiar la carpeta **build/** por la carpeta **docs/**. Para ello, desde la terminal y colocados en la carpeta raíz del proyecto ejecutaremos `mv build docs`. Es importante saber que este paso lo tendremos que hacer cada vez que hagamos cambios y queramos reflejarnos en nuestra página de GitHub Pages.

4. Add, commit y push.
5. Casi listo, solo falta activar GitHub Pages para que se sirva desde la carpeta docs de nuestra rama master. Para eso como ya sabéis, desde la página principal del repositorio, podéis ir a la pestaña de Settings y una vez dentro, en la sección GitHub Pages, donde pone _"Source"_ seleccionar _"master branch /docs folder"_

**Ya.**

* * *

**EJERCICIO 6**:

Publiquemos la aplicación del último ejercicio en GitHub Pages. ¡A por ello!

* * *

## Recursos externos

### Egghead

Serie de clases en vídeo que introduce y explora los fundamentos básicos de React.

- [Start using React to build web applications](https://egghead.io/courses/start-learning-react)

### Web components

- [What are web components?](https://www.webcomponents.org/introduction)

### React documentation

- [Components and props](https://reactjs.org/docs/components-and-props.html)
