
// Encontrar un elemento en un arreglo
meses.forEach( (mes, index) => {
    if(mes === 'Abril') {
        console.log(`${mes} si existe en el indice ${index}`); 
    }
})

// Encontrar un elemento en un arreglo con findIndex
const indice = meses.findIndex( mes => mes === 'Abril');
//console.log(indice); //-1
if(indice >0) {
 //   console.log(meses[indice]);
}

//encuentra el primer indice si en caso esta repetido
const indice2 = products.findIndex( product =>product.price === 55);
console.log(indice2); 