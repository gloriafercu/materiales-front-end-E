# Anexo al Proyecto 4


## Usando Sass en nuestro proyecto de React

Durante el curso hemos usado `gulp` o `Koala` para compilar Sass en nuestro proyectos. En el caso de los proyectos de React, que creamos con `create-react-app`, ya tienen su propio sistema de automatización de tareas que convierte los ficheros en ES6 a ES6 con Babel, y lanza un servidor local. Es mejor que, por tanto, en vez de incluir más herramientas como `gulp` usamos el sistema de automatización que ya tenemos (basado en [webpack](https://webpack.js.org/), por cierto) para observar los ficheros SCSS y compilarlos a CSS.

Ahora vamos a detallar los pasos a seguir para conseguirlo. Con que lo haga una de vosotras es suficiente porque la información se guarda en el `package.json` y el resto basta con bajarse los cambios desde el repo de git y hacer un `npm install`.

### Instalar paquetes

Para poder compilar desde la terminal, tendremos que instalar en nuestro proyecto `node-sass`:

`npm install --save node-sass-chokidar`

También instalamos `npm-run-all` para poder lanzar varias tareas a la vez, es decir, las de React y las nuevas de Sass:

`npm install --save npm-run-all`

### Modificar los scripts de npm

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


### Recursos externos

- [Documentción oficial de cómo usar SASS con create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
