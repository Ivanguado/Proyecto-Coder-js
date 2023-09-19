let shoppingCart = JSON.parse(localStorage.getItem("cart")) || [];

let shoppingContainer = "";
let chosenProduct = "";
let priceTotal = 0;

//Declaramos la exportacion del codigo y de la funcion para su funcionamiento.
export const addToCart = (e,data) =>{
  
  // El findIndex lo utilizo para saber cual es el indice del producto si es que existe
  const relegatedProduct = shoppingCart.findIndex(obj => obj.id === parseInt(e.currentTarget.id));

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
      title: 'custom-swal-title',
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
  let containerCart = document.createElement("div");
  containerCart.innerHTML = `
    <img src="${image}" alt="${name}" class="card-img-top cart__img-cart">
    <div class="card-body pizza cart__img-cart" >
        <h2 class="card__title-cart">${name}</h2>
        <p class="cart__subtitle-cart">Price <a class="card__number-cart" >${price}</a></p>
        <p class="cart__subtitle-cart">Quantity:<a class="card__number-cart" >${amount}</a></p>
        <p class="cart__subtitle-cart">Total product:<a class="card__number-cart" >${total}</a></p>
        </div>  
    </div> 
    `;    
  containerCartCreator.appendChild(containerCart);
}else if(containerCartCreator2){
  let containerCart = document.createElement("div");
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
})
})//order(shoppingContainer)
} // Fin de la funcion





    








