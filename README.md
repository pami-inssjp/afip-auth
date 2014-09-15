# afip-auth

Modulo de autenticacion con AFIP para node.js

## Description

Este módulo expone una serie de funciones que permiten manipular los parametros token y sing que se reciben por POST y así validar la autenticación por clave fiscal.

## Installation

Comming Soon...

	npm install afip-auth --save

## Prerequisites

Antes de utilizar el módulo debes asegurarte dos cosas:
1) Que has habilitado CORS para el dominio https://auth.afip.gob.ar
2) Que puedes rexibir por post los parametros TOKEN y SIGN. El primero contiene las credenciales del usuario y el segundo es la firma digital de esos datos.

## Use

```javascript
var afipAuth = require('afip-auth');
```

## Licencia

![alt tag](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

Este obra está bajo una licencia de [Creative Commons](http://creativecommons.org/licenses/by-nc-sa/4.0/) Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional. 

Esta licencia permite la reproducción y generación de obras derivadas sin fines de lucro y en el último caso, las obras derivadas deben protegerse bajo los términos de esta misma licencia.
