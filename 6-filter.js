
let resultado = products.filter( 
    product => product.price > 100
)

console.log(resultado);

//Puedes implementarlo en un carrito.
const carrito = products.filter( product => product.title !== 'Adidas' );

console.log(carrito);