let shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];

let chosenProduct = "";

//Declaramos la exportacion del codigo y de la funcion para su funcionamiento.
export const addToCart = (e,data) =>{


  // El findIndex lo utilizo para saber cual es el indice del producto si es que existe
  const relegatedProduct = shoppingCart.findIndex(obj => obj.id === parseInt(e.currentTarget.id));
  console.log(relegatedProduct);

  if(relegatedProduct != -1){
    shoppingCart[relegatedProduct].amount++
   
  }else{
    chosenProduct = data.find( obj=> obj.id === parseInt(e.currentTarget.id));
    shoppingCart.push(chosenProduct);
    
  }

  ///////////////////////////////////////////////////////////////////
  /*
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      // Agregar una clase CSS personalizada al Toast
      
    container: 'custom-swal-container',
    popup: 'custom-swal-popup',
    title: 'custom-swal-title',
    icon: 'custom-swal-icon',
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  
  Toast.fire({
    icon: 'success',
    title: 'Product Select',
  });
  */
  ////////////////////////////////////////////////////////////////////
  
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
 
  const listProduc = document.getElementById("domIngres");
  domIngres.innerHTML = ""; 
  let domIngreso = document.createElement("p");
  domIngreso.innerHTML = `<p>${totalCantidad}</p>`;
  listProduc.appendChild(domIngreso);
});
      // Agrega un event listener al botón del carrito
      const cartButton = document.getElementById("btn_Carrito");
      cartButton.addEventListener("click", (shoppingCart) => {


      // Implementa el código para mostrar detalles del artículo u otras acciones
      console.log("LLegasta al container del carrito")
      let shoppingContainer = JSON.parse(localStorage.getItem("cart")) 
      console.log(shoppingContainer);
      
        // Acceder a la lista UL donde se mostrarán los productos
      const containerCartCreator = document.getElementById("container-cart");
    
      //Declaramos variables
      let totalQuantityOfProduct = 0;
      let categoriesProducts = [];
      let quantityOfProduct = 0;
      let priceProducts = [];
      

      let categoriesBoolean = shoppingContainer.map(obj => obj.category);
      console.log(`Categorias Boolean ${categoriesBoolean}`);

      if(categoriesBoolean =! false){
        categoriesProducts = shoppingContainer.filter(obj => obj.category)
        console.log(`Categorias en el array ${categoriesProducts}`);
        
        if(quantityOfProduct > 0){
          for(const i of shoppingContainer
            
            
            
            ){
            if(i >= 0 && i < amount.length){
            totalQuantityOfProduct += amount[i];
            }
            console.error("Invalid", i); 
          }
          console.log(`El total quantitativo es ${totalQuantityOfProduct}`);
        }
        console.log(`El total quantitativo es ${totalQuantityOfProduct}`);

        priceProducts = shoppingContainer.filter(obj => obj.price > 0);
        console.log(`Los precios de los productos ${priceProducts}`);
      }

     
     
      
      

      shoppingContainer.forEach(obj => {
      const {
        amount,
        price,
      } = obj;
        
        console.log(obj.amount)
      let containerCart = document.createElement("div");
      containerCart.innerHTML = `
      <div>Aparece aca</div>
      <div class="header_cart-notification">no HAY NADA</div>
      <button class="btn" id="btn_Carrito" data-id="">
        <img src="" alt="Botón Carrito">
      </button>
      `;
    containerCartCreator.appendChild(containerCart);

  })  // Fin del forEach del shoppingContainer
  }) // Fin de la cart button
  } // Fin de la funcion
  





    








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