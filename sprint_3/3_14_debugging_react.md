# _Debugging_ de aplicaciones React

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [_Debugging_ de aplicaciones en React](#debugging-de-aplicaciones-en-react)


## Introducción

En esta sesión echaremos un vistazo a la extensión de depuración (_debugging_) de React para navegadores. La _depuración_ consiste en el proceso de encontrar y eliminar errores (_bugs_) de una base de código.


## ¿Para qué sirve los que vamos a ver en esta sesión?

Utilizaremos la extensión de Chrome para detectar y corregir errores en nuestra aplicación React.


## _Debugging_ de aplicaciones en React

[react-devtools-firefox]: https://addons.mozilla.org/firefox/addon/react-devtools/
[react-devtools-chrome]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
[react-devtools-standalone]: https://www.npmjs.com/package/react-devtools

React, en cierto modo, reemplaza la jerarquía de elementos del DOM por una jerarquía de componentes. Además, prácticamente todo el comportamiento se deriva de los valores que tienen las `props` y el estado de los componentes. Por todo esto, a veces resulta un poco difícil de depurar con las herramientas de desarrollo incluídas en los navegadores web.

Para solucionar esto, el equipo de React proporciona una _webextension_ (extensión de navegador) específica para depurar aplicaciones en React. La extensión está disponible para [Chrome][react-devtools-chrome], para [Firefox][react-devtools-firefox] y también como [aplicación separada][react-devtools-standalone].

La extensión de los navegadores se integra con las herramientas de desarrollo (<kbd>F12</kbd>) en ambos navegadores:

![React DevTools integrado con las herramientas de desarrollo de Chrome](assets/images/3_13_react-devtools.png)

Cuando estemos en una página hecha con React, la pestaña React de las herramientas de desarrollo nos mostrará la **jerarquía de componentes**:

![React DevTools mostrando jerarquía de componentes de la página](assets/images/3_13_devtools-tree-view.png)

Tras seleccionar un componente, en el panel lateral de esa misma pestaña podremos ver más detalles y has cambiar las `props` y el estado del componente en tiempo real:

![React DevTools editando el estado de un componente en tiempo real](assets/images/3_13_devtools-side-pane.gif)

## Recursos externos

### Documentación oficial de facebook

[React Developer Tools](https://github.com/facebook/react-devtools)
