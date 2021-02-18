let burger = document.querySelector("#burger");
let navBar = document.querySelector("#nav-bar");

function dropDown() {
    navBar.style.display === 'none' ? navBar.style.display = 'inherit' : navBar.style.display = 'none'
}

burger.addEventListener("click", dropDown);