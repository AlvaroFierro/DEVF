# Callback, promesas, async-await ¿Qué son?

## Contenidos

1. [Callbacks](#callbacks)
2. [Promesas](#promises)
3. [Async-await](#async-await)

## Callbacks

- Es una función que recibe como parámetro otra funcion.
- La función "callback" por lo regular va a realizar algo con los resultados de la función "principal" (que se esta ejecutando).
- Es una forma de ejecutar código de forma asincrona, ya que una función va a llamar a otra.

### Ejemplo

```javascript
setTimeout(() => {
  console.log("Hola mundo");
}, 3000);
```

> En este ejemplo se va a imprimir en consola "Hola mundo" después de 3 segundos.

## :triangular_flag_on_post: de los callbacks

Principalmente podemos olvidar que ya se llamó el callback y eto duplicaría el código. El **segundo problema** es que si tenemos más callbacks nuestro código crecería, y podemos provocar un callback hell.

# Promises

- Se usa para interacciones asincronas
- Se compone de dos aspectos
  - **Resolve**: Se ejecuta cuando el objetivo de la promesa se efectuó de la manera correcta.
  - **Reject**: se ejecuta cuando el objetivo de la promesa ocasionó un error o no se llegó a cumplir.
- Se usa la palabra reservada **promise**
- En las promesas se tienen siempre tres estados.
  - **Pendiente**: Estado inicial de la promesa
  - **Resuelta**: Todo se ejecutó correctamente
  - **Rechazada**: Hubo un problema

**[Volver al inicio](#contenidos)**
