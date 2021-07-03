
/**
 * Genera un codigo random de la cantidad de characters que desees __Recomendado__: 16 o 32
 * @param {Number} num 
 * @returns Codigo en forma de string
 */
function randomCode(num){
    if(!num) {
        num = 9
    }
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result1= '';
    const charactersLength = characters.length;
    //sacamos characters random de la variable y los sumamos segun la cantidad de veces indica
    for (let i = 0; i < num; i++){
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}

/**
 * Conversor de milisegundo, primero agrega el numero a convertir, luego el operador. s = segundos, m = minutos y h = horas. Ejemplo: ms(2,"s"), esto retornara la convercion de 2 segundos a milisegundos
 * @param {number} num 
 * @param {string} operador 
 * @returns {number} conversion.
 */
function ms(num,operador){

    var op;
    var s = "s";
    var m = "m";
    var h = "h";

    switch(operador) {
        case s:
            op = num * 1000
            break;
        case m:
            op = num * 60000
            break;
        case h:
            op = num * 3600000
            break;
    }
    return op

}

/**
* Valida si un numero
* @param {*} n 
* @returns true o false
*/
function validNum(n) {
// Verificar que sea un numero
return !!parseInt(n) == false && parseInt(n) != 0 ? false : true;
}

/**
* Valida que una cadena de texto sea una url
* @param {string} str
* @returns true o false
*/
function validURL(str) {
    var regex =
  /(http|https):\/\/(\+w+:{ 0, 1 }\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
if (!regex.test(str)) {
  return false;
} else {
  return true;
}
}

/**
 * Valida que una cadena de texto sea un correo electronic
 * @param {string} str 
 * @returns true o false
 */
function validMail(str) {
    var regex =
  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
if (!regex.test(str)) {
  return false;
} else {
  return true;
}
}

/**
 * Valida la url de una invitación de discord
 * @param {string} str 
 * @returns true o false
 */
function discordInv(str) {
    var regex =
  /^(?:http(s)?:\/\/)?discord(app)?.(com|gg)\/(invite\/[a-zA-Z0-9]{2,8}|[a-zA-Z0-9]{2,10})/g;
if (!regex.test(str)) {
  return false;
} else {
  return true;
}
}

/**
* Convierte un conjunto de caracteres y codificalo.
*
* @param {String} str 
**/
function encode(str) {
    var buf = [];
    
    for (var i=str.length-1;i>=0;i--) {
        buf.unshift(['2&#', str[i].charCodeAt(), 'k'].join(''));
    }
    
    return buf.join('');
}

/**
* Convierte un conjunto de caracteres en su carácter original.
*
* @param {String} str
**/
function decode(str) {
return str.replace(/2&#(\d+)k/g, function(match, dec) {
    return String.fromCharCode(dec);
})
};

let data = "2&#69k2&#114k2&#101k2&#115k2&#32k2&#118k2&#105k2&#100k2&#97k"

let code = decode(data)

console.log(code)