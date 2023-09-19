
let shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];

let shoppingContainer = "";
let chosenProduct = "";
let priceTotal = 0;

//Declaramos la exportacion del codigo y de la funcion para su funcionamiento.
export const addToCart = (e,data) =>{
  
  // El findIndex lo utilizo para saber cual es el indice del producto si es que existe
  const relegatedProduct = shoppingCart.findIndex(obj => obj.id === parseInt(e.currentTarget.id));
  console.log(`"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" ${relegatedProduct}`);

  if(relegatedProduct != -1){
    shoppingCart[relegatedProduct].amount++
  }else{
    chosenProduct = data.find( obj=> obj.id === parseInt(e.currentTarget.id));
    shoppingCart.push(chosenProduct);
  }

  
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
    
  localStorage.setItem("cart", JSON.stringify(shoppingCart))
  showCart(shoppingCart);
}




//Exportacion de showCart
export const showCart = (shoppingCart) => {

  // Sumamos las cantidades que se ven en la imagen del carrito
  shoppingCart.forEach(product => {
    const {amount} = product;
  
    let totalCantidad = 0;
    for (const item of shoppingCart) {
        totalCantidad += item.amount;
  }
   
// Mostramos las cantidades que se ven en la imagen del carrito  
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
    shoppingContainer = JSON.parse(localStorage.getItem("cart")) 

    const containerFloatCreators2 = document.getElementById("container_float--cart2");
    const containerFloatCreators = document.getElementById("container_float--cart");

// ! Creación de Container en el index ! // 
  if(containerFloatCreators){
    
    let containerFloat = document.createElement("div");
    containerFloat.innerHTML = `
      <div >  
      <div id="magic-square" class="oculto mostrar" ></div>
      <h1 class="container__h1">~ PRODUCTS IN CART ~</h1>  
      <div id = "container-cart">
      </div>
      <div class="container__btn">
      <button class="btn2 btn-primary2"><a href="Products/order.html" class="container_btn-style">Continue Order</a></button>
      </div>
      </div>
      <div id="btn-mover" class="btnClose">Button</div>`
    containerFloatCreators.appendChild(containerFloat);
      }else if(containerFloatCreators2){

              // ! Creación de Container en el sand, salad, empa, burguer, drinks ! //             
              let containerFloat2 = document.createElement("div");
              containerFloat2.innerHTML = `""`;
              containerFloat2.innerHTML = `
              <div >  
              <div id="magic-square" class="oculto mostrar" ></div>
              <h1 class="container__h1">~ PRODUCTS IN CART ~</h1>  
              <div id = "container-cart2">
              </div>
              <div class="container__btn">
              <button class="btn2 btn-primary2"><a href="../Products/order.html" class="container_btn-style">Continue Order</a></button>
              </div>
              <div id="btn-mover" class="btnClose">Button</div>
              </div>
              `
            containerFloatCreators2.appendChild(containerFloat2);
      };

  const btnMove = document.getElementById("btn-mover");
  btnMove.addEventListener("click", mover)

  function mover(){
    const elemento = document.getElementById("magic-square");
    elemento.classList.remove("oculto");
    console.log("Estoy en el boton este que no anda")
  }
    

  // Suma de los productos individualmente
  shoppingContainer.forEach(product => {
    product.total = product.amount * product.price;
  })
    
    console.log(shoppingContainer);
  //Suma general de todos los productos
  priceTotal = shoppingContainer.reduce((total, product) => {
    return total + (product.price * product.amount);
  },0)                
  console.log(`Precio total de la compra ${priceTotal}`);



  /*
  let amountRest = document.getElementById("amount_rest");
  amountRest.addEventListener(click, (e) => {
    e.priceTotal-= e.price;
  })
*/

  
    
// ! Creación de las cartas dentro del contenedor del carrito ! //

  // Acceder a la lista UL donde se mostrarán los productos
  const containerCartCreator = document.getElementById("container-cart");
  const containerCartCreator2 = document.getElementById("container-cart2");

  shoppingContainer.forEach(obj => {
  const {
    amount,
    price,
    image,
    name,
    total
  } = obj;




  if(containerCartCreator){
  console.log(obj.amount)
  let containerCart = document.createElement("div");
  console.log("Mitad de proceso" )
  containerCart.innerHTML = `
    <img src="${image}" alt="${name}" class="card-img-top cart__img-cart">
    <div class="card-body pizza cart__img-cart" >
        <h2 class="card__title-cart">${name}</h2>
        <p class="cart__subtitle-cart">Price <a class="card__number-cart" >${price}</a></p>
        <p class="cart__subtitle-cart">Quantity: <button id="amount_rest"> - </button><a class="card__number-cart" >${amount}</a><button id="amount_plus"> + </button></p>
        <p class="cart__subtitle-cart">Total product:<a class="card__number-cart" >${total}</a></p>
        </div>  
    </div> 
    `;
     
  containerCartCreator.appendChild(containerCart);
}else if(containerCartCreator2){
  let containerCart = document.createElement("div");
  console.log("Mitad de proceso" )
  containerCart.innerHTML = `
    <img src="../${image}" alt="${name}" class="card-img-top cart__img-cart">
    <div class="card-body pizza cart__img-cart" >
        <h2 class="card__title-cart">${name}</h2>
        <p class="cart__subtitle-cart">Price <a class="card__number-cart" >${price}</a></p>
        <p class="cart__subtitle-cart">Ordered quantity: <a class="card__number-cart" >${amount}</a></p>
        <p class="cart__subtitle-cart">Total product: <a class="card__number-cart" >${total}</a></p>
        </div>  
    </div> 
    `;
     
  containerCartCreator2.appendChild(containerCart);

 
}
/*
let amountPlus = document.getElementById("amount_plus");




if(amountPlus){
  amountPlus.addEventListener("click", (event) => {
    let amountId =  shoppingContainer.findIndex((obj) => obj.id === event.currentTarget.id);
    let amountObjet = shoppingContainer.find((obj) => obj.name === obj.name);

    console.log(`tomamos el id ${typeof amountId}`);
    console.log(`tomamos el objeto ${amountObjet}`);
  
    
      const {amount, price, total} = shoppingContainer;
      total += price;
      amount = amount++;
      console.log(`El total modificado de total ${total}`)
      console.log(`El total de amount ${amount}`)
    
    
    shoppingContainer[0].total += shoppingContainer[0].price;
    console.log(`amountPlus ${shoppingContainer[0].total}`);
    console.log(shoppingContainer[0]); 
    
  })
  }else{
    alert("sin ingreso");
  } 
*/
  

  })
  
 
  //order(shoppingContainer)  
  })


 
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




/*
      <div class="card"  style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title">${price}</h3>
        <h3 class="card-text">Cantidad${amount}</h3>
        <h3 class="card-text">Cantidad${total}</h3>
      </div>
    </div>
*/