import { addToCart } from "./cart.js";  // Importamos a la funcion que queremos usar y abajo del todo llama a la funcion importada


// Realizar una solicitud para cargar el archivo catalogo.json
fetch('../catalogo.json')
.then(response => response.json())
.then(data => showProducts(data))

 

function showProducts(data){
       // Acceder a la lista UL donde se mostrarán los productos
       const listaProductos = document.getElementById("carta");
    // Iterar a través de los productos y agregarlos a la lista UL
    data.forEach(product => {
      const {image, name, description, price, id} = product
        let listItem = document.createElement("div");
        listItem.innerHTML = `
        <div class="card2">
        <img src="${image}" alt="${name}" class="card-img-top">
        <div class="card-body pizza" data-id="${id}" data-name="${name}" data-price="${price}">
            <h4 class="card-title2">${name}</h4>
            <p class="card-text p">${description}</p>
            <h5 class="card-title2">Precio: ${price}</h5>
            <button class="makeAnOrder  btn2 btn-primary2" alt="Pizza Muzarella" id="${id}">Agregar al carrito</button>  
            </div>  
        </div> 
        `;
        listaProductos.appendChild(listItem);
      })
      const buyButtons = document.querySelectorAll('.makeAnOrder');
      buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => addToCart(e,data));
      })
    }
       // Llamamos a la función importada pasando los argumentos necesarios
       addToCart(e, data); 
   



/*

    function showCart(shoppingCart) {

      // Access the UL list where products will be displayed
      const listProduc = document.getElementById("cartDomm");
      
      // Borrar el contenido anterior para evitar duplicados
     cartDomm.innerHTML = "";
  
      shoppingCart.forEach(product => {
  
          const {amount, id, imageCart} = product;
          let cartDom = document.createElement("div");
          cartDom.classList.add("cart-item"); // Agrega una clase para fines de estilo
          cartDom.innerHTML = `
          <div class="header_cart-notification">${amount}</div>
          <button class="btn" id="btn_Carrito" data-id="${id}">
            <img src="${imageCart}" alt="Botón Carrito">
          </button>
          `;
            });
             // Agrega el elemento cartDom al elemento cartDomm
            listProduc.appendChild(cartDom);
          
          // Agrega un event listener al botón del carrito
          const cartButton = cartDom.querySelector(".btn");
          cartButton.addEventListener("click", () => {
          // Implementa el código para mostrar detalles del artículo u otras acciones
      });
  
    };


*/





















    
  
/*
  // Accede al elemento donde se mostrará la notificación y el botón del carrito
  const cartDomm = document.getElementById("cartDomm");

  // Borra el contenido anterior para evitar duplicados
  cartDomm.innerHTML = "";

  shoppingCart.forEach((product) => {
    let cartDom = document.createElement("div");
    cartDom.classList.add("cart-item"); // Agrega una clase para fines de estilo
    cartDom.innerHTML = `
      <div class="header_cart-notification">${product.amount}</div>
      <button class="btn" id="btn_Carrito" data-id="${product.id}">
        <img src="${product.image}" alt="Botón Carrito">
      </button>
    `;

    // Agrega el elemento cartDom al elemento cartDomm
    cartDomm.appendChild(cartDom);

    // Agrega un event listener al botón del carrito
    const cartButton = cartDom.querySelector(".btn");
    cartButton.addEventListener("click", () => {
      // Implementa el código para mostrar detalles del artículo u otras acciones
    });
  });
}

*/














  

 /*
    function addToCart(e, data) {
      const selectedProductId = parseInt(e.currentTarget.id);
    
      // Buscar si el producto ya existe en el carrito
      const existingProductIndex = shoppingCart.findIndex(item => item.id === selectedProductId);
    
      if (existingProductIndex !== -1) {
        // Si el producto ya está en el carrito, incrementar su cantidad (amount)
        shoppingCart[existingProductIndex].amount += 1;
      } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        const selectedProduct = data.find(item => item.id === selectedProductId);
        if (selectedProduct) {
          selectedProduct.amount = 1;
          shoppingCart.push(selectedProduct);
        }
      }
    
      console.log(shoppingCart);
    }

*/













/*
    const cart = [];


    // ... Código de carga de productos desde JSON ...
    
    function decreAmount() {
      let amount = document.getElementById('amount');
      let amountOrder = parseInt(amount.innerText);
      if (amountOrder > 0) {
        amount.innerText = amountOrder - 1;
      }
    }
    
    function increAmount() {
          amount = document.getElementById('amount');
          amountOrder = parseInt(amount.innerText);
      amount.innerText = amountOrder + 1;
    }
    
    
    function checkout() {
          
          amount = document.getElementById('amount');
          amountOrder = parseInt(amount.innerText);
      const id = `${product.id}`;
      const name = `${product.name}`;
      const price = parseFloat`(${product.price})`;
      console.log(`La categoria de la orden es ${id}`)
      console.log(`La cantidad de la orden es ${amountOrder}`);
       
      const newProduct = {
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        amountOrder: amountOrder,
      }
    
      cart.push(newProduct);
      
      cartPurchase();
    }






















































































































































    
/*
const cart = [];

// ... Código de carga de productos desde JSON ...

function decreAmount(product) {
  let amount = document.getElementById('amount');
  let amountOrder = parseInt(amount.innerText);
  if (amountOrder > 0) {
    amount.innerText = amountOrder - 1;
  }
}

function increAmount(product) {
      amount = document.getElementById('amount');
      amountOrder = parseInt(amount.innerText);
  amount.innerText = amountOrder + 1;
}


function checkout(product) {
      
      amount = document.getElementById('amount');
      amountOrder = parseInt(amount.innerText);
  const id = `${product.id}`;
  const name = `${product.name}`;
  const price = parseFloat`(${product.price})`;
  console.log(`La categoria de la orden es ${id}`)
  console.log(`La cantidad de la orden es ${amountOrder}`);
   
  const newProduct = {
    id: product.id,
    name: product.name,
    price: parseFloat(product.price),
    amountOrder: amountOrder,
  }

  cart.push(newProduct);
  
  cartPurchase();
}

// ... Resto de tu código ...

function cartPurchase() {
  // Aquí puedes agregar la lógica relacionada con la gestión del carrito de compras
}





cartPurchase(){

}



/*












/*
//////ARRAYS///////////////////////////////////////////

let arrayPizzas = [];
let arrayEmpanadas = [];
let arrayHamburguesas = [];
let arraySandwiches = [];
let arrayEnsalada = [];
let arrayBebidas = [];


//////OBJETOS///////////////////////////////////////////


//Pizzas

class Pizza {
    constructor(nombre = "", precio = 0, cantidad = 0) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

const pizzaMuzza = new Pizza("Pizza de Muzzarella", 1000, 100);
const pizzaCuatroQuesos = new Pizza("Pizza de Cuatro Quesos", 1400, 100);
const pizzaEspecial = new Pizza("Pizza Especial", 1200, 100);
const pizzaPalmitos = new Pizza("Pizza de Palmitos", 1700, 100);
const pizzaRicota = new Pizza("Pizza de Ricota", 1800, 100);
const pizzaRoquefort = new Pizza("Pizza de Roquefort", 1600, 100);

arrayPizzas.push(pizzaRoquefort, pizzaCuatroQuesos, pizzaEspecial, pizzaPalmitos, pizzaRicota);


//Empanadas

class Empanadas {
    constructor(nombre = "", precio = 0, cantidad = 0) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }  

const empanadaCarne = new Empanadas("Docena de Empanada de Carne",1500, 100);
const empanadaHumita = new Empanadas("Docena de Empanada de Humita",1400, 100);
const empanadaJQ = new Empanadas("Docena de Empanada de Jamon y Queso", 1600, 100);
const empanadaJR = new Empanadas("Docena de Empanada de Jamon y Roquefort", 2000, 100);
const empanadaPollo = new Empanadas("Docena de Empanada de Pollo", 1600, 100);
const empanadaVerdura = new Empanadas("Docena de Empanada de Verdura", 1200, 100);

arrayEmpanadas.push(empanadaCarne,empanadaHumita,empanadaJQ,empanadaJR,empanadaPollo,empanadaVerdura);


//Hamburguesas

class Hamburguesas {
    constructor(nombre = "", precio = 0, cantidad = 0) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

const burgerClasica = new Hamburguesas("Hamburguesa Clasica", 1200, 100);
const burguerBBQ = new Hamburguesas("Hamburguesa de BaribiQuiu", 1400, 100);
const burguerBBQRanch = new Hamburguesas("Hamburguesa Barbiqui ranch", 1500, 100);
const burguerMediterranea = new Hamburguesas("Hamburguesa Mediterranea", 1800, 100);
const burguerPicanJala = new Hamburguesas("Hamburguesa Pincate de Jalapeño", 1750, 100);
const burguerVegetariana = new Hamburguesas("Hamburguesa Vegetariana", 1200, 100);

arrayHamburguesas.push(burgerClasica,burguerBBQ,burguerBBQRanch,burguerMediterranea,burguerPicanJala,burguerVegetariana);


// Sandwiches

class Sandwiches {
    constructor(nombre = "", precio = 0, cantidad = 0) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

const sandVegetariano = new Sandwiches("Sandwitch de Vegetariano", 1800, 100);
const sandCaprese = new Sandwiches("Sandwitch de Caprese", 1700, 100);
const sandCarne = new Sandwiches("Sandwitch de Carne", 1550, 100);
const sandCubano = new Sandwiches("Sandwitch Cubano", 1400, 100);
const sandPollo = new Sandwiches("Sandwitch de Pollo", 1500, 100);
const sandVacio = new Sandwiches("Sandwitch de Vacio", 1900, 100);

arraySandwiches.push(sandCaprese, sandCarne, sandCubano, sandPollo, sandVacio, sandVegetariano);

//Ensalada

class Ensaladas {
    constructor(nombre = "", precio = 0, cantidad = 0) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

const ensaladaAtun = new Ensaladas("Ensalada de Atun", 1200, 100);
const ensaladaCaprese = new Ensaladas("Ensalada de Caprese", 1300, 100);
const ensaladaCesar = new Ensaladas("Ensalada Cesar", 1250, 100);
const ensaladaGriega = new Ensaladas("Ensalada Griega", 1300, 100);
const ensaladaPrimavera = new Ensaladas("Ensalada de Primavera", 950, 100);
const ensaladaPyM = new Ensaladas("Ensalada de PyM", 1300, 100);

arrayEnsalada.push(ensaladaAtun,ensaladaCaprese,ensaladaCesar,ensaladaGriega,ensaladaPrimavera,ensaladaPyM);


//Bebidas

class Bebidas {
    constructor(nombre = "", precio = 0, cantidad = 0) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }


const bebidaAgua = new Bebidas("Agua", 500, 80);
const bebidaCerveza = new Bebidas("Cerveza", 500, 80);
const bebidaGaseosa = new Bebidas("Gaseosa", 500, 80);
const bebidaSoda = new Bebidas("Soda", 500, 80);
const bebidaVino = new Bebidas("Vino", 900, 80);
const bebidaAguaSabo = new Bebidas("Agua Saborizada", 600, 80);


arrayBebidas.push(bebidaAgua, bebidaAguaSabo, bebidaCerveza, bebidaGaseosa, bebidaSoda, bebidaVino);

/*

//Pizzas Especial cantidades
function increCanEspecial() {
  const cantidad = document.querySelectorAll('.especial');
  const cantidadIncre = Array.from(cantidad).map(element => element.dataset.productId);
//  cantidad.innerText = cantidadPedida + 1;
  console.log(cantidadIncre);
  
   //cantidad.input1.addEventListener("click", )
  cantidadPedida = parseInt(cantidad.innerText);
  
  
 }
 function decreCanEspecial() {
  cantidad = document.getElementById('especial');
  cantidadPedida = parseInt(cantidad.innerText);
  if (cantidadPedida > 0) {
    cantidad.innerText = cantidadPedida - 1;
  }
  
 }

 */

/*
function realizarPedidoEspecial() {
  const productElements = document.querySelectorAll('.product');
  const productIds = Array.from(productElements).map(element => element.dataset.productId);
  console.log(productIds);
}

*/









































































































  /*
  
//////VARIABLES ( CANTIDAD DE LOS PRODUCTOS ) ////////////////////////

//Pizzas
  let pizzaMuzza = 0;
  let pizzaPalmitos = 0;
  let pizzaEspecial = 0;
  let pizzaRicota = 0;
  let pizzaRoquefort = 0;
  let pizzaCuatroQuesos = 0;
  let vueltas = 0;

//Empanadas
  let empanadaCarne = 0;
  let empanadaJQ = 0;
  let empanadaHumita = 0;
  let empanadaVerdura = 0;
  let empanadaJR = 0;
  let empanadaPollo = 0;

//Hamburguesas
  let burgerClasica = 0;
  let burguerBBQ = 0;
  let burguerBBQRanch = 0;
  let burguerVegetariana = 0;
  let burguerPicanJala = 0;
  let burguerMediterranea = 0;

//Sandwiches
  let sandVacio = 0;
  let sandCaprese = 0;
  let sandCubano = 0;
  let sandVegetariano = 0;
  let sandPollo = 0;
  let sanCarneRoja = 0;

//Ensaladas
  let ensaladaCesar = 0;
  let ensaladaCaprese = 0;
  let ensaladaAtun = 0;
  let ensaladaPrimavera = 0;
  let ensaladaPyM = 0;
  let ensaladaGriega = 0
  
//Bebidas
  let bebidaCerveza = 0;
  let bebidaAgua = 0;
  let bebidaVino = 0;
  let bebidaSoda = 0;
  let bebidaGaseosa = 0;
  let bebidaAS = 0;

//////VARIABLES ( NOMBRE DE LOS PRODUCTOS ) /////////////////////



//////VARIABLES DE JSONSTORAGE/////////////////////////

//Pizzas

  let jsonPedidoMuzza = "";
  let jsonPedidoPalmitos = "";
  let jsonPedidoEspecial = "";
  let jsonPedidoRoquefort = "";
  let jsonPedidoRicota = "";
  let jsonPedidoCuatroQuesos = "";

//Empanadas
  let jsonPediEmCarne = "";
  let jsonPediEmJQ = "";
  let jsonPediEmHumita = "";
  let jsonPediEmVerdura = "";
  let jsonPediEmJR = "";
  let jsonPediPollo = "";
  
//Hamburguesas
  let jsonBurClasica = "";
  let jsonBurBBQ = "";
  let jsonBurBBQRanch = "";
  let jsonBurVegetariana = "";
  let jsonBurPicanJala = "";
  let jsonBurMediterranea = "";

//Sandwich
  let jsonSanVacio = "";
  let jsonSanCaprese = "";
  let jsonSanCubano = "";
  let jsonSanVegeta = "";
  let jsonSanPollo = "";
  let jsonSanCarne = "";

//Ensalada
  let jsonEnsaCesar = "";
  let jsonEnsaCaprese = "";
  let jsonEnsaAtun = "";
  let jsonEnsaPrimavera = "";
  let jsonEnsaPyM = "";
  let jsonEnsaGriega = "";

//Bebidas
  let jsonBebiCerve = "";
  let jsonBebiAgua = ""; 
  let jsonBebiVino = "";
  let jsonBebiSoda = "";
  let jsonBebiGaseosa = "";
  let jsonBebiAS = "";









/*Crea:
_ 1 array para los tipos de productos.
_ 1 objeto para los tipos de productos.
_ 1 Crea las variables necesaria para cada producto.
_ 

  INSTRUCCIONES


_ 1_ Al principio globalmente creamos un DOM y un evento
para cada producto, cada DOM tiene el nombre de su ID.
el evento nos va a declarar la funcion funPrimerPaso().
2_ Dentro de la funcion funPrimerPaso() declaramos las 
variables glovales y se va a declarar un
switch con los distintos case segun los tipos de productos.

3_ Dentro de estos case se van a declarar una misma funcion 
llamada funPizza(), funHamburguesa(), etc. Para determinar
 el tipo de producto especifico.
4_ Al terminar de procesar esta función vuelve al switch.

5_ Dentro del switch entra dentro de otra funcion llamada
ObjetoProducto(), esta funcion va ser generica y se va a 
utilizar para guardar todos los productos.
dentro de la misma va a ver una switch con todas las opciones
de los tipos de productos y dentro de cada case el array donde
se va agregar(ej: arrayPizzas.push(pedidoMuzza));
6_  Esta va a volver al switch y va a entrar a otra funcion
llamada funStorageJson(), dentro de esta va a ver un codigo
generico para agregar todos los productos en local storage y
en el json.  
*/ 






/*


let arrayPizzas = [];
let pedidoObjeto = "";
let jsonPedidoObjeto = "";
//Variables nuevas
let cantidadPedida = "";
let cantidad = "";
let cantidadNombre = "";

/*   FUNCIONES DE INCREMENTACION Y DECREMENTACION DEL PEDIDO */

//Pizzas Muzzarella cantidades

/*


function increCanMuzza() {
  cantidad = document.getElementById('muzzarella');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidad.innerText = cantidadPedida + 1;
 }
 function decreCanMuzza() {
  cantidad = document.getElementById('muzzarella');
  cantidadPedida = parseInt(cantidad.innerText);
  if (cantidadPedida > 0) {
    cantidad.innerText = cantidadPedida - 1;
  }
 }
 function realizarPedidoMuzza() {
  cantidad = document.getElementById('muzzarella');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidadNombre = 'muzzarella';
  console.log(cantidadPedida);
  funPrimerPaso();
}

//Pizzas Palmitos cantidades
function increCanPalmitos() {
  cantidad = document.getElementById('palmitos');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidad.innerText = cantidadPedida + 1;
 }
 function decreCanPalmitos() {
  cantidad = document.getElementById('palmitos');
  cantidadPedida = parseInt(cantidad.innerText);
  if (cantidadPedida > 0) {
    cantidad.innerText = cantidadPedida - 1;
  }
 }
 function realizarPedido() {
  cantidad = document.getElementById('palmitos');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidadNombre = 'palmitos';
  console.log(cantidadPedida);
  funPrimerPaso();
}

//Pizzas Especial cantidades
function increCanEspecial() {
  cantidad = document.getElementById('especial');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidad.innerText = cantidadPedida + 1;
 }
 function decreCanEspecial() {
  cantidad = document.getElementById('especial');
  cantidadPedida = parseInt(cantidad.innerText);
  if (cantidadPedida > 0) {
    cantidad.innerText = cantidadPedida - 1;
  }
 }
 function realizarPedidoEspecial() {
  cantidad = document.getElementById('especial');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidadNombre = 'especial';
  console.log(cantidadPedida);
  funPrimerPaso();
}

//Pizzas Ricota cantidades
function increCanPalmitos() {
  cantidad = document.getElementById('palmitos');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidad.innerText = cantidadPedida + 1;
 }
 function decreCanPalmitos() {
  cantidad = document.getElementById('palmitos');
  cantidadPedida = parseInt(cantidad.innerText);
  if (cantidadPedida > 0) {
    cantidad.innerText = cantidadPedida - 1;
  }
 }
 function realizarPedidoPalmitos() {
  cantidad = document.getElementById('palmitos');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidadNombre = 'palmitos';
  console.log(cantidadPedida);
  funPrimerPaso();
}

//Pizzas Roquefort cantidades
function increCanRoquefort() {
  cantidad = document.getElementById('roquefort');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidad.innerText = cantidadPedida + 1;
 }
 function decreCanRoquefort() {
  cantidad = document.getElementById('roquefort');
  cantidadPedida = parseInt(cantidad.innerText);
  if (cantidadPedida > 0) {
    cantidad.innerText = cantidadPedida - 1;
  }
 }
 function realizarPedidoRoquefort() {
  cantidad = document.getElementById('roquefort');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidadNombre = 'roquefort';
  console.log(cantidadPedida);
  funPrimerPaso();
}

//Pizzas Cuatro Quesos cantidades
function increCanCuatroQuesos() {
  cantidad = document.getElementById('cuatro_quesos');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidad.innerText = cantidadPedida + 1;
 }
 function decreCanCuatroQuesos() {
  cantidad = document.getElementById('cuatro_quesos');
  cantidadPedida = parseInt(cantidad.innerText);
  if (cantidadPedida > 0) {
    cantidad.innerText = cantidadPedida - 1;
  }
 }
 function realizarPedidoCuatroQuesos() {
  cantidad = document.getElementById('cuatro_quesos');
  cantidadPedida = parseInt(cantidad.innerText);
  cantidadNombre = 'palmitos';
  console.log(cantidadPedida);
  funPrimerPaso();
}







function funPrimerPaso(){   
  objetoProducto();
  funStorageJson()
  }


function objetoProducto(){
  console.log("llegaste al paso 3");
  switch(true){
  case(cantidadNombre === "muzzarella" || cantidadNombre === "palmitos"):
  console.log("llegaste al paso 4");   
  pedidoObjeto = new Pizza(cantidadNombre, cantidadPedida);  
  arrayPizzas.push(pedidoObjeto);
  break;
  case(this.id === "btn_forquefort" || this.id === "btn_cuatroQuesos"):
  console.log("Entraste a btn_palmitos");
  }
  }

  function funStorageJson(){
    console.log("llegaste al paso 5");
    jsonPedidoObjeto = JSON.stringify(pedidoObjeto);
    localStorage.setItem("Pedido", jsonPedidoObjeto);
    console.log(typeof jsonPedidoObjeto);
    for (const key in pedidoObjeto) {
      console.log(key + ": " + pedidoObjeto[key]);
    }
  }





























































////ALGORITMOS///////////////////////////////////

//Pizzas

  //Dom y eventos
    let btnMuzza = document.getElementById("btn_muzza");
    btnMuzza.addEventListener("click", funMuzza);
    function funMuzza(){
    pizzaMuzza += 1;
    let pedidoMuzza = new Pizza("Pizza de Muzzarella", pizzaMuzza);
    arrayPizzas.push(pedidoMuzza);
  //localstorage y json
    jsonPedidoMuzza = JSON.stringify(pedidoMuzza);
    localStorage.setItem("Pedido de Muzzarella", jsonPedidoMuzza);
    console.log(pedidoMuzza);
    console.log(typeof pedidoMuzza);
  //Mostrar en consola
    arrayPizzas.forEach((arrayPizzas)=> {
    console.log(arrayPizzas);
});
}



//Dom y eventos
  let btnPalmitos = document.getElementById("btn_palmitos");
    btnPalmitos.addEventListener("click", funPalmitos);
  function funPalmitos() {
    pizzaPalmitos += 1;
  let pedidoPalmitos = new Pizza("Pizza de Palmitos", pizzaPalmitos);
    arrayPizzas.push(pedidoPalmitos);
//localstorage y json
    jsonPedidoPalmitos = JSON.stringify(pedidoPalmitos);
    localStorage.setItem("Pedido de Palmitos",jsonPedidoPalmitos);
//Mostrar en consola
    arrayPizzas.forEach((arrayPizzas)=> {
    console.log(arrayPizzas);
  });
}
  //Dom y eventos
  let btnEspecial = document.getElementById("btn_especial");
    btnEspecial.addEventListener("click", funEspecial)
  function funEspecial(){
    pizzaEspecial += 1;
  let pedidoEspecial = new Pizza("Pizza Especial", pizzaEspecial); 
    arrayPizzas.push(pedidoEspecial);
  //localstorage y json
    jsonPedidoEspecial =JSON.stringify(pedidoEspecial);
    localStorage.setItem("Pedido de Especial",jsonPedidoEspecial);
  //Mostrar en consola 
    arrayPizzas.forEach((arrayPizzas) => {
    console.log(arrayPizzas);
});   
};
  //Dom y eventos
  let btnRicota = document.getElementById("btn_ricota");
    btnRicota.addEventListener("click", funRicota);
  function funRicota(){
    pizzaRicota += 1;
  let pedidoRicota = new Pizza("Pizza de Ricota", pizzaRicota);
    arrayPizzas.push(pedidoRicota);
  //localstorage y json
    jsonPedidoRicota = JSON.stringify(pedidoRicota);
    localStorage.setItem("Pedido de Ricota",jsonPedidoRicota);
  //Mostrar en consola 
    arrayPizzas.forEach((arrayPizzas) =>{
    console.log(arrayPizzas)
});
};
  //Dom y eventos
  let btnRoquefort = document.getElementById("btn_roquefort");
    btnRoquefort.addEventListener("click", funRoquefort) 
  function funRoquefort (){
    pizzaRoquefort += 1;
  let pedidoRoquefort = new Pizza("Pizza de Roquefort", pizzaRoquefort);
    arrayPizzas.push(pedidoRoquefort);
  //localstorage y json
    jsonPedidoRoquefort = JSON.stringify(pedidoRoquefort);
    localStorage.setItem("Pedido de Roquefort",jsonPedidoRoquefort);
  //Mostrar en consola 
    arrayPizzas.forEach((arrayPizzas) =>{
    console.log(arrayPizzas)
});
};
  //Dom y eventos
  let btnCuatroQuesos = document.getElementById("btn_cuatroQuesos");
    btnCuatroQuesos.addEventListener("click", funCuatroQuesos);
  function funCuatroQuesos() {
    pizzaCuatroQuesos += 1;
  let pedidoCuatroQuesos = new Pizza("Pizza de Cuatro Quesos", pizzaCuatroQuesos);
    arrayPizzas.push(pedidoCuatroQuesos);
  //localstorage y json
    jsonPedidoCuatroQuesos = JSON.stringify(pedidoCuatroQuesos);
    localStorage.setItem("Pedido de Cuatro Quesos",jsonPedidoCuatroQuesos);
  //Mostrar en consola 
    arrayPizzas.forEach((arrayPizzas) =>{
    console.log(arrayPizzas)
    })
};






//Empanadas

  //Dom y eventos
  let btnEmpaCarne = document.getElementById("btn_empa_carne");
    btnEmpaCarne.addEventListener("click", funEmpaCarne) 
  function funEmpaCarne(){
    empanadaCarne += 1;
  let pediEmpaCarne = new Empanadas("Empanadas de Carne", empanadaCarne);
    arrayEmpanadas.push(pediEmpaCarne);
  //localstorage y json
    jsonPediEmCarne = JSON.stringify(pediEmpaCarne);
    localStorage.setItem("Pedido de Empanada Carne", jsonPediEmpaCarne);
    console.log(pediEmpaCarne);
    console.log(typeof pediEmpaCarne);
  //Mostrar en consola
    arrayEmpanadas.forEach((arrayEmpanadas)=> {
    console.log(arrayEmpanadas);
});
};
//Dom y eventos
  let BtnEmJQ = document.getElementById("btn_empa_JQ");
    btnEmJQ.addEventListener("click", funEmpaJQ);
  function funEmpaJQ() {
    empanadaJQ += 1;
  let pediEmpaJQ = new Empanadas("Empanada de Jamon y Queso", empanadaJQ);
    arrayEmpanadas.push(pediEmpaJQ);
//localstorage y json
    jsonPediEmJQ = JSON.stringify(pediEmpaJQ);
    localStorage.setItem("Pedido de Empanada Jamon y Queso",jsonPediEmJQ);
//Mostrar en consola
    arrayEmpanadas.forEach((arrayEmpanadas)=> {
    console.log(arrayEmpanadas);
  });
}
  //Dom y eventos
  let btnEmHumita = document.getElementById("btn_empa_humita");
    btnEspecial.addEventListener("click", funEmpaHumita)
  function funEmpaHumita(){
    empanadaHumita += 1;
  let pediEmHumita = new Empanadas("Empanada de humita", empanadaHumita); 
    arrayEmpanadas.push(pediEmHumita);
  //localstorage y json
    jsonPediEmHumita =JSON.stringify(pediEmHumita);
    localStorage.setItem("Pedido de Empanada de humita",jsonPediEmHumita);
  //Mostrar en consola 
    arrayPizzas.forEach((arrayEmpanadas) => {
    console.log(arrayEmpanadas);
});   
};
  //Dom y eventos
  let btnEmVerdura = document.getElementById("btn_empa_verdura");
    btnRicota.addEventListener("click", funEmVerdura);
  function funEmVerdura(){
    empanadaVerdura += 1;
  let pediEmVerdura = new Empanadas("Pedido de Empanada de Verdura", empanadaVerdura);
    arrayEmpanadas.push(pediEmVerdura);
  //localstorage y json
    jsonPediEmVerdura = JSON.stringify(pediEmVerdura);
    localStorage.setItem("Pedido de Empanada de Verdura",jsonPediEmVerdura);
  //Mostrar en consola 
    arrayEmpanadas.forEach((arrayEmpanadas) =>{
    console.log(arrayEmpanadas)
});
};
  //Dom y eventos
  let btnEmJR = document.getElementById("btn_empa_JR");
    btnEmJR.addEventListener("click", funEmJR) 
  function funEmJR (){
    empanadaJR += 1;
  let pediEmJR = new Empanadas("Pedido de Empanada de J y R", empanadaJR);
    arrayEmpanadas.push(pediEmJR);
  //localstorage y json
    jsonPediEmJR = JSON.stringify(pediEmJR);
    localStorage.setItem("Pedido de Empanada de J y R ", jsonPediEmJR);
  //Mostrar en consola 
    arrayEmpanadas.forEach((arrayEmpanadas) =>{
    console.log(arrayEmpanadas)
});
};
  //Dom y eventos
  let btnEmPollo = document.getElementById("btn_empa_pollo");
    btnEmPollo.addEventListener("click", funEmPollo);
  function funEmPollo() {
    empanadaPollo += 1;
  let pediEmPollo = new Empanadas("Pedido Empanada de Pollo", empanadaPollo);
    arrayEmpanadas.push(pediEmPollo);
  //localstorage y json
    jsonPediEmPollo = JSON.stringify(pediEmPollo);
    localStorage.setItem("Pedido de Cuatro Quesos",jsonPediEmPollo);
  //Mostrar en consola 
    arrayEmpanadas.forEach((arrayEmpanadas) =>{
    console.log(arrayEmpanadas)
    })
};
 




//Hamburguesas

  //Dom y eventos
  let btnBurClas = document.getElementById("btn_bur_class");
    btnBurClas.addEventListener("click", funBurCla) 
  function funBurCla(){
    burgerClasica += 1;
  let pediBurCla = new Hamburguesas("Pedido de Hamburguesa Clasica", burgerClasica);
    arrayHamburguesas.push(pediBurCla);
  //localstorage y json
    jsonBurClasica = JSON.stringify(pediBurCla);
    localStorage.setItem("Pedido de Hamburguesa Clasica ", jsonBurClasica);
    console.log(pediBurCla);
    console.log(typeof pediBurCla);
  //Mostrar en consola
    arrayEmpanadas.forEach((arrayHamburguesas)=> {
    console.log(arrayHamburguesas);
});
};
//Dom y eventos
  let btnBurBBQ = document.getElementById("btn_bur_class");
    btnBurBBQ.addEventListener("click", funBurBBQ);
  function funBurBBQ() {
    burguerBBQ += 1;
  let pediBurBBQ = new Hamburguesas("Pedido de Hamburguesa de BBQ", burguerBBQ);
    arrayHamburguesas.push(pediBurBBQ);
//localstorage y json
    jsonPediBBQ = JSON.stringify(pediBurBBQ);
    localStorage.setItem("Pedido de Hamburguesa de BBQ",jsonPediBBQ);
//Mostrar en consola
    arrayHamburguesas.forEach((arrayHamburguesas)=> {
    console.log(arrayHamburguesas);
  });
}
  //Dom y eventos
  let btnBurBBQRanch = document.getElementById("btn_bur_BBQRanch");
    btnEspecial.addEventListener("click", funBurBBQRanch)
  function funBurBBQRanch(){
    burguerBBQRanch += 1;
  let pediBurBBQRanch = new Hamburguesas("Pedido de Hamburguesa de BBQ Ranch", empanadaHumita); 
    arrayHamburguesas.push(pediBurBBQRanch);
  //localstorage y json
    jsonBurBBQRanch =JSON.stringify(pediBurBBQRanch);
    localStorage.setItem("Pedido de Hamburguesa de BBQ Ranch",jsonBurBBQRanch);
  //Mostrar en consola 
    arrayHamburguesas.forEach((arrayHamburguesas) => {
    console.log(arrayHamburguesas);
});   
};
  //Dom y eventos
  let btnBurVege = document.getElementById("btn_bur_vege");
    btnBurVege.addEventListener("click", funBurVege);
  function funBurVege(){
    burguerVegetariana += 1;
  let pediBurVege = new Hamburguesas("Pedido de Hamburguesa Vegeteriana", burguerVegetariana);
    arrayHamburguesas.push(pediBurVege);
  //localstorage y json
    jsonBurVegetariana = JSON.stringify(pediBurVege);
    localStorage.setItem("Pedido de Hamburguesa Vegetariana",jsonBurVegetariana);
  //Mostrar en consola 
    arrayHamburguesas.forEach((arrayHamburguesas) =>{
    console.log(arrayHamburguesas)
});
};
  //Dom y eventos
  let btnBurPican = document.getElementById("btn_bur_Pican");
    btnBurPican.addEventListener("click", funBurPican) 
  function funBurPican(){
    burguerPicanJala += 1;
  let pediBurPican = new Hamburguesas("Pedido de Hamburguesa Picante de Jalapeño", burguerPicanJala);
    arrayEmpanadas.push(pediBurPican);
  //localstorage y json
    jsonBurPicanJala = JSON.stringify(pediBurPican);
    localStorage.setItem("Pedido de Hamburguesa Picante de Jalapeño", jsonBurPicanJala);
  //Mostrar en consola 
    arrayHamburguesas.forEach((arrayHamburguesas) =>{
    console.log(arrayHamburguesas)
});
};
  //Dom y eventos
  let btnBurMedi = document.getElementById("btn_bur_medi");
    btnBurMedi.addEventListener("click", funBurMedi);
  function funBurMedi() {
    burguerMediterranea += 1;
  let pediBurMedi = new Empanadas("Pedido Hamburguesa Mediterranea", burguerMediterranea);
    arrayHamburguesas.push(pediBurMedi);
  //localstorage y json
    jsonBurMediterranea = JSON.stringify(pediBurMedi);
    localStorage.setItem("Pedido Hamburguesa Mediterranes",jsonBurMediterranea);
  //Mostrar en consola 
    arrayHamburguesas.forEach((arrayHamburguesas) =>{
    console.log(arrayHamburguesas)
    })
};
 


// Sandwitch


  //Dom y eventos
  let btnSanVacio = document.getElementById("btn_san_vacio");
    btnSanVacio.addEventListener("click", funSanVacio);
  function funSanVacio() {
    sandVacio += 1;
  let pediSanVacio = new Sandwiches("Pedido Sandwitch de vacio", sandVacio);
    arraySandwiches.push(pediSanVacio);
  //localstorage y json
    jsonSanVacio = JSON.stringify(pediSanVacio);
    localStorage.setItem("Pedido Hamburguesa Mediterranes",jsonSanVacio);
  //Mostrar en consola 
    arraySandwiches.forEach((arraySandwiches) =>{
    console.log(arraySandwiches)
    })
};


  //Dom y eventos
  let btnSanCaprese = document.getElementById("btn_san_caprese");
    btnSanCaprese.addEventListener("click", funSanCaprese);
  function funSanCaprese() {
    sandVacio += 1;
  let pediSanCaprese = new Sandwiches("Pedido Sandwitch de Caprese", sandCaprese);
    arraySandwiches.push(pediSanCaprese);
  //localstorage y json
    jsonSanCaprese = JSON.stringify(pediSanCaprese);
    localStorage.setItem("Pedido Hamburguesa Caprese",jsonSanCaprese);
  //Mostrar en consola 
    arraySandwiches.forEach((arraySandwiches) =>{
    console.log(arraySandwiches)
    })
};


  //Dom y eventos
  let btnSanCubano = document.getElementById("btn_san_cubano");
    btnSanCubano.addEventListener("click", funSanCubano);
  function funSanCubano() {
    sandVacio += 1;
  let pediSanCubano = new Sandwiches("Pedido Sandwitch de cubano", sandCubano);
    arraySandwiches.push(pediSanCubano);
  //localstorage y json
    jsonSanCubano = JSON.stringify(pediSanCubano);
    localStorage.setItem("Pedido Hamburguesa Cubano",jsonSanCubano);
  //Mostrar en consola 
    arraySandwiches.forEach((arraySandwiches) =>{
    console.log(arraySandwiches)
    })
};

  //Dom y eventos
  let btnSanVege = document.getElementById("btn_san_vege");
    btnSanVege.addEventListener("click", funSanVege);
  function funSanVege() {
    sandVacio += 1;
  let pediSanVege = new Sandwiches("Pedido Sandwitch Vegetariano", sandVacio);
    arraySandwiches.push(pediSanVege);
  //localstorage y json
    jsonSanVegeta = JSON.stringify(pediSanVege);
    localStorage.setItem("Pedido Hamburguesa Vegetariano",jsonSanVegeta);
  //Mostrar en consola 
    arraySandwiches.forEach((arraySandwiches) =>{
    console.log(arraySandwiches)
    })
};

  //Dom y eventos
  let btnSanPollo = document.getElementById("btn_san_pollo");
    btnSanPollo.addEventListener("click", funSanPollo);
  function funSanPollo() {
    sandPollo += 1;
  let pediSanPollo = new Sandwiches("Pedido Sandwitch de Pollo", sandPollo);
    arraySandwiches.push(pediSanPollo);
  //localstorage y json
    jsonSanPollo = JSON.stringify(pediSanPollo);
    localStorage.setItem("Pedido Sandwitch Pollo",jsonSanPollo);
  //Mostrar en consola 
    arraySandwiches.forEach((arraySandwiches) =>{
    console.log(arraySandwiches)
    })
};

  //Dom y eventos
  let btnSanCarne = document.getElementById("btn_san_carne");
    btnSanVacio.addEventListener("click", funSanCarne);
  function funSanCarne() {
    sanCarneRoja += 1;
  let pediSanCarne = new Sandwiches("Pedido Sandwitch de Carne Roja", sandCarne);
    arraySandwiches.push(pediSanCarne);
  //localstorage y json
    jsonSanCarne = JSON.stringify(pediSanCarne);
    localStorage.setItem("Pedido Sandwitch de Carne",jsonSanCarne);
  //Mostrar en consola 
    arraySandwiches.forEach((arraySandwiches) =>{
    console.log(arraySandwiches)
    })
};
 



//Ensalada

  //Dom y eventos
  let btnEnsaCesar = document.getElementById("btn_ensa_cesar");
    btnEnsaCesar.addEventListener("click", funEnsaCesar);
  function funEnsaCesar() {
    ensaladaCesar += 1;
  let pediEnsaCesar = new Ensaladas("Pedido Ensalada Cesar", ensaladaCesar);
    arrayEnsalada.push(pediEnsaCesar);
  //localstorage y json
    jsonEnsaCesar = JSON.stringify(pediEnsaCesar);
    localStorage.setItem("Pedido Ensalada Cesar",jsonEnsaCesar);
  //Mostrar en consola 
    arrayEnsalada.forEach((arrayEnsalada) =>{
    console.log(arrayEnsalada)
    })
};


  //Dom y eventos
  let btnEnsaCaprese = document.getElementById("btn_ensa_caprese");
    btnEnsaCaprese.addEventListener("click", funEnsaCaprese);
  function funEnsaCaprese() {
    ensaladaCaprese += 1;
  let pediEnsaCaprese = new Ensaladas("Pedido Ensalada Caprese", ensaladaCaprese);
    arrayEnsalada.push(pediEnsaCaprese);
  //localstorage y json
    jsonEnsaCaprese = JSON.stringify(pediEnsaCaprese);
    localStorage.setItem("Pedido Ensalada de Caprese",jsonEnsaCaprese);
  //Mostrar en consola 
    arrayEnsalada.forEach((arrayEnsalada) =>{
    console.log(arrayEnsalada)
    })
};


  //Dom y eventos
  let btnEnsaAtun = document.getElementById("btn_ensa_atun");
    btnEnsaAtun.addEventListener("click", funEnsaAtun);
  function funEnsaAtun() {
    ensaladaAtun += 1;
  let pediEnsaAtun = new Ensaladas("Pedido Ensalada Atun", ensaladaAtun);
    arrayEnsalada.push(pediEnsaAtun);
  //localstorage y json
    jsonEnsaAtun = JSON.stringify(pediEnsaAtun);
    localStorage.setItem("Pedido de Ensalada de Atun",jsonEnsaAtun);
  //Mostrar en consola 
    arrayEnsalada.forEach((arrayEnsalada) =>{
    console.log(arrayEnsalada)
    })
};


  //Dom y eventos
  let btnEnsaPrima = document.getElementById("btn_ensa_primavera");
    btnEnsaPrima.addEventListener("click", funEnsaPrima);
  function funEnsaPrima() {
    ensaladaPrimavera += 1;
  let pediEnsaPrima = new Ensaladas("Pedido Ensalada Primavera", ensaladaPrimavera);
    arrayEnsalada.push(pediEnsaPrima);
  //localstorage y json
    jsonEnsaPrimavera = JSON.stringify(pediEnsaPrima);
    localStorage.setItem("Pedido Ensalada Primavera",jsonEnsaPrimavera);
  //Mostrar en consola 
    arrayEnsalada.forEach((arrayEnsalada) =>{
    console.log(arrayEnsalada)
    })
};


  //Dom y eventos
  let btnEnsaPyM = document.getElementById("btn_ensa_pym");
    btnEnsaPyM.addEventListener("click", funEnsaPyM);
  function funEnsaPyM() {
    ensaladaPyM += 1;
  let pediEnsaPyM = new Ensaladas("Pedido Ensalada Palmitos y Morron", ensaladaPyM);
    arrayEnsalada.push(pediEnsaPyM);
  //localstorage y json
    jsonEnsaPyM = JSON.stringify(pediEnsaPyM);
    localStorage.setItem("Pedido Ensalada de Palmitos y Morron",jsonEnsaPyM);
  //Mostrar en consola 
    arrayEnsalada.forEach((arrayEnsalada) =>{
    console.log(arrayEnsalada)
    })
};

  //Dom y eventos
  let btnEnsaGriega = document.getElementById("btn_ensa_griega");
    btnEnsaGriega.addEventListener("click", funEnsaGriega);
  function funEnsaGriega() {
    ensaladaGriega += 1;
  let pediEnsaGriega = new Ensaladas("Pedido Ensalada Griega", ensaladaGriega);
    arrayEnsalada.push(pediEnsaGriega);
  //localstorage y json
    jsonEnsaGriega = JSON.stringify(pediEnsaGriega);
    localStorage.setItem("Pedido Ensalada Griega",jsonEnsaGriega);
  //Mostrar en consola 
    arrayEnsalada.forEach((arrayEnsalada) =>{
    console.log(arrayEnsalada)
    })
};



// Bebidas

  //Dom y eventos
  let btnBebiCerveza = document.getElementById("btn_bebi_cerveza");
    btnBebiCerveza.addEventListener("click", funBebiCerveza);
  function funBebiCerveza() {
    bebidaCerveza += 1;
  let pediBebiCerveza = new Bebidas("Pedido Bebida Cerveza", bebidaCerveza);
    arrayBebidas.push(pediBebiCerveza);
  //localstorage y json
    jsonBebiVino = JSON.stringify(pediBebiCerveza);
    localStorage.setItem("Pedido Bebida Vino",jsonBebiVino);
  //Mostrar en consola 
    arrayBebidas.forEach((arrayBebidas) =>{
    console.log(arrayBebidas)
    })
};

  //Dom y eventos
  let btnBebiAgua = document.getElementById("btn_bebi_agua");
    btnBebiAgua.addEventListener("click", funBebiAgua);
  function funBebiAgua() {
    bebidaAgua += 1;
  let pediBebiAgua = new Bebidas("Pedido Bebida Agua", bebidaAgua);
    arrayBebidas.push(pediBebiAgua);
  //localstorage y json
    jsonBebiAgua = JSON.stringify(pediBebiAgua);
    localStorage.setItem("Pedido Bebida Agua",jsonBebiAgua);
  //Mostrar en consola 
    arrayBebidas.forEach((arrayBebidas) =>{
    console.log(arrayBebidas)
    })
};

  //Dom y eventos
  let btnBebiVino = document.getElementById("btn_bebi_vino");
    btnBebiVino.addEventListener("click", funBebiVino);
  function funBebiVino() {
    bebidaVino += 1;
  let pediBebiVino = new Bebidas("Pedido Bebida Vino", bebidaVino);
    arrayBebidas.push(pediBebiVino);
  //localstorage y json
    jsonBebiVino = JSON.stringify(pediBebiVino);
    localStorage.setItem("Pedido Bebida Vino",jsonBebiVino);
  //Mostrar en consola 
    arrayBebidas.forEach((arrayBebidas) =>{
    console.log(arrayBebidas)
    })
};


  //Dom y eventos
  let btnBebiVino = document.getElementById("btn_bebi_vino");
    btnBebiVino.addEventListener("click", funBebiVino);
  function funBebiVino() {
    bebidaVino += 1;
  let pediBebiVino = new Bebidas("Pedido Bebida Vino", bebidaVino);
    arrayBebidas.push(pediBebiVino);
  //localstorage y json
    jsonBebiVino = JSON.stringify(pediBebiVino);
    localStorage.setItem("Pedido Bebida Vino",jsonBebiVino);
  //Mostrar en consola 
    arrayBebidas.forEach((arrayBebidas) =>{
    console.log(arrayBebidas)
    })
};



  //Dom y eventos
  let btnBebiVino = document.getElementById("btn_bebi_vino");
    btnBebiVino.addEventListener("click", funBebiVino);
  function funBebiVino() {
    bebidaVino += 1;
  let pediBebiVino = new Bebidas("Pedido Bebida Vino", bebidaVino);
    arrayBebidas.push(pediBebiVino);
  //localstorage y json
    jsonBebiVino = JSON.stringify(pediBebiVino);
    localStorage.setItem("Pedido Bebida Vino",jsonBebiVino);
  //Mostrar en consola 
    arrayBebidas.forEach((arrayBebidas) =>{
    console.log(arrayBebidas)
    })
};



  //Dom y eventos
  let btnBebiVino = document.getElementById("btn_bebi_vino");
    btnBebiVino.addEventListener("click", funBebiVino);
  function funBebiVino() {
    bebidaVino += 1;
  let pediBebiVino = new Bebidas("Pedido Bebida Vino", bebidaVino);
    arrayBebidas.push(pediBebiVino);
  //localstorage y json
    jsonBebiVino = JSON.stringify(pediBebiVino);
    localStorage.setItem("Pedido Bebida Vino",jsonBebiVino);
  //Mostrar en consola 
    arrayBebidas.forEach((arrayBebidas) =>{
    console.log(arrayBebidas)
    })
};

////CARRITO///////////////////////////////////////////////

let btnCarrito = document.getElementById("btn_Carrito");
btnCarrito.addEventListener("click", botonCarrito);

function botonCarrito(pedidoEspecial) {

  let pedMuzza = "";
  let pedPalmitos = "";
  let pedEspecial = "";
  let pedRicota = "";
  let pedRoquefort = "";
  let pedCuatroQuesos = "";

  for(let i = 0; i < arrayPizzas.length; i++){
  switch(arrayPizzas[i].nombre)
  {
    case "Pizza de Muzzarella": 
      console.log("Entraste a la pizza de muzzarella");
      pedMuzza = (pizzaMuzza + " " + "pizzas de Muzzarella");
      localStorage.removeItem("Pedido de Muzzarella");
      break; 
    case "Pizza de Palmitos":
      console.log("Entraste a la pizza de Palmitos");
      pedPalmitos = (pizzaPalmitos + " " + "pizza de palmitos");
      localStorage.removeItem("Pedido de Palmitos")
      break;
    case "Pizza Especial":
      console.log("Entraste a la pizza especial");
      pedEspecial = (pizzaEspecial + " " + "pizza especial");
      localStorage.removeItem("Pedido de Especial");
      break;
    case "Pizza de Ricota": 
      console.log("Entraste a la pizza de Ricota");
      pedRicota = (pizzaRicota + " " + "pizza de Ricota");
      localStorage.removeItem("Pedido de Ricota");
      break;
    case "Pizza de Roquefort":
      console.log("Entraste a la pizza de Roquefort");
      pedRoquefort = (pizzaRoquefort + " " + "pizza de Roquefort");
      localStorage.removeItem("Pedido de Roquefort");
      break;
    case "Pizza de Cuatro Quesos":
      console.log("Entraste a la pizza de cuatro quesos");
      pedCuatroQuesos = (pizzaCuatroQuesos + " " + "pizza de Cuatro Quesos");
      localStorage.removeItem("Pedido de Cuatro Quesos"); 
      break;
    default:
      console.log("El default del switch"); 
      break 
  }
  }

    mostrar(pedMuzza);
//    enviarMensajeWhatsApp();   //Pasalo por parametro
}

function mostrar(pedMuzza) {
  console.log("Estas aca en mostrar")
  console.log(pedMuzza);
}

function enviarMensajeWhatsApp() {
  // Reemplaza el número de teléfono y código de país por el del destinatario
  var numeroDestinatario = +5402396581974;
  // Puedes incluir un mensaje predeterminado si deseas
  var mensaje = pedMuzza;
  // Construye el enlace de WhatsApp
  var url = "https://api.whatsapp.com/send?phone=" + numeroDestinatario + "&text=" + encodeURIComponent(mensaje); 
  // Abre una nueva ventana o pestaña con el enlace de WhatsApp
  window.open(url, '_blank');  */
