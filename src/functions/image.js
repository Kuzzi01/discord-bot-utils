const base = "https://source.unsplash.com/"
const baseR = "https://source.unsplash.com/random/?"
const baseC = "https://source.unsplash.com/category/"

/**
 * Busca una foto random de cualquier lugar, animal u objeto que quieras ejemplo: random("cats","800x600").
 * Cada vez que uses la funcion, cargará una imagen diferente.
 * @param {string} tag Etiqueta del lugar, objeto o animal que quieres una foto Ejemplo: "Cats" (opcional)
 * @param {string} size Dimenciones de la foto (opcional)
 * @returns url
 */
function random(tag,size){

    let link;

    if(!tag & !size){
        link = "https://source.unsplash.com/random"
        return link
    }

    if(size){
        
        link = `${base}random/${size}/?${tag}`
        return link

    }
        link = baseR + tag
        return link
}
/**
 * Todos los días tendrás una imagen diferente
 * @returns url
 */
function daily(){
    return base + "daily"
}
/**
 * Todas las semanas tendrás una imagen diferente
 * @returns url
 */
function weekly(){
    return base + "weekly"
}
/**
 * Busca una imagen por id
 * @param {number} num id de la imagen que quiere buscar
 * @returns url
 */
function id(num){
    return base + num
}
/**
 * Devuelve una imagen diferente de la categoría elegida cada vez que recargue
 * Categorias: `buildings`, `food`, `nature`, `people`, `technology` y `objects`.
 * @param {string} str Categoria que quieres buscar
 * @returns url
 */
function category(str){
    return baseC + str
}
module.exports = {
    random,
    daily,
    weekly,
    id,
    category
}