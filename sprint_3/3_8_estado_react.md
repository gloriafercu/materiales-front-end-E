# Estado en React

[codepen-setstate-object-literal]: https://codepen.io/adalab/pen/EoLXOr?editors=0010
[codepen-setstate-incremental-function]: https://codepen.io/adalab/pen/baMRQW?editors=0010

## Contenidos

- [Introducción](#introducción)
- [¿Para qué sirve lo que vamos a ver en esta sesión?](#¿para-qué-sirve-lo-que-vamos-a-ver-en-esta-sesión)
- [Manejo del estado en un componente de React](#manejo-del-estado-en-un-componente-de-react)
- [¿Qué pasa cuando hay un cambio de estado?](#¿qué-pasa-cuando-hay-un-cambio-de-estado)

## Introducción

Hasta ahora hemos usado los componentes prácticamente como plantillas HTML que podemos personalizar con `props`. Declarábamos los componentes y se pintaban. Aunque también hemos visto cómo pueden reaccionar a eventos, en esta sesión iremos un paso más allá y veremos cómo cada componente puede tener una pequeña memoria que le permitirá tener actividad por sí mismo.


## ¿Para qué sirve lo que vamos a ver en esta sesión?

El __estado__ de una interfaz son sencillamente los datos que necesitamos para representarla. Por ejemplo, vamos a fijarnos en la interfaz de entrada a GMail. Los datos que necesitamos para poder pintarla son muchos más de los que pensamos a priori. Por un lado, necesitamos los datos concretos de email: el nombre de remitente, asunto, el texto inicial del email y la fecha. Pero también necesitamos conocer si un correo está marcado como favorito para mostrar la estrella rellana o vacía. O, al marcar algún correo con un check, hay opciones nuevas que aparecen. Por tanto, todos estos datos que necesito para poder pintar la interfaz son el estado.

![New GMail cover](assets/images/3_8_new-gmail-web-cover.jpg)

React es especialmente bueno manejando los pequeños cambios que se necesitan en cada uno de los componentes de una web. Cada instancia de un componente tiene un **estado** que refleja cada uno de esos pequeños cambios. React encapsula toda la complejidad y la distribuye en este sistema predecible. Saber utilizar los estados nos permitirá definir cómo se comportarán los componentes en cada momento y declarar _react-ciones_ más elaboradas a según qué interación con el usuario.


## Manejo del estado en un componente de React

El estado de un componente es la memoria **en cada momento** que tiene la instancia de un componente que se está mostrando en pantalla. Se trata de un atributo de la instancia parecido a las `props`, al que podremos acceder con `this.state`. Al contrario que las `props`, el **estado varía** durante el tiempo en que el componente aparece pintado en la pantalla. Es decir, las `props` no podemos cambiarlas, pero los estados, sí, aunque de cierta manera. En la siguiente sección (_¿Qué pasa cuando hay un cambio de estado?_) veremos cómo afecta esto a nuestro componente.

Por defecto, el estado de un componente está vacío. Hay dos momentos y maneras distintas de darle valor: en el `constructor()` del componente, y en cualquier otro momento con `setState()`.

### Asignar el estado inicial en el `constructor()`

En el `constructor()` podemos definir el estado que tendrá el componente en el primer momento en que se muestre en pantalla. En otras palabras, el estado inicial del componente. Lo haremos asignando a `this.state` un objeto con los valores iniciales de **todos los estados** que vaya a tener el componente:

```js
const generateRandomInteger = (maxValue) => Math.floor(Math.random() * maxValue);

class RandomInteger extends React.Component {
  constructor(props) {
    super(props);
    const { maxValue } = props;

    this.state = {
      number: generateRandomInteger(maxValue)
    }
  }

  render() {
    return (
      <span>{ this.state.number }</span>
    );
  }
}
```

> Nota: El `constructor` es el **único lugar** donde podremos asignar directamente un valor a `this.state`. En el resto, debemos usar `setState()`

Como en este ejemplo el estado nunca cambia más, puede parecer que esto no sirve de mucho comparado con las `props`, pero en realidad ya hemos delegado la responsabilidad de generar el número aleatorio al propio componente. El componente ahora es independiente y ningún componente padre o madre debe mandarle qué número mostrar. Hemos declarado un componente con identidad propia (y quizá adolescente, :P ).

### Actualizar el estado: el método `setState()`

Ahora bien, hemos dicho que podemos cambiar el estado. Sin embargo, tenemos que hacerlo de cierta manera. Sabemos que los componentes en React son declarativos: no decimos _cómo_ se hace un componente, sino el _qué_, y React es quien se encarga del _cómo_. A la hora de cambiar los valores del estado, **no podremos asignar directamente los valores a `this.state`** o cualquiera de sus propiedades, sino que utilizaremos el método `setState()` del componente: React se encargará del resto.

Podemos llamar a `setState()` de varias maneras. La más común y sencilla de ellas es pasarle un **objeto literal** con las claves (nombres) de los estados que queremos cambiar y sus valores. Es decir, si tenemos tres estados `a`, `b` y `c`, pero solo queremos cambiar el valor de `c`, pasaremos un objeto `{ c: 'nuevo valor' }`, sin incluir `a` ni `b`. React lo mezclará con el estado actual y solo cambiará las propiedades que deba cambiar.

```js
class BipolarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'info'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Nuestra función escuchadora del evento click
    this.setState({
      styling: 'danger'
    });
  }

  render() {
    return (
      <button className={ `btn btn-${this.state.styling}` } onClick={ this.handleClick }>{ this.props.label }</button>
    );
  }
}
```

[&blacktriangleright; `setState()` de objeto literal en Codepen][codepen-setstate-object-literal]

Utilizaremos la forma del objeto literal cuando el nuevo valor no dependa del anterior o de ningún otro estado del componente actual. Como React no asegura que los cambios de estado se ejecuten en el momento (los agrupa en lotes), si usamos el valor de un estado actual para calcular otro podemos estar usando un estado que no tiene el valor que pretendemos. Eso es una fuente de errores. Para esos casos existe otra manera de llamar a `setState()`, esta vez le pasamos una función, un `callback`. El `callback` recibe como parámetros el estado que modificaremos (`prevState`), y las `props` del componente, y devolverá un objeto literal con las claves (nombres) de los estados que queremos cambiar. Es más fácil verlo que contarlo:

```js
class BipolarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: 'info'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.styling === 'info') {
        nextStyling = 'danger';
      } else {
        nextStyling = 'info';
      }

      return {
        styling: nextStyling
      };
    });
  }

  render() {
    const { label } = this.props;
    const { styling } = this.state;

    return (
      <button className={ `btn btn-${styling}` } onClick={ this.handleClick }>{ label }</button>
    );
  }
}
```

También se puede usar una _arrow function_ más corta y, en este caso, un operador ternario o "`if` corto":

```js
this.setState((prevState, props) => ({
  styling: (prevState.styling === 'info') ? 'danger' : 'info'
})); // este doble paréntesis se suele olvidar de primeras
```

[&blacktriangleright; `setState()` con función en Codepen][codepen-setstate-incremental-function]


* * *

**EJERCICIO 1: QUÉ HORA SERÁ**:

Hace unas semanas, la empresa Time2Sleep nos encargó una página que mostrase sus ejercicios de relajación orientados a agilizar el sueño. Después de publicarla, recibieron _feedback_ de sus usuarios: se quedaban tan profundamente dormidos que, al despertar, no recordaban ni su nombre. Como quedaron muy contentos con el trabajo (literalmente: _"¡cómo nos flipan estas adalabers!"_), ahora nos han pedido una evolutiva, que es como se llama a las funcionalidades que se añaden a un proyecto ya hecho, para que añadamos un reloj a la web. Así sus usuarios sabrán al menos qué hora es.

Vamos a crear un componente reloj (`Clock`) que nos muestre la hora en cada momento. Tendrá un método `updateClock()` en el componente para actualizar el estado con `setState(/* objeto */)`, que actualizará la hora con `new Date()`. En el constructor del componente declararemos un `setInterval()` que ejecute `updateClock` cada segundo.  

* * *

**EJERCICIO 2: CONTADOR DE OVEJAS**

Definitivamente, Time2Sleep es fan de AdaLab. Esta vez, basándose en unos novedosos estudios científicos de alguna famosísima universidad que dice que al contar ovejas nos aburrimos tanto que caemos dormidos, nos han encargado que hagamos un contador de ovejas digital.

Crearemos un componente cuentaovejas (`SheepCounter`) que mostrará un número en grande y un botón. El botón tendrá asignado un escuchador al evento `click` que aumentará el contador. Actualizaremos el valor del contador con `setState(/* función */)`.

* * *


## ¿Qué pasa cuando hay un cambio de estado?

Como hemos visto varias veces arriba, React no asegura que los cambios de estado se ejecuten al momento. Vamos a ver cómo hace React los cambios de estado, de manera simplificada.

Un cambio de estado no solo cambia los valores de `this.state`. Lo más importante que hace es **volver a llamar al método `render()`** del componente después. Recordemos que podemos usar valores del estado en nuestro JSX como texto, para calcular otros valores que utilizaremos o como `props` para otros componentes hijo, por ejemplo. Cuando el estado cambia, el componente se tiene que re-`render`izar de nuevo, y si las `props` de los hijos cambian, esos componentes hijos también tienen que re-`render`izarse, y sus hijos a su vez. Así que cambiar el estado es costoso, porque hace que vuelvan a `render`izarse varios componentes **en cadena**.

> **NOTA**: a partir de ahora tenemos que recordar que, para que un componente vuelva a pintarse, es decir, se ejecute su método `render` puede ser por 2 motivos: 1) por un cambio en el estado (`this.state`) o 2) por un cambio en las `props` que le llegan del componente padre.

Ahora podemos entender por qué React no asegura que los cambios de estado ocurran al momento, aunque sean bastante rápidos. Cuando llamamos a `setState()` en cualquiera de sus formas, React registra esa **petición** de cambio de estado y la añade a una cola de tareas por hacer. Para no tener que re-`render`izar componentes demasiadas veces, es posible que agrupe en lotes (_batches_) algunos cambios de estado a la vez y los procese juntos para mejorar con eso el rendimiento. Esto significa que tendremos que pensar **las llamadas a `setState()` como llamadas asíncronas**.


### El `callback` de `setState()`

Si usásemos un valor de `this.state` después de llamar a `setState()`, podría no tener el valor actualizado. Por eso, `setState()` acepta un `callback` como último parámetro, como cualquier función asíncrona.

```js
this.setState(
  {
    mensaje: 'nuevo mensaje'
  },
  () => {
    console.log(this.state.mensaje); // 'nuevo mensaje'
  }
);
```

El `callback` se ejecutará justo después de que el cambio de estado haya tenido lugar, así que se pueden usar los nuevos valores de `this.state` sin problema.

* * *

**EJERCICIO 3: CONTADOR DE OVEJAS AVANZADO**

Sobre el componente cuentaovejas (`SheepCounter`) del ejercicio anterior, añadimos la funcionalidad de que, además de mostrar el número de ovejas, muestra también la imagen de una oveja. Por ejemplo, si el contador está en 6, además de aparecer el número 6 veremos 6 imágenes de ovejas.

> Podéis usar esta imagen por ejemplo: http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png

* * *

## Recursos externos

### Documentación de React

Documentación oficial de React (en inglés).

- [Estado en los componentes](https://facebook.github.io/react/docs/state-and-lifecycle.html)


### Egghead

Serie de clases en vídeo que introduce y explora los fundamentos básicos de React (en inglés).

- [Gestión de los estados en los componentes](https://egghead.io/lessons/react-state-basics)

