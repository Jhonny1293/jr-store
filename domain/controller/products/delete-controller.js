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

if(!localStorage.getItem('jr_authenticated')) {
    window.location.href = config.app_url + '/pages/login.html';
    return;
}