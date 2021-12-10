# Webpack

## Table of contents

1. [¿Que es?](#¿que-es)
2. [Features de webpack](#features-de-webpack)
3. [Loaders de webpack](#loaders-de-webpack)
4. [Plugins de webpack](#plugins-de-webpack)

## ¿Que es?

Webpack es **module bundler** o una libreria que nos permite poder gestionar todos los recuros necesarios para correr una aplicación web con el uso de sintaxis de ES6.

Estos recursos se pueden cargar de forma dinámica, por lo que no es necesario que sean todos los recursos que se necesitan para correr la aplicación.

Cuando **webpack** procesa nuestra aplicacion, internamente se construye un grafo de dependencias desde uno o más puntos de entrada. Después de esto combina cada modulo que el proyecto necesita en uno a más paquetes para poder servir al contenido de nuestra apllicacion.

## Features de webpack

- Puede tner un corredor de tareas
- Existen complementos de paquetes web desarrollador por la comunidad.
- Estos complemento se utilizan para realizar tareas que generalmente se realizan fuer a del paquete web, como limpiar el directorio de compilacion o implementar compilacion.
- **Todos los grandes frameworks de JS lo usan**
- **Es el estandar para las aplicaciones del lado del cliente**
- Te permite tener el control sobre diferentes assets (JS, CSS, HTML, imagenes, etc)

## Loaders de webpack

Un loader indica a webpack como tiene que transformar el codigo de un modulo concreto.

- Proveen una forma de manejar los pasos de construccion
- Los loaders pueden tranformar ficheros en otro lenguaje de JS
- Se pueden cargar imagenes como URLs generando un string en Base64
- Por defecto Webpack va a procesar archivos JS y JSON
- Los loaders realizan muchas mas funciones, porque existe una gran cantidad de ellos, y cada uno hace una cosa distinta.

Debemos de tener en cuenta que **tendremos que crear el archivo de configuracion** de forma manual para cada loader que vayamos a utilizar.

## Plugins de webpack

Los plugins agregan funcionalidades extra y todos los plugins dependen de un loader para funcionar. Por el contrario, los loader pueden funcionar por si solos sin los plugins.

**Caracteristicas de los plugins:**

- Son como objetos que se agregan a una configuracion de webpack. Esto permite conectarse a todo el ciclo de vida de eventos de webpack.
- 80% de webpack esta hecho por su propio sistema de plugins.
- Los loaders olo se aplican segun un tipo de archivo en especifico, pero su funcionalidad se puede expandir a traves de plugins.

Los plugins se cargan debajo de los loaders, y se cargan en orden.

Para más información, visita la **pagina oficial** [aqui](https://webpack.js.org/concepts/)
