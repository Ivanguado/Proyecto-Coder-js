let shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];

let chosenProduct = "";


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
  
  localStorage.setItem("cart", JSON.stringify(shoppingCart))
  showCart(shoppingCart);
}


export const showCart = (shoppingCart) => {

shoppingCart.forEach(product => {

const {amount} = product;

let totalCantidad = 0;
for (const item of shoppingCart) {
    totalCantidad += item.amount;
  }
  console.log(`Al comienzo del carrito ${totalCantidad}`);

  const listProduc = document.getElementById("domIngres");
  domIngres.innerHTML = ""; 
  let domIngreso = document.createElement("p");
  domIngreso.innerHTML = `<p>${totalCantidad}</p>`;
  listProduc.appendChild(domIngreso);
});
      // Agrega un event listener al botón del carrito
      const cartButton = document.Getelementsbyclassname("btn_Carrito");  
      cartButton.addEventListener("click", (shoppingCart) => {
      // Implementa el código para mostrar detalles del artículo u otras acciones

      console.log("llegaste hasta lo ultimo")
  });
}







/*

  //Acceder a la lista de UL donde se mostrarán los productos
  const listProduc = document.getElementById("cartDomm");
  
  // Borrar el contenido anterior para evitar duplicados
 cartDomm.innerHTML = "";
  shoppingCart.forEach(product => {
      console.log(product);
      const {amount,
             id,
             imageCart
            } = product;
      let cartDom = document.createElement("div");
      cartDom.classList.add("cart-item"); // Agrega una clase para fines de estilo
      cartDom.innerHTML = `
      <div class="header_cart-notification">${amount}</div>
      <button class="btn" id="btn_Carrito" data-id="${id}">
        <img src="${imageCart}" alt="Botón Carrito">
      </button>
      `;
        
         // Agrega el elemento cartDom al elemento cartDomm
        listProduc.appendChild(cartDom);
      //);
// };
  */   