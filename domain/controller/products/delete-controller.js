import services from "../../services/products-services.js";

export function deleteProduct(id) {
    if(!id){
      alert('ha ocurrido un error');
      return;
    }

    services.deleteProduct(id)
    .then((respuesta) => {
        window.location.href = '../../../pages/products.index.html';
    }).catch(error => {
        alert(error)
    }); 

}