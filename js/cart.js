let shoppingCart = [];
let chosenProduct = "";
let relegatedProduct = "";

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

 showCart(shoppingCart);
}


function showCart(shoppingCart) {

    // Access the UL list where products will be displayed
    const listProduc = document.getElementById("cartDomm");
    
    // Borrar el contenido anterior para evitar duplicados
   cartDomm.innerHTML = "";

    shoppingCart.forEach(product => {
        let cartDom = document.createElement("div");
        cartDom.classList.add("cart-item"); // Agrega una clase para fines de estilo
        cartDom.innerHTML = `
        <div class="header_cart-notification">${product.amount}</div>
        <button class="btn" id="btn_Carrito" data-id="${product.id}">
          <img src="${product.imageCart}" alt="Botón Carrito">
        </button>
        `;

         // Agrega el elemento cartDom al elemento cartDomm
        listProduc.appendChild(cartDom);

        // Agrega un event listener al botón del carrito
        const cartButton = cartDom.querySelector(".btn");
        cartButton.addEventListener("click", () => {
        // Implementa el código para mostrar detalles del artículo u otras acciones
    });
    });
}