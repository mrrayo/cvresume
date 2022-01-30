//Burger Menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-area');

burger.addEventListener('click' , ()=>{
    burger.classList.toggle('active-burger');
    menu.classList.toggle('active-menu');
    
});