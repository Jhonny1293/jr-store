import services from "../../services/products-services.js";

export function getProduct() {
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));
    
    if(id === null){
        window.location.href = '/pages/products.index.html'
    }
    
    return services.getProduct(id)
    .then((respuesta) => {
        return respuesta;
    }).catch(error => {
        window.location.href = '/pages/products.index.html'
    });     
}