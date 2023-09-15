let msj = "";
let formOrdeId = document.getElementById("formOrdeId");

formOrdeId.addEventListener("submit", (e) => {
    e.preventDefault();

    const orderName = document.getElementById('validationTooltip01').value;
    const userName = document.getElementById('validationTooltip02').value;
    const phoneNumber = document.getElementById('validationTooltipUsername').value;
    const address = document.getElementById('validationTooltip03').value;
    const addressNumber = document.getElementById('validationTooltip05').value;
    const paymentMethod = document.getElementById('validationTooltip04').value;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);

    cart.forEach((product) => {
        const { name, amount, price } = product;
        msj += `
            ${name}
            amount: ${amount}
            price: ${price}\n`;
    });

    const total = cart.reduce((subtotal, product) => subtotal + product.price * product.amount, 0);
    msj += `Total: $${total}`;
    console.log(total);
    console.log(msj);

    // Construye el enlace de WhatsApp
    const url = "https://api.whatsapp.com/send?phone=" + 542317454401 + "&text=" + encodeURIComponent(`♦ Online Pizza Store ♦ 
    Client data: 
               *Name: ${orderName}
               *User name: ${userName}
               *Phone Number: ${phoneNumber}
               *Address: ${address} N° ${addressNumber}
               *Payment Method: ${paymentMethod}
               
    Order:
               *${msj}`);

    // Abre una nueva ventana o pestaña con el enlace de WhatsApp
    window.open(url, "_blank");
});