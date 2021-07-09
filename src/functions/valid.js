const ErrorKF = require("../class/errorKF")
/**
 * Valida cadenas de texto
 * @param {string} key La clave de validacion: `mail`, `num`, `inv`, `urls`
 * @param {*} data La cadena de texto que quieres validar.
 */
function validate(key, data){

    if(key === "mail"){
        var regex =
        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      if (!regex.test(data)) {
        return false;
      } else {
        return true;
      }
    }

    if(key === "urls"){
        var regex =
        /(http|https):\/\/(\+w+:{ 0, 1 }\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (!regex.test(data)) {
        return false;
      } else {
        return true;
      }
    }

    if(key === "num"){
        return !!parseInt(data) == false && parseInt(data) != 0 ? false : true;
    }

    if(key === "inv"){
        var regex =
        /^(?:http(s)?:\/\/)?discord(app)?.(com|gg)\/(invite\/[a-zA-Z0-9]{2,8}|[a-zA-Z0-9]{2,10})/g;
      if (!regex.test(data)) {
        return false;
      } else {
        return true;
      }
    }

    if(!key){
        throw new ErrorKF("No has ingresado una key valida","Invalid_Key");
    }
}

module.exports = validate