const kufi = require("./src/index")

let author = "Kuzzi#9362"
const number = kufi.randomCode(6);
const ms = kufi.ms(12, "s");
const mail = kufi.validate("mail", "uncorre@gmail.com");
const numero = kufi.validate("num",9362);
const url = kufi.validate("urls", "https://www.docs.kufi.cf/");
const progressBar = kufi.progressBar(100,75);
const encode = kufi.encode("Kufi")
const decode = kufi.decode(encode);
const imagen = kufi.image.random("","800x600");

console.info(`${author} | ${number} | ${ms} | ${mail} | ${numero} | ${url} | ${progressBar.barra} | ${encode} | ${decode} | ${imagen}`)


