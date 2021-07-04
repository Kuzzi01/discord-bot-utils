# Kufi

<div>
    <p>
        <img alt="npm" src="https://img.shields.io/npm/v/kufi?color=C7A486&logo=npm&style=for-the-badge">
        <img alt="NPM" src="https://img.shields.io/npm/l/kufi?color=C7A486&label=licencia&logo=npm&style=for-the-badge">
        <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Kuzzi01/kufi?color=C7A486&logo=github&style=for-the-badge">
    </p>
</div>

## ¡Optimiza tu tiempo!

Kufi es un kit de herramientas que facilitan el desarrollo de tu bot de discord, utilizándolo podrás agregar nuevas funciones a tu estilo y sin muchas complicaciones.

## Instalación

```shell
$ npm install kufi --save
```

## Indice

* [randomCode](#randomcode)
* [ms](#ms)
* [validNum](#validnum)
* [validURL](#validurl)
* [validMail](#validmail)
* [discordInv](#discordinv)
* [encode](#encode)
* [decode](#decode)

## Ejemplo de requerimiento del package:

```js
const kufi = require('kufi');
```

## Funciones

<a name="randomcode"></a>
### randomCode

```js
randomCode(num);
```

__Uso__

Te permitirá generar un código random del cual tu puedes elegir que cantidad de caracteres que tendrá.

__Parámetros__

1. `num`: Es el número de la cantidad de caracteres que quieres que se genere el código.

__Salida__

Retorna un `string` con la cantidad de caracteres ingresados por parámetro. 

> **NOTA**
>
> Por defecto se generará un código de 9 caracteres. Por lo que no tendrás problemas si no especifícas la cantidad de caracteres.

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi');

let codigo = kufi.randomCode(5); // En este caso quiero que la funcion me genere un codigo de 5 caracteres
console.log(codigo);
```

```js
//Ejemplo 2
const kufi = require('kufi');

let codigo = kufi.randomCode();

console.log(codigo); // Retorna un codigo de 9 caracteres
```

<a name="ms"></a>
### ms

```js
ms(num, operador);
```

__Uso__

El convertidor `ms` te ayudará a convertir los segundos, minutos y horas a milisegundos con solo una función.

__Parámetros__

1. `num`: Cantidad de segundo/minutos/horas que quieres convertir.

2. `operador`: Es un tipo `string` con las opciones de "`s/m/h`" que equivalen a `s = segundos`, 
`m = minutos`, `h = horas`.

__Salida__

Retorna la conversión de segundos/minutos/horas en milisegundos.

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi');

let cooldown = kufi.ms(5,"s"); // En este caso queremos convertir 5 segundos en milisegundos

console.log(cooldown); // Retornaria 5000
```

```js
//Ejemplo 2
const kufi = require('kufi');

let cooldown = kufi.ms(5,"m"); // En este caso queremos convertir 5 minutos en milisegundos

console.log(cooldown); // Retornaria 300.000
```

```js
//Ejemplo 3
const kufi = require('kufi');

let cooldown = kufi.ms(1,"h"); // En este caso queremos convertir 1 hora en milisegundos

console.log(cooldown); // Retornaria 3.600.000
```



<a name="validnum"></a>
### validNum

```js
validNum(n);
```

__Uso__

Verifica si un caracter es un número o no.

__Parámetros__

1. `n`: El caracter que quieres verificar si es un número.

__Salida__

Retorna un valor de tipo `bolean` (*true* or *false*).

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi');

let data = 9362;

if(kufi.validNum(data)){
    console.log("Restorna true y se cumple la condición");
}
```

```js
//Ejemplo 2
const kufi = require('kufi');

let data = "Test";

if(kufi.validNum(data)){
    // Retorna false por que data en igual a "Test" que no es un numero; no se cumple la condicion
}
```

<a name="validurl"></a>
### validURL

```js
validURL(str);
```

__Uso__

Verifica si la cadena de texto es un enlance.

__Parámetros__ 

1. `str`: Será la cadena de texto que queremos verificar que sea un enlace.

__Salida__

Retorna un valor de tipo `bolean` (*true* or *false*).

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi');

let data = "https://github.com/Kuzzi01";

if(kufi.validNum(data)){
    console.log("Retorna true y se cumple la condición");
}
```

```js
//Ejemplo 2
const kufi = require('kufi');

let data = "Tengo sueño";

if(kufi.validURL(data)){
    //retorna false y no se cumple la condicion por que data no es un enlace
}
```


<a name="validmail"></a>
### validMail

```js
validMail(str);
```

__Uso__

Nos permite verificar si la cadena de texto es un correo electrónico.

__Parámetros__

1. `str`: La cadena de texto que queremos verificar.

__Salida__

Retorna un valor de tipo `bolean` (*true* or *false*).

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi');

let data = "micorreo@dominio.com";

if(kufi.validNum(data)){
    console.log("Retorna true y se cumple la condición");
}
```

```js
//Ejemplo 2
const kufi = require('kufi');

let data = "micorreo#gatos.xyz";

if(kufi.validNum(data)){
    //Retorna false por que data no es un correo electronico valido.
}
```

<a name="discordinv"></a>
### discordInv

```js
discordInv(str);
```

__Uso__

Nos permite verificar si la cadena de texto es una invitación de discord.

__Parámetros__

1. `str`: La cadena de texto que queremos verificar.

__Salida__

Retorna un valor de tipo `bolean` (*true* or *false*).

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi');

let data = "https://discord.gg/kPZWmMZzJ6";

if(kufi.validNum(data)){
    console.log("Retorna true y se cumple la condición");
}
```

```js
//Ejemplo 2
const kufi = require('kufi');

let data = "urlcoffe.ga/sadslakd";

if(kufi.validNum(data)){
    // Retorna false por que data no es un correo electronico valido.
}
```

<a name="encode"></a>
### Encode y Decode

```js
encode(str); // Codificar texto
decode(str); // Decodificar texto
```

__Uso__

**Encode** lo podemos utilizar para codificar una cadena de text.

**Decode** lo podemos usar para decodificar una cadena de texto ya codificada.

__Parámetros__

1. `str`: Cadena de texto que quedemos codificar o decodificar.

__Salida__

Retorna un valor de tipo `string` con la cadena de texto codificada o descodificada, según sea el caso.

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi');

let data = "Eres vida";

console.log(kufi.encode(data));//retorna la cadena de texto "data" codificada => 2&#69k2&#114k2&#101k2&#115k2&#32k2&#118k2&#105k2&#100k2&#97k
```

```js
//Ejemplo 2
const kufi = require('kufi');

let data = "2&#69k2&#114k2&#101k2&#115k2&#32k2&#118k2&#105k2&#100k2&#97k";

console.log(kufi.decode(data)); // Retorna la cadena de texto "data" decodificada => Eres vida
```

## Updates

La libreria se ira actualizando constantemente para ir agregando ma funcionalidades, para facilitar nuestro trabajo.

## Links

[npm package](https://www.npmjs.com/package/kufi)


