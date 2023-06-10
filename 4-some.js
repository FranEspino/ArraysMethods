//Revisa que al menos uno cumplas la condicion OR 
// Comprobar si un valor existe en un arreglo
meses.forEach( mes => {
    if(mes === 'Enero') {
        console.log('Enero si existe');
    }
});  

// Includes solo funciona en arreglos tradicionales
const resultado = meses.includes('Enero');
console.log(resultado); // true

// Some ideal para arreglo de objetos
const existe = products.some( product => product.title === 'Adidas');
console.log(existe);

// En un arregle normal tambien se puede
const existe2 = meses.some( mes => mes === 'Febrero');


