import services from "../../services/products-services.js";


const formulario = document.querySelector("[form-product]");
formulario.addEventListener("submit", (eventoSubmit) => {
    eventoSubmit.preventDefault();
    storeProduct(eventoSubmit);
});

function storeProduct(event) {
    const product = {
        imagenURL: document.getElementById('products_url').value,
        category: document.getElementById('products_category').value,
        name: document.getElementById('products_name').value,
        description: document.getElementById('products_description').value,
        price: document.getElementById('products_price').value,
        reference: document.getElementById('products_reference').value
    }

    services.storeProduct(product)
    .then((respuesta) => {
        window.location.href = '../../../pages/products.index.html';
    }).catch(error => {
        alert(error)
    }); 

}