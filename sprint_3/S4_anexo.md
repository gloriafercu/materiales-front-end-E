# Anexo al sprint4: Publicar nuestra app en GitHub Pages
`create-react-app` nos crea un entorno de desarrollo donde empezar a trabajar con React en nuestra máquina. Si queremos enseñar el resultado con GitHub Pages hay que hacer alguna cosilla ya que podemos generar una versión para producción pero las rutas a los archivos principales serán relativas al dominio, necesitaremos una carpeta determinada y, quizás, haya que cambiar algo de `http` a `https`.

> GitHub Pages se sirve como https y "pide" que el resto de recursos externos que pidamos usen el mismo protocolo. Esto se aplica, por ejemplo, a las peticiones a una API.

Entraremos por terminal a nuestra carpeta de proyecto y esto es lo que hay que hacer:
1. Modificar `package.json` para que las rutas sean relativas a nuestros archivos: hay que añadir `”homepage”: “./“,`.
2. Ya que lo vamos a servir desde GitHub, y usa https, tendremos que cambiar cualquier recurso `http` a `https`: por ejemplo, en un fetch
3. Ejecutar `npm run build` para que nos cree la versión para producción en la carpeta **build/**.
GitHub Pages funciona en la carpeta raíz o en la **docs/** de la rama master, así que querremos cambiar la carpeta **build/** por la carpeta **docs/**, para ello, desde la terminal y colocados en la carpeta raíz del proyecto ejecutaremos `mv build docs`. Es importante saber que este paso lo tendremos que hacer cada vez que hagamos cambios y queramos reflejarnos en nuestra página de GitHub Pages.
4. Add, commit y push.
5. Casi listo, solo falta activar GitHub Pages para que se sirva desde la carpeta docs de nuestra rama master. Para eso como ya sabéis, desde la página principal del repositorio, podéis ir a la pestaña de Settings y una vez dentro, en la sección GitHub Pages, donde pone _"Source"_ seleccionar _"master branch /docs folder"_
Ya.
