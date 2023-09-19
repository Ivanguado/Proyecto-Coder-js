// Importamos las funciones que queremos usar y abajo del todo llamamos a la funcion importada
import { addToCart, showCart } from "./cart.js"; 
const cartJson = JSON.parse(localStorage.getItem("cart")) || []; //Traemos de seccion storage

// Declaramos las rutas de los distintos catalogos.json
const rutas = {
	pizza: "./folders-JSON/pizza-catalogue.json",
	burger: "../folders-JSON/burger-catalogue.json",
	empanadas: "../folders-JSON/empanadas-catalogue.json",
	salads: "../folders-JSON/salad-catalogue.json",
	drinks: "../folders-JSON/drinks-catalogue.json",
	sandwiches: "../folders-JSON/sandwiches-catalogue.json",
};

//Traemos el catalogo correspondiente
let path = "pizza";
let isPizza = window.location.pathname.includes("index");
if (!isPizza) {
	path = window.location.pathname.split("/")[2].split(".")[0];
}

// Realizamos la solicitud para cargar los archivos json
fetch(rutas[path])
	.then((response) => response.json())
	.then((data) => {
		showProducts(data);
	});

function showProducts(data){
  // Acceder a la lista UL donde se mostrarán los productos
const listaProductos = document.getElementById(`cartGral`);

// Iteramos a través de los productos y agregamos la lista UL
data.forEach(product => {
const {image,
      name,
      description,
      price,
      id
     } = product
 let listItem = document.createElement("div");
 listItem.innerHTML = `
 <img src="${image}" alt="${name}" class="card-img-top">
 <div class="card-body pizza" data-id="${id}" data-name="${name}" data-price="${price}">
     <h4 class="card-title2">${name}</h4>
     <p class="card-text p">${description}</p>
     <h5 class="card-title2">Price: $ ${price}</h5>
     <button class="makeAnOrder  btn2 btn-primary2" alt="Pizza Muzarella" id="${id}">Add to cart</button>  
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
showCart(cartJson);










































