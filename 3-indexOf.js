const posicion = meses.indexOf('Abril'); 
console.log(posicion); 

const posicion2 = products.indexOf(   {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  });
  
console.log(posicion2); -1


//El método indexOf() se puede utilizar en un arreglo de objetos. 
//Sin embargo, debes tener en cuenta que indexOf() busca la igualdad 
//estricta entre el elemento especificado y los elementos del arreglo.
// En el caso de los objetos, la igualdad estricta solo se cumple si
// se hace referencia al mismo objeto en memoria.


