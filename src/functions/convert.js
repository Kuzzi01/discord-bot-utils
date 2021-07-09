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

module.exports = {
    encode,
    decode
}