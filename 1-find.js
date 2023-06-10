

//obtener el  elemento que cumpla una la condicion
let resultado ="";
products.forEach(function(product){
    if(product.title === "Adidas"){
        console.log(product)
        resultado = products[product]
    }
})
console.log(resultado)


//Buscar y retorna el primer elemento que encuentre

const mes = meses.find( mes => mes === 'Abril'); // Abril
console.log(mes);


const result1 = products.find(function(product){
    if(product.title === "Adidas"){
        return product
    }
})
//console.log(result1)

const result2 = products.find((product) => product.title === "Adidas")
//console.log(result2)
