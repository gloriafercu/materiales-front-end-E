# Introducción a React - II

## Contenidos
- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [Creando nuestro primer componente](#creando-nuestro-primer-componente)
- [Componentes funcionales](#componentes-funcionales)
- [Las `props` para personalizar un componente](#las-props-para-personalizar-un-componente)
- [Creando varios componentes](#creando-varios-componentes)


## Introducción

[react]: https://reactjs.org/

En esta sesión vamos a seguir aprendiendo cómo funciona la librería [React.js][react]. En concreto, vamos a ver que está basada en componentes y cómo crear un componentes personalizable.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Un __componente web__ es una parte de la interfaz de una página o aplicación web que podemos reutilizar. Por ejemplo, una línea de producto de un carrito de la compra, o un elemento colapsable.

Los frameworks o librerías como React se basan en el concepto de componente. De esta forma, todo lo que vamos a crear son componentes que iremos usando para crear la interfaz deseada.

Los componentes de React, además, pueden personalizarse a través de un mecanismo llamado `props`, que no es otra cosa que pasarle valores a través de los atributos del componente HTML.


## Creando nuestro primer componente

_¡Manos a la obra!_ Vamos a crear nuestro primer componente de React. Va a ser un componente que nos muestre una imagen aleatoria de un gato usando la web de lorempixel, y que además será un enlace a una página. Primero, creamos un proyecto nuevo con `create-react-app`. 

Para comenzar, vamos a crear un nuevo módulo JavaScript para definir el componente. Crearemos un archivo `RandomCat.js` en la misma carpeta `src` donde definiremos el componente. Tendremos que `import`ar React de su módulo, así que añadiremos al principio:

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

_¡Ya está!_ Ahora para ver el resultado tendremos que decirle a React que lo pinte. Para usar nuestro componente en el archivo `index.js`, tendremos que `import`ar nuestro componente del módulo, naturalmente. Escribiremos arriba:

**index.js**:
```js
import React from 'react';
// ...
import RandomCat from './RandomCat';
```

> Para `import`ar de un archivo local, utilizaremos el prefijo `./` antes de la ruta. Sin embargo, no pondremos el prefijo cuando sea una dependencia en `npm`, como nos preconfigura `create-react-app` para `react` y `react-dom`.

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

Vamos a partir del ejercicio 1 (o del 2) de la sesión anterior. En lugar de usar el componente genérico App, vamos a crear un nuevo componente `MediaCard` que sea quien el encargado de pintar una tarjeta social para un usuario. Vamoso a cargar ese nuevo componente desde el `index.js` para pintarlo con ReactDOM.

* * *

## Componentes funcionales

Hasta ahora hemos visto cómo definir un componente usando una clase con el método `render`. Existe una forma más sencilla de definir componentes que solo tienen un `render`, es decir, que solo tienen como objetivo "pintar algo en pantalla". Hasta ahora todos los componentes que hemos usado podrían ser _componentes funcionales_. La diferencia es que en lugar de una clase, se definen como una función que es precisamente el `render`. El ejemplo anterior quedaría así con un componente funcional.

```js
import React from 'react';

function RandomCat (props){
  return (
    <a href="http://lorempixel.com">
      <img src="http://lorempixel.com/400/200/cats/" alt="Random cat" />
    </a>
  );
}

export default RandomCat;
```

* * *
**EJERCICIO 2**:

Convierte el componente `MediaCard` del ejercicio anterior en un componente funcional.

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
**EJERCICIO 3**:

Vamos a partir del ejercicio 1 (el anterior). Vamos a usar las `props` para personalizar el contenido de una tarjeta social `MediaCard`. En concreto, vamos a personalizar
- el nombre del usuario
- la fecha
- la imagen
- el texto descriptivo
- el número de likes
- si el corazón está o no relleno

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

## Recursos externos

### Egghead

Serie de clases en vídeo que introduce y explora los fundamentos básicos de React.

- [Start using React to build web applications](https://egghead.io/courses/start-learning-react)

### Web components

- [What are web components?](https://www.webcomponents.org/introduction)

### React documentation

- [Components and props](https://reactjs.org/docs/components-and-props.html)
