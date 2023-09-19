let navbar = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}




let login = document.querySelector('.login_form');

document.querySelector('#account-btn').onclick = () =>{
    login.classList.toggle('active');
}

let buttonLogin = document.querySelector('.login_form');

document.querySelector('#signin').onclick = ()=>{
    buttonLogin.classList.toggle('active');
}