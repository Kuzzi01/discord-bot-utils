const utils = require("./utils/utils")
/**
 * Crea una barra de progreso asignando el porcentaje `total` y el porcentaje que lleva hasta ahora `current`.
 * @param {number} total El total de la porcentaje de la barra, normalmente 100 aunque puede cambiarse [Obligatorio]
 * @param {number} current La cantidad de progreso [Obligatorio]
 * @param {number} size El tamaño de la barra de progreso *por defecto 10* (Opcional)
 * @param {string} line El simbolo del background de la barra; *por defecto □* (Opcional)
 * @param {string} slider El simbolo de carga de la barra; *por defecto ■* (Opcional)
 * @returns obj
 */
 function progressBar(total, current, size = 10, line = '□', slider = '■'){    
	if (current > total) {

		const bar = slider.repeat(size + 2);
		const percentage = (current / total) * 100;
    let objeto = new utils.obj(bar, percentage)

		return objeto;

	} else {

		const percentage = current / total;
		const progress = Math.round((size * percentage));
		const emptyProgress = size - progress;
		const progressText = slider.repeat(progress);
		const emptyProgressText = line.repeat(emptyProgress);
		const bar = progressText + emptyProgressText;
		const calculated = percentage * 100;
    let objeto = new utils.obj(bar, calculated)

		return objeto

	}
};

module.exports = progressBar