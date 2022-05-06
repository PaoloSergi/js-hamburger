const openMenuIcon = document.querySelector('.header-right .fa-bars');
const closeMenuIcon = document.querySelector('.hamburger-menu .fa-times');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.style.height = "200px";
hamburgerMenu.style.minHeight = "200px";

openMenuIcon.addEventListener ('click',
    function () {
        hamburgerMenu.classList.add ("active");
    }
);

closeMenuIcon.addEventListener ('click',
    function () {
        hamburgerMenu.className = "hamburger-menu";
    }
);

