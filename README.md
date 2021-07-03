# Kufi

Kufi es un kit de herramientas para el desarrollo de tu bot de discord, utilizandolo podras agregarle nuevas funciones a tu manera de desarrollarlo.

## Instalacion

```shell
npm install kufi --save
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

## Ejemplo de requerimiento del packege:

```js
const kufi = require('kufi')
```

## Funciones

<a name="randomcode"></a>
### randomCode

```js
randomCode(num)
```

Esta funcion te permite generar un codigo aleatorio.

__Modo de uso__

Te permitira generar un codigo random del cual tu puedes elegir que cantidad de caracteres que tendra.

__Argumentos__

1. num: Es el numero de la cantidad de caracteres que quieres que se genere el codigo.

__Retorna__

Un `string` con la cantidad de caracteres que allas indicado. 

__Recuerda__

No habrá problema si no colocas ningún numero, si este es el caso, por defecto se generara un codigo de 9 caracteres.

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi')

let codigo = kufi.randomCode(5)//en este caso quiero que la funcion me genere un codigo de 5 caracteres
console.log(codigo)
```

```js
//Ejemplo 2
const kufi = require('kufi')

let codigo = kufi.randomCode()

console.log(codigo)//retorna un codigo de 9 caracteres
```

<a name="ms"></a>
### ms

```js
ms(num, operador)
```

El convertidor ms te ayudara a convertir los segundos, minutos y horas a milisegundos con solo 1 función

__Argumentos__

1. num: Cantidad de segundo/minutos/horas que quieres convertir

2. operador: es un tipo `string` con las opciones de "s/m/h" que equivalen a s = segundos, m = minutos, h = horas.

__Retorna__

La conversion de segundos/minutos/horas en milisegundos

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi')

let cooldown = kufi.ms(5,"s")// En este caso queremos convertir 5 segundos en milisegundos

console.log(cooldown)//retornaria 5000
```

```js
//Ejemplo 2
const kufi = require('kufi')

let cooldown = kufi.ms(5,"m")// En este caso queremos convertir 5 minutos en milisegundos

console.log(cooldown)//retornaria 300.000
```

```js
//Ejemplo 3
const kufi = require('kufi')

let cooldown = kufi.ms(1,"h")// En este caso queremos convertir 1 hora en milisegundos

console.log(cooldown)//retornaria 3.600.000
```



<a name="validnum"></a>
### validNum

```js
validNum(n)
```

Verifica si un caracter es un numero o no

__Argumentos__

1. n: El caracter que quieres verificar si es un numero

__Retorna__

*true* o *false*

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi')

let data = 9362

if(kufi.validNum(data)){
    console.log("Restorna true y se cumple la condición")
}
```

```js
//Ejemplo 2
const kufi = require('kufi')

let data = "Test"

if(kufi.validNum(data)){
    //retorna false por que data en igual a "Test" que no es un numero; no se cumple la condicion
}
```

<a name="validurl"></a>
### validURL

```js
validURL(str)
```

Verifica si la cadena de texto es un enlance

__Argumentos__ 

1. str: sera la cadena de texto que queremos verificar que sea un enlace.

__Retorna__

*true* o *false*

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi')

let data = "https://github.com/Kuzzi01"

if(kufi.validNum(data)){
    console.log("Retorna true y se cumple la condición")
}
```

```js
//Ejemplo 2
const kufi = require('kufi')

let data = "Tengo sueño"

if(kufi.validURL(data)){
    //retorna false y no se cumple la condicion por que data no es un enlace
}
```


<a name="validmail"></a>
### validMail

```js
validMail(str)
```

Nos permite verificar si la cadena de texto es un correo electronico

__Argumentos__

1. str: La cadena de texto que queremos verificar

__Retorna__

*true* o *false*

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi')

let data = "micorreo@dominio.com"

if(kufi.validNum(data)){
    console.log("Retorna true y se cumple la condición")
}
```

```js
//Ejemplo 2
const kufi = require('kufi')

let data = "micorreo#gatos.xyz"

if(kufi.validNum(data)){
    //Retorna false por que data no es un correo electronico valido.
}
```

<a name="discordinv"></a>
### discordInv

```js
discordInv(str)
```

Nos permite verificar si la cadena de texto es una invitación de discord.

__Argumentos__

1. str: La cadena de texto que queremos verificar

__Retorna__

*true* o *false*

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi')

let data = "https://discord.gg/kPZWmMZzJ6"

if(kufi.validNum(data)){
    console.log("Retorna true y se cumple la condición")
}
```

```js
//Ejemplo 2
const kufi = require('kufi')

let data = "urlcoffe.ga/sadslakd"

if(kufi.validNum(data)){
    //Retorna false por que data no es un correo electronico valido.
}
```

<a name="encode"></a>
### Encode y Decode

```js
encode(str)//Codificar texto
decode(str)//Decodificar texto
```

Encode lo podemos utilizar para codificar una cadena de text.

Decode lo podemos usar para decodificar una cadena de texto ya codificada.

__Argumentos__

1. str: Cadena de texto que quedemos codificar o decodificar

__Retorna__

La cadena de texto codificada o decodificada

__Ejemplos__

```js
//Ejemplo 1
const kufi = require('kufi')

let data = "Eres vida"

console.log(kufi.encode(data))//retorna la cadena de texto "data" codificada => 2&#69k2&#114k2&#101k2&#115k2&#32k2&#118k2&#105k2&#100k2&#97k
```

```js
//Ejemplo 2
const kufi = require('kufi')

let data = "2&#69k2&#114k2&#101k2&#115k2&#32k2&#118k2&#105k2&#100k2&#97k"

console.log(kufi.decode(data))//retorna la cadena de texto "data" decodificada => Eres vida
```

## Updates

La libreria se ira actualizando constantemente para ir agregando ma funcionalidades, para facilitar nuestro trabajo.


