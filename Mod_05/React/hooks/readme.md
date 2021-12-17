# Hooks

En 2018 fue presentado commo una iniciativa para dejar de usar funcionalidades que requerian el uso de una clase.

### Hooks conocidos

- useState
- useEffect
- useReducer
- useContext
- UseRef

## useState

Incluye el manejo de estado al extender React.component, esto es realizado por medio del useState.

Cada vez que se ejecuta el metodo set se reflejan los cambios.

**Los props se reciben como parametro de la funcion**

```javascript
<>Ahora esto se utiliza</>
```

## useEffect

Proviene de side effects.

Un functional component de React utili\a props y/o state para calcular la salida.Si el functional component realiza calculos que no tienen como objetivo el valor de salida, estos calcuos se denominan side effects.

Ejemplo de side effects son las llamadas a API, la manipulacion directa del Dom, el uso de funciones de temporizacion como setTimeout, setInterval, etc.

```javascript
import { useEffect } from "react";

function Saludar({ nombre }) {
  const mensaje = `Hola ${nombre}`;
  useEffect (() => {
    document.title = `Saludos a ${nombre}`, ;
  })
}
```

More info [here](https://reactjs.org/docs/hooks-effect.html)
