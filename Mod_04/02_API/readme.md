# [API](https://www.w3schools.com/js/js_api_intro.asp) (Aplication Programming Interface)

**_¿Que es?_**

Es una interfaz de programacion de aplicaciones. Esto permite que diferentes herramientas puedan comunicarse entre si.

En el mundo real seria un aplicacion, por ejemplo: Spotify y su api, podria ser su metodo de pagos. En DEVF se usa Stripe, al igual que en Platzi.

# Recursos utillizados en una api

## Contenidos

1. [URL](#url)
2. [Parameters](#query-parameters)
3. [JSON](#json)
4. [Headers](#headers)
5. [Metodos](#metodos)

### URL

Las URL son terminos para el frontend que nos permiten identificar un recurso en una API. En el backend esto se le conoce como endpoint.

### Query Parameters

Un query parameter es un parametro clave que se puede enviar en la url.

Los solemmos ver al final de una URL y como regla, deberán de estar después del simbolo de interrogacion. Una URL puede tener N query parameters, separadas por & (ampersand).

### JSON

JSON es un formato de texto que nos permite enviar y recibir informacion de una API. Siendo uno de los metodos de comunicacion para enviar/recibir datos del servidor. Tiene un formato similar a un objeto de JavaScript.

**JSON = JavaScript Object Notation**

### Headers

Son meta informacion que nos permite identificar informacion importante para que el cliente o servidor puede saber mas sobre la peticion

### Metodos

#### **GET**

Pide datos del servidor y los devuelve en formato JSON.

#### **POST**

Manda datos al servidor y son recibidos en formato JSON.

#### **PUT**

Actualiza datos en el servidor. **Reemplazo de datos existentes o crea elementos** Mas info [aqui](https://developer.mozilla.org/es/docs/Web/HTTP/Methods/PUT)

#### **PATCH**

Actualiza datos en el servidor **de manera parcial.** Mas info [aqui](https://developer.mozilla.org/es/docs/Web/HTTP/Methods/PATCH)

### **DELETE**

Elimina datos del servidor

## Info adicional

Hay API's de terceros, ejemplo>

- Faceboook API: Te permite poder usar la integracion de FB dentro de una pagina web
- YouTube API: Te permite poder reproducir videos de YouTube dentro de una pagina web
- Twitter API: Te permite poder mostrar tweets dentro de una pagina web

**[Volver al inicio](#contenidos)**
