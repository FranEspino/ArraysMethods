let total = 0;
products.forEach((product) => {
  total += product.price;
});
console.log(Math.round(total * 100) / 100);

//previo, actual => transformacion que va a sufrir el arreglo, 0 => valor inicial
const total2 =  products.reduce((total, product) => total + product.price, 0);
console.log(Math.round(total2 * 100) / 100);