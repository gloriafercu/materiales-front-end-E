# Formularios en React

[codepen-form-example]: https://codepen.io/adalab/pen/WyBqdK?editors=0010

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [Formularios](#formularios)


## Introducción

Los formularios funcionan un poco diferente en React que un formulario simple HTML. Los elementos de formulario almacenan de por sí un estado, que es el valor del input. En React, cuando creamos un formulario vamos a manejar el estado de los input usando el estado de los componentes de React. Manejarlo de esta forma nos va a facilitar procesar los datos introducidos por el usuario, ya sea para hacer validaciones o a la hora de enviarlo.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

Para crear apps de React que tienen un formulario, y hacerlo de la forma correcta en React. Por ejemplo, ¿no estáis haciendo un proyecto que tiene formularios?


## Formularios

Los elementos `input` de formulario, como bien sabemos, tienen un estado interno: su propiedad `value` se actualiza cuando el usuario modifica su contenido. En React, además, otros elementos de formulario como `textarea` y `select` tienen un comportamiento similar que facilita acceder a estos datos.

Cuando queremos realizar procesamiento de estos datos que introduce el usuario, ya sea para enviar los datos a un API o realizar validaciones, ¿qué hacíamos hasta ahora? Pues teníamos que buscar cada elemento en el DOM y recoger su `value`. Pero en React sabemos que la información de la interfaz la tenemos en el estado del componente: ¿y si guardamos los datos que introduce el usuario en el estado del componente cada vez que cambia un elemento? Pues es así exactamente como se hace en React.

Partimos de un formulario simple que recoge el nombre del usuario:

```js
class AwesomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input  id="name" type="text" onChange={this.handleChange} />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
```

Hemos creado un componente simple, `AwesomeForm`, que tiene un formulario con un nombre. Al `input` de tipo texto para el nombre, le hemos añadido un escuchador de eventos `onChange` para que cada vez que se modifique el `input`, se guarde la información en el estado.

> NOTA: Fíjate también que en la etiqueta `label` hemos usado el atributo `htmlFor` en lugar de `for`, ya que es una palabra reservada de JavaScript, lo mismo que con pasaba con `class` y `className`.


### Componentes controlados

Muy bien, pero hay una cosa más que tenemos que hacer para asegurarnos de que la información que guardamos en el estado sea "de verdad verdadera" la que introduce el usuario. Y es obligar a que su `value` tome los datos directamente del estado, es decir, que se muestren de nuevo en el `input`. 

El ciclo que siguen los datos es:
1. el usuario escribe en el `input`
2. en el evento de cambio se guardan en el estado
3. al cambiar el estado se ejecuta en método `render` y se asignan como `value` al `input`

¿Y para qué tanto lío? Pues para garantizar que en el estado tenemos todos los datos necesarios para pintar la interfaz. Vamos a ver cómo queda en el ejemplo anterior.

```js
class AwesomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
```

A estos elemento de formulario que tienen su `value` enlazado al estado del componente se les llama **componentes controlados** (_controlled components_) y son la forma habitual de manejar campos de formulario en React.

Usar un _componente controlado_ tiene más ventajas, por ejemplo, nos permite validar los datos que introduce el usuario. Como nosotras guardamos los datos en el estado, podemos ejecutar el código que queramos antes de guardarlo y lo que hagamos se verá reflejado en el `input` puesto que está enlazado al estado a través de su `value`. Veamos el ejemplo anterior, pero forzando a que el nombre esté en mayúsculas.

```js
    handleChange(event) {
        this.setState({name: event.target.value.toUpperCase()});
    }
```

[&blacktriangleright; Usando un componente controlado en Codepen][codepen-form-example]

* * *

**EJERCICIO 1: Formulario para pelis**

Vamos a crear un formulario en un componente de React que recoja información de una película. Recogeremos información de
- nombre (en un campo de texto)
- descripción (en un textarea)
- género (en un select donde podemos seleccionar comedia, drama o infantil)

* * *

### Componentes no controlados: el `input` de tipo `file`

Existe una excepción en el uso de elementos de formulario como componentes controlados, y es al usar un campo de tipo fichero (`file`). En esta caso, no puede ser controlado ya que se trata de un campo de solo lectura porque el único que puede modificarlo, por temas de seguridad, es el usuario de la web.

Para trabajar con este `input` y, por ejemplo, acceder a su contenido tendremos que acceder a él como un nodo del DOM. Hasta ahora no hemos visto cómo se hace eso en React, ya que toda la programación que hemos hecho es declarativa. Para poder procesar este input necesitamos acceder a él mediante una referencia `Ref` al DOM gestionada React (esta forma de acceso al DOM existe desde React 16).

Para esto tenemos que seguir 2 pasos:
1. declarar un atributo de la clase en el `constructor` llamando a la función `React.createRef()`
2. indicar en el atributo `ref` del elemento al que queremos acceder ese atributo

Veamos un ejemplo de la documentación de React de cómo acceder al nombre del fichero elegido por el usuario al enviar el formulario.

```js
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${
        this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```

* * *

**EJERCICIO 2: Formulario para pelis II**

Partiendo del ejercicio anterior, vamos a añadir un campo más al formulario que sea la carátula de la película. Al elegir el usuario una carátula, se muestra una previsualización de la misma, y se guardan los datos en el estado. Recuerda que para leer la información de ficheros debemos usar un `FileReader` y para recoger la información de una imagen su método `readAsDataURL`.

* * *

## Recursos externos

### Documentación de React

Documentación oficial de React (en inglés).

- [Formularios en React](https://reactjs.org/docs/forms.html)

- [Manejo del input tipo `file` en React](https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag)