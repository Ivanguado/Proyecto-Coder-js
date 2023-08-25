let shoppingCart = [];
let chosenProduct = "";
let relegatedProduct = "";

JSON.parse(sessionStorage.getItem("cart")) === null && sessionStorage.setItem("cart",JSON.stringify([]));

let cart = JSON.parse(sessionStorage.getItem("cart"));

//Declaramos la exportacion del codigo y de la funcion para su funcionamiento.
export const addToCart = (e,data) =>{
  console.log(data);

  // El findIndex lo utilizo para saber cual es el indice del producto si es que existe
  const relegatedProduct = shoppingCart.findIndex(obj => obj.id === parseInt(e.currentTarget.id));
  console.log(relegatedProduct);


  if(relegatedProduct != -1){
    shoppingCart[relegatedProduct].amount++
    console.log(shoppingCart);
  }else{
    chosenProduct = data.find( obj=> obj.id === parseInt(e.currentTarget.id));
    shoppingCart.push(chosenProduct);
    console.log(shoppingCart);
  }
 //showCart(shoppingCart); 
}




