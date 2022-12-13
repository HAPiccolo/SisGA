
function login(){
    var login = true;
    var txt_user = document.getElementById('txt_user').value;
    var txt_pass = document.getElementById('txt_pass').value;

    if(txt_user === 'noxon' && txt_pass === '123'){
        document.location.href ='./base.html';
    }else{
        var contenedor = document.getElementById('cont_principal');
        contenedor.style.cssText='animation: shake 0.5s;';   
    }
    location.reload(true);
}
