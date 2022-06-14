let nav = document.getElementById('nav-bar');
let menu = document.getElementById('menu-bar');
let menuItemOne = document.getElementById('menu-item1');
let menuItemTwo = document.getElementById('menu-item2');
let menuItemThree = document.getElementById('menu-item3');

menu.addEventListener('click',function(){
    nav.classList.toggle('activeNav');
    menuItemOne.classList.toggle('menuOne');
    menuItemTwo.classList.toggle('menuTwo');
    menuItemThree.classList.toggle('menuThree');
})