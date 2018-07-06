# El router de React

[session-3-10-stateful-components-architecture]: 3_10_arquitectura_estado.md#arquitectura-de-componentes-con-estado

[react-router-site]: https://reacttraining.com/react-router/
[mdn-history-api]: https://developer.mozilla.org/en-US/docs/Web/API/History_API

[codepen-react-router-basic]: https://codepen.io/adalab/pen/MrZQpE?editors=0010
[codepen-react-router-params]: https://codepen.io/adalab/pen/eKwbMZ?editors=0010
[codepen-react-router-active-nav]: https://codepen.io/adalab/pen/OzrYZN?editors=0010

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [Qué es React Router](#qué-es-react-router)
- [Uso básico del router para navegar entre pantallas de nuestra SPA](#uso-básico-del-router-para-navegar-entre-pantallas-de-nuestra-spa)
- [Usando parámetros en las rutas](#usando-parámetros-en-las-rutas)
- [Gestión avanzada de rutas](#gestión-avanzada-de-rutas)


## Introducción

En esta sesión veremos cómo usar React para escribir aplicaciones web de una sola página (_Single Page Applications_, en inglés) usando un complemento llamado [React Router][react-router-site].


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Una de las características fundamentales de la Web es **el enlace**, _link_ o URL (siglas en inglés de "localizador de recursos uniforme"). Los enlaces permiten relacionar páginas entre sí, que unas nos lleven a otras, pero quizá una de las cosas más importantes es que se pueden compartir para que otras personas accedan al mismo contenido que nosotros.

Cuando se habla de SPAs se hace referencia a un tipo de web que consta exclusivamente de **una página**: un solo archivo HTML, con archivos CSS y JavaScript. Toda la interacción transcurre dentro de esa página, manejada con JavaScript, que imita a una ventana de las aplicaciones de escritorio. Por eso muchas veces hablamos de **aplicaciones web** cuando nos referimos a SPAs. Sin embargo, en esta transformación de web a aplicación web se perdería la esencia más útil de la Web si no se conservase un sistema de enlaces que diferencie las diferentes páginas que componen la aplicación.

Para reconciliar esta situación aparecieron **técnicas de _routing_** en JavaScript (en el lado del cliente) que manipulan intensivamente los _hashes_ (`#`) de las URL y respetan la [History API][mdn-history-api]. Es decir, "simulan" distintas direcciones URL en el navegador, lo que se llaman **rutas**, de forma que el usuario puede usar los botones de "<kbd>página anterior</kbd>" y "<kbd>página siguiente</kbd>" del navegador para desplazarse por distintas pantallas de la aplicación web, y permiten compartir enlaces que lleven específicamente a una pantalla, aunque en realidad todo esté hecho en una sola página (SPA).


## Qué es React Router

React Router es una librería compatible con React (aunque no desarrollada por el equipo de React) que nos permite especificar rutas en nuestra aplicación web usando componentes de React. Es decir, con otras librerías especificaríamos las rutas por código JavaScript, pero con React Router las escribiremos en componentes de React como `<Route path='/about'>`.

React Router se aprovecha de la separación de la interfaz en componentes que hace React. La lógica básica de cómo funciona es simple: depende de la ruta de la página en la que estemos, se pinta un componente u otro. Por ejemplo, podríamos decirle que si estamos en la ruta `/` renderice el componente `<Home />` en la página, pero si estamos en la ruta `/about`, que renderice el componente `<About />`.

Una de las características de las SPAs es que también mantienen el estado entre pantallas de nuestra página. Con React Router y la [arquitectura de componentes con estado que vimos en la sesión 3.10][session-3-10-stateful-components-architecture] esto se puede observar en el estado de nuestro componente principal, que normalmente se llamará algo parecido a `<App />`. `<App />` tiene el estado relativo a todos los componentes incluídos dentro de sí, y aunque cambiemos un componente dentro de él dependiendo de la ruta, seguimos conservando los datos del estado que tenemos en `<App />`.


## Uso básico del router para navegar entre pantallas de nuestra SPA

Para empezar a usar React Router, en nuestro proyecto generado con `create-react-app` debemos instalar y guardar la dependencia de `npm` de la siguiente manera:

```sh
npm install --save react-router-dom
```

Para activar el enrutado en nuestra aplicación, haremos lo siguiente. En nuestro archivo `index.js` importaremos el componente `HashRouter`, y renderizaremos nuestro componente principal `<App />` dentro, como `children`:

**index.js**:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from `react-router-dom`;

// ...

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('react-root')
);
```

En nuestro componente `App.js` ahora ya podemos declarar las rutas. Importaremos `Route` y `Switch`. El componente `Switch` incluirá dentro tantos componentes `Route` como rutas queramos en nuestra web y se asegurará de que solo se pinte uno. Dentro de cada componente `Switch` el contenido variará dependiendo de la ruta de la aplicación. A cada componente `Route` le pasaremos por `props` la clase del componente que queremos que se renderize:

**App.js**:
```js
import React from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  // ...
  render() {
    return (
      <div>
        {/* ... */}
        <main>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
          </Switch>
        </main>
      </div>
    );
  }
}
// ...
```

Una vez declaradas las rutas, ya podemos hacer enlaces a las distintas pantallas de nuestra aplicación web. Para esto usaremos el componente `Link`, también de React Router, que se encargará de convertir nuestras rutas en enlaces. Le pasaremos una `prop` de nombre `to` con nuestra ruta:

```js
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  // ...
  render() {
    return (
      <div>
        <header>
          <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
          </Switch>
        </main>
      </div>
    );
  }
}
// ...
```

[&blacktriangleright; Rutas con React Router en Codepen][codepen-react-router-basic]

* * *
**EJERCICIO 1: Me gustan tus pestañas**

Vamos a crear una web con 3 pestañas: 'home', 'pricing' y 'about'. Para eso, lo primero vamos a crear un nuevo proyecto con `create-react-app`.

Ahora, creamos 3 componentes, uno por cada pestaña con un contenido _lorem_ y con el nombre de la pestaña.

Luego, en nuestro componente principal (`App`) vamos a dibujar las 3 pestañas (3 enlaces) con el nombre de cada una y ocupando el 100% del ancho de la ventana.

 Finalmente instalamos React Router en nuestro proyecto, y conseguimos que al pinchar en una pestaña, se pinte debajo el componentne correspondiente. **¡A por ello!**

* * *

## Usando parámetros en las rutas

React router también nos facilita crear rutas que tengan parámetros, es decir, que no sean rutas fijas sino que dependan del algún valor. Por ejemplo, si tenemos un listado de elemento y queremos crear una ruta para cada uno de ellos.

En este ejemplo, vamos a crear rutas para varios del estilo `/child/:id` donde `:id` es un identificar único de cada elemento. En el elemento `Switch` crearemos una nueva ruta `Route` con ese `path='/child/:id'` y que renderiza el componente `Child`. Ahora, los enlaces de la cabecera enlazan a `/child/1`, `/child/2`, etc. Al hacer clic en alguno de estos enlaces, se renderizará el componente `Child` al que le llegará por `props` un parámetro `match` que tiene información sobre los paráemtros de la URL, en este caso, el número al final de la URL.

**App.js**:
```js
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  // ...
  render() {
    return (
      <div>
        <header>
          <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/child/1'>Child 1</Link></li>
            <li><Link to='/child/2'>Child 2</Link></li>
            <li><Link to='/child/3'>Child 3</Link></li>
          </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/child/:id' component={ Child } />
          </Switch>
        </main>
      </div>
    );
  }
}
```

**Child.js**:
```js
class Child extends React.Component {
  render() {
    return (
      <p>This is child number {this.props.match.params.id}</p>
    );
  }
}
```

[&blacktriangleright; Rutas con React Router en Codepen][codepen-react-router-params]

* * *
**EJERCICIO 2: Directorio con detalle**

Vamos a partir del ejercicio de la sesión anterior sobre un directorio de personas. En la página principal aparecía un listado de personas con información de https://randomuser.me/. Ahora vamos a hacer un enlace por cada persona de la lista para acceder a una vista de detalle de esa persona. Implementaremos la vista de detalle con un nuevo componente `PersonDetail` al que navegaremos usando React router con una ruta por cada persona de la lista. **¡A por ello!**

* * *

## Gestión avanzada de rutas

Los componentes `Route` aceptan distintas `props`. En las secciones anteriores hemos visto la más básica, `component`. Cuando pasamos la `prop` así, el componente `Route` renderizará ese componente cuando la ruta coincida con la que especifica en `path`. Sin embargo, podemos querer renderizar algo más complejo, o puede que queramos pasar `props` a ese componente. Para esas situaciones, `Route` acepta una `prop` de nombre `render` al que le pasaremos una función que devuelva lo que queremos que se pinte.

```js
// ...
class App extends React.Component {
  // ...
  render() {
    return (
      <div>
        {/* ... */}
        <main>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' render={ () => <About objective="showing how React Router works" /> } />
          </Switch>
        </main>
      </div>
    );
  }
}
// ...
```

También podemos utilizar una tercera `prop` de nombre `children` disponible en `Route`. Será también una función que devuelve lo que queremos que se pinte, pero **se pintará siempre**, tanto si estamos en la ruta como si no. La gracia de esto es que la función acepta un objeto como parámetro que nos pasará el componente `Route` automáticamente y que incluye información sobre la ruta actual, con la que podremos modificar la salida. Por ejemplo, con la siguiente función podemos hacer fácilmente la lista de navegación de la página y que se destaque la página actual:

```js
function renderLinkAndHightlightActive(route, text) {
  return (
    <Route
      path={ route }
      children={
        ({ match, history, location }) => {
          const activeClass = (!!match && match.isExact)
            ? 'nav-link--active'
            : 'nav-link--normal';

          return (
            <Link
              to={ route }
              className={ activeClass }
            >{ text }</Link>
          );
        }
      }
  );
}
```

[&blacktriangleright; Menú consciente de la ruta actual en Codepen][codepen-react-router-active-nav]


## Recursos externos

### Blog de Paul Sherman

Tutorial sencillo de React Router v4. Incluye más información sobre las distintas plataformas en las que React Router funciona y las diferencias con las versiones anteriores (en inglés).

 - [Tutorial de React Router v4](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)

### Blog de Krasimir Tsonev

Explicación en profundidad de cómo funciona un router del lado del cliente con JavaScript (en inglés).

- [Un router moderno en JavaScript en 100 líneas](http://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url)
- [Routing en profundidad en el lado del cliente](http://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash)


### Documentación de React Router

Documentación oficial de React Router. Define la API y muestra ejemplos (en inglés).

- [React Router Docs](https://reacttraining.com/react-router/web/)
