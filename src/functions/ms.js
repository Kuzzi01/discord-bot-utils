/**
 * Conversor de milisegundo, primero agrega el numero a convertir, luego el operador. s = segundos, m = minutos y h = horas. Ejemplo: ms(2,"s"), esto retornara la convercion de 2 segundos a milisegundos
 * @param {number} num 
 * @param {string} operador 
 * @returns {number} conversion.
 */
 function ms(num,operador){

    let op;

    switch(operador) {
        case "s":
            op = num * 1000
            break;
        case "m":
            op = num * 60000
            break;
        case "h":
            op = num * 3600000
            break;
    }
    return op

}

module.exports = ms