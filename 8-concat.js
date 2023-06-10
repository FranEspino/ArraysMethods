const semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
const resultado = meses.concat(semana);
console.log(resultado);

const resultado2 = [...meses, ...semana, ...estaciones]
console.log(resultado2);