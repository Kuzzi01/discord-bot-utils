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

module.exports = randomCode