burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
header = document.querySelector('.header')
search = document.querySelector('.search')
signup = document.querySelector('.signup')

burger.addEventListener('click', ()=>{
    header.classList.toggle('v-resp');
    search.classList.toggle('v-resp');
    signup.classList.toggle('v-resp');
    navbar.classList.toggle('h-resp');

})
