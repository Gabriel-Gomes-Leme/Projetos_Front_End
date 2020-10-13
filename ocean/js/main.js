var toggleModalLogin=document.querySelectorAll('.toggle-modal-login');
var modalLogin=document.querySelector('.modal-login');
var overlay=document.querySelector('.overlay-modal');
for (var i=0; i<toggleModalLogin.length; i++){
    toggleModalLogin[i].addEventListener('click', function(){
        modalLogin.classList.toggle('d-block');
        overlay.classList.toggle('d-block');
    })
}