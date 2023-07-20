function login(event) 
{
   event.preventDefault();
   const email = document.getElementById('input__email').value;
   const password = document.getElementById('input__password').value;

   if(email !== 'admin@admin.com' || password !== 'jrstore') {
        const errorInput = document.querySelector('[input-error]');
        errorInput.innerHTML = 'Las credenciales ingresadas no coinciden con nuestros registros';
        return;
   }

   localStorage.setItem('jr_authenticated', true);
   window.location.href = '../../pages/products.index.html';
}

if(localStorage.getItem('jr_authenticated')) {
    window.location.href = '../../pages/products.index.html';
}
